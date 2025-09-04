import './App.css';
import { NavBar } from './components/UI/NavBar';
import { Header } from './components/UI/Header';
import { LevelsBtn } from './components/Vocabularies/LevelsBtn';
import { Card } from './components/UI/Card';

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <LevelsBtn />
      <Card />
    </>
  );
}

export default App;
