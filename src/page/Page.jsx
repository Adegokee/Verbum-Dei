import React from 'react';
import Header from '../components/header/Header';

const Page = ({userInfo, setUserInfo, handleLogout}) => {
  return (
    <div>
        <Header userInfo={userInfo} setUserInfo={userInfo} handleLogout={handleLogout} />
        
    </div>
  )
}

export default Page