
import { useForm } from "react-hook-form";


const ToDo = () => {
    
    const {
        register,
        handleSubmit,
        watch,
      } = useForm()
      const onSubmit = (data) =>{
        console.log(data)
        const user ={
          title: data.title,
          work: data.work
        }
        const stroage = localStorage.setItem("user", JSON.stringify(user))
        console.log(stroage)
      } 

    
      const User = localStorage.getItem("user")
      const userData = JSON.parse(User)
      console.log(userData)
    
     
        
  return (
   <div className="ml-96">
    <h1 className="text-center font-bold text-xl mt-10 mb-10">To-Do List</h1>
    <div>
    <form onSubmit={handleSubmit(onSubmit)}>
    {/* register your input into the hook by invoking the "register" function */}
    <div>
      <label htmlFor="" className="text-xl">Title</label> <br />
      <input className="mb-5 focus:outline-none px-2 py-2 w-96" placeholder="title" type="text" {...register("title", { required: true })} />
    </div>
    <div>
      <label htmlFor="" className="text-xl">Work</label> <br />
      <input className="mb-5 focus:outline-none px-2 py-2 w-96" placeholder="work" type="text" {...register("work", { required: true })} />
    </div>
    <input className="btn mt-5 bg-orange-400 text-white w-96 hover:bg-orange-400" type="submit" />
  </form>
    </div>
    
  {/* <div>
     <p className="font-semibold">Title: {userData.title}</p>
     <p className="text-sm text-gray-500">Work: {userData.work}</p>
   </div> */}
   <div class="overflow-x-auto">
  <table class="table">
    {/* <thead>
      <tr>
        <th></th>
        <th>TITLE</th>
        <th>Work</th>
      </tr>
    </thead> */}
    <tbody>
      <tr>
        <th>1</th>
        <td>Title</td>
        <td>{userData.title}</td>
        <td>Blue</td>
      </tr>
      <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr>
    </tbody>
  </table>
 </div>
   </div>
   
  
  );
};

export default ToDo;