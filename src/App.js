import React from 'react';
import Header from './components/Header/header';
import 'bootstrap/dist/css/bootstrap.css';


import CustomCard from "./components/Content/content";

function App() {
  return (
    <div className="App">
      <Header />
      <CustomCard img="img11" name={"EASILY CUSTOMIZED"} des={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}/>
      <CustomCard img="img12" name={"RESPONSIVE READY"} des={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}/>
      <CustomCard img="img13" name={"CLEAN CODE"} des={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}/>
      <CustomCard img="img14" name={"READY TO SHIP"} des={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}/>
      <CustomCard img="img15" name={"DOWNLOAD FOR FREE"} des={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}/>
      <CustomCard img="img16" name={"MODREN DESIGN"} des={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}/>
    </div>
  );
}

export default App;
