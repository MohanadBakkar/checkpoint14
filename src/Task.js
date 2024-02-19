import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from './actions';

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch(editTask(task.id, editedDescription));
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setEditedDescription(e.target.value);
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input type="text" value={editedDescription} onChange={handleChange} />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span>{task.description}</span>
          <input type="checkbox" checked={task.isDone} onChange={() => dispatch(editTask(task.id, null, !task.isDone))} />
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </li>
  );
};

export default Task;