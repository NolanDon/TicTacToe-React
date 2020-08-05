import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  square: {
    width: "50px",
    height: "50px",
  },
});

export default function Square(props) {
  const classes = useStyles();

  return (
    <button className={classes.square} onClick={props.onClick}>
      {props.value}
    </button>
  );
}
