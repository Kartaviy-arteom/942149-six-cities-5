import React, {createRef} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {login} from "../../store/api-actions";
import Header from "../header/header";
import {AuthorizationStatus} from "../../consts";

const LoginPage = ({activeCity, onSubmit, authorizationStatus}) => {
  const loginRef = createRef();
  const passwordRef = createRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmit({
      login: loginRef.current.value,
      password: passwordRef.current.value,
    });
  };

  return (
    authorizationStatus === AuthorizationStatus.AUTH ? <Redirect to={`/`} /> : (
      <div className="page page--gray page--login">
        <Header />
        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">E-mail</label>
                  <input className="login__input form__input" type="email" name="email" placeholder="Email" required="required" ref={loginRef}/>
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">Password</label>
                  <input className="login__input form__input" type="password" name="password" placeholder="Password" required="required" ref={passwordRef}/>
                </div>
                <button className="login__submit form__submit button" type="submit">Sign in</button>
              </form>
            </section>
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>{activeCity}</span>
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>
    )
  );
};

LoginPage.propTypes = {
  activeCity: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  }
});

const mapStateToProps = (state) => ({
  activeCity: state.APLICATION_PROCESS.activeCity,
  authorizationStatus: state.USER.authorizationStatus,
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
