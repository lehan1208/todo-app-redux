import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo/Todo.js';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

import { addNewTodo } from './todosSlice.js';
import { todoRemainingSelector } from '../../redux/selector.js';

export default function TodoList() {
  const [todoName, setTodoName] = useState('');
  const [priority, setPriority] = useState('Medium');

  let todoList = useSelector(todoRemainingSelector);

  const dispatch = useDispatch();
  const handleAddTodo = () => {
    dispatch(
      addNewTodo({
        id: uuidv4(),
        name: todoName,
        completed: false,
        priority: priority,
      })
    );

    setTodoName('');
    setPriority('Medium');
  };

  const handleInputChange = (e) => {
    setTodoName(e.target.value);
  };
  const handleChangeSelect = (value) => {
    setPriority(value);
  };

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoList &&
          todoList.length > 0 &&
          todoList.map((item) => (
            <Todo
              id={item.id}
              name={item.name}
              completed={item.completed}
              priority={item.priority}
              key={item.id}
            />
          ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={(e) => handleInputChange(e)} />
          <Select defaultValue='Medium' value={priority} onChange={handleChangeSelect}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAddTodo}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
