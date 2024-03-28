export interface IStarWarsCharacter {
  _id?: string;
  name: string; // "Luke Skywalker"
  height: string; // "172"
  mass: string; // "77"
  hair_color: string; // "blond"
  skin_color: string; // "fair"
  eye_color: string; // "blue"
  birth_year: string; // "19BBY"
  gender: string; // "male"
  homeworld?: string; // "https://swapi.dev/api/planets/1/"
  films?: string[]; // ["https://swapi.dev/api/films/1/", "https://swapi.dev/api/films/2/", "https://swapi.dev/api/films/3/", "https://swapi.dev/api/films/6/"]
  species?: string[]; // []
  vehicles?: string[]; // ["https://swapi.dev/api/vehicles/14/", "https://swapi.dev/api/vehicles/30/"]
  starships?: string[]; // ["https://swapi.dev/api/starships/12/", "https://swapi.dev/api/starships/22/"]
  created?: string; // "2014-12-09T13:50:51.644000Z"
  edited?: string; // "2014-12-20T21:17:56.891000Z"
  url?: string; // "https://swapi.dev/api/people/1/"
}
