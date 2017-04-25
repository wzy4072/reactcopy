import React, { PropTypes } from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import { Link } from 'dva/router';
import styles from './Header.less';

function getMenuKeyFromUrl(pathname) {
  let key = '';
  try {
    key = pathname.match(/\/([^\/]*)/i)[1];
    /* eslint no-empty:0 */
  } catch (e) {
  }
  return key;
}

function Header({ location, username, onLogout }) {
  const dropDownMenu = (
    <Menu style={{ marginRight: '20px' }}>
      <Menu.Item>
        <a onClick={onLogout}><Icon type="logout" />&nbsp;退出登录</a>
      </Menu.Item>
    </Menu>
  );
  const userMenu = (
    <Menu>
      <Menu.Item>
        <a><Icon type="" />用户列表</a>
      </Menu.Item>
      <Menu.Item>
        <Link to="/users"><Icon type="" />用户管理</Link>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className={`${styles.normal} bg-dark`}>
      <Menu
        selectedKeys={[getMenuKeyFromUrl(location.pathname)]}
        mode="horizontal"
        theme="dark"
        className={styles.left}
      >
        <Menu.Item key="loan-user">
          <Link to="/loan-users"><Icon type="solution" />借款人</Link>
        </Menu.Item>
        <Menu.Item key="users">
          <Dropdown overlay={userMenu}>
            <Link to="/users"><Icon type="" />用户管理</Link>
          </Dropdown>
        </Menu.Item>
      </Menu>
      <div className={styles.right}>
        <Dropdown overlay={dropDownMenu} overlayStyle={{ marginLeft: '-20px' }}>
          <a>{username}&nbsp;<icon type="down" /></a>
        </Dropdown>
      </div>
    </div>
  );
}

Header.propTypes = {
  location: PropTypes.object,
  username: PropTypes.string,
  onLogout: PropTypes.func,
}
;

export default Header;
