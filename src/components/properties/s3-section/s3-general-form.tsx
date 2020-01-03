import _get from 'lodash/get';
import React, { PureComponent } from 'react';
import { Form, Input, Row, Col } from 'antd';
import { FormComponentProps } from 'antd/lib/form/Form';

interface Props extends FormComponentProps {
  data?: any;
  onChange?: (values: any) => void;
}

export class S3GeneralForm extends PureComponent<Props> {
  static defaultProps: { data: never[] };

  render() {
    const { data, form } = this.props;
    const { getFieldDecorator } = form;

    return (
      <Row>
        <Col span={12}>
          <Form layout="vertical">
            <Form.Item label="Name">
              {getFieldDecorator('name', {
                initialValue: _get(data, 'name'),
                rules: [{ required: true }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Description">
              {getFieldDecorator('description', {
                initialValue: _get(data, 'description'),
              })(<Input.TextArea />)}
            </Form.Item>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default Form.create<Props>({
  name: 's3-general',
  onValuesChange({ onChange }, values) {
    if (onChange) {
      onChange(values);
    }
  },
})(S3GeneralForm);
