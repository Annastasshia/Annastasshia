import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Parallax } from 'react-parallax';

const prj1 = "https://picsum.photos/600/700";
const prj2 = "https://picsum.photos/700/800";
const prj3 = "https://picsum.photos/800/900";
const prj4 = "https://picsum.photos/900/1000";

function App() {
  return (

    <div style={projectTitle} className="App">
      
      <section style={profile}> My name is Annastasshia </section>
      <aside>
      <Parallax bgImage={ prj1 } strength={700}>
        <div style={{ height: 300 }}>
        <div> <h2> Link to Project 1 </h2></div>
        </div>
      </Parallax>
      
      <Parallax bgImage={ prj2 } strength={700}>
        <div style={{ height: 300 }}>
        <div> Link to Project 2 </div>
        </div>
      </Parallax>
      
      <Parallax bgImage={ prj3 } strength={700}>
        <div style={{ height: 300 }}>
        <div> Link to Project 3 </div>
        </div>
      </Parallax>
     
      <Parallax bgImage={ prj4 } strength={700}>
        <div style={{ height: 300 }}>
        <div> Link to Project 4 </div>
        </div>
      </Parallax>
      </aside>
    </div>
  );
}

const projectTitle = {
  
  // display: 'flex' ,
  width: 50,
  float: 'left', 

};

const profile = {
  background:'#fff',
  width: 50,
  float: 'left', 
}


export default App;
