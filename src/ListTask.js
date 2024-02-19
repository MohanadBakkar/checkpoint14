import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const ListTask = () => {
  const tasks = useSelector(state => state.tasks);
  const [filter, setFilter] = useState('all');

  const filteredTasks = filter === 'done' ? tasks.filter(task => task.isDone) : 
                        filter === 'not' ? tasks.filter(task => !task.isDone) : tasks;

  return (
    <div>
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('done')}>Done</button>
        <button onClick={() => setFilter('not')}>Not Done</button>
      </div>
      <ul>
        {filteredTasks.map(task => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default ListTask;