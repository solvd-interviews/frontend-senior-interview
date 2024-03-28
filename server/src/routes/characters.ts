import express from "express";

import {
  listCharacters,
  insertCharacter,
  updateCharacter,
} from "../handlers/characters";

const router = express.Router();

router.get("/", listCharacters);
router.post("/", insertCharacter);
router.put("/", updateCharacter);

export default router;
