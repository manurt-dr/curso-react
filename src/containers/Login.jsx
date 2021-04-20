import React from 'react';
import {Link} from 'react-router-dom';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';
import '../assets/styles/components/Login.scss';

const Login = () => {
    return (
        <section className="login">
            <section className="login__container">
                <h2>Inicia Sesión</h2>
                <form className="login__container--form">
                    <input type="text" className="input" placeholder="Correo"/>
                    <input type="password" className="input" placeholder="Contraseña"/>
                    <button className="button">iniciar sesión</button>
                    <div className="login__container--remember-me">
                        <label>
                            <input type="checkbox" id="cbox1" value="first_checkbox"/><p>Recuérdame</p>
                        </label>
                        <a href="/">Olvidé mi contraseña</a>
                    </div>
                </form> 
                <section className="login__container--social-media">
                    <div><img src={googleIcon} />Inicia sesión con Google</div>
                    <div><img src={twitterIcon} />Inicia sesión con Twitter</div>
                </section>
                <p className="login__container--register">
                    No tienes ninguna cuenta
                    <Link to="/register">
                        Regístrate
                    </Link> 
                </p>
            </section>
        </section>    
    );
}

export default Login;