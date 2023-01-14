import { Routes, Route, Outlet } from 'react-router-dom'
import Home from './Home/home'
import './App.css';
import Main from './Main/main';
import Message from './Message/message';
import Setting from './Setting/setting';
import Photos from './Photos/photos';
import Profile from './Profile/profile';

function App() {
  return (
    
      <div className="App">
        
        <Routes>
          <Route path='/' element={<Home/>}>
            <Route index element={<Main/>} />
            <Route path='message' element={<Message/>}/>
            <Route path='setting' element={<Setting/>}/>
            <Route path='photos' element={<Photos/>}/>
            <Route path='profile' element={<Profile />}/>
          </Route>
        </Routes>
      </div>
    
  );
}

export default App;
