import React, { PropTypes } from 'react';
import { Form, Input, Button, Select } from 'antd';
import styles from './LoanUserSearch.less';

function LoanUserSearch({ form, onSearch, onAdd, name, idCard, phone }) {
  const { getFieldDecorator, validateFields } = form;

  function handleSubmit(e) {
    e.preventDefault();

    validateFields((errors, values) => {
      if (errors) {
        return;
      }

      onSearch(values);
    });
  }

  return (
    <div className={styles.normal}>
      <div className={styles.search}>
        <Form inline onSubmit={handleSubmit}>
          <Form.Item
            hasFeedback
          >
            {getFieldDecorator('name', {
              initialValue: name || '',
            })(
              <Input placeholder="借款人名称" />
            )}
          </Form.Item>
          <Form.Item
            hasFeedback
          >
            {getFieldDecorator('id_card', {
              initialValue: idCard || '',
            })(
              <Input placeholder="身份证号码" />
            )}
          </Form.Item>
          <Form.Item
            hasFeedback
          >
            {getFieldDecorator('phone', {
              initialValue: phone || '',
            })(
              <Input placeholder="手机号码" />
            )}
          </Form.Item>
          <Button type="primary" htmlType="submit">搜索</Button>
        </Form>
      </div>
      <div className={styles.create}>
        <Button type="ghost" onClick={onAdd}>新增</Button>
      </div>
    </div>
  );
}

LoanUserSearch.propTypes = {
  form: PropTypes.object.isRequired,
  onSearch: PropTypes.func,
  onAdd: PropTypes.func,
  name: PropTypes.string,
  id_card: PropTypes.string,
  phone: PropTypes.string,
};

export default Form.create()(LoanUserSearch);
