import React, { PropTypes } from 'react';
import { Table, Popconfirm } from 'antd';

function UsersList({ dataSource, pagination, onPageChange, onEditItem, onDeleteItem, loading }) {

  const colums = [
    {
      title: '用户名',
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: '手机',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: '身份证',
      dataIndex: 'id_card',
      key: 'id_card',
    },
    {
      title: '用户类型',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: '门店',
      dataIndex: 'branch',
      key: 'branch',
    },
    {
      title: '操作',
      key: 'operation',
      render: (text, record) => (
        <p>
          <a onClick={() => onEditItem(record)}>编辑</a>&nbsp;&nbsp;
          <Popconfirm title="确定要删除吗？" onConfirm={() => onDeleteItem(record.id)}>
            <a>删除</a>
          </Popconfirm>
        </p>
      ),
    },
  ];

  return (
    <div>
      <Table
        columns={colums}
        dataSource={dataSource}
        loading={loading}
        rowKey={record => record.id}
        pagination={{
          ...pagination,
          onChange: onPageChange,
          showSizeChanger: true,
          onShowSizeChange: onPageChange,
          pageSizeOptions: ['5', '10', '15', '20'],
          showQuickJumper: true,
        }}
        scroll={{ x: true }}
      />
    </div>
  );
};

UsersList.propTypes = {
  dataSource: PropTypes.array,
  pagination: PropTypes.object,
  onPageChange: PropTypes.func,
  onEditItem: PropTypes.func,
  onDeleteItem: PropTypes.func,
  loading: PropTypes.bool,
};

export default LoanUserList;
