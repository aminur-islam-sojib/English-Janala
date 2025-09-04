import './App.css';
import { NavBar } from './components/UI/NavBar';
import { Header } from './components/UI/Header';
// import { VocabSec } from './components/Vocabularies/API';
// import { useSelector } from 'react-redux';
import { LevelsBtn } from './components/Vocabularies/LevelsBtn';
import { Card } from './components/UI/Card';

function App() {
  // const data = useSelector((state) => state.dataR.levels);
  // console.log(data);

  return (
    <>
      <NavBar />
      <Header />
      {/* <API /> */}
      <LevelsBtn />
      <Card />
    </>
  );
}

export default App;
