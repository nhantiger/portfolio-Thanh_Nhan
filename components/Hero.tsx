import React from 'react'
import { Cursor,useTypewriter } from 'react-simple-typewriter'
import BackgroudCircles from './BackgroudCircles';

type Props = {}

export default function Hero({}: Props) {
    const[text,count]=useTypewriter({
        words:[
            "hi, the name's Thanh Nhan",
            "I love art and sports",
            "I'm glad you entered my portfolio",
        ],
        loop:true,
        delaySpeed:2000,
    });
  return (
    <div className='h-screen flex flex-sol space-y-8 items-center justify-center text-center overflow-hidden' >
        <BackgroudCircles text={text} />
    </div>
  )
}
