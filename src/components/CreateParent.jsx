import React, {useState } from 'react'

const CreateParent = ({addMyParent, errors} ) => {
    const[email, setemail] = useState('');
    const[phone_number_1, setPhone_number_1] = useState('');
    const[phone_number_2, setPhone_number_2] = useState('');
    const[parent_name, setParent_name] = useState('');
    const[home_address, setHome_address] = useState('');
    const[code, setCode] = useState();


    
    
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
        setPhone_number_1('')
        setParent_name('')
        setHome_address('')



    };
  return (
    <div className='dashboard absolute bg-[#f5f9fc] top-[75px] left-[16%] p-[10px]'>
        CreateParent


        <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={email} onChange={(e) => setemail(e.target.value)}/>
        {errors.email && errors.email.map((error, index) => <div key={index} className="error">{error}</div>)}
      </div>
      <div>
        <label>Phone Number 1:</label>
        <input type="text" name="phone_number_1" value={phone_number_1} onChange={(e) => setPhone_number_1(e.target.value)} />
        {errors.phone_number_1 && errors.phone_number_1.map((error, index) => <div key={index} className="error">{error}</div>)}
      </div>
      <div>
        <label>Phone Number 2:</label>
        <input type="text" name="phone_number_2" value={phone_number_2} onChange={(e) => setPhone_number_2(e.target.value)} />
        {errors.phone_number_2 && errors.phone_number_2.map((error, index) => <div key={index} className="error">{error}</div>)}
      </div>
      <div>
        <label>Parent Name:</label>
        <input type="text" name="parent_name" value={parent_name} onChange={(e) => setParent_name(e.target.value)}/>
        {errors.parent_name && errors.parent_name.map((error, index) => <div key={index} className="error">{error}</div>)}
      </div>
      <div>
        <label>Home Address:</label>
        <input type="text" name="home_address" value={home_address} onChange={(e) => setHome_address(e.target.value)}/>
        {errors.home_address && errors.home_address.map((error, index) => <div key={index} className="error">{error}</div>)}
      </div>
      
      <div>
        <label>Home Address:</label>
        <input type="text" name="home_address" value={code} onChange={(e) => setCode(e.target.value)}/>
        {errors.code && errors.home_address.map((error, index) => <div key={index} className="error">{error}</div>)}
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default CreateParent