import { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { Authcontext } from '../../Authprovider/Authprovider';

const Login = () => {
    
    const {loginuser} = use(Authcontext);
    const navigate = useNavigate();
    const location = useLocation()
    

    const Handlelogin = (e) => {
        e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginuser(email,password)
    .then(result => {
        const user = result.user;
        console.log(user);  
        navigate(`${location.state ? location.state : '/'}`)
        
    }).catch(error => {
        const errormessage = error.message ;
        alert(errormessage)
    })

    }
    
    return (
        <div className='w-11/12 mx-auto flex justify-center '>

            <div className="card bg-base-100 w-full  max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={Handlelogin} className="card-body">
                    <h2 className='text-center font-bold text-2xl mb-5'>Login your account</h2>
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" name='email' required className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" name='password'  required className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button type='submit' className="btn btn-neutral mt-4">Login</button>
                        <h4 className='text-center text-accent font-medium mt-3'>Dont’t Have An Account ? <Link className='text-secondary' to='/auth/register'>Register</Link> </h4>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Login;