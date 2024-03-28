import { Button } from '@mui/base';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import React, { useState } from 'react'

type FilterDialogProps = {
    open: boolean;
    handleClose: any;
    handleApplyFilter: any;
    columnName: string;
    label: string;
}

const FilterDialog : React.FC<FilterDialogProps> = ({ open, handleClose, handleApplyFilter, columnName, label }) => {
    const [filterValue, setFilterValue] = useState('');

    const handleInputChange = (event : any) => {
      setFilterValue(event.target.value);
    };
  
    const handleApplyClick = () => {
      handleApplyFilter(columnName, filterValue);
      handleClose();
    };
  
    return (
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{`Filter ${label}`}</DialogTitle>
        <DialogContent>
          <TextField
            label={`Search for... `}
            value={filterValue}
            onChange={handleInputChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleApplyClick} color="primary">Apply</Button>
        </DialogActions>
      </Dialog>
    );
}

export default FilterDialog