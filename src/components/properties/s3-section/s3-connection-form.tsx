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
      <>
        <div className="nd-input-group">
          <div className="nd-row">
            <div className="ndxs-6">
              <div className="nd-input-group ">
                <label className="nd-label">Connection <span
                  style={{color: 'red'}}>*</span></label>
                <input id="modal-pillar" type="text" className="nd-input"
                       placeholder="Dummy text here"
                       value=""/>
              </div>
            </div>

            <div className="ndxs-3">
              <label className="nd-label"></label>
              <a href="#" className="nd-button button-blue-line block" title="">
                <svg width="18" height="18" viewBox="0 0 48 48">
                  <path d="M0 0h48v48H0z" fill="none"></path>
                  <path
                    d="M7.8 24c0-3.42 2.78-6.2 6.2-6.2h8V14h-8C8.48 14 4 18.48 4 24s4.48 10 10 10h8v-3.8h-8c-3.42 0-6.2-2.78-6.2-6.2zm8.2 2h16v-4H16v4zm18-12h-8v3.8h8c3.42 0 6.2 2.78 6.2 6.2s-2.78 6.2-6.2 6.2h-8V34h8c5.52 0 10-4.48 10-10s-4.48-10-10-10z"></path>
                </svg>
                Test Connection
              </a>
            </div>

            <div className="ndxs-3">
              <label className="nd-label"></label>
              <a href="#" className="nd-button button-blue-line block" title="">
                <svg width="18" height="18" viewBox="0 0 48 48">
                  <path d="M0 0h48v48H0z" fill="none"></path>
                  <path
                    d="M24 9C14 9 5.46 15.22 2 24c3.46 8.78 12 15 22 15s18.54-6.22 22-15C42.54 15.22 34.01 9 24 9zm0 25c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10zm0-16c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z"></path>
                </svg>
                Preview Data
              </a>
            </div>
          </div>
        </div>

        <div className="nd-input-group">
          <div className="nd-row">
            <div className="ndxs-3">
              <div className="nd-input-group ">
                <label className="nd-label">Bucket name <span
                  style={{color: 'red'}}>*</span></label>
                <input id="modal-pillar" type="text" className="nd-input"
                       placeholder="Dummy text here"
                       value=""/>
              </div>
            </div>

            <div className="ndxs-3">
              <div className="nd-input-group ">
                <label className="nd-label">Folder name <span
                  style={{color: 'red'}}>*</span></label>
                <input id="modal-pillar" type="text" className="nd-input"
                       placeholder="Dummy text here"
                       value=""/>
              </div>
            </div>

            <div className="ndxs-3">
              <div className="nd-input-group ">
                <label className="nd-label">File name <span
                  style={{color: 'red'}}>*</span></label>
                <input id="modal-pillar" type="text" className="nd-input"
                       placeholder="Dummy text here"
                       value=""/>
              </div>
            </div>

            <div className="ndxs-3">
              <label className="nd-label"></label>
              <a href="#" className="nd-button button-blue-line block" title="">
                <svg width="18" height="18" viewBox="0 0 48 48">
                  <path d="M0 0h48v48H0z" fill="none"/>
                  <path
                    d="M40 12H24l-4-4H8c-2.21 0-3.98 1.79-3.98 4L4 36c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V16c0-2.21-1.79-4-4-4zm0 24H8V16h32v20z"/>
                </svg>
                Browse
              </a>
            </div>
          </div>
        </div>

        <div className="nd-input-group ">
          <label className="nd-label">Format <span style={{color: 'red'}}>*</span></label>
          <div className="nd-select-group">
            <select className="nd-input">
              <option value="">Select format</option>
              <option value="">Select format</option>
              <option value="">Select format</option>
              <option value="">Select format</option>
            </select>
            <div className="nd-caret">
              <svg width="14px" height="14px" viewBox="0 0 18 18"
                   role="presentation" aria-hidden="true"
                   focusable="false">
                <path
                  d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z"
                  fill-rule="evenodd"></path>
              </svg>
            </div>
          </div>
        </div>

        <div className="nd-input-group ">
          <label className="nd-label">Compression</label>
          <div className="nd-select-group">
            <select className="nd-input">
              <option value="">Select compression</option>
              <option value="">Select compression</option>
              <option value="">Select compression</option>
              <option value="">Select compression</option>
            </select>
            <div className="nd-caret">
              <svg width="14px" height="14px" viewBox="0 0 18 18"
                   role="presentation" aria-hidden="true"
                   focusable="false">
                <path
                  d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z"
                  fill-rule="evenodd"></path>
              </svg>
            </div>
          </div>
        </div>

        <div className="nd-input-group ">
          <label className="nd-label">Encoding</label>
          <div className="nd-select-group">
            <select className="nd-input">
              <option value="">Select encoding</option>
              <option value="">Select encoding</option>
              <option value="">Select encoding</option>
              <option value="">Select encoding</option>
            </select>
            <div className="nd-caret">
              <svg width="14px" height="14px" viewBox="0 0 18 18"
                   role="presentation" aria-hidden="true"
                   focusable="false">
                <path
                  d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z"
                  fill-rule="evenodd"></path>
              </svg>
            </div>
          </div>
        </div>
      {/*<Row>
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
      </Row>*/}
        </>
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
