
import { useForm } from "react-hook-form"


const ToDo = () => {
    
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }, 
      } = useForm()
     console.log(errors)
      const onSubmit = (data) =>{
        console.log(data)
        const user ={
          title: data.title,
          work: data.work,
          id: data.id

        }
        const stroage = localStorage.setItem("user", JSON.stringify(user))
        console.log(stroage)

        
      } 

    
      const User = localStorage.getItem("user")
      const userData = JSON.parse(User)
      console.log(userData)
    
     
        
  return (
   <div>
     <form onSubmit={handleSubmit(onSubmit)}>
    {/* register your input into the hook by invoking the "register" function */}
    <div>
      <label htmlFor="" className="text-xl">Title</label> <br />
      <input className="mb-5 focus:outline-none px-2 py-2 w-96" placeholder="title" {...register("title", { required: true, minLength: 1, maxLength: 20 })} />
      {
        errors.name && <p className="text-rose-400">Name min lenth 1 character and  max lenth 20 character</p>
      }
    </div>
    <div>
      <label htmlFor="" className="text-xl">Work</label> <br />
      <input className="mb-5 focus:outline-none px-2 py-2 w-96" placeholder="work" {...register("work")} />
    </div>
    <div>
      <label htmlFor="" className="text-xl">ID</label> <br />
      <input className="focus:outline-none px-2 py-2 w-96" placeholder="id" {...register("id", { required: true,
         minLength: {
          value: 6,
          message: "Your password must be six character"
         },
          maxLength: {
            value: 20,
            message: "your password must be 20 character long"
          },
          pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
            message: "it must contain at least one upercase" 
          } 
          })} />
      {
        errors.password && <p className="text-rose-400">{errors.password.message} </p>
      }
    </div>
    <input className="btn mt-5 bg-orange-400 text-white w-96 hover:bg-orange-400" type="submit" value="SignUp" />
  </form>
  <h1>User Id: {userData.id} </h1>
  <p>User work: {userData.work} </p>
   </div>
   
  
  );
};

export default ToDo;