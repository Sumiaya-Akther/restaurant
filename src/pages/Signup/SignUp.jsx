
import {Link} from "react-router-dom"
import { useForm } from "react-hook-form"
import img from "../../assets/others/authentication2.png"
import { CiFacebook } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import "../login/Login"
const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <div className="flex justify-center  gap-40 flex-row-reverse bg-img">
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
      <input className="focus:outline-none px-2 py-2 w-96" placeholder="password" {...register("password", { required: true, minLength: 6, maxLength: 20 })} />
      {
        errors.password && <p>Password min lenth 6 character and max lenth 20 </p>
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
    
  );
};

export default SignUp;