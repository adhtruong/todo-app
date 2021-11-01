import {
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

import { useTodoStore } from "./useTodoStore";

const useStyles = makeStyles((theme) => ({
  marginAutoItem: {
    margin: "auto",
    textAlign: "center",
    padding: theme.spacing(2),
  },
  completedTodoStyles: {
    textDecoration: "line-through",
  },
}));

export const TodoList = (): JSX.Element => {
  const { completedTodoStyles, marginAutoItem } = useStyles();
  const { removeTodo, toggleCompletedState, todos } = useTodoStore();

  return (
    <List>
      {todos.length === 0 && (
        <Typography className={marginAutoItem}>
          No to-dos to display!
        </Typography>
      )}
      {todos.map((todo) => (
        <ListItem key={todo.id}>
          <ListItemIcon>
            <Checkbox
              edge="start"
              checked={todo.isCompleted}
              onChange={() => toggleCompletedState(todo.id)}
            />
          </ListItemIcon>
          <ListItemText
            className={todo.isCompleted ? completedTodoStyles : ""}
            key={todo.id}
          >
            {todo.title}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton
              onClick={() => {
                removeTodo(todo.id);
              }}
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};
