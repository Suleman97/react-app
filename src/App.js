import React from 'react';
import Header from './components/Header/header';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import CustomCard from "./components/Content/content";
import WorkCollage from "./components/Collage/collage";
import TeamCard from "./components/Team/team";
import CustomSlider from "./components/Slider/slider";
import DownloadBanner from "./components/Download_banner/download";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <CustomCard img="img11" name={"EASILY CUSTOMIZED!"} des={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}/>
      <CustomCard img="img12" name={"RESPONSIVE READY"} des={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}/>
      <CustomCard img="img13" name={"CLEAN CODE"} des={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}/>
      <CustomCard img="img14" name={"READY TO SHIP"} des={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}/>
      <CustomCard img="img15" name={"DOWNLOAD FOR FREE"} des={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}/>
      <CustomCard img="img16" name={"MODREN DESIGN"} des={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}/>
      
      <WorkCollage img="work11" />
      <WorkCollage img="work14" />
      <WorkCollage img="work11" />
      <WorkCollage img="work14" />
      <WorkCollage img="work15" />
      <WorkCollage img="work18" />
      <WorkCollage img="work15" />
      <WorkCollage img="work18" />
      <TeamCard img="CEO" designation="FOUNDER CEO" name="Ruth Woods"  />
<TeamCard img="COF" designation="CO-FOUNDER" name="Timooty Reeth"  />
<TeamCard img="UI" designation="UI DESIGNNER" name="Victoria Cat"  />
<TeamCard img="Scientist" designation="DATA SCIENTIST" name="Brevely Little"  />

    <CustomSlider />
    <DownloadBanner />
    <Footer />
    </div>
  );
}

export default App;
