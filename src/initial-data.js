const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: "Estudar UX" },
    "task-2": { id: "task-2", content: "Estudar React" },
    "task-3": { id: "task-3", content: "Estudar JavaScript" },
    "task-4": { id: "task-4", content: "Estudar NodeJS" },
  },
  columns: {
      'column-1': {
          id: 'column-1',
          title: 'A INICIAR',
          taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
      },
  },
  //Facilitar a reordenação das colunas
  columnOrder: ['column-1'],
};

export default initialData;
