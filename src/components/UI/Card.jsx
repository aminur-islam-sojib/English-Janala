import { SelectingLesson } from '../Vocabularies/SelectingLesson';
import { SelectedCard } from '../Vocabularies/SelectedCard';
import { EmptyLesson } from '../Vocabularies/EmptyLesson';
import { useSelector } from 'react-redux';
import { LoadingCard } from './LoadingCard';

const Card = () => {
  const data = useSelector((state) => state.dataR.levelData);
  const selected = useSelector((state) => state.dataR.selected);
  const loading = useSelector((state) => state.dataR.loading);
  console.log(loading);

  if (loading) {
    return <LoadingCard />;
  }

  return (
    <>
      {!selected ? (
        <SelectingLesson />
      ) : data && data.length !== 0 ? (
        <SelectedCard />
      ) : (
        <EmptyLesson />
      )}
    </>
  );
};

export { Card };
