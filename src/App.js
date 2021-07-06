import MainTopMenu from './components/MainTopMenu';
import EmotionsTopRow from './components/EmotionsTopRow'
import EmotionsAbout from './components/EmotionsAbout'
import './App.css';

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
      </div>
    </div>
  );
}

export default App;
