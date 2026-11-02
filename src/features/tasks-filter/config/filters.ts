import type { Task } from 'entities/task';

export type TasksFilter = {
  id: number;
  title: string;
  config: Partial<Pick<Task, 'completed' | 'userId'>>;
};

export const DEFAULT_FILTER_ID = 1;

export const TASKS_FILTERS: readonly TasksFilter[] = [
  { id: 1, title: 'All', config: {} },
  { id: 2, title: 'Opened', config: { completed: false } },
  { id: 3, title: 'Closed', config: { completed: true } },
];
