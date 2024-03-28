import axios from "axios";
import { IStarWarsCharacter } from "../../types/IStarWarsCharacter";

export const fetchGetCharacters = async (
  data: { column: string; value: string | number },
  filterFunction: (data: IStarWarsCharacter[], column: string, value: string | number) => IStarWarsCharacter[]
) => {
  const response = await axios.get<IStarWarsCharacter[]>(
    "http://localhost:4000/characters",
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return filterFunction(response.data, data.column, data.value);
};

export const handleAddItem = async (newItem: IStarWarsCharacter) => {
  const response = await axios.post<IStarWarsCharacter>(
    "http://localhost:4000/characters",
    newItem,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
};

export const handleEditSave = async (editedData: IStarWarsCharacter) => {
  console.log(editedData)
  const response = await axios.put<IStarWarsCharacter>(
    `http://localhost:4000/characters/${editedData._id}`,
    editedData,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
};
