import React, { PropTypes } from 'react';
import { routerRedux } from 'dva/router';
import { connect } from 'dva';
import MainLayout from '../components/MainLayout/MainLayout';
import LoanUserSearch from '../components/LoanUsers/LoanUserSearch';
import UsersList from '../components/Users/UsersList';


const Users = ({ location, dispatch, auth, Users, loading }) => {
  const mainLayoutProps = {
    location,
    username: auth.user.name,
    onLogout() {
      dispatch({ type: 'auth/logout' });
    },
  };

  const { name, id_card: idCard, phone } = location.query;


  const UsersListProps = {
    dataSource: Users.data,
    loading,
    pagination: Users.meta.pagination,
    onPageChange(page, pageSize) {
      pageSize = pageSize || location.query.pageSize;
      dispatch(routerRedux.push({ pathname: '/users', query: { page, pageSize } }));
    },
    onEditItem(record) {
      dispatch({
        type: 'Users/showModal',
        payload: record,
      });
    },
    onDeleteItem(id) {
      dispatch({
        type: 'Users/delete',
        payload: id,
      });
    },
  };
  return (
    <MainLayout {...mainLayoutProps}>
      <div className="main-box">
        <UsersList {...UsersListProps} />
      </div>
    </MainLayout>
  );
};

Users.propTypes = {
  location: PropTypes.object,
  dispatch: PropTypes.func,
  auth: PropTypes.object,
  Users: PropTypes.object,
  loading: PropTypes.bool,
};

function mapStateToProps({ auth, Users, loading }) {
  return {
    auth,
    Users,
    loading: loading.models.Users,
  };
}

export default connect(mapStateToProps)(Users);
