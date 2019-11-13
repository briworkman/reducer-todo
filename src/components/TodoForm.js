import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "black !important"
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: "black",
    color: "white",
    margin: "15px"
  },
  input: {
    display: "none"
  }
}));

export const TodoForm = ({ dispatch }) => {
  const [item, setItem] = useState("");
  const classes = useStyles();

  const handleChanges = e => {
    setItem(e.target.value);
  };

  const submitForm = e => {
    e.preventDefault();
    dispatch({
      type: "ADD_ITEM",
      payload: item
    });
    setItem("");
  };

  const clearCompleted = e => {
    e.preventDefault();
    dispatch({
      type: "CLEAR"
    });
  };

  return (
    <div className="todo-form">
      <form
        className={classes.container}
        noValidate
        autoComplete="off"
        onSubmit={submitForm}
      >
        <div>
          <TextField
            id="outlined"
            className={classes.textField}
            InputProps={{
              classes: {
                notchedOutline: classes.notchedOutline,
                color: "black"
              }
            }}
            label="Todo"
            margin="normal"
            variant="outlined"
            name="todo"
            onChange={handleChanges}
            value={item}
          />
        </div>
        <Button
          onClick={submitForm}
          variant="contained"
          className={classes.button}
        >
          Add Todo
        </Button>
        <Button
          onClick={clearCompleted}
          variant="contained"
          className={classes.button}
        >
          Clear Completed
        </Button>
      </form>
    </div>
  );
};
