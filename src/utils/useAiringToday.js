import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from './Constants';
import { addAiringToday } from './movieSlice';


const useAiringToday = () => {
    const dispatch = useDispatch();

    const fetchingAiringToday = async () => {
      const fetchData = await fetch('https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1',
        API_OPTIONS
      );
      const data = await fetchData.json();
      dispatch(addAiringToday(data.results));
    };
  
    useEffect(() => {
      fetchingAiringToday();
    }, []);
}

export default useAiringToday