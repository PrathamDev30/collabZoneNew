import Button from "@mui/material/Button";
import { useState } from "react";
import React from "react";
import { Stack } from "@mui/material";
import { Dialog } from "@mui/material";
import { DialogActions } from "@mui/material";
import { DialogContent } from "@mui/material";
import { DialogTitle } from "@mui/material";
import { TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function AddGroups() {
  const [open, setOpen] = useState(false);
  const [groupName, setGroupName] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setGroupName(""); // Reset group name on close
  };

  const handleAdd = () => {
    console.log("Group Name:", groupName);
    handleClose(); // Close dialog after adding
  };

  return (
    <div>
      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleClickOpen}
        >
          Create Group
        </Button>
      </Stack>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
        sx={{ borderRadius: 2 }}
      >
        <DialogTitle>Create New Group</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Group Name"
            type="text"
            fullWidth
            variant="outlined"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAdd} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
