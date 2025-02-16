import './App.css';
import BackgroundBlobs from './components/BackgroundBlobs/BackgroundBlobs';
import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main';
import People from './components/people/People';
import Eduvalt from './components/eduvalt/Eduvalt';
import HumanLibrary from './components/human-library/HumanLibrary';
import Events from './components/events/Events';
import GuideNest from './components/guideNest/GuideNest';
import Ngo from './components/ngo/Ngo';
import Goal from './components/goal/Goal';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
       <BackgroundBlobs />
      <Navbar />
      <Main />
      <People />
      <Eduvalt />
      <HumanLibrary />
      <Events />
      <GuideNest />
      <Ngo />
      <Goal />
      <Footer />
     
    </>
  );
}

export default App;
