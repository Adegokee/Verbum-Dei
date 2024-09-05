import React from 'react';
import {Link} from 'react-router-dom'

const Subject = ({subject}) => {
  return (
    <div className='dashboard   absolute bg-[#f5f9fc] top-[75px] left-[16%] p-[10px] '>
        <h3 className='text-[#3794ff] text-[18px] font-bold'>Subject Info</h3>

        <Link to="/create-subject">
        Create Subject
        </Link>
        {subject.map((x) => {
            <p>{x.name}</p>
        })}
    </div>
  )
}

export default Subject