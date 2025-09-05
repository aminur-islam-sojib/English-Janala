import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { VocabSec } from './Vocab';
import { setSelected } from './DataSlice';
import { SearchField } from '../UI/SearchField';

const LevelsBtn = () => {
  const data = useSelector((state) => state.dataR.levels);
  const [btnID, setBtnID] = useState(null);
  const dispatch = useDispatch(null);

  const handleBtn = (id) => {
    setBtnID(id);
    dispatch(setSelected(true));
  };

  return (
    <>
      {' '}
      <h1 className="mt-10 font-black text-4xl text-center">
        <span className=" text-[#00BCFF]">Let's </span> Learn Vocabularies{' '}
      </h1>
      <SearchField />
      <div className=" flex flex-wrap justify-center gap-2 my-5">
        {data.map((dt) => (
          <div key={dt.id}>
            <button
              onClick={() => handleBtn(dt.level_no)}
              className={`btn btn-outline ${
                btnID === dt.level_no
                  ? 'btn-primary bg-[#2b12b7] text-white' // active style
                  : 'btn-primary'
              }`}
            >
              <FontAwesomeIcon icon={faBookOpen} /> Lesson - 0{dt.level_no}
            </button>
          </div>
        ))}
      </div>
      <VocabSec id={btnID} />
    </>
  );
};

export { LevelsBtn };
