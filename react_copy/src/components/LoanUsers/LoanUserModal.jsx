import React, { PropTypes } from 'react';
import {
  Form,
  Input,
  Select,
  Modal,
  Cascader,
  Row,
  Col,
  Table,
  Icon,
  Button,
  message,
  AutoComplete,
  Popconfirm,
} from 'antd';
import nodePinyin from 'pinyin';
import geo from '../../utils/geo';

class LoanUserModal extends React.Component {
  constructor(props) {
    super(props);
    const { contacts } = props;
    this.state = {
      contacts,
      userResult: [],
    };
  }

  handleOk = () => {
    const { onOk, item, form: { validateFields } } = this.props;
    validateFields((errors, fieldsValue) => {
      if (errors) {
        return;
      }
      const { contacts } = this.state;
      console.info(contacts);
      onOk({ ...item, ...fieldsValue, contacts });
    });
  };

  handleCancel = () => {
    const { onCancel } = this.props;
    onCancel();
  };

  handleAddContact = () => {
    const { validateFields, getFieldError } = this.props.form;
    validateFields(['contactName', 'contactRelation', 'contactPhone'], (errors, fieldsValue) => {
      if (errors) {
        return message.error((getFieldError(Object.keys(errors)[0]) || [])[0]);
      }
      const { contactName: name, contactRelation: relation, contactPhone: phone } = fieldsValue;
      const contacts = this.state.contacts;
      contacts.push({ name, relation, phone });
      this.setState({ contacts });
      return true;
    });
  };

  handleRemoveContact = (contact) => {
    const contacts = this.state.contacts;
    const idx = contacts.indexOf(contact);
    if (idx > -1) {
      contacts.splice(idx, 1);
      this.setState({ contacts });
    }
  };

  handleUserChange = (value) => {
    let userResult;

    setTimeout(() => {
      userResult = [
        { id: 111222, name: '马来' },
        { id: 2222111, name: '杨帆' },
      ];
      this.setState({ userResult });
    }, 500);
  };

  handleNameChange = e => {
    const { setFieldsValue } = this.props.form;
    const value = e.target.value;
    const pinyin = nodePinyin(value, { style: nodePinyin.STYLE_NORMAL }).join('');
    setFieldsValue({ pinyin });
  };

  checkPhone(rule, value, callback) {

    if (!/^(0\d{2,3}-\d{7,8})|(1[34578]\d{9})$/.test(value)) {
      callback(new Error('手机号格式不正确'));
    } else {
      callback();
    }
  }

  render() {
    const { visible, item, form: { getFieldDecorator } } = this.props;
    const { contacts, userResult } = this.state;

    const userChildren = userResult.map((user) => {
      return <Select.Option key={`${user.name}`}>{user.name}</Select.Option>;
    });

    const formItemLayout = {
      labelCol: {
        span: 6,
      },
      wrapperCol: {
        span: 18,
      },
    };

    const colums = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        width: '33.3333%',
        render(text, contact, index) {
          if (text === undefined) {
            return (
              <div>
                {getFieldDecorator('contactName', {
                  rules: [
                    { required: true, message: '姓名未填写' },
                  ],
                })(
                  <Input type="text" />)}
              </div>
            );
          }
          return text;
        },
      },
      {
        title: '关系',
        dataIndex: 'relation',
        key: 'relation',
        width: '33.3333%',
        render(text, contact, index) {
          const relations = ['配偶', '父母', '兄弟姐妹', '朋友', '同事', '其他'];
          if (text === undefined) {
            return (
              <div>
                {getFieldDecorator('contactRelation', {
                  initialValue: '0',
                })(
                  <Select>
                    {relations.map((text, key) => {
                      return <Select.Option key={key}>{text}</Select.Option>
                    })}
                  </Select>
                )}
              </div>
            );
          }
          return relations[text];
        },
      },
      {
        title: '电话号码',
        dataIndex: 'phone',
        key: 'phone',
        width: '33.3333%',
        render: (text, contact, index) => {
          if (text === undefined) {
            return (
              <div>
                {getFieldDecorator('contactPhone', {
                  rules: [
                    { validator: this.checkPhone },
                  ],
                })(
                  <div className="ant-search-input-wrapper">
                    <Input.Group className="ant-search-input">
                      <Input type="text" />
                      <div className="ant-input-group-wrap">
                        <Button
                          icon="plus"
                          className="ant-search-btn ant-search-btn-noempty"
                          style={{ padding: '4px 8px' }}
                          onClick={this.handleAddContact}
                        />
                      </div>
                    </Input.Group>
                  </div>
                )}
              </div>
            );
          }
          return (
            <div style={{ marginLeft: 15 }}>
              <span>{text}</span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Popconfirm placement="topRight" title="确定要删除吗?" onConfirm={() => this.handleRemoveContact(contact)}>
                <Icon type="minus-circle" />
              </Popconfirm>
            </div>
          )
        },
      },
    ];

    const modalProps = {
      title: '新增借款人',
      visible,
      onOk: this.handleOk,
      onCancel: this.handleCancel,
      width: 1200,
    };

    return (
      <Modal {...modalProps}>
        <Form horizontal>
          <Row gutter={16}>
            <Col span={6}>
              <Form.Item
                label="借款人"
                hasFeedback
                {...formItemLayout}
              >
                {getFieldDecorator('name', {
                  initialValue: item.name,
                  rules: [
                    { required: true, message: '借款人未填写' },
                  ],
                })(
                  <Input
                    type="text"
                    onChange={this.handleNameChange}
                  />
                )}
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                label="拼音"
                hasFeedback
                {...formItemLayout}
              >
                {getFieldDecorator('pinyin', {
                  initialValue: item.pinyin,
                  rules: [
                    { required: true, message: '拼音未填写' },
                  ],
                })(
                  <Input type="text" />
                )}
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                label="手机号"
                hasFeedback
                {...formItemLayout}
              >
                {getFieldDecorator('phone', {
                  initialValue: item.phone,
                  rules: [
                    { validator: this.checkPhone },
                  ],
                })(
                  <Input type="text" />
                )}
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                label="身份证号"
                hasFeedback
                {...formItemLayout}
              >
                {getFieldDecorator('id_card', {
                  initialValue: item.id_card,
                  rules: [
                    { required: true, message: '身份证号未填写' },
                  ],
                })(
                  <Input type="text" />
                )}
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={6}>
              <Form.Item
                label="所在地"
                {...formItemLayout}
              >
                {getFieldDecorator('area', {
                  //initialValue: item.area,
                })(
                  <Cascader options={geo} showSearch />
                )}
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                label="住址"
                hasFeedback
                {...formItemLayout}
              >
                {getFieldDecorator('address', {
                  //initialValue: item.address,
                })(
                  <Input type="text" />
                )}
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                label="工作单位"
                hasFeedback
                {...formItemLayout}
              >
                {getFieldDecorator('work_unit', {
                  initialValue: item.work_unit,
                })(
                  <Input type="text" />
                )}
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                label="邮箱"
                hasFeedback
                {...formItemLayout}
              >
                {getFieldDecorator('email', {
                  initialValue: item.email,
                  rules: [
                    { required: true, message: '邮箱未填写' },
                  ],
                })(
                  <Input type="text" />
                )}
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    label="开户银行"
                    hasFeedback
                    {...formItemLayout}
                  >
                    {getFieldDecorator('bank_name', {
                      //initialValue: item.bank_name,
                    })(
                      <Input type="text" />
                    )}
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="银行账号"
                    hasFeedback
                    {...formItemLayout}
                  >
                    {getFieldDecorator('bank_account', {
                      //initialValue: item.bank_account,
                    })(
                      <Input type="text" />
                    )}
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item
                    label="备注"
                    labelCol={{ span: 3 }}
                    wrapperCol={{ span: 21 }}
                    style={{ marginLeft: '-4px' }}
                  >
                    {getFieldDecorator('remark', {
                      //initialValue: item.remark,
                    })(
                      <Input type="textarea" id="remark" rows="6" />
                    )}
                  </Form.Item>
                </Col>
              </Row>
            </Col>
            <Col span={12}>
              <Row>
                <Col span={12}>
                  <Form.Item
                    label="业务员"
                    hasFeedback
                    {...formItemLayout}
                  >
                    {getFieldDecorator('user_id', {
                      //initialValue: item.user_id,
                      rules: [
                        { required: true, message: '业务员未填写' },
                      ],
                    })(
                      <AutoComplete onChange={this.handleUserChange}>
                        {userChildren}
                      </AutoComplete>
                    )}
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="性别"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 5 }}
                  >
                    {getFieldDecorator('sex', {
                      //initialValue: item.sex || '0',
                    })(
                      <Select>
                        <Select.Option value="0">男</Select.Option>
                        <Select.Option value="1">女</Select.Option>
                      </Select>
                    )}
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span={3} className="ant-form-item-label" style={{ marginLeft: '-4px' }}>
                  <label htmlFor="">其他联系人</label>
                </Col>
                <Col span={21}>
                  <Table
                    columns={colums}
                    dataSource={contacts.concat({})}
                    size="small"
                    pagination={false}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Form>
      </Modal>
    );
  }
}

LoanUserModal.propTypes = {
  visible: PropTypes.any,
  item: PropTypes.object,
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
  form: PropTypes.object,
  contacts: PropTypes.array,
};

export default Form.create()(LoanUserModal);
