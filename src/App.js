import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './component/nav/Nav';
// import Login from './component/login/Login.jsx'
import Log from './component/login/Log.jsx';
import Todo from './component/todo/Todo.jsx';
import Xogame from './component/xogame/Xogame.jsx';
import Weather from './component/weather/Weather.jsx';




function App() {
  return (
    <>
      {/* <Nav />
      <Login /> */}
      <BrowserRouter basename="/task2">
        <Routes>
          <Route path='/' element={<Log/>} />
          <Route path='/Nav' element={<Nav/>} />
          <Route path='/todo' element={<Todo/>} />
          <Route path='/xogame' element={<Xogame/>} />
          <Route path='/weather' element={<Weather/>} />
          

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
