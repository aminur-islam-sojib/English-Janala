import { ResultScard } from './ResultScard';
import { NoResultCard } from './NoResultCard';
import { useSelector } from 'react-redux';

const SearchResult = ({ inputValue }) => {
  const allWords = useSelector((state) => state.dataR?.allData);
  //   console.log(allWords);

  const filterWord = allWords.filter((word) =>
    word.word.toLowerCase().includes(inputValue.toLowerCase())
  );

  console.log(filterWord);

  return <></>;
};

export { SearchResult };
