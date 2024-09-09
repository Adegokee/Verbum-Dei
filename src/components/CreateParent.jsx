import React, {useState } from 'react'

const CreateParent = ({addMyParent, myerrors} ) => {
    const[email, setemail] = useState('');
    const[phone_number_1, setPhone_number_1] = useState('');
    const[phone_number_2, setPhone_number_2] = useState('');
    const[parent_name, setParent_name] = useState('');
    const[home_address, setHome_address] = useState('');
    const[code, setCode] = useState('');


    
    
    const handleSubmit  = (e) => {
        e.preventDefault();
        const newReview = {
            email,
            phone_number_1,
            phone_number_2,
            parent_name,
            home_address,
           
            
        }
        console.log(newReview)
        addMyParent(newReview)
        setemail('')
        setPhone_number_1('')
        setPhone_number_2('')
        setParent_name('')
        setHome_address('')



    };
  return (
    <div  className='dashboard hero-pattern absolute  top-[75px] left-[16%] p-[10px]'>
        
        <p className='mb-[40px] ml-[150px] text-[#227fff] font-bold text-[20px]'>Parent Form</p>


        <form onSubmit={handleSubmit} className=''>
      <div className='ml-[150px]'>
        <label>Email:<span className='text-[red]'>*</span></label>
        <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5" name="email" value={email} onChange={(e) => setemail(e.target.value)} />
        {myerrors.email && <p className="text-red-500 text-sm mt-1">{myerrors.email}</p>}
      </div>
      <div className='ml-[150px]'>
        <label>Phone Number 1:<span className='text-[red]'>*</span></label>
        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5" type="text" name="phone_number_1" value={phone_number_1} onChange={(e) => setPhone_number_1(e.target.value)} />
        {myerrors.phone_number_1 && <p className="text-red-500 text-sm mt-1">{myerrors.phone_number_1}</p>}
      </div>
      <div className='ml-[150px]'>
        <label>Phone Number 2:<span className='text-[red]'>*</span></label>
        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5" type="text" name="phone_number_2" value={phone_number_2} onChange={(e) => setPhone_number_2(e.target.value)} />
        {myerrors.phone_number_2 && <p className="text-red-500 text-sm mt-1">{myerrors.phone_number_2}</p>}
      </div>
      <div className='ml-[150px]'>
        <label>Parent Name:<span className='text-[red]'>*</span></label>
        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5" type="text" name="parent_name" value={parent_name} onChange={(e) => setParent_name(e.target.value)}/>
        {myerrors.parent_name && <p className="text-red-500 text-sm mt-1">{myerrors.parent_name}</p>}
      </div>
      <div className='ml-[150px]'>
        <label>Home Address:<span className='text-[red]'>*</span></label>
        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5" type="text" name="home_address" value={home_address} onChange={(e) => setHome_address(e.target.value)}/>
        {myerrors.home_address && <p className="text-red-500 text-sm mt-1">{myerrors.home_address}</p>}
      </div>
      
      {/* <div className='ml-[150px]'>
        <label>Code<span className='text-[red]'>*</span></label>
        <input type="text" name="code" placeholder='vb20240831pa082725' value={code} onChange={(e) => setCode(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5" maxlength="12" required="" id="id_code"/>
        
        {myerrors.code && <p className="text-red-500 text-sm mt-1">{myerrors.code}</p>}
      </div> */}
      <button type="submit"  className="w-[99px] md:ml-[169px] text-white bg-blue-700 mt-[70px] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Submit</button>
    </form>
    </div>
  )
}

export default CreateParent