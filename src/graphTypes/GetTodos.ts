/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetTodos
// ====================================================

export interface GetTodos_todos {
  __typename: "Todo";
  id: number;
  text: string;
  completed: boolean;
}

export interface GetTodos {
  todos: (GetTodos_todos | null)[] | null;
}
