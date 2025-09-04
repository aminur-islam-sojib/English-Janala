import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  setLevel,
  setLoading,
  setLevelsData,
  setDetailsData,
} from './DataSlice';

const VocabSec = ({ id, id2 }) => {
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
    console.log(id2);
    const url = `https://openapi.programming-hero.com/api/word/${id2}`;
    const fetchData = async () => {
      const response = await axios.get(url);
      dispatch(setDetailsData(response.data.data));
    };
    fetchData();
  }, [id2]);
};

export { VocabSec };
