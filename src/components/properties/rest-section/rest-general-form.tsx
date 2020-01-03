import React, { PureComponent } from 'react';
import { Form, Input } from 'antd';
import { FormComponentProps } from 'antd/lib/form/Form';

interface Props extends FormComponentProps {}

export class RESTGeneralForm extends PureComponent<Props> {
  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form layout="vertical">
        <Form.Item label="Name">
          {getFieldDecorator('name', { rules: [{ required: true }] })(
            <Input />
          )}
        </Form.Item>
        <Form.Item label="Description">
          {getFieldDecorator('description')(<Input.TextArea />)}
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create({
  name: 'rest-general',
  onValuesChange(_, values) {
    console.log(values);
  },
  // onFieldsChange(_, changedFields) {
  //   console.log(changedFields);
  // },
})(RESTGeneralForm);
