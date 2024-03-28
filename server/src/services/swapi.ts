import axios, { AxiosResponse } from 'axios';

import Character from '../models/Character';

class SWApi {
  URL = 'https://swapi.dev/api';
  data: { [key in APIModels]?: DBInterfaces[] } = {};
  storage_type: StorageType = 'DB';

  private models: DBModelsMap = {
    people: Character,
  };

  saveLocally = async (model: APIModels, data: DBInterfaces[]) => {
    this.data[model] = data;
  };

  saveToDB = async (model: APIModels, data: DBInterfaces[]) => {
    try {
      const Model = this.models[model];

      // await Model.deleteMany({});
      // await Model.insertMany(data);
      console.log(`${model} succesfully saved to the DB`);
    } catch (e) {
      console.log(`Error saving ${model} to the DB: ${e}`);
    }
  };

  scrapApi = async (model: APIModels) => {
    let page = 1;
    let next;
    let results = [] as DBInterfaces[];

    const fetchAPI = async () => {
      try {
        let res: { data: { results: ICharacter[]; next: string } } =
          await axios.get(`${this.URL}/people//?page=${page}`);
        return { nextValue: res.data.next, people: res.data.results };
      } catch (err) {
        throw new Error('Cant complete scrap: ' + err);
      }
    };

    // HINT: Star Wars API includes a "next" property in the response which contains the URL for the next page
    while (next !== null) {
      const { nextValue, people } = await fetchAPI();
      people.forEach((person) => {
        results.push(person);
      });
      next = nextValue;
      page = page + 1;
      console.log(`Fetching ${model} -> page ${page}`);
    }

    this.saveToDB(model, results);
  };

  scrapEverything = async (storage: StorageType = 'DB') => {
    this.storage_type = storage;

    return this.scrapApi('people');
  };
}

export default new SWApi();
