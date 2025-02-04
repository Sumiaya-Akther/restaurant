import {Link} from "react-router-dom"
import { useForm } from "react-hook-form"
import img from "../../assets/others/authentication2.png"
import { CiFacebook } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import logo from "../../assets/logo.png";
import toast, { Toaster } from 'react-hot-toast';
import "./Login.css";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useEffect,useState } from "react";

const Login = () => {
  const [disabled, setDisabled] = useState(true)
  const [value, setValue] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  useEffect (()=>{
    loadCaptchaEnginge(6); 

  },[])

  const onSubmit = (data) => console.log(data)
  const handleValidateCaptcha = (event) =>{
    const user_captcha_value = event.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
  }

  else {
      setDisabled(true);
      toast('Captcha does not match')
  }
    console.log(user_captcha_value)
  } 

  return (
   <div className="bg-img">
          <Toaster />

    <Link to="/">
     <img className="w-16 ml-24" src={logo} alt="navlogo" />
    </Link>
     <div className="flex justify-center items-center h-screen gap-40">
      <div>
          <img src={img} alt="" />
    </div>
    <div>
      <h1 className="text-center font-bold text-xl mt-10 ">Login</h1>
     <form onSubmit={handleSubmit(onSubmit)}>
    {/* register your input into the hook by invoking the "register" function */}
    <div>
      <label htmlFor="" className="text-xl">Email</label> <br />
      <input className="mb-5 focus:outline-none px-2 py-2 w-96" placeholder="email" {...register("email")} />
    </div>
    <div>
      <label htmlFor="" className="text-xl">Password</label> <br />
      <input className="focus:outline-none px-2 py-2 w-96" placeholder="password" {...register("password")} />
    </div>


    <div>
      <label htmlFor="" className="text-xl">Captcha
      <LoadCanvasTemplate />
        </label> <br />
      <input type="text" onBlur = {handleValidateCaptcha} className="focus:outline-none px-2 py-2 w-96" placeholder="write above captcha" />
    </div>
    <input disabled={disabled} className="btn mt-5 bg-orange-400 text-white w-96 hover:bg-orange-400" type="submit" value="SignIn" />
  </form>
  <p>New here? <Link className="text-orange-400" to="/signup">Crate a New Account</Link></p>
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

export default Login;