import React, { useState } from 'react'

export default function Rating({ rating, setRating, isEditable }) {
  const handleRating = (value) => {
    if (isEditable) {
      setRating(value);
    } 
  }
  console.log('rating', rating);
  

  return (
    <div className="flex items-center gap-1 mt-2">
      {[1, 2, 3, 4, 5].map((value) => (
        <span
          key={value}
          onClick={() => { handleRating(value) }}
          className={`w-4 cursor-pointer ${value <= rating ? 'text-yellow-500' : null}`}
        >
          {value <= rating ? '★' : '☆'}
        </span>
      ))}
    </div>
  )
}
