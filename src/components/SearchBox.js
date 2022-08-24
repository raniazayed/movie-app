import React from 'react'

const SearchBox=({searchValue, handleOnChange})=> {
  return (
    <>   
     <input className='form-control' placeholder='Type to search....' value={searchValue} onChange={(e)=> handleOnChange(e.target.value)}/>
    </>
  )
}

export default SearchBox;