import React from "react";
import Sidebar from "./sidebar"
import Feed from "./feed"
import Widgets from "./widgets"
import './App.css';

function App() {
  return (
    <div className="App">
      
      {/* sidebar */} 
      <Sidebar/> 
      

      {/* feed */}
      <Feed/>

      {/* widgets */}
      <Widgets/>
    </div>
  );
}

export default App;
