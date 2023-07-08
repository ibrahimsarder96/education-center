import React from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import 'animate.css';
import auth from '../../firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import google from '../../assets/social/google.png';
import login from '../../assets/social/login.jpg';
const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(
    auth
  );
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  // const [token] = useToken(user || gUser);
 
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  if(user || gUser){
    navigate(from, { replace: true });
  }
  if(loading || gLoading){
    return <Loading></Loading>
  }
  let signInError;
  if(error || gError){
    signInError = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
  }
  const onSubmit = data =>{
    signInWithEmailAndPassword(data.email, data.password);
  };

  //***The function has not finished the work*******
  
  const resetPassword = async(data)=> {
    console.log(data)
    const email = data.email;
    console.log(email)
  if(email){
    console.log(data.email)
    sendPasswordResetEmail(data.email);
    toast('sent email');
  }
  }
  
  return (
<div className="hero min-h-screen bg-base-100">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card flex-shrink-0 w-full max-w-sm">
    <div className="h-full  animate__animated animate__fadeInRight card w-96 bg-black shadow-xl">
  <div className='card  w-96  shadow-2xl'>
  <div className="card-body w-96">
  <h2 className="text-center text-accent text-2xl font-bold">Login</h2>
  <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text text-white text-xl">Email</span>
        </label>
        <input 
        type="email"
        placeholder="write your email"
        className="input input-bordered bg-white text-black shadow-2xl w-full max-w-xs"
        {...register("email",{
          required: {
            value: true,
            message: 'Email is Required'
          },
          pattern: {
            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
            message: 'Provide a valid Email' 
          }
        })}
        />
        <label className="label">
        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
      {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
        </label>
      </div>
        <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text text-white text-xl">Password</span>
        </label>
        <input 
        type="password" 
        placeholder="write your password" 
        className="input input-bordered bg-white text-black shadow-2xl w-full max-w-xs"
        {...register("password",{
          required: {
            value: true,
            message: 'Password is Required'
          },
          minLength: {
            value: 6,
            message: 'Must be 6 character or longer' 
          }
        })}
        />
        <label className="label">
        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
      {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
        </label>
      </div>
      {signInError}
        <input className='btn hover:bg-slate-600 bg-orange-400 w-full max-w-xs uppercase orange-400 text-white font-extrabold' type='submit' value='Login'/>
    </form>
    <p className='text-accent'>New OnlineExplore? <Link to="/signup" className='text-blue-400'>Create New Account</Link></p>
    <p className='text-accent'>Forget Password? <button onClick={resetPassword} variant='link' className='text-blue-400' >Reset Password</button></p>
    <div className="flex items-center justify-center ">
        <div className="h-1 bg-gray-300 w-28 rounded-md"></div>
        <div className="divider text-white">OR</div>
        <div className="h-1 bg-gray-300 w-28 rounded-md"></div>
    </div>
  <button 
   onClick={() => signInWithGoogle()}
  className="btn btn-outline bg-lime-500 text-white font-extrabold">
    <img style={{width: '30px'}} src={google} alt="" />
        <span className='px-2'>Continue With Google</span>
    </button>
    <ToastContainer />
  </div>
  </div>
</div>
    </div>
    <div className="animate__animated animate__fadeInLeft text-center lg:text-left">
    <img style={{width: '800px'}} src={login} alt="" />
      <p className="py-6">
      </p>
    </div>
  </div>
</div>
  );
};
export default Login;