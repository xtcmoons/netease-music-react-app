import React, { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { bannerAsync } from './homeSlice';

function Home() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(bannerAsync());
  }, []);

  return <div>Home</div>;
}

export default Home;
