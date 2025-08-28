/* eslint-disable jsx-a11y/label-has-associated-control */
import { useContext, useMemo } from 'react';
import { TodoItem } from '../TodoItem';
import { FilterContext } from '../../Context/FilterContext';
import { useParams } from 'react-router';
import { TodoListContext } from '../../Context/TodoListContext';

export const TodoList = () => {
  const { filter } = useParams();
  const { todoList } = useContext(TodoListContext);

  const visibleTodo = useMemo(() => {
    switch (filter) {
      case 'active':
        return todoList.filter(todo => !todo.completed);
      case 'completed':
        return todoList.filter(todo => todo.completed);
      default:
        return todoList;
    }
  }, [filter, todoList]);

  return (
    <section className="todoapp__main" data-cy="TodoList">
      {visibleTodo.map(todoItem => (
        <TodoItem key={todoItem.id} todoItem={todoItem} />
      ))}
    </section>
  );
};
