import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
  FaGithub,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full bg-gray-100 py-16'>
      <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
        <div className='sm:flex text-center justify-between items-center'>
          <h1>BEACHES</h1>
          <div className='flex justify-between w-full sm:max-w-[280px] my-4'>
            <FaFacebook className='icon' />
            <FaTwitter className='icon' />
            <FaYoutube className='icon' />
            <FaPinterest className='icon' />
            <FaInstagram className='icon' />
            <FaGithub className='icon' />
          </div>
        </div>
        <div className='flex justify-between'>
          <ul className='lg:flex'>
            <li>ABOUT</li>
            <li>PARTNERSHIPS</li>
            <li>CAREERS</li>
            <li>NEWSROOM</li>
            <li>ADVERTISING</li>
          </ul>
          <ul className='text-right lg:flex'>
            <li>HOME</li>
            <li>DESTINATONS</li>
            <li>TRAVEL</li>
            <li>VIEW</li>
            <li>BOOK</li>
          </ul>
          <div>Made by aayushi</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;