import React, {useState} from 'react'

const CreateSubject = ({addSubject, teacherData, myclass}) => {
    const [name, setName] = useState('');
    const [grade, setGrade] = useState('');
    const [teacher, setTeacher] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();

    const newReview = {
        name, grade, teacher
    }
console.log(newReview)
    addSubject(newReview);
        setGrade('');
        setTeacher('');
        setName('');



}
   
  return (
    <div className='dashboard absolute bg-[#f5f9fc] top-[75px] left-[16%] p-[10px]'>
        <p>CreateSubject</p>

        <form action="" onSubmit={handleSubmit}>
           <div>
           <label htmlFor="">Name:<span>*</span></label>
           <input type="text" name="name" class="border bg-white font-medium min-w-20 rounded-md shadow-sm text-gray-500 text-sm focus:ring focus:ring-primary-300 focus:border-primary-600 focus:outline-none group-[.errors]:border-red-600 group-[.errors]:focus:ring-red-200 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-300 dark:focus:border-primary-600 dark:focus:ring-primary-700 dark:focus:ring-opacity-50 dark:group-[.errors]:border-red-500 dark:group-[.errors]:focus:ring-red-600/40 px-3 py-2 w-full max-w-2xl" maxlength="50" required="" id="id_name" value={name} onChange={(e) => setName(e.target.value)}/>
           </div>

           <div>
            <label htmlFor="">Select Class</label>
            <select name="grade" class="border bg-white font-medium min-w-20 rounded-md shadow-sm text-gray-500 text-sm focus:ring focus:ring-primary-300 focus:border-primary-600 focus:outline-none group-[.errors]:border-red-600 group-[.errors]:focus:ring-red-200 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-300 dark:focus:border-primary-600 dark:focus:ring-primary-700 dark:focus:ring-opacity-50 dark:group-[.errors]:border-red-500 dark:group-[.errors]:focus:ring-red-600/40 px-3 py-2 w-full pr-8 max-w-2xl appearance-none " data-context="available-source" required="" id="id_grade" value={grade} onChange={(e) => setGrade(e.target.value)}>

            <option value="" selected="">Select value</option>
            {myclass.map((x) => (
                 <option key={x.id} value={x.id}>{x.name}</option>
            ))}

           

            </select>

           </div>

           <div>
            <label htmlFor="">Teacher</label>
            <select name="teacher" class="border bg-white font-medium min-w-20 rounded-md shadow-sm text-gray-500 text-sm focus:ring focus:ring-primary-300 focus:border-primary-600 focus:outline-none group-[.errors]:border-red-600 group-[.errors]:focus:ring-red-200 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-300 dark:focus:border-primary-600 dark:focus:ring-primary-700 dark:focus:ring-opacity-50 dark:group-[.errors]:border-red-500 dark:group-[.errors]:focus:ring-red-600/40 px-3 py-2 w-full pr-8 max-w-2xl appearance-none " data-context="available-source" required="" id="id_teacher" value={teacher} onChange={(e) => setTeacher(e.target.value)}>
            <option value="" selected="">Select value</option>
            {teacherData.map((x) => (
                     <option key={x.id} value={x.id}>{x.first_name} {x.last_name}</option>
            ))}
            

           

            </select>
           </div>


           <button type='submit' className='bg-[blue]'>Submit</button>
        </form>

    </div>
  )
}

export default CreateSubject