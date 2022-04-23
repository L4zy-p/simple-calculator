import React from 'react'

interface DisplayProps {
  display: string
}

const Display: React.FC<DisplayProps> = ({ display = '' }: DisplayProps) => {
  return (
    <div className='h-[80px] flex justify-end items-end m-2 p-2 
    border border-gray-700 overflow-hidden rounded-sm'>
      <h1 className='text-2xl font-bold break-all'>{display}</h1>
    </div>
  )
}

export default Display