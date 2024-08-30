import React from 'react'
import {Link} from 'react-router-dom'

const Parent = ({parent, errors}) => {
  return (
    <div className='dashboard absolute bg-[#f5f9fc] top-[75px] left-[16%]'>
      
      <>
        <Link to='/create_parent'>
        + Create Parent
        </Link>
      {parent.map((x) => (
        <>
            <p key={x.id}>{x.email}</p>
            <p>{x.parent_name}</p>
            <p>{x.phone_number_1}</p>
            <p>{x.phone_number_2}</p>
            <p>{x.home_address}</p>
        
        
        </>
            
        ))}
        
      
      </>
        
        
 

    </div>
  )
}

export default Parent