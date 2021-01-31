import React from 'react';
import { connect } from 'react-redux';

import { getUserEmail } from '../../redux/auth/auth-selectors';
import { logOut } from '../../redux/auth/auth-operations';

import styles from './UserNav.module.css';

const UserNav = ({ userEmail, logOut }) => {
  return (
    <>
      <p className={styles.userEmail}>{userEmail}</p>
      <button type="button" className={styles.button} onClick={logOut}>
        LogOut
      </button>
    </>
  );
};

const mapStateToProps = state => ({
  userEmail: getUserEmail(state),
});

const mapDispatchToProps = {
  logOut: logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserNav);
