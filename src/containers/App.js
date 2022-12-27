import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { EditTodoPage } from '../views/edit/EditTodoPage';
import { HomePage } from "../views/home/HomePage";
import { CreateTodoPage } from '../views/new/CreateTodoPage';

const App = () => {
  return (
    <HashRouter>
        <Routes>
            <Route path='/' element={ <HomePage /> } />
            <Route path='/:search' element={ <HomePage /> } />
            <Route path='/new' element={ <CreateTodoPage /> } />
            <Route path='/edit/:id' element={ <EditTodoPage /> } />
            <Route path='*' element={ <p>Not found :c</p> } />
        </Routes>
    </HashRouter>
  )
}

export default App