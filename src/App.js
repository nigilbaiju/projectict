
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import ViewStudents from './components/ViewStudents';
import Addstudent from './components/Addstudent';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
        <Route path='/' element={<ViewStudents/>}/>
        <Route path='/addstudent' element={<Addstudent data={{id:'',name:'',grade:'' }}
        method="post"/>}/>
       
     </Routes>
    </div>
  );
}

export default App;
