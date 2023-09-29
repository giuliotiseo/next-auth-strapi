"use client";
import Link from 'next/link';
import React from 'react'
import { createUseStyles } from 'react-jss';
import cx from 'classnames';

const useStyles = createUseStyles((theme) => ({
  logoLink: {
    '&:hover': {
      textDecoration: 'none'
    },
    
  }
}))

const SVGLogo = ({ width = 100 , height = 100 }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 97 97" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M87.4552 5.18951C83.4103 17.751 74.6415 28.1203 63.7484 35.8318C63.9327 35.3274 64.0782 34.7939 64.1752 34.241C64.9803 29.3813 61.6823 24.7835 56.8226 23.9784C51.9629 23.1733 47.3651 26.4713 46.56 31.331C45.7549 36.1907 49.0529 40.7885 53.9126 41.5936C54.0193 41.613 54.1163 41.613 54.223 41.6324C39.8379 49.1208 23.4061 52.5158 9.49631 50.925C25.9378 61.4204 47.4912 53.2918 47.8598 65.0482C48.015 69.8303 39.1589 82.2948 26.4228 91.8105C59.752 83.3812 88.8811 46.7734 87.4552 5.18951Z" fill="url(#paint0_linear_5_2222)"/>
      <mask id="mask0_5_2222" maskUnits="userSpaceOnUse" x="9" y="5" width="79" height="87">
      <path d="M87.4552 5.18951C83.4103 17.751 74.6415 28.1203 63.7484 35.8318C63.9327 35.3274 64.0782 34.7939 64.1752 34.241C64.9803 29.3813 61.6823 24.7835 56.8226 23.9784C51.9629 23.1733 47.3651 26.4713 46.56 31.331C45.7549 36.1907 49.0529 40.7885 53.9126 41.5936C54.0193 41.613 54.1163 41.613 54.223 41.6324C39.8379 49.1208 23.4061 52.5158 9.49631 50.925C25.9378 61.4204 47.4912 53.2918 47.8598 65.0482C48.015 69.8303 39.1589 82.2948 26.4228 91.8105C59.752 83.3812 88.8811 46.7734 87.4552 5.18951Z" fill="white"/>
      </mask>
      <g mask="url(#mask0_5_2222)">
      <path d="M56.8129 23.9784C51.6719 23.9299 48.5 31.0497 52.1666 35.7445C55.5228 40.0416 60.0915 41.1571 64.7281 39.9446C53.3112 49.8871 26.8302 57.4628 9.49631 50.925L15.4036 20.8453L56.939 15.714" fill="url(#paint1_linear_5_2222)"/>
      </g>
      <mask id="mask1_5_2222" maskUnits="userSpaceOnUse" x="9" y="5" width="79" height="87">
      <path d="M87.4552 5.18951C83.4103 17.751 74.6415 28.1203 63.7484 35.8318C63.9327 35.3274 64.0782 34.7939 64.1752 34.241C64.9803 29.3813 61.6823 24.7835 56.8226 23.9784C51.9629 23.1733 47.3651 26.4713 46.56 31.331C45.7549 36.1907 49.0529 40.7885 53.9126 41.5936C54.0193 41.613 54.1163 41.613 54.223 41.6324C39.8379 49.1208 23.4061 52.5158 9.49631 50.925C25.9378 61.4204 47.4912 53.2918 47.8598 65.0482C48.015 69.8303 39.1589 82.2948 26.4228 91.8105C59.752 83.3812 88.8811 46.7734 87.4552 5.18951Z" fill="white"/>
      </mask>
      <g mask="url(#mask1_5_2222)">
      <path d="M105.846 1.94L114.528 12.1929L112.966 30.2737L103.14 76.3681L69.5393 101.753C69.5393 101.753 -9.05009 107.728 26.4228 91.8202C61.886 75.8928 81.9262 33.2613 87.4552 5.1895" fill="url(#paint2_linear_5_2222)"/>
      </g>
      <defs>
      <linearGradient id="paint0_linear_5_2222" x1="34.2884" y1="70.1938" x2="57.4785" y2="19.2763" gradientUnits="userSpaceOnUse">
      <stop stopColor="#036F74"/>
      <stop offset="0.546875" stopColor="#049CA4"/>
      </linearGradient>
      <linearGradient id="paint1_linear_5_2222" x1="65.4263" y1="75.1182" x2="33.3915" y2="33.5443" gradientUnits="userSpaceOnUse">
      <stop stopColor="#049CA4"/>
      <stop offset="1" stopColor="#036F74" stopOpacity="0"/>
      </linearGradient>
      <linearGradient id="paint2_linear_5_2222" x1="83.6352" y1="95.4784" x2="57.438" y2="36.5347" gradientUnits="userSpaceOnUse">
      <stop stopColor="#036F74"/>
      <stop offset="1" stopColor="#036F74" stopOpacity="0"/>
      </linearGradient>
      </defs>
    </svg>
  )
}

const Logo = () => {
  const classes = useStyles();
  return (
    <Link className={'logo-link block text-dark'} href="/">
      <SVGLogo />
      <span className='text-4xl font-bold font-title'>Fisigo!</span>
    </Link>
  )
}

export default Logo;
