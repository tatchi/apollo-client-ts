import React from "react";
import { Query, QueryResult } from "react-apollo";
import gql from "graphql-tag";
import { todos, todos_todos } from "./graphTypes/todos";

const GET_TODOS = gql`
  query todos {
    todos @client {
      id
      completed
      text
    }
    visibilityFilter @client
  }
`;

const getVisibleTodos = (todos: todos_todos[], filter) => {
  switch (filter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_COMPLETED":
      return todos.filter(t => t.completed);
    case "SHOW_ACTIVE":
      return todos.filter(t => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const TodoList = () => (
  <Query query={GET_TODOS}>
    {({ data: { todos, visibilityFilter } }: QueryResult<todos>) => (
      <ul>
        {getVisibleTodos(todos, visibilityFilter).map(todo => (
          <div key={todo.id}>{todo.text}</div>
        ))}
      </ul>
    )}
  </Query>
);

export default TodoList;
