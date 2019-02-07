/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: todos
// ====================================================

export interface todos_todos {
  __typename: "Todo";
  id: number;
  completed: boolean;
  text: string;
}

export interface todos {
  todos: (todos_todos | null)[] | null;
  visibilityFilter: string | null;
}
