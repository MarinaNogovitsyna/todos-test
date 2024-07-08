export type Todo = {
  id: number;
  name: string;
  checked: boolean;
};

export type Filter = 'all' | 'active' | 'completed';
