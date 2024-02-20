import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTask, filterTasks } from './actions';

const ListTask = () => {
  const tasks = useSelector(state => state.tasks);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter(task => filter === 'all' || (filter === 'done' && task.isDone) || (filter === 'notDone' && !task.isDone));

  return (
    <div>
      <select onChange={(e) => dispatch(filterTasks(e.target.value))}>
        <option value="all">All</option>
        <option value="done">Done</option>
        <option value="notDone">Not Done</option>
      </select>
      <ul>
        {filteredTasks.map(task => (
          <li key={task.id} onClick={() => dispatch(toggleTask(task.id))} style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
            {task.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListTask;