import { useContext } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import { TodoList } from './TodoList';
import { TodoListContext } from '../Context/TodoListContext';
import { Link } from 'react-router';

export const TodoApp: React.FC = () => {
  const { todoList } = useContext(TodoListContext);

  return (
    <>
      <Link
        to="/"
        className="button is-link is-light is-normal"
        style={{position: 'absolute', top: '10px', left: '10px'}}
      >
        Back
      </Link>

      <div className="todoapp">
        <h1 className="todoapp__title">todos</h1>

        <div className="todoapp__content">
          <Header />

          <TodoList />

          {todoList.length !== 0 && <Footer />}
        </div>
      </div>
    </>
  );
};
