import { HashRouter, Route, Routes } from 'react-router';
import { TodoListProvider } from './Context/TodoListContext';
import { FilterContextProvider } from './Context/FilterContext';
import { TodoTitleProvider } from './Context/TodoTitleContext';
import { EditContextProvider } from './Context/EditContext';
import { AppContent } from './Components/AppContent';
import { TodoApp } from './Components/TodoApp';
import { TodoList } from './Components/TodoList';

export const Root = () => {
  return (
    <HashRouter>
      <TodoListProvider>
        <FilterContextProvider>
          <TodoTitleProvider>
            <EditContextProvider>
              <Routes>
                <Route path="/" element={<AppContent />} />
                <Route path="/todoApp" element={<TodoApp />}>
                  <Route path=":filter" element={<TodoList />} />
                </Route>
              </Routes>
            </EditContextProvider>
          </TodoTitleProvider>
        </FilterContextProvider>
      </TodoListProvider>
    </HashRouter>
  );
};
