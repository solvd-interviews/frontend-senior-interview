import Character from '../models/Character';
import type { Request, Response } from 'express';
import type { Model } from 'mongoose';
const characters = require('../../mongodb/dummy_data/characters.json');

export const listCharacters = async (req: Request, res: Response) => {
  // const characters: Model<ICharacter>[] | null = await Character.find();

  return res.json(characters);
};

export const updateCharacter = async (req: Request, res: Response) => {
  try {
    const updated_character: Model<ICharacter> | null =
      await Character.findOneAndUpdate({ _id: req.body._id }, req.body, {
        new: true,
      });

    return res.json(updated_character);
  } catch (error) {
    console.error(error);

    return res.status(400).json({ error: 'Error updating character' });
  }
};

export const insertCharacter = async (req: Request, res: Response) => {
  const character = new Character(req.body);

  try {
    await character.save();

    return res.json(character);
  } catch (error) {
    console.error(error);

    return res.status(400).json({ error: 'Error saving character' });
  }
};
