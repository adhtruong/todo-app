import {
  Divider,
  IconButton,
  InputBase,
  makeStyles,
  Paper,
} from "@material-ui/core";
import { AddCircleRounded } from "@material-ui/icons";
import { useState } from "react";
import { useTodoStore } from "./useTodoStore";

const useStyles = makeStyles((theme) => ({
  inputBaseStyles: {
    margin: theme.spacing(1),
    flex: 1,
  },
  paperStyles: {
    padding: "1px 2px",
    display: "flex",
    alignItem: "center",
  },
  iconButtonStyles: {},
  dividerIconStyles: {
    height: 28,
    margin: 0.5,
  },
}));

const AddTodoForm = () => {
  const { inputBaseStyles, paperStyles, iconButtonStyles, dividerIconStyles } =
    useStyles();

  const [todoText, setTodoText] = useState("");
  const { addTodo } = useTodoStore();

  const handleSubmit = () => {
    if (!todoText.length) {
      return;
    }

    addTodo(todoText);
    setTodoText("");
  };

  return (
    <>
      <Paper
        component="form"
        className={paperStyles}
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <InputBase
          className={inputBaseStyles}
          onChange={(e) => setTodoText(e.target.value)}
          value={todoText}
          placeholder="New todo"
        />
        <Divider className={dividerIconStyles} orientation="vertical" />
        <IconButton
          type="submit"
          className={iconButtonStyles}
          aria-label="search"
        >
          <AddCircleRounded />
        </IconButton>
      </Paper>
    </>
  );
};

export default AddTodoForm;
