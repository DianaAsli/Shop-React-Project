import React, { useContext, useState } from 'react'
import { UserContext } from '../../context/UserContext'
import CommentForm from './CommentForm';
import CommentsList from './CommentsList';
import AverageRating from '../rating/AverageRating';
import CommentCard from './CommentCard';

export default function Comments() {
  const { accessToken } = useContext(UserContext);
  const [showForm, setShowForm] = useState(false)

  return (
    <div className='mt-16 border-t pt-10'>
      <div className='w-full m-auto'>
        <h2 className='font-medium text-3xl mt-2'>Comments</h2>
        <AverageRating/>
        <hr className='w-full mt-10'/>

        {accessToken && !showForm && (
          <button onClick={() => setShowForm(!showForm)} className="mt-5 px-6 py-2 bg-black text-white text-sm sm:text-base rounded-full hover:bg-gray-800 transition cursor-pointer">Add a comment</button>
        )}

        {showForm && <CommentForm setShowForm={setShowForm} />}

        <div className='mt-10'>
          {/* <CommentsList /> */}
          <CommentCard/>
        </div>

      </div>
    </div>
  )
}
