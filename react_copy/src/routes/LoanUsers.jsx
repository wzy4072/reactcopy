import React, { PropTypes } from 'react';
import { routerRedux } from 'dva/router';
import { connect } from 'dva';
import MainLayout from '../components/MainLayout/MainLayout';
import LoanUserSearch from '../components/LoanUsers/LoanUserSearch';
import LoanUserList from '../components/LoanUsers/LoanUserList';
import LoanUserModal from '../components/LoanUsers/LoanUserModal';

const LoanUsers = ({ location, dispatch, auth, loanUsers, loading }) => {
  const mainLayoutProps = {
    location,
    username: auth.user.name,
    onLogout() {
      dispatch({ type: 'auth/logout' });
    },
  };

  const { name, id_card: idCard, phone } = location.query;

  const userSearchProps = {
    onSearch(fieldsValue) {
      dispatch({
        type: 'loanUsers/query',
        payload: fieldsValue,
      });
    },
    onAdd() {
      dispatch({
        type: 'loanUsers/showModal',
        payload: {
          modalType: 'create',
        },
      });
    },
    name,
    idCard,
    phone,
  };

  const loanUserListProps = {
    dataSource: loanUsers.data,
    loading,
    pagination: loanUsers.meta.pagination,
    onPageChange(page, pageSize) {
      pageSize = pageSize || location.query.pageSize;
      dispatch(routerRedux.push({ pathname: '/loan-users', query: { page, pageSize } }));
    },
    onEditItem(currentItem) {
      dispatch({
        type: 'loanUsers/showModal',
        payload: {
          modalType: 'update',
          currentItem,
        },
      });
    },
    onDeleteItem(id) {
      dispatch({
        type: 'loanUsers/delete',
        payload: id,
      });
    },
  };

  const { modalVisible, modalType, currentItem } = loanUsers;

  const loanUserModalProps = {
    visible: modalVisible,
    item: modalType === 'create' ? {} : currentItem,
    contacts: [],
    type: modalType,
    onOk(data) {
      dispatch({
        type: `loanUsers/${modalType}`,
        payload: data,
      });
    },
    onCancel() {
      dispatch({
        type: 'loanUsers/hideModal',
      });
    },
  };

  const LoanUserModalGen = () => <LoanUserModal {...loanUserModalProps} />;

  return (
    <MainLayout {...mainLayoutProps}>
      <div className="main-box">
        <LoanUserSearch {...userSearchProps} />
        <LoanUserList {...loanUserListProps} />
        <LoanUserModalGen />
      </div>
    </MainLayout>
  );
};

LoanUsers.propTypes = {
  location: PropTypes.object,
  dispatch: PropTypes.func,
  auth: PropTypes.object,
  loanUsers: PropTypes.object,
  loading: PropTypes.bool,
};

function mapStateToProps({ auth, loanUsers, loading }) {
  return {
    auth,
    loanUsers,
    loading: loading.models.loanUsers,
  };
}

export default connect(mapStateToProps)(LoanUsers);
