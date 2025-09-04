import { useSelector } from 'react-redux';
import { DetailsCard } from './DetailsCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const SelectedCard = () => {
  const datas = useSelector((state) => state.dataR.levelData);
  const [selectedID, setSelectedID] = useState(null);
  const handleDetails = (id) => {
    setSelectedID(id);
  };

  useEffect(() => {
    if (selectedID) {
      const modal = document.getElementById('my_modal_5');
      if (modal) modal.showModal();
    }
  }, [selectedID]);

  return (
    <>
      <section className=" w-[80%] mx-auto bg-gray-100 p-5 rounded-2xl">
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {datas.map((data) => (
            <div key={data.id} className=" bg-white p-3 rounded-2xl shadow-sm">
              <div className=" text-center">
                <h1 className=" text-2xl font-bold">{data.word}</h1>
                <h3 className=" font-medium text-[16px] text-gray-600 my-3">
                  Meaning/Pronunciation
                </h3>
                <h1 className="bangla text-[24px] font-semibold">
                  {data.meaning}
                </h1>
              </div>
              <div className=" flex justify-between">
                <div
                  onClick={() => handleDetails(data.id)}
                  className=" bg-[#1A91FF1A] p-2 rounded cursor-pointer"
                >
                  <FontAwesomeIcon icon={faCircleInfo} />
                </div>
                <div className=" bg-[#1A91FF1A] p-2 rounded cursor-pointer">
                  <FontAwesomeIcon icon={faVolumeHigh} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {selectedID && <DetailsCard id={selectedID} />}
    </>
  );
};

export { SelectedCard };
