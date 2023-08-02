
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TodoCreate from './components/todocreate';
import TodoListing from './components/todolisting';
import TodoEdit from './components/todoedit';
import TodoDetail from './components/tododetails';


function App() {
  return (
    <div className="App mt-3">
      <h1 style={{color: "#264e70", fontSize: '60px'}}>TODO LIST APP</h1>


      <BrowserRouter>
    <Routes>
      <Route path='/' element={<TodoListing />}></Route>
      <Route path='/todolist/create' element={<TodoCreate />}></Route>
      <Route path='/todolist/edit/:todoid' element={<TodoEdit />}></Route>
      <Route path='/todolist/details/:todoid' element={<TodoDetail />}></Route>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
