import React from 'react'
import Banner from '../components/Banner';
import { useQuery } from 'react-query';
import api from '../api/api'
import Carousel from '../components/Carousel';
import Popular from '../components/Popular';
import Airing from '../components/Airing';

function Home() {
  const { isLoading, error, data } = useQuery('TRENDING', api.FETCH_FROM_GRAPHQL.FETCH_TRENDING);
  if (error) console.log("useQuery ERROR :- " + error);
  return (
    isLoading ? <div>Loading...</div> :
      <div>
        <Banner slides={data} />
        <Carousel name='RECENT' animeItem={true} alias="Recently updated" />
        <div className='my-4 mx-4 text-lg tablet:text-xl lo-res-laptop:text-2xl'>Popular on AniSonicx</div>
        <Popular />
        <div className='my-4 mx-4 text-lg tablet:text-xl lo-res-laptop:text-2xl'>Airing Schedule</div>
        <Airing />
      </div>
  )
}

export default Home;