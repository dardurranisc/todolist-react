export interface ToDo {
  id: number;
  text: string;
  completed: boolean;
}

export type FilterStatus = "all" | "completed" | "active";
