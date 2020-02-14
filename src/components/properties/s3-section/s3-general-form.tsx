import React from 'react';
import { S3_GENERAL_INIT_DATA } from './constants';

interface Props {
  data?: any;
  onChange?: (values: any) => void;
}

const S3GeneralForm: React.FC<Props> = ({ data, onChange }) => {
  return (
    <>
      {/*<Row>
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
        </Row>*/}
      <div className="nd-input-group disable">
        <label className="nd-label">Name <span
          style={{ color: 'red' }}>*</span></label>
        <input id="modal-pillar" type="text" className="nd-input"
               placeholder="Dummy text here" value=""/>
      </div>

      <div className="nd-input-group disable">
        <label className="nd-label">Description</label>
        <textarea className="nd-input"
                  placeholder="Dummy text here"
                  value="">Dummy text here</textarea>
      </div>
    </>
  );
};

// export class S3GeneralForm extends PureComponent<Props> {
//   static defaultProps: { data: never[] };
//
//   render() {
//     // const { data, form } = this.props;
//     // const { getFieldDecorator } = form;
//
//
//   }
// }

export default S3GeneralForm;
// export default Form.create<Props>({
//   name: 's3-general',
//   onValuesChange({ onChange }, values) {
//     if (onChange) {
//       onChange(values);
//     }
//   },
// })(S3GeneralForm);
