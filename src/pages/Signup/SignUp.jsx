
import {Link, useNavigate} from "react-router-dom"
import { useForm } from "react-hook-form"
import img from "../../assets/others/authentication2.png"
import { CiFacebook } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import logo from "../../assets/logo.png"
import "../login/Login"
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
  const navigate = useNavigate()
  const {createUser} = useContext(AuthContext)
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
      name: data.name,
      email: data.email
    }
    createUser(data.email, data.password)
    .then(res=>{
      const user = res.user;
      if(user){  
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "User Created Successfully",
          showConfirmButton: false,
          timer: 1500
        });
        navigate('/')
      }
    })
    const stroage = localStorage.setItem("user", JSON.stringify(user))
    console.log(stroage)
  } 
  return (
   <div className="bg-img">
    <Link to="/">
         <img className="w-16 ml-24" src={logo} alt="navlogo" />
        </Link>
     <div className="flex justify-center items-center h-screen  gap-40 flex-row-reverse">
      <div>
          <img src={img} alt="" />
    </div>
    <div>
      <h1 className="text-center font-bold text-xl mt-10 ">Signup</h1>
     <form onSubmit={handleSubmit(onSubmit)}>
    {/* register your input into the hook by invoking the "register" function */}
    <div>
      <label htmlFor="" className="text-xl">Name</label> <br />
      <input className="mb-5 focus:outline-none px-2 py-2 w-96" placeholder="name" {...register("name", { required: true, minLength: 1, maxLength: 20 })} />
      {
        errors.name && <p className="text-rose-400">Name min lenth 1 character and  max lenth 20 character</p>
      }
    </div>
    <div>
      <label htmlFor="" className="text-xl">Email</label> <br />
      <input className="mb-5 focus:outline-none px-2 py-2 w-96" placeholder="email" {...register("email")} />
    </div>
    <div>
      <label htmlFor="" className="text-xl">Password</label> <br />
      <input className="focus:outline-none px-2 py-2 w-96" placeholder="password" {...register("password", { required: true,
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
  <p>Already Registered <Link className="text-orange-400" to="/login">Go toLogin</Link></p>
  <p className="text-center mt-5 text-xl">Or sign in with</p>
  <div className="flex gap-5 mt-5 justify-center">
    <button>
    <CiFacebook className="text-3xl" />
    </button>
    <button><FaGoogle className="text-2xl" /></button>
    <button><VscGithub className="text-2xl" /></button>
  </div>
    </div>
    </div>
   </div>
    
  );
};

export default SignUp;