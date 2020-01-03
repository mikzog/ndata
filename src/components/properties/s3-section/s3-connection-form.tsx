import _get from 'lodash/get';
import React, { PureComponent } from 'react';
import { Form, Input, Row, Col } from 'antd';
import { FormComponentProps } from 'antd/lib/form/Form';

interface Props extends FormComponentProps {
  data?: any;
  onChange?: (values: any) => void;
}

export class S3ConnectionForm extends PureComponent<Props> {
  render() {
    const { data, form } = this.props;
    const { getFieldDecorator } = form;

    return (
      <Row>
        <Col span={12}>
          <Form layout="vertical">
            <Form.Item label="Connection">
              {getFieldDecorator('connection', {
                initialValue: _get(data, 'connection'),
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Bucket Name">
              {getFieldDecorator('bucketName', {
                initialValue: _get(data, 'bucketName'),
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Folder Name">
              {getFieldDecorator('folderName')(<Input />)}
            </Form.Item>
            <Form.Item label="File Name">
              {getFieldDecorator('fileName')(<Input />)}
            </Form.Item>
            <Form.Item label="Format">
              {getFieldDecorator('format')(<Input />)}
            </Form.Item>
            <Form.Item label="Compression Type">
              {getFieldDecorator('compressionType')(<Input />)}
            </Form.Item>
            <Form.Item label="Encoding">
              {getFieldDecorator('encoding')(<Input />)}
            </Form.Item>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default Form.create<Props>({
  name: 's3-connection',
  onValuesChange({ onChange }, values) {
    if (onChange) {
      onChange(values);
    }
  },
})(S3ConnectionForm);
