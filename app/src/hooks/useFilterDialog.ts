import { useState } from "react";

export const useFilterDialog = () => {
  const [filterModalOpen, setFilterModalOpen] = useState<boolean>(false);
  const [currentFilterColumn, setCurrentFilterColumn] = useState<string>("");
  const [currentFilterLabel, setCurrentFilterLabel] = useState<string>("");
  const [{ column, value }, setFilterData] = useState<{
    column: string;
    value: string | number;
  }>({ column: "", value: "" });

  const handleFilterClick = (column: string, label: string) => {
    setCurrentFilterColumn(column);
    setCurrentFilterLabel(label);
    setFilterModalOpen(true);
  };

  const handleFilterClose = () => {
    setFilterModalOpen(false);
    setCurrentFilterColumn("");
    setCurrentFilterLabel("");
  };

  const handleFilterApply = (column: string, value: string | number) => {
    setFilterData({ column, value });
    handleFilterClose();
  };

  return {
    handleFilterApply, // Applies filter
    column,
    value,
    setFilterData,
    handleFilterClick, // When we close the filter modal and input a new value
    handleFilterClose, // When we close the filter modal with no new values.
    filterModalOpen, // Is the Modal oppened
    setFilterModalOpen, // Set Modal oppened state
    currentFilterColumn, // Current filtered column
    setCurrentFilterColumn, // Set current filtered column
    currentFilterLabel, // Current filter modal dialog label
    setCurrentFilterLabel, // Set current filter modal dialog label
  };
};
