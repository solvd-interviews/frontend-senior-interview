import { useState } from "react";

export const useSort = (column: string) => {
  /**
   * column: the data column used to be filtered
   */
  const handleSort = (column: string) => {
    const isAsc = orderBy === column && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(column);
  };

  const [orderBy, setOrderBy] = useState<string>(column);
  const [order, setOrder] = useState<"asc" | "desc">("asc");

  return { 
    handleSort, // dispatch sort action by column
    order, // order asc or desc
    orderBy, // column to be ordered
    setOrderBy, // state set function of order by
    setOrder // state sset function of order
   };
};
