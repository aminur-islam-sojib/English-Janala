import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { VocabSec } from './Vocab';
import { setSelected } from './DataSlice';

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
      <h1 className=" font-black text-4xl text-center">
        <span className=" text-[#00BCFF]">Let's </span> Learn Vocabularies{' '}
      </h1>
      <div className=" flex flex-wrap justify-center gap-2 mt-5">
        {data.map((dt) => (
          <div key={dt.id}>
            <button
              onClick={() => handleBtn(dt.level_no)}
              className="btn btn-outline btn-primary"
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
