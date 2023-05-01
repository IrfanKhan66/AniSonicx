import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper';
import 'swiper/css'
import 'swiper/css/effect-cards'
import 'swiper/css/navigation'
import { useQuery } from 'react-query';
import api from '../api/api';
import AnimeItem from './AnimeItem';
import convertTime from '../utils/convertAiringDate';

function Carousel(props) {
    const { isLoading, error, data } = useQuery(props.name, api.FETCH_FROM_GRAPHQL[`FETCH_${props.name}`]);
    if (error) console.log("ERROR :- " + error);
    const responsiveness = {
        0: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        420: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        640: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        769: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 10,
        },
        1280: {
            slidesPerView: 6,
            spaceBetween: 20,
        },
        1536: {
            slidesPerView: 7,
            spaceBetween: 10,
        },
    };
    return (
        isLoading ? <></> :
            <>
                <div className='my-4 mx-4 text-lg tablet:text-xl lo-res-laptop:text-2xl'>{props.alias}</div>
                <div>
                    <Swiper
                        breakpoints={responsiveness}
                        modules={[Navigation, A11y]}
                        navigation
                    >
                        {props.animeItem === true ?
                            data?.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <AnimeItem id={item.id} genres={item.genres} title={item.title} format={item.format} image={item.coverImage.extraLarge} score={item.averageScore} />
                                </SwiperSlide>
                            ))
                            :
                            data?.filter((item, index) => index < 30)?.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div title={convertTime(item?.airingAt)} className='mb-4 w-full relative overflow-hidden'>
                                        <a href={`/anime/${item?.id}`}>
                                            <div className='h-72 w-fit relative overflow-hidden transition-all'>
                                                <img className='w-auto group-hover:w-full transition-all h-full rounded-md object-cover' src={item?.media?.coverImage.extraLarge || item?.media?.coverImage.large || item?.media?.coverImage.medium || "https://www.lyricsmotion.com/Content/images/pathan-1962-200x275.jpg"} alt="" />
                                            </div>
                                        </a>
                                        <div className='inline-flex justify-between w-[150px] py-1.5 select-none overflow-hidden'>
                                            <div className='text-xl truncate '>{item?.media?.title.english || item?.media?.title.romaji || item?.media?.title.native || "Untitled"}</div>
                                            <a className='self-center right-0 absolute bg-red-500 px-1 rounded-sm' href={`/${item?.format?.toLowerCase()}`}>{item?.media?.format}</a>
                                        </div>
                                    </div>
                                   
                                </SwiperSlide>
                            ))


                        }
                    </Swiper>

                </div>
            </>
    )
}

export default Carousel;