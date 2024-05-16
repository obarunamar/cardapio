import './App.css';
import Card from './components/cards';
import Categories from './components/categories';
import BackToMenuButton from './components/BackToMenuButton';
import Home from './components/home';

function App() {
  return (
    <div className="App">
      <Home />
      <Categories />
      <Card />
      <BackToMenuButton />
    </div>
  );
}

export default App;
