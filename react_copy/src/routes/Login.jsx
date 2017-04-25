import React, { PropTypes } from 'react';
import { connect } from 'dva';
import LoginForm from '../components/Login/LoginForm';
import styles from './Login.less';

function Login({ loading, dispatch }) {
  const loginFormProps = {
    loading,
    onSubmit(data) {
      dispatch({
        type: 'auth/login',
        payload: data,
      });
    },
  };

  return (
    <div className={styles.bg}>
      <LoginForm {...loginFormProps}/>
    </div>
  )
}

function mapStateToProps({ loading }) {
  return { loading: loading.models.auth };
}

Login.propTypes = {
  loading: PropTypes.bool,
  dispatch: PropTypes.func,
};

export default connect(mapStateToProps)(Login);
