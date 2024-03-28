import request from "supertest";
import app, { stopDB } from "../../src";
import dateToEpoch from "../../src/helpers/dateToEpoch";

describe("characters endpoint testing", () => {
    afterAll(() => {
        stopDB();
    });

    it("should return a 200 status code", async () => {
        const res = await request(app).get("/characters");

        expect(res.status).toBe(200);
    });

    it("should insert character and return a 200 status code", async () => {
        const character_data = {
            name: "Luke Floorwalker",
            height: "172",
            mass: "77",
            hair_color: "blond",
            skin_color: "fair",
            eye_color: "blue",
            birth_year: "19BBY",
            gender: "male",
            homeworld: "https://swapi.dev/api/planets/1/",
            films: ["https://swapi.dev/api/films/1/", "https://swapi.dev/api/films/2/", "https://swapi.dev/api/films/3/", "https://swapi.dev/api/films/6/"],
            species: [],
            vehicles: ["https://swapi.dev/api/vehicles/14/", "https://swapi.dev/api/vehicles/30/"],
            starships: ["https://swapi.dev/api/starships/12/", "https://swapi.dev/api/starships/22/"],
            created: "2014-12-09T13:50:51.644000Z",
            edited: "2014-12-20T21:17:56.891000Z",
            url: "https://swapi.dev/api/people/1/",
        };

        const res = await request(app).post("/characters").send(character_data);

        expect(res.body._id).toBeDefined();
        expect(res.body.__v).toBe(0);

        delete res.body._id;
        delete res.body.__v;

        expect(res.body).toMatchObject({ ...character_data, created: dateToEpoch(character_data.created), edited: dateToEpoch(character_data.edited) });
    });

    it("should update character and return a 200 status code", async () => {
        const character_data = {
            name: "Luke Lavawalker",
            height: "172",
            mass: "77",
            hair_color: "blond",
            skin_color: "fair",
            eye_color: "blue",
            birth_year: "19BBY",
            gender: "male",
            homeworld: "https://swapi.dev/api/planets/1/",
            films: ["https://swapi.dev/api/films/1/", "https://swapi.dev/api/films/2/", "https://swapi.dev/api/films/3/", "https://swapi.dev/api/films/6/"],
            species: [],
            vehicles: ["https://swapi.dev/api/vehicles/14/", "https://swapi.dev/api/vehicles/30/"],
            starships: ["https://swapi.dev/api/starships/12/", "https://swapi.dev/api/starships/22/"],
            created: "2014-12-09T13:50:51.644000Z",
            edited: "2014-12-20T21:17:56.891000Z",
            url: "https://swapi.dev/api/people/1/",
        };

        const res = await request(app).post("/characters").send(character_data);
        const created_id = res.body._id;

        expect(res.body._id).toBeDefined();
        expect(res.body.__v).toBe(0);

        delete res.body._id;
        delete res.body.__v;

        expect(res.body).toMatchObject({ ...character_data, created: dateToEpoch(character_data.created), edited: dateToEpoch(character_data.edited) });

        const updated_character_data = {
            _id: created_id,
            name: "Luke Waterwalker",
        };

        const updated_res = await request(app).put("/characters").send(updated_character_data);

        expect(updated_res.body._id).toBe(updated_character_data._id);
        expect(updated_res.body.__v).toBe(0);

        delete updated_res.body.__v;

        expect(updated_res.body).toMatchObject({ ...character_data, ...updated_character_data, created: dateToEpoch(character_data.created), edited: dateToEpoch(character_data.edited) });
    });

    it("should return an error and status 400 if invalid data", async () => {
        const character_data = {
            height: "172",
            mass: "77",
            hair_color: "blond",
            skin_color: "fair",
            eye_color: "blue",
            birth_year: "19BBY",
            gender: "male",
            homeworld: "https://swapi.dev/api/planets/1/",
            films: ["https://swapi.dev/api/films/1/", "https://swapi.dev/api/films/2/", "https://swapi.dev/api/films/3/", "https://swapi.dev/api/films/6/"],
            species: [],
            vehicles: ["https://swapi.dev/api/vehicles/14/", "https://swapi.dev/api/vehicles/30/"],
            starships: ["https://swapi.dev/api/starships/12/", "https://swapi.dev/api/starships/22/"],
            created: "2014-12-09T13:50:51.644000Z",
            edited: "2014-12-20T21:17:56.891000Z",
            url: "https://swapi.dev/api/people/1/",
        };

        const res = await request(app).post("/characters").send(character_data);

        expect(res.status).toBe(400);
        expect(res.body.error).toBe("Error saving character");
    });

    it("should return at least 1 saved character", async () => {
        const res = await request(app).get("/characters");

        expect(res.body.length).toBeGreaterThan(0);
        expect(res.status).toBe(200);
    });
});
