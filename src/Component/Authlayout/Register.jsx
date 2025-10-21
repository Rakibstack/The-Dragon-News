import React, { use, useState } from 'react';
import { Authcontext } from '../../Authprovider/Authprovider';
import { useNavigate } from 'react-router';

const Register = () => {
  const {createuser,setuser,updateuser} = use(Authcontext);
  const [nameerror,setnameerror] =useState();
  const [error,seterror] =useState();
   const navigate = useNavigate()

  const Handleregister = (e) => {
   e.preventDefault();
    const form = e.target ;
   const name = form.name.value;
   if(name.length < 6){
  setnameerror('Name Should be More Than 6 Character')
   }    
   const photo = form.photo.value;    
   const email = form.email.value;    
   const password = form.password.value;    
  //  console.log(photo,email,password,name);
   
   createuser(email,password)
   .then(result => {
    const user = result.user;
    updateuser({displayName: name,photoURL:photo})
    .then(() => {
    setuser({...user, displayName: name, photoURL:photo})
     navigate('/');
    }).catch(error => {
      console.log(error);
      
    })
    
   })
   .catch(error => {
    const errormessage = error.code;
      seterror(errormessage)
   })
   
  }
    return (
        <div className='w-11/12 mx-auto flex justify-center'>
              <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form  onSubmit={Handleregister} className="card-body">
        <h2 className='text-center text-2xl font-bold mb-4'>Register your account</h2>
        <fieldset className="fieldset">
            {/* name */}
          <label className="label">Your Name</label>
          <input type="text" name='name' required className="input bg-base-200" placeholder="Enter your name" />
          {/* Photo url */}
          <label className="label">Photo URL</label>
          <input type="text" name='photo' required className="input bg-base-200" placeholder="URL Link" />
          {/* email */}
          <label className="label">Email</label>
          <input type="email" name='email' required className="input bg-base-200" placeholder="Enter your email address" />
          {/* password */}
          <label className="label">Password</label>
          <input type="password" name='password' required className="input bg-base-200" placeholder="Enter your password" />
          <div>
             {
              nameerror && <h2 className='text-red-400 mt-2'>{nameerror}</h2>
             }
             {
               <h2 className='text-red-500 font-medium mt-2'>{error}</h2>
             }
          </div>
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
      </form>
    </div>
        </div>
    );
};

export default Register;