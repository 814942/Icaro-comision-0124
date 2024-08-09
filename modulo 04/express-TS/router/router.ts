import { Router, Request, Response } from 'express';

interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

const router = Router();
let tasks: Task[] = [];

// Browser Read Edit Add Delete
// Add
router.post('/', (req: Request, res: Response) => {
  const task: Task = {
    id: tasks.length + 1,
    title: req.body.title,
    description: req.body.description,
    completed: false,
  };

  tasks.push(task);
  res.status(201).json(task);
});

// Read
router.get('/', (req: Request, res: Response) => {
  res.json(tasks);
});

// Browser
router.get('/:id', (req: Request, res: Response) => {
  const task = tasks.find((t) => t.id === parseInt(req.params.id));

  if (!task) {
    res.status(404).send('Task not found');
  } else {
    res.json(task);
  }
});

// Edit
router.put('/:id', (req: Request, res: Response) => {
  const task = tasks.find((t) => t.id === parseInt(req.params.id));

  if (!task) {
    res.status(404).send('Task not found');
  } else {
    task.title = req.body.title || task.title;
    task.description = req.body.description || task.description;
    task.completed = req.body.completed || task.completed;

    res.json(task);
  }
});

// Delete
router.delete('/:id', (req: Request, res: Response) => {
  const index = tasks.findIndex((t) => t.id === parseInt(req.params.id));

  if (index === -1) {
    res.status(404).send('Task not found');
  } else {
    tasks.splice(index, 1);
    res.status(204).send("Task deleted");
  }
});

export default router;