import './App.css';
import MainTopMenu from './components/MainTopMenu';
import EmotionsTopRow from './components/EmotionsTopRow';
import EmotionsAbout from './components/EmotionsAbout';
import Divider from './components/Divider';
import EmotionsAuthor from './components/EmotionsAuthor';
import EmotionsInfo from './components/EmotionsInfo';
import EmotionsComments from './components/EmotionsComments'
import EmotionsBook from './components/EmotionsBook'
import EmotionsMore from './components/EmotionsMore' 
import Footer from './components/Footer';

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
        <Divider />
        <EmotionsAuthor />
        <Divider />
        <EmotionsInfo />
        <Divider />
        <EmotionsComments/>
        <Divider />
        <EmotionsBook />
        <Divider />
        <EmotionsMore />
      </div>
      <Footer />
    </div>
  ); 
}

export default App;
