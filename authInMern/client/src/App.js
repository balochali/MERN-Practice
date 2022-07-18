import {Route, Routes, Navigate} from 'react-router-dom';
import Main from './component/Main';
import Signup from './component/signup';
import Login from './component/login';


function App() {
  const user = localStorage.getItem("token")
  return (
    <Routes>
      {user && <Route path="/" exact element= {<Main></Main>} />}
      <Route path="/signup" exact element={<Signup/>} />
      <Route path="/login" exact element={<Login/>} />
      <Route path="/" exact element={<Navigate replace to = "/login"/>} />
    </Routes>
  );
}

export default App;
