import './App.css';
import { Card } from './components/UI/Card';
import { NavBar } from './components/UI/NavBar';
import { Header } from './components/UI/Header';
import { Accordion } from './components/UI/Accordion';
import { QuestionSec } from './components/UI/QuestionSec';
import { LevelsBtn } from './components/Vocabularies/LevelsBtn';

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <LevelsBtn />
      <Card />
      <QuestionSec />
      <Accordion />
    </>
  );
}

export default App;
