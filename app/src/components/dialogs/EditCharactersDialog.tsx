import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  InputLabel,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

type EditCharactersDialogProps = {
  open: boolean;
  handleClose: any;
  handleEdit: any;
  dataToEdit: any;
};

const EditCharactersDialog: React.FC<EditCharactersDialogProps> = ({
  open,
  handleClose,
  handleEdit,
  dataToEdit,
}) => {
  const [editedData, setEditedData] = useState<any>(dataToEdit);

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setEditedData({ ...editedData, [name]: value });
  };

  const handleEditClick = () => {
    handleEdit(editedData);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Edit Characters</DialogTitle>
      <DialogContent>
        <Grid id="grid01" container spacing={2} justifyContent="center" alignItems="center">
          <Grid item flex={12} margin={1}>
            <InputLabel htmlFor="title" >Name:</InputLabel>
            <TextField
              id="name"
              name="name"
              value={editedData.name}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item flex={4} margin={1}>
            <InputLabel htmlFor="title">Height:</InputLabel>
            <TextField
              id="height"
              name="height"
              value={editedData.height}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item flex={2} margin={1}>
            <InputLabel htmlFor="title">Mass:</InputLabel>
            <TextField
              id="mass"
              name="mass"
              value={editedData.mass}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item flex={4} margin={1}>
            <InputLabel htmlFor="title">Hair Color:</InputLabel>
            <TextField
              id="hair_color"
              name="hair_color"
              value={editedData.hair_color}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item flex={4} margin={1}>
            <InputLabel htmlFor="title">Skin Color:</InputLabel>
            <TextField
              id="skin_color"
              name="skin_color"
              value={editedData.skin_color}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item flex={4} margin={1}>
            <InputLabel htmlFor="title">Eye Color:</InputLabel>
            <TextField
              id="eye_color"
              name="eye_color"
              value={editedData.eye_color}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item flex={4} margin={1}>
            <InputLabel htmlFor="title">Birth Year:</InputLabel>
            <TextField
              id="birth_year"
              name="birth_year"
              value={editedData.birth_year}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item flex={4} margin={1}>
            <InputLabel htmlFor="title">Gender:</InputLabel>
            <TextField
              id="gender"
              name="gender"
              value={editedData.gender}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleEditClick} color="primary">
          Save Changes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditCharactersDialog;
