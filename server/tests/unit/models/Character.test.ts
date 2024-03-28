import dateToEpoch from "../../../src/helpers/dateToEpoch";
import Character from "../../../src/models/Character";

describe("Character unit testing", () => {
    it("should fail creating model if no params are provided", async () => {
        const char = new Character({});

        const validation = char.validateSync();

        expect(validation?.message).toBeDefined();
        expect(validation?.message).toBe("Character validation failed: name: Path `name` is required.");
    });

    it("should succeed creating model if only required fields are provided", async () => {
        const char = new Character({ name: "Luke Skywalker" });

        const validation = char.validateSync();

        expect(validation?.message).toBeUndefined();
    });

    it("should succeed creating model if all fields are provided", async () => {
        const char = new Character({
            name: "Luke Skywalker",
            height: "172",
            mass: "77",
            hair_color: "blond",
            skin_color: "fair",
            eye_color: "blue",
            birth_year: "19BBY",
            gender: "male",
            homeworld: "https://swapi.dev/api/planets/1/",
            films: ["https://swapi.dev/api/films/1/"],
            species: [],
            vehicles: ["https://swapi.dev/api/vehicles/14/"],
            starships: ["https://swapi.dev/api/starships/12/"],
            created: "2014-12-09T13:50:51.644000Z",
            edited: "2014-12-20T21:17:56.891000Z",
            url: "https://swapi.dev/api/people/1/",
        });

        const validation = char.validateSync();

        expect(validation?.message).toBeUndefined();
    });

    it("should transform created and edited to epoch at ms accuracy", async () => {
        const char = new Character({
            name: "Luke Skywalker",
            height: "172",
            mass: "77",
            hair_color: "blond",
            skin_color: "fair",
            eye_color: "blue",
            birth_year: "19BBY",
            gender: "male",
            homeworld: "https://swapi.dev/api/planets/1/",
            films: ["https://swapi.dev/api/films/1/"],
            species: [],
            vehicles: ["https://swapi.dev/api/vehicles/14/"],
            starships: ["https://swapi.dev/api/starships/12/"],
            created: "2014-12-09T13:50:51.644000Z",
            edited: "2014-12-20T21:17:56.891000Z",
            url: "https://swapi.dev/api/people/1/",
        });

        const validation = char.validateSync();

        expect(validation?.message).toBeUndefined();
        expect(char.created).toBe(dateToEpoch("2014-12-09T13:50:51.644000Z"));
        expect(char.edited).toBe(dateToEpoch("2014-12-20T21:17:56.891000Z"));
    });
});
