import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = 'all' | 'active' | 'completed';

export type todolistsType = {
  id: string;
  title: string;
  filter: FilterValuesType;
};

function App() {
  // let [tasks, setTasks] = useState([
  //     {id: v1(), title: "HTML&CSS", isDone: true},
  //     {id: v1(), title: "JS", isDone: true},
  //     {id: v1(), title: "ReactJS", isDone: false},
  //     {id: v1(), title: "Rest API", isDone: false},
  //     {id: v1(), title: "GraphQL", isDone: false},
  // ]);
  // let [filter, setFilter] = useState<FilterValuesType>("all");

  let todolistID1 = v1();
  let todolistID2 = v1();

  let [todolists, setTodolists] = useState<Array<todolistsType>>([
    {id: todolistID1, title: 'What to learn', filter: 'all'},
    {id: todolistID2, title: 'What to buy', filter: 'all'},
  ]);

  let [tasks, setTasks] = useState({
    [todolistID1]: [
      {id: v1(), title: 'HTML&CSS', isDone: true},
      {id: v1(), title: 'JS', isDone: true},
      {id: v1(), title: 'ReactJS', isDone: false},
      {id: v1(), title: 'Rest API', isDone: false},
      {id: v1(), title: 'GraphQL', isDone: false},
    ],
    [todolistID2]: [
      {id: v1(), title: 'HTML&CSS2', isDone: true},
      {id: v1(), title: 'JS2', isDone: true},
      {id: v1(), title: 'ReactJS2', isDone: false},
      {id: v1(), title: 'Rest API2', isDone: false},
      {id: v1(), title: 'GraphQL2', isDone: false},
    ],
  });

  function removeTask(id: string, todoListId: string) {
    setTasks({
      [todoListId]: tasks[todoListId].filter((item) => item.id !== id),
    });
    // let filteredTasks = tasks.filter((t) => t.id != id);
    // setTasks(filteredTasks);
  }

  function addTask(title: string, todoListId: string) {
    let newTask = {id: v1(), title: title, isDone: false};
    setTasks({...tasks, [todoListId]: [newTask, ...tasks[todoListId]]});
    // let newTasks = [task, ...tasks];
    // setTasks(newTasks);
  }

  function changeStatus(taskId: string, isDone: boolean, todoListId: string) {
    // let task = tasks.find((t) => t.id === taskId);
    // if (task) {
    //   task.isDone = isDone;
    // }
    // setTasks([...tasks]);
    setTasks({
      ...tasks,
      [todoListId]: tasks[todoListId].map((item) =>
        item.id === taskId ? {...item, isDone} : item
      ),
    });
  }

  function changeFilter(value: FilterValuesType, todoListId: string) {
    setTodolists(
      todolists.map((filtered) =>
        filtered.id === todoListId ? {...filtered, filter: value} : filtered
      )
    );
    // setFilter(value);
  }

  return (
    <div className='App'>
      {todolists.map((item: todolistsType) => {
        let tasksForTodolist = tasks[item.id];

        if (item.filter === 'active') {
          tasksForTodolist = tasksForTodolist.filter((t) => t.isDone === false);
        }
        if (item.filter === 'completed') {
          tasksForTodolist = tasksForTodolist.filter((t) => t.isDone === true);
        }

        return (
          <Todolist
            key={item.id}
            todoListId={item.id}
            title={item.title}
            tasks={tasksForTodolist}
            removeTask={removeTask}
            changeFilter={changeFilter}
            addTask={addTask}
            changeTaskStatus={changeStatus}
            filter={item.filter}
          />
        );
      })}
    </div>
  );
}

export default App;
