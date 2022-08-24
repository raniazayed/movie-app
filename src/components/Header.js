import React from 'react';

const Header=({heading})=> {
  return (
    <>
    <div className='text-white'>{heading}</div>
    </>
  )
}

export default  React.memo(Header);