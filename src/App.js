import MainTopMenu from './components/MainTopMenu';
import EmotionsTopRow from './components/EmotionsTopRow'
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
    </div>
  );
}

export default App;
