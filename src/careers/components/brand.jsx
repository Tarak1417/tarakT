import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const Brand = () => {
  const location = useLocation();

  const orgName = localStorage.getItem('Organization');
  const pathName = location.pathname;

  const shouldRenderMenuIcon =
    !pathName.includes(`/career/${orgName}`) && orgName === 'clikkle';

  return (
    <div className='flex items-center flex-grow gap-2 lg:pl-4'>
      {
        shouldRenderMenuIcon &&
        <Link to={"https://careers.clikkle.com/"}>

        <img
          className='w-[35px] h-[35px] sm:w-[35px] sm:h-[35px]'
          src='https://cdn.clikkle.com/images/clikkle/logo/2023/clikkle.png'
          />
          </Link>
      }
  {
      shouldRenderMenuIcon &&
    <>
      <Link to={"https://careers.clikkle.com/"}>
        <h1 className='text-black dark:text-white text-base sm:text-lg md:text-2xl sm:text-sm font-bold'
        
        >

          Clikkle
        </h1>
        </Link>
        <Link to={"https://careers.clikkle.com/"}>
      <h2 className='text-black dark:text-white text-base sm:text-lg md:text-2xl sm:text-xs'
        
      >
        Careers
      </h2>
        </Link>
    </>
  }
  {
    !shouldRenderMenuIcon && 
    <h1 className='text-black dark:text-white text-base sm:text-lg md:text-2xl sm:text-sm font-bold'
        
    >

      {orgName}
    </h1>
  }
       
    </div>
  );
};

export default Brand;
