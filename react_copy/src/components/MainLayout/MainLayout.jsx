import React, { PropTypes } from 'react';
import Header from './Header';
import styles from './MainLayout.less';

function MainLayout({ children, location, username, onLogout }) {
  const headerProps = { location, username, onLogout };
  return (
    <div className={styles.normal}>
      <Header {...headerProps} />
      <div className={styles.content}>
        <div className={styles.main}>
          {children}
        </div>
      </div>
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object,
  username: PropTypes.string,
  onLogout: PropTypes.func,
};

export default MainLayout;
