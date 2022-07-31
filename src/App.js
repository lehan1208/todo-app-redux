import { Typography, Divider } from 'antd';
import './App.css';

import TodoList from './components/TodoList/TodoList';
import Filters from './components/Filters/Filters';
// import { setupServer } from './FakeAPI/FakeAPI';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTodos } from './components/TodoList/todosSlice';
// import axios from 'axios';

// if (process.env.NODE_ENV === 'development') {
//   setupServer();
// }
const { Title } = Typography;

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await axios.get('https://6293b734089f87a57ac4de6d.mockapi.io/list');
  //     console.log('🚀 ~ file: App.js ~ line 26 ~ fetchData ~ res', res);
  //   }
  //   fetchData();
  // }, []);
  // fetch('https://6293b734089f87a57ac4de6d.mockapi.io/list', {
  //   method: 'POST', // or 'PUT'
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     id: 1,
  //     name: 'Learn Javascript',
  //     completed: true,
  //     priority: 'Medium',
  //   }),
  // })
  //   .then((res) => res.json())
  //   .then((res) => console.log(res));
  // fetch('https://6293b734089f87a57ac4de6d.mockapi.io/list', {
  //   method: 'GET', // or 'PUT'
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // })
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log('Success:', data);
  //   })
  //   .catch((error) => {
  //     console.error('Error:', error);
  //   });

  return (
    <div
      style={{
        width: 500,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        padding: 20,
        boxShadow: '0 0 10px 4px #bfbfbf',
        borderRadius: 5,
        height: '90vh',
      }}
    >
      <Title style={{ textAlign: 'center' }}>Todos with REDUX</Title>
      <Filters />
      <Divider />
      <TodoList />
    </div>
  );
}

export default App;
