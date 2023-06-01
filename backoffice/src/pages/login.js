import { useState } from 'react';
import './login.css'
import logo from '../logoLuminaria.jpg'

function Login () {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const handleLogin = async () => {
        const data = {
            email,
            password
        }
        console.log(data)
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    return (
        <>
            <div className='div-login'>
                <div className='div-login-logo'>
                    <img src={logo} alt='logo' />
                    <h1>Luminaria</h1>
                </div>
                <div className='div-login-body'>
                    <div className='div-login-titre'>
                            <h3>Connectez vous</h3>
                    </div>
                    <div className='hr-login'></div>
                    <div className='div-login-form'>
                            <label>Email *</label>
                            <input type="text" value={email} onChange={handleChangeEmail} />
                            <label>Mot de passe *</label>
                            <input type="password" value={password} onChange={handleChangePassword} />
                    </div>
                    <div className='div-login-button'>
                        <button onClick={handleLogin}>Se connecter</button>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Login;