type DBInterfaces = ICharacter;

type APIModels = "people";

interface DBModelsMap {
    people: Model<ICharacter>;
}

interface ICharacter {
    _id?: string;
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
    created: string | number;
    edited: string | number;
    url: string;
}
