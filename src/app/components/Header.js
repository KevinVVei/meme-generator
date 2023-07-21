import React from 'react';
import Image from 'next/image'
import troll from '../images/troll-face.png'
import '../style/style.css'

export default function Header() {
  return (
    <header className='flex items-center h-16 text-white p-5' style={{background: 'linear-gradient(90deg, #672280 1.18%, #A626D3 100%)'}}>
      <Image
        src={troll}
        className='w-8 h-full mr-1.5'
        alt='troll' />
      <h2 className='text-xl mr-auto'>Meme Generator</h2>
      <h4 className='font-xs font-medium'>React Course - Project 3</h4>
    </header>
  )
}