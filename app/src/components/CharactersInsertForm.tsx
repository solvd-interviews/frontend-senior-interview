import { Button, Grid, Paper, TextField } from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import { IStarWarsCharacter } from "../types/IStarWarsCharacter";

type CharactersInsertFormProps = {
  handleAddItem: (newItem: IStarWarsCharacter) => void;
};

const CharactersInsertForm: React.FC<CharactersInsertFormProps> = ({
  handleAddItem,
}) => {
  const [newItem, setNewItem] = useState<IStarWarsCharacter>({
    name: "",
    height: "",
    mass: "",
    hair_color: "",
    skin_color: "",
    eye_color: "",
    birth_year: "",
    gender: "",
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setNewItem({ ...newItem, [name]: value });
  };

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      style={{ width: "90%", margin: "auto" }}
    >
      <Grid item>
        <TextField
          component={Paper}
          label="Name"
          name="name"
          value={newItem.name}
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item>
        <TextField
          component={Paper}
          label="Height"
          name="height"
          value={newItem.height}
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item>
        <TextField
          component={Paper}
          label="Mass"
          name="mass"
          value={newItem.mass}
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item>
        <TextField
          component={Paper}
          label="Hair Color"
          name="hair_color"
          value={newItem.hair_color}
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item>
        <TextField
          component={Paper}
          label="Skin Color"
          name="skin_color"
          value={newItem.skin_color}
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item>
        <TextField
          component={Paper}
          label="Eye Color"
          name="eye_color"
          value={newItem.eye_color}
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item>
        <TextField
          component={Paper}
          label="Birth Year"
          name="birth_year"
          value={newItem.birth_year}
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item>
        <TextField
          component={Paper}
          label="Gender"
          name="gender"
          value={newItem.gender}
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item style={{ height: "100%" }}>
        <Button
          style={{ height: "100%" }}
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => handleAddItem(newItem)}
        >
          Add Character
        </Button>
      </Grid>
    </Grid>
  );
};

export default CharactersInsertForm;
