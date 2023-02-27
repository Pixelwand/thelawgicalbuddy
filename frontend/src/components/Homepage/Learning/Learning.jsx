import React from 'react';
import { learnings } from '../../Assets/index';
import {ArrowRightIcon} from '@heroicons/react/20/solid'

export const Learning = () => {
  return (
    <>
    <div className='  bg-learningBackground w-full text-white'>
      <div className=''>
      <img src={learnings} alt='Learning'   className="h-60 mx-auto items-center"/>
      </div>
      <div>
      <div className='text-center text-xl text-white font-semibold'>Technopedia for your Mastermind</div>
      <div className='text-center text-white'>
        <p className='px-3'>A curated interactive space for aspiring programmers to learn and master their coding skills.</p>
      </div>
      </div>
      <div className=''>
      <a href='/topics' className="mx-auto w-60 flex bg-buttonColor" >
      Start Learning For Free <ArrowRightIcon className='h-8 w-8'/>
</a>
      </div>
    </div>
    </>
  )
}
