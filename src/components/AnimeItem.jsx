import React from 'react'
import { RiHeart2Fill } from 'react-icons/ri';

const AnimeItem = (props) => {
  return (
    <div className='mb-4 w-full relative overflow-hidden'>
      <a href={`/anime/${props.id}`}>
        <div className='h-72 w-fit relative overflow-hidden group transition-all'>
          <div className='absolute laptop:group-hover:opacity-100 opacity-0 transition-all top-0 left-0 bottom-0 right-0 w-full h-full bg-gradient-to-tr from-black to-transparent'></div>
          <div className='absolute flex-col top-1/4 pl-2 text-lg overflow-hidden max-h-40 -translate-x-full laptop:group-hover:translate-x-0 transition-all '>
            {props.genres.map((genre, index) => (
            <div key={index} className={`transition-all laptop:group-hover:translate-x-0 -translate-x-full delay-${index * 50}`}>{genre}</div>
            ))}
          </div>
        <div className='absolute -bottom-full transition-all laptop:group-hover:bottom-0 laptop:group-hover:inline right-0 px-2'>
          <div className='inline-flex gap-x-1 items-center'><RiHeart2Fill className='text-red-400' />{props.score || 0}%</div>
        </div>
          <img className='w-auto group-hover:w-full transition-all h-full rounded-md object-cover' src={props.image || "https://www.lyricsmotion.com/Content/images/pathan-1962-200x275.jpg"} alt="" />
        </div>
      </a>
      <div className='inline-flex justify-between w-[150px] py-1.5 select-none overflow-hidden'>
        <div className='text-xl truncate '>{props.title.userPreffered || props.title.english || props.title.romaji || props.title.native || "Untitled"}</div>
        <a className='self-center right-0 absolute bg-red-500 px-1 rounded-sm' href={`/${props.format.toLowerCase()}`}>{props.format}</a>
      </div>
    </div>
  )
}

export default AnimeItem;