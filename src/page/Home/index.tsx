import React, { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { bannerAsync, personalizedAsync } from './homeSlice';

function Home() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(bannerAsync());
    dispatch(personalizedAsync());
  }, []);

  return <div>Home</div>;
}

export default Home;
