import './App.css';
import { Card } from './components/UI/Card';
import { NavBar } from './components/UI/NavBar';
import { Header } from './components/UI/Header';
import { Footer } from './components/UI/Footer';
import { Accordion } from './components/UI/Accordion';
import { QuestionSec } from './components/UI/QuestionSec';
import { SearchField } from './components/UI/SearchField';
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
      <Footer />
    </>
  );
}

export default App;
