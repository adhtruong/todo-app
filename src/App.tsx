import { Container, makeStyles, Typography } from "@material-ui/core";
import AddTodoForm from "./AddTodo";
import { TodoList } from "./TodoList";

export const useStyles = makeStyles((theme) => ({
  headerTextStyles: {
    textAlign: "center",
    marginBottom: theme.spacing(3),
    padding: theme.spacing(1),
  },
}));

function App() {
  const { headerTextStyles } = useStyles();

  return (
    <Container maxWidth="xs">
      <Typography variant="h3" className={headerTextStyles}>
        To-do List
      </Typography>
      <AddTodoForm />
      <TodoList />
    </Container>
  );
}

export default App;
