import * as React from 'react'

const Avatar = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 500 500'
    style={{
      opacity: 1
    }}
    {...props}
  >
    <image x='0' y='0' width='100%' height='100%' clip-path='url(#shape)' href='https://cdn.jsdelivr.net/gh/An-Jhon/image_bed/202402231345237.png' preserveAspectRatio='none'></image>
    <clipPath id='shape'>
      <path id='blob' d='M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z'></path>
    </clipPath>
  </svg>
)

export default Avatar
