import './App.css';
import MainTopMenu from './components/MainTopMenu';
import EmotionsTopRow from './components/EmotionsTopRow';
import EmotionsAbout from './components/EmotionsAbout';
import Devider from './components/Devider';
import EmotionsAuthor from './components/EmotionsAuthor';
import EmotionsInfo from './components/EmotionsInfo';
import EmotionsComments from './components/EmotionsComments'

const App = () => {
  return (
    <div>
      <div className="top_menu">
        <MainTopMenu />
      </div>
      <div>
        <EmotionsTopRow />
      </div>
      <div className="main_part">
        <EmotionsAbout />
        <Devider />
        <EmotionsAuthor />
        <Devider />
        <EmotionsInfo />
        <Devider />
        <EmotionsComments/>
        <Devider />
      </div>
    </div>
  ); 
}

export default App;
