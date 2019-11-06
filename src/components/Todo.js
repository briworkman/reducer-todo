import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: "100%"
  },
  demo: {
    backgroundColor: "#CBCAC9",
    boxShadow: "0px 5px 5px 0px rgba(0,0,0,0.75)"
  },
  title: {
    margin: theme.spacing(4, 0, 2)
  }
}));

export function Todo({ todo, dispatch }) {
  const classes = useStyles();
  const [dense] = React.useState(false);
  const toggleCompleted = () => {
    dispatch({
      type: "TOGGLE_COMPLETED",
      payload: todo.id
    });
  };
  return (
    <div
      onClick={toggleCompleted}
      className={`todo${todo.completed ? "completed" : ""}`}
      style={{ textDecoration: todo.completed ? "line-through" : "" }}
    >
      <Grid item xs={12}>
        <div className={classes.demo}>
          <List dense={dense}>
            <ListItem>
              <ListItemText primary={todo.item} />
            </ListItem>
          </List>
        </div>
      </Grid>
    </div>
  );
}
