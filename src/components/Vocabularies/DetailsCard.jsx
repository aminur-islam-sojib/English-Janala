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
          <div className="border-2 border-[#EDF7FF] p-5">
            <h3 className="font-semibold text-3xl">
              {data?.word} (<FontAwesomeIcon icon={faMicrophoneLines} />{' '}
              {data?.pronunciation} ){' '}
            </h3>
            <div>
              <p className=" text-2xl font-extrabold mt-8 mb-2">Meaning</p>
              <p className=" bangla text-2xl font-medium">{data?.meaning}</p>
            </div>
            <div>
              <h1 className=" text-2xl font-semibold mt-8 mb-2">Example</h1>
              <p className=" text-2xl">{data?.sentence}</p>
            </div>
            <div>
              <h1 className="bangla text-2xl font-medium mt-8 mb-2">
                সমার্থক শব্দ গুলো
              </h1>
              <div className=" flex gap-1.5">
                {data?.synonyms.map((s, index) => (
                  <div
                    className=" bg-[#D7E4EF] py-1.5 px-5 rounded text-[20px]"
                    key={index}
                  >
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <div className="flex justify-start">
                <button className="btn btn-primary">Complete Learning</button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export { DetailsCard };
