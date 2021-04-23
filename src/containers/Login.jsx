import React, {useState} from 'react';
import Header from '../components/Header';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {loginRequest} from '../actions'
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';
import '../assets/styles/components/Login.scss';

const Login = (props) => {
  const [form, setValues] = useState({
    email:'',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = event =>{
    event.preventDefault();
    props.loginRequest(form);
    props.history.push('/');
    console.log(form);
  }
    return (
      <>
        <Header isLogin />
        <section className="login">
          <section className="login__container">
            <h2>Inicia Sesión</h2>
            <form className="login__container--form" onSubmit={handleSubmit}>
              <input 
              name="email"
              type="text" 
              className="input" 
              placeholder="Correo" 
              onChange={handleInput}
              />
              <input 
              name="password"
              type="password" 
              className="input" 
              placeholder="Contraseña" 
              onChange={handleInput}
              />
              <button className="button">iniciar sesión</button>
              <div className="login__container--remember-me">
                <label>
                  <input type="checkbox" id="cbox1" value="first_checkbox" />
                  <p>Recuérdame</p>
                </label>
                <a href="/">Olvidé mi contraseña</a>
              </div>
            </form> 
            <section className="login__container--social-media">
              <div>
                <img src={googleIcon} />
                Inicia sesión con Google
              </div>
              <div>
                <img src={twitterIcon} />
                Inicia sesión con Twitter
              </div>
            </section>
            <p className="login__container--register">
              No tienes ninguna cuenta {'  '}
              <Link to="/register">
                Regístrate
              </Link> 
            </p>
          </section>
        </section>  
      </>  
    );
}

const mapDispatchToProps =  {
  loginRequest,
};


export default connect (null, mapDispatchToProps) (Login);