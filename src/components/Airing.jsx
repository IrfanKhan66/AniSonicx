import React from 'react'
import { RiStarSFill } from 'react-icons/ri';
import { useQuery } from 'react-query';
import convertTime from '../utils/convertAiringDate';
import api from '../api/api';

const Airing = () => {
    const { isLoading, error, data } = useQuery('AIRING-SCHEDULE', api.FETCH_FROM_GRAPHQL.FETCH_AIRING_SCHEDULE);
    if (error) console.log("ERROR :- " + error);
    return (
        isLoading ? <></> :
        <div className='grid grid-cols-5 px-3'>
            {data?.filter((item, index) => index > 30)?.map((item, index) => (
                <div className='relative group w-fit'>
                    <div key={index} title={convertTime(item?.airingAt)} className='mb-4 w-full relative overflow-hidden'>
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
                    <div id="popup" className='absolute group-hover:opacity-100 -z-10 opacity-0 transition-all delay-75 w-full group-hover:z-20 h-max -top-10 translate-x-24'>
                        <div className='hover-box overflow-hidden my-6 relative bg-zinc-700 rounded max-w-sm w-full'>
                            <div className='w-full h-56 relative'>
                                <div id='gradient'></div>
                                <img className='w-full h-full object-cover' src={item?.media?.coverImage?.extraLarge || item?.media?.coverImage?.large || item?.media?.coverImage?.medium} alt="" />
                            </div>
                            <div className='absolute space-y-0.5 top-0 z-10 max-w-[250px] p-2'>
                                <p className='text-lg z-10'>Airing time</p>
                                <p className='prose prose-sm prose-invert'>{convertTime(item?.airingAt)}</p>
                            </div>
                            <div className='absolute z-10 right-0 top-0 flex gap-x-0.5 p-2 items-center'><RiStarSFill className='text-amber-400 text-xl' /><p className='text-slate-200/90'>5460</p></div>
                            <div className='absolute flex items-center top-6 z-10 p-2 right-0 '>
                                <p>Ep</p>
                                <p className='text-slate-200/90'>:&thinsp;{item?.episodes}</p>
                            </div>
                            <a className='self-center right-0 bottom-0 z-10 absolute bg-red-500 px-1 rounded-s-sm' href={`/${item?.media?.format?.toLowerCase()}`}>{item?.media?.format}</a>
                            <div className='absolute p-2 max-w-xs space-y-1.5 top-1/2 z-10 overflow-hidden'>
                                <div className='text-lg text-white/95 prose prose-invert'>{item?.media?.title?.english || item?.media?.title?.romaji}</div>
                                <div className='mt-2 text-base text-gray-200 md:block md:line-clamp-5'>
                                    <div className='ProseMirror !max-w-full prose prose-sm prose-invert focus:outline-none focus:border-none text-sm text-gray-300/90 hover:text-gray-100'><p>{item?.media?.description?.replace(/\<\>/g,' ')}</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Airing;