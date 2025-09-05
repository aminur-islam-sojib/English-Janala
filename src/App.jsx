import './App.css';
import { NavBar } from './components/UI/NavBar';
import { Header } from './components/UI/Header';
import { Footer } from './components/UI/Footer';
import { Accordion } from './components/UI/Accordion';
import { QuestionSec } from './components/UI/QuestionSec';
import { LevelsBtn } from './components/Vocabularies/LevelsBtn';

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <LevelsBtn />
      <QuestionSec />
      <Accordion />
      <Footer />
    </>
  );
}

export default App;
