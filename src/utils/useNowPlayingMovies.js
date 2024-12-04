import  { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from './movieSlice';
import { API_OPTIONS } from './Constants';

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const fetchingNowPlayingMovies = async () => {
      const fetchData = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        API_OPTIONS
      );
      const data = await fetchData.json();
      dispatch(addNowPlayingMovies(data.results));
    };
  
    useEffect(() => {
      fetchingNowPlayingMovies();
    }, []);
}

export default useNowPlayingMovies
