import { MouseEvent, useEffect, useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton as FilterButton,
  TableSortLabel,
} from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

import EditCharactersDialog from "./dialogs/EditCharactersDialog";
import { useSort } from "../hooks/useSort";
import { useFilterDialog } from "../hooks/useFilterDialog";
import {
  fetchGetCharacters,
  handleAddItem,
  handleEditSave,
} from "../services/api/characters.api";
import { IStarWarsCharacter } from "../types/IStarWarsCharacter";
import CharactersInsertForm from "./CharactersInsertForm";
import FilterDialog from "./dialogs/FilterDialog";

const CharactersTableComponent = () => {
  /**
   * The Objective of CharactersTableComponent is to render, update and add elements. Also together with sorting and filtering.
   */
  const { order, orderBy, setOrderBy, setOrder, handleSort } = useSort("name");
  const {
    handleFilterClick,
    handleFilterClose,
    filterModalOpen,
    setFilterModalOpen,
    currentFilterColumn,
    setCurrentFilterColumn,
    currentFilterLabel,
    setCurrentFilterLabel,
    column,
    value,
    setFilterData,
    handleFilterApply,
  } = useFilterDialog();

  // Fetch Characters
  const [data, setData] = useState<IStarWarsCharacter[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const filteredData = await fetchGetCharacters({column, value}, filterData);
      setData(filteredData);
    };

    fetchData();
  }, [column, value]);

  const handleAddCharacter = async (newItem: IStarWarsCharacter) => {
    try {
      const addedItem = await handleAddItem(newItem);
      setData((prevData) => [...prevData, addedItem]);
    } catch (error) {
      console.error('Error adding character:', error);
    }
  };

  // Edit Modal Character code
  const [dataToEdit, setDataToEdit] = useState<IStarWarsCharacter | undefined>(
    undefined
  );
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);

  const handleEditCharacter = async (editedData: IStarWarsCharacter) => {
    try {
      await handleEditSave(editedData);
      
      setData((prevData) => {
        const updatedData = prevData.map((item) =>
          item._id === editedData._id ? editedData : item
        );
        return updatedData;
      });
  
    } catch (error) {
      console.error('Error editing character:', error);
    }
  };
  
  const handleEditClick = (rowData: IStarWarsCharacter) => {
    setDataToEdit(rowData);
    setEditModalOpen(true);
  };

  const handleEditClose = () => {
    setEditModalOpen(false);
    setDataToEdit(undefined);
  };

  const sortedData = (data || []).sort((a: any, b: any) => {
    // TODO: Create the sorting function. This should return a sorted data list.
    return 0;
  });

  const filterData = (
    data: IStarWarsCharacter[],
    column: string,
    filterValue: string | number
  ) => {
    return (data || []).filter((item: IStarWarsCharacter) => {
      // TODO: Implement the filter function based on the column and filterValue
      return true; // Replace this with your actual filter logic
    });
  };

  return (
    <div>
      <h4 style={{ textAlign: "center" }}>Characters</h4>
      <TableContainer
        component={Paper}
        style={{ width: "90%", margin: "auto" }}
      >
        <Table>
          {/* Table Columns */}
          <TableHead>
            <TableRow>
              <TableCell>
                {/* TODO: Implement sorting by columns. When the user clicks one of these TableSortLabel we should trigger the sorting. */}
                <TableSortLabel>Name</TableSortLabel>
                <FilterButton>
                  {/* TODO: Implement sorting by columns. When the user clicks one of the filter buttons, we should open the dialog and filter */}
                  <FilterAltIcon />
                </FilterButton>
              </TableCell>
              <TableCell>
                <TableSortLabel>Height</TableSortLabel>
                <FilterButton>
                  <FilterAltIcon />
                </FilterButton>
              </TableCell>
              <TableCell>
                <TableSortLabel>Mass</TableSortLabel>
                <FilterButton>
                  <FilterAltIcon />
                </FilterButton>
              </TableCell>
              <TableCell>
                <TableSortLabel>Hair Color</TableSortLabel>
                <FilterButton>
                  <FilterAltIcon />
                </FilterButton>
              </TableCell>
              <TableCell>
                <TableSortLabel>Skin Color</TableSortLabel>
                <FilterButton>
                  <FilterAltIcon />
                </FilterButton>
              </TableCell>
              <TableCell>
                <TableSortLabel>Eye Color</TableSortLabel>
                <FilterButton>
                  <FilterAltIcon />
                </FilterButton>
              </TableCell>
              <TableCell>
                <TableSortLabel>Birth Year</TableSortLabel>
                <FilterButton>
                  <FilterAltIcon />
                </FilterButton>
              </TableCell>
              <TableCell>
                <TableSortLabel>Gender</TableSortLabel>
                <FilterButton>
                  <FilterAltIcon />
                </FilterButton>
              </TableCell>
            </TableRow>
          </TableHead>
          {/* Table Values */}
          <TableBody>
            {data && (data as IStarWarsCharacter[]).length > 0 ? (
              (data as IStarWarsCharacter[]).map(
                (row: IStarWarsCharacter, i) => (
                  <TableRow
                    onClick={(event: MouseEvent) => {
                      handleEditClick(row);
                    }}
                    key={i}
                  >
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.height}</TableCell>
                    <TableCell>{row.mass} kg</TableCell>
                    <TableCell>{row.hair_color}</TableCell>
                    <TableCell>{row.skin_color}</TableCell>
                    <TableCell>{row.eye_color}</TableCell>
                    <TableCell>{row.birth_year}</TableCell>
                    <TableCell>{row.gender}</TableCell>
                  </TableRow>
                )
              )
            ) : (
              <div style={{ width: "100%" }}>
                <p style={{ textAlign: "center" }}>
                  I am sorry there are no results...
                </p>
              </div>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <h4 style={{ textAlign: "center" }}>Are we forgetting something?</h4>

      <CharactersInsertForm handleAddItem={handleAddCharacter} />

      <FilterDialog
        open={filterModalOpen}
        handleClose={handleFilterClose}
        handleApplyFilter={handleFilterApply}
        columnName={currentFilterColumn}
        label={currentFilterLabel}
      />

      {dataToEdit && (
        <EditCharactersDialog
          open={editModalOpen}
          handleClose={handleEditClose}
          handleEdit={handleEditCharacter}
          dataToEdit={dataToEdit}
        />
      )}
    </div>
  );
};

export default CharactersTableComponent;
