import React from 'react'

const pageaa = ({params}) => {
  return (
    <div>
      Blog Details for <span className='text-red-500 font-bold text-2xl'>{params?.id}</span> in category <span className='text-red-500 font-bold text-2xl'>{params?.cat}</span>
    </div>
  )
}

export default pageaa