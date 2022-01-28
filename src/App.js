import './App.css';
import Main from './Components/Main';
import Navbar from './Components/Navbar';
import React,{useState} from 'react';

function App() {
  const[content,setContent]=useState('Home');
  
  return (
    <div className="App" style={{paddingTop: 52}}>
      <Navbar content={content} setContent={setContent}/>
      <Main content={content}/>
    </div>
  );
}

export default App;
