import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setLevel, setLoading, setLevelsData, setAllData } from './DataSlice';
import { SelectedCard } from './SelectedCard';
import { useSelector } from 'react-redux';

const VocabSec = ({ id }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const url = 'https://openapi.programming-hero.com/api/levels/all';
    const fetchData = async () => {
      try {
        dispatch(setLoading(true));
        const res = await axios.get(url);
        dispatch(setLevel(res.data.data));
        dispatch(setLoading(false));
      } catch (error) {
        console.log(error);
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchData();
  }, [dispatch]);

  useEffect(() => {
    const url = `https://openapi.programming-hero.com/api/level/${id}`;

    const fetchData = async () => {
      try {
        dispatch(setLoading(true));
        const response = await axios.get(url);
        dispatch(setLevelsData(response.data.data));
        setLoading(false);
      } catch (error) {
        console.log('Hello', error);
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  useEffect(() => {
    const url = 'https://openapi.programming-hero.com/api/words/all';

    const fetchData = async () => {
      try {
        dispatch(setLoading(true));
        const response = await axios.get(url);
        dispatch(setAllData(response.data.data));
        dispatch(setLoading(false));
      } catch (error) {
        console.log(error);
      } finally {
        dispatch(setLoading(false));
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //Word Data
  const datas = useSelector((state) => state.dataR.levelData);
  console.log(datas);
  return (
    <>
      <SelectedCard datas={datas} />
    </>
  );
};

export { VocabSec };
