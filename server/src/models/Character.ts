import { Schema } from "mongoose";

import db from "../services/db";

const characterSchema = new Schema<ICharacter>({
    name: String,
    height: String,
    mass: String,
    hair_color: String,
    skin_color: String,
    eye_color: String,
    birth_year: String,
    gender: String,
    homeworld: String,
    films: [String],
    species: [String],
    vehicles: [String],
    starships: [String],
    created: Date,
    edited: Date,
    url: String,
});

const Character = db.instance.model("Character", characterSchema);

export default Character;
