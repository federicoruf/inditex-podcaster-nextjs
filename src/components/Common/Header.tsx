"use client";
import React, { useContext } from 'react';
import Link from 'next/link';
import { LoadingContext } from '@/context/LoadingContext';
import { Spinner } from './Spinner';

export const Header = () => {
  const { loading } = useContext(LoadingContext);
  return (
    <div className='flex flex-row align-middle justify-between border-bottom-2 border-b p-5'>
      <Link href='/' className='no-underline text-teal-500 font-semibold'>
        Podcaster
      </Link>

      {loading && <Spinner />}
    </div>
  );
};
