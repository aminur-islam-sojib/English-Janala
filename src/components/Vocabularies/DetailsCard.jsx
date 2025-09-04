import axios from 'axios';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophoneLines } from '@fortawesome/free-solid-svg-icons';

const DetailsCard = ({ id }) => {
  const [data, setData] = useState();
  console.log(data);

  useEffect(() => {
    const url = `https://openapi.programming-hero.com/api/word/${id}`;
    const fetchData = async () => {
      try {
        // console.log(id);
        const response = await axios.get(url);
        // console.log(response.data.data);
        setData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div>
            <h3 className="font-semibold text-3xl">
              {data?.word} (<FontAwesomeIcon icon={faMicrophoneLines} />{' '}
              {data?.pronunciation} ){' '}
            </h3>
            <div>
              <p className="py-4">Meaning</p>
              <p className=" bangla text-2xl font-medium">{data?.meaning}</p>
            </div>
            <div>
              <h1>Example</h1>
              <p>{data?.sentence}</p>
            </div>
          </div>

          <div>
            <h1 className="bangla">সমার্থক শব্দ গুলো</h1>
            <div className=" flex gap-1.5">
              {data?.synonyms.map((s, index) => (
                <div key={index}>{s}</div>
              ))}
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Complete Learning</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export { DetailsCard };
