import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Autoplay, Navigation, } from 'swiper'
import { Link } from 'react-router-dom';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import { RiHeart2Line } from 'react-icons/ri';

function Banner({ slides }) {
    return (
        <div>
            <Swiper
                className="mb-4 mt-14 lo-res-tablet:mt-0 w-[97%] laptop:w-full bg-transparent"
                // install Swiper modules
                modules={[Navigation, A11y, Autoplay]}
                spaceBetween={50}
                autoplay={{
                    delay: "4000",
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                slidesPerView={1}
                navigation
            >
                {slides.map((item, i) => (
                    item.bannerImage !== null ?
                        <SwiperSlide key={i}>
                            <div className="overflow-hidden rounded-md relative laptop:rounded-none">
                                <div id="gradient"></div>
                                <div className='bg-gradient-to-tr from-zinc-950 to-transparent z-10 absolute w-full h-full'></div>
                                    <div className="w-full h-[160px] relative rounded-md overflow-hidden mobile:h-[230px] lo-res-tablet:h-[260px] tablet:h-[290px] lo-res-laptop:h-[340px] laptop:h-[380px] hi-res-laptop:h-[410px] laptop:rounded-none">
                                        <img
                                            className="select-none object-cover absolute w-full h-full"
                                            src={item.bannerImage}
                                            alt=""
                                        />
                                    </div>
                                    <div className="absolute select-none z-10 text-left items-baseline top-1/2 flex-col flex -translate-y-1/3 pl-2 w-5/6 lo-res-tablet:w-2/3 lo-res-tablet:pl-8 whitespace-nowrap lo-res-tablet:whitespace-normal laptop:pl-18">
                                    <div className='flex text-white text-xs mobile:text-sm lo-res-tablet:text-lg tablet:text-xl laptop:text-2xl w-full space-x-4 lo-res-laptop:py-2'>
                                        <div><p className='inline-flex space-x-2 items-center'><RiHeart2Line className='text-red-400'/> &thinsp;{item.averageScore}%</p></div>
                                    </div>
                                    <div className='lo-res-laptop:text-lg hidden lo-res-tablet:block text-sm text-teal-400 after:block after:relative after:w-3/4 after:h-[2px] lo-res-laptop:mb-2 mb-1 after:bg-gradient-to-r after:from-slate-400 after:to-transparent after:rounded-md'>
                                        <div><p>#Trending {item.trending}</p></div>
                                    </div>
                                        <div className="block text-sm lo-res-tablet:block filter drop-shadow-md pb-1 lo-res-tablet:pb-2 truncate overflow-ellipsis font-semibold text-white lo-res-tablet:text-lg lo-res-laptop:text-2xl laptop:text-3xl">
                                            {item?.title?.english || item?.title?.romaji}
                                        </div>
                                        <div className="font-light block text-xs lo-res-tablet:block w-[45rem] tablet:w-[28rem] lo-res-laptop:w-[45rem] text-slate-200/90 filter drop-shadow-sm lo-res-laptop:text-sm">
                                            {item?.description?.substr(0, 280).replace(/\s*\<.*?\>\s*/g, " ")}
                                            ...
                                        </div>
                                        <div className="inline-flex w-[5.65rem] lo-res-tablet:w-[6rem] mt-3 ml-4 text-slate-900 justify-between items-center tablet:w-[8rem]" >
                                            <Link to={`/anime/${item.id}`} className="bg-red-500 text-white lo-res-laptop:hover:bg-red-600 rounded w-auto text-sm px-1 py-1 tablet:text-base tablet:px-2 tablet:py-2">Details &gt;</Link>
                                        </div>
                                    </div>
                            </div>
                        </SwiperSlide>
                        : <></>
                        ))}
            </Swiper>
            <div className='laptop:block hidden h-full -translate-y-4 z-50 w-screen pb-20 bg-gradient-to-b from-zinc-950 to transprent bottom-0'></div>
        </div >
    )
}

export default Banner;