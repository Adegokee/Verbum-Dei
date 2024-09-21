import React from 'react';
import Header from '../components/header/Header';

const Page = ({userInfo, setUserInfo}) => {
  return (
    <div>
        <Header userInfo={userInfo} setUserInfo={userInfo} />
        
    </div>
  )
}

export default Page