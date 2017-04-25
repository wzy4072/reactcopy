import React, { PropTypes } from 'react';
import { Table, Popconfirm } from 'antd';

function LoanUserList({ dataSource, pagination, onPageChange, onEditItem, onDeleteItem, loading }) {

  const colums = [
    {
      title: '借款人',
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
      title: '工作单位',
      dataIndex: 'work_unit',
      key: 'work_unit',
    },
    {
      title: '业务员',
      dataIndex: 'user_id',
      key: 'user_id',
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

LoanUserList.propTypes = {
  dataSource: PropTypes.array,
  pagination: PropTypes.object,
  onPageChange: PropTypes.func,
  onEditItem: PropTypes.func,
  onDeleteItem: PropTypes.func,
  loading: PropTypes.bool,
};

export default LoanUserList;
