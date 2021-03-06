import React from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import gravatar from '../utils/gravatar';
import {logOutRequest} from '../actions/index';
import '../assets/styles/components/Header.scss';
import {Link} from 'react-router-dom';
import logo from '../assets/static/uned-logo-negro.png';
import userIcon from  '../assets/static/user-icon.png';

const Header = (props) => {
  const { user, isLogin, isRegister } = props;
  const hasUser = Object.keys(user).length > 0;

const handleLogout = () => {
  props.logOutRequest({})
}

const headerClass = classNames('header', {
  isLogin,
  isRegister
})

return(
  <header className={headerClass}>
    <Link to="/">
      <img className="header__img" src={logo} />
    </Link>
    <div className="header__menu">
      <div className="header__menu--profile">
        {
          hasUser ? 
            <img src={gravatar(user.email)} alt={user.email} /> :
            <img src={userIcon} alt="" />
        }

        <p>Perfil</p>
      </div>
      <ul>

        {
          hasUser ? 
            <li><a href="/">{user.name}</a></li>
            :null

        }

        {hasUser ? 
          <li><a href="#logout" onClick={handleLogout}>Cerrar Sesión</a></li>
        : (
          <li>
            <Link to="/login">
              Iniciar sesión
            </Link>
          </li>
        )}

      </ul>
    </div>
  </header>
);
}

const mapStateToProps = state => {
  return {
    user: state.user,
  }
}
const mapDispatchToProps = {

    logOutRequest,
  
}

export default connect (mapStateToProps, mapDispatchToProps)(Header);