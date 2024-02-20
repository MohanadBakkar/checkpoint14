import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import tasksReducer from './reducers';
import AddTask from './AddTask';
import ListTask from './ListTask';

const store = createStore(tasksReducer);

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>ToDo App</h1>
        <AddTask />
        <ListTask />
      </div>
    </Provider>
  );
};

export default App;