import './Login.css';
import logo from '../../assets/logo.png';
import { useState } from 'react';
import { login, signup } from '../../firebase';
import netflix_spinner from '../../assets/netflix_spinner.gif';
 
const Login: React.FC = function() {
    const [signState, setSignState] = useState('Sign In');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const updateName = function(event) {
        const newName = event.target.value;
        setName(newName);
    };

    const updateEmail = function(event) {
        const newEmail = event.target.value;
        setEmail(newEmail);
    };

    const updatePassword = function(event) {
        const newPassword = event.target.value;
        setPassword(newPassword);
    };

    const user_auth = async function(event) {
        event.preventDefault();
        setLoading(true);
        if (signState === 'Sign In') {
            await login(email, password);
        } else {
            await signup(name, email, password);
        }
        setLoading(fales);
    };

    return (
        loading ? <div className="login-spinner"><img src={netflix_spinner} /></div>:
        <div className='login'>
            <img src={logo} alt='netflix logo' className='login-logo' />
            <div className='login-form'>
                <h1>{signState}</h1>
                <form>
                    {signState === 'Sign Up' ? 
                    <input value={name} onChange={updateName} type='text' placeholder='Your name' /> : <></>}
                    <input value={email} onChange={updateEmail} type='email' placeholder='Email' />
                    <input value={password} onChange={updatePassword} type='password' placeholder='Password' />
                    <button onClick={user_auth} type='submit'>{signState}</button>
                    <div className='form-help'>
                        <div className='remember'>
                           <input type='checkbox' />
                           <label htmlFor=''>Remember Me</label>
                        </div>
                        <p>Need Help?</p>
                    </div>
                </form>
                <div className='form-switch'>
                    {
                        signState === 'Sign In' ?
                        <p>New to Netflix? <span onClick={() => (setSignState('Sign Up'))}>Sign Up Now</span></p> :
                        <p>Already have account? <span onClick={() => (setSignState('Sign In'))}>Sign In Now</span></p>
                    }
                </div>
            </div>
        </div>
    );
};

export default Login;
