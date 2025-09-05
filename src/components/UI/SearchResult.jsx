import { useSelector } from 'react-redux';
import { SelectedCard } from '../Vocabularies/SelectedCard';

const SearchResult = ({ inputValue }) => {
  const allWords = useSelector((state) => state.dataR?.allData);
  //   console.log(allWords);

  const filterWord = allWords.filter((word) =>
    word.word.toLowerCase().includes(inputValue.toLowerCase())
  );

  console.log(filterWord);

  return (
    <>
      <SelectedCard datas={filterWord} style={{ display: 'none' }} />
    </>
  );
};

export { SearchResult };
