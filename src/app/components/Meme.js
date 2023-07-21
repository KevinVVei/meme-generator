"use client";
import React, { useState } from 'react';
import memesData from '../memesData.js';
import Image from 'next/image'

export default function Meme() {

  const [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg'
  });
  const [allMemeImages, setAllMemeImages] = React.useState(memesData);


  // whenever button click randomize the image
  function getImage() {
    const memeArr = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memeArr.length);
    const url = memeArr[randomNumber].url;
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }));
  }

  return (
    <div className='p-8'>
      <div className='grid grid-cols-2 grid-rows-2 gap-4' action="">
        <input
          className='row-span-1 col-span-1 border-2 rounded indent-1.5'
          type="text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
          placeholder='Shut up'          
        />
        <input
          className='row-span-1 col-span-1 border-2 rounded indent-1.5'
          type="text" name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
          placeholder='and take my money'           
        />    
        <button
          className='row-span-2 col-span-2 text-white rounded'
          style={{ background: 'linear-gradient(90deg, #672280 1.18%, #A626D3 100%)' }}
          onClick={getImage }
        >
          Get a new meme image
        </button>       
      </div>
      <div className='relative'>
        <Image
          src={meme.randomImage}
          className='max-w-full max-h-full mt-5 mx-auto rounded'
          width={500}
          height={600}
          alt='meme'
        />
        <h2
          className="absolute w-4/5 top-10 text-center left-1/2 transform -translate-x-1/2 text-xl font-bold text-white pointer-events-none"
          style={{ textShadow: '2px 2px 2px rgba(0, 0, 0, 0.7)' }}
        >
          {meme.topText}
        </h2>
        <h2
          className="absolute w-4/5 bottom-10 left-1/2 transform -translate-x-1/2 text-xl font-bold text-white text-center pointer-events-none"
          style={{ textShadow: '2px 2px 2px rgba(0, 0, 0, 0.7)' }}
        >
          {meme.bottomText}
        </h2>
        
      </div>

    </div>
  )
}