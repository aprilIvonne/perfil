import React from 'react';
import {FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaTwitterSquare} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1520px] m-auto px-4 py-2 bg-[#24262b]'>
      <div className='py-1 px-4 grid lg:grid-cols-3 gap-8 text-gray-00'>
        <div>
          <h1 className='w-full text-3xl font-bold text-orange-500'>YumEats</h1>
          <p className='text-white'>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. 
          </p>
          <div className='flex justify-between md:w-[75%] my-6 '>
            <FaFacebookSquare className='bg-white' size={30}/>
            <FaInstagramSquare className='bg-white' size={30}/>
            <FaTwitterSquare className='bg-white' size={30}/>
            <FaGithubSquare className='bg-white' size={30}/>
            <FaDribbbleSquare className='bg-white' size={30}/>
          </div>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-6'>
          <div className='text-white'>
            <h6 className='font-medium'>Location</h6>
            <ul>
              <li className='py-2 text-sm'>New York</li>
              <li className='py-2 text-sm'>USA</li>
              <li className='py-2 text-sm'>Canada</li>
              <li className='py-2 text-sm'>India</li>
            </ul>
          </div>

          <div className='text-white'>
            <h6 className='font-medium'>Location</h6>
            <ul>
              <li className='py-2 text-sm'>New York</li>
              <li className='py-2 text-sm'>USA</li>
              <li className='py-2 text-sm'>Canada</li>
              <li className='py-2 text-sm'>India</li>
            </ul>
          </div>

          <div className='text-white'>
            <h6 className='font-medium'>Location</h6>
            <ul>
              <li className='py-2 text-sm'>New York</li>
              <li className='py-2 text-sm'>USA</li>
              <li className='py-2 text-sm'>Canada</li>
              <li className='py-2 text-sm'>India</li>
            </ul>
          </div>

          <div className='text-white'>
            <h6 className='font-medium'>Location</h6>
            <ul>
              <li className='py-2 text-sm'>New York</li>
              <li className='py-2 text-sm'>USA</li>
              <li className='py-2 text-sm'>Canada</li>
              <li className='py-2 text-sm'>India</li>
            </ul>
          </div>



        </div>
      </div>

    </div>
  )
}

export default Footer