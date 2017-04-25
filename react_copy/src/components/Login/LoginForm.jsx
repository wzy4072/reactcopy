import React, { PropTypes } from 'react';
import { Form, Input, Button, Select, AutoComplete } from 'antd';
import styles from './LoginForm.less';

function noop() {
  return false;
}

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailResult: [],
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { onSubmit, form: { validateFields } } = this.props;
    validateFields((errors, fieldsValue) => {
      if (errors) {
        return;
      }
      onSubmit(fieldsValue);
    });
  };

  checkUsername(rule, value, callback) {
    if (
      !/^(1[34578]\d{9}$)/.test(value) && !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
    ) {
      callback(new Error('账户名格式不正确'));
    } else {
      callback();
    }
  }

  handleUsernameChange = (value) => {
    let emailResult;
    if (!value || value.indexOf('@') >= 0 || /^\d+$/.test(value)) {
      emailResult = [];
    } else {
      emailResult = [
        'qq.com',
        '163.com',
        'sina.com',
        '139.com',
        'gmail.com',
      ].map(domain => `${value}@${domain}`);
    }
    this.setState({ emailResult });
  };

  render() {
    const { loading, form: { getFieldDecorator } } = this.props;
    const { emailResult } = this.state;

    const usernameChildren = emailResult.map((email) => {
      return <Select.Option key={email}>{email}</Select.Option>;
    });

    return (
      <div className={styles.main}>
        <div className={styles.title}>
          <div className={styles.logo}>
            <span className={styles.img} />
          </div>
          <span>王泽阳测试业务管理系统</span>
        </div>
        <div className={`${styles.content} login-content`}>
          <Form horizontal>
            <Form.Item hasFeedback required>
              {getFieldDecorator('username', {
                rules: [
                  { validator: this.checkUsername },
                ],
              })(
                <AutoComplete
                  style={{ height: '40px' }}
                  onChange={this.handleUsernameChange}
                  placeholder="账户（邮箱或手机号）"
                >
                  {usernameChildren}
                </AutoComplete>
              )}
            </Form.Item>
            <Form.Item hasFeedback>
              {getFieldDecorator('password', {
                validateFirst: true,
                rules: [
                  { required: true, whitespace: true, message: '请输入密码' },
                ],
              })(
                <Input
                  type="password"
                  placeholder="密码"
                  autoComplete="off"
                  onContextMenu={noop}
                  onPaste={noop}
                  onCopy={noop}
                  onCut={noop}
                />
              )}
            </Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              onClick={this.handleSubmit}
            >
              {loading ? '请求登录中' : '登 录'}
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

LoginForm.propTypes = {
  form: PropTypes.object.isRequired,
  onSubmit: PropTypes.func,
  loading: PropTypes.bool,
};

export default Form.create()(LoginForm);
