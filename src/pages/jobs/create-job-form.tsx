import * as Yup from 'yup';
import React from 'react';
import { Formik, FormikProps } from 'formik';
import { Col, Row, Button } from 'components/ui';
import { InputField, SelectField } from 'components/form';
import { InputGroup } from 'components/ui/input';

export type TFormValues = {
  jobName: string;
};

interface Props {
  onSubmit: (values: TFormValues) => void;
  onCancel?: () => void;
}

const DEFAULT_VALUES = {
  jobName: '',
  sourceURL: '',
  sourceName: '',
  classifier: '',
  dbName: '',
};

const CreateJobSchema = Yup.object().shape({
  jobName: Yup.string()
    .min(3, 'Too Short!')
    .required('Required'),
  sourceURL: Yup.string()
    .url('Invalid URL')
    .required('Required'),
  sourceName: Yup.string().required('Required'),
  classifier: Yup.string().required('Required'),
  dbName: Yup.string().required('Required'),
});

export const CreateJobForm: React.FC<Props> = ({ onSubmit, onCancel }) => {
  return (
    <Formik
      initialValues={DEFAULT_VALUES}
      validationSchema={CreateJobSchema}
      onReset={() => {
        if (onCancel) {
          onCancel();
        }
      }}
      onSubmit={values => {
        onSubmit(values);
      }}
    >
      {(props: FormikProps<TFormValues>) => (
        <form onSubmit={props.handleSubmit}>
          <InputGroup title="Job Details" />
          <InputField
            required
            type="text"
            name="jobName"
            label="Job name"
            placeholder="Enter a job name"
          />
          <hr />
          <InputGroup title="Source Details" />
          <InputField
            required
            type="text"
            name="sourceURL"
            label="Source URL"
            placeholder="Enter data souce URL https://s3.amazonaws.com/ndata/asha "
          />
          <InputField
            required
            type="text"
            name="sourceName"
            label="Source Name"
            placeholder="Enter name of crawler"
          />
          <SelectField
            required
            type="text"
            name="classifier"
            label="Classify data type"
            placeholder="Use nData default classifier"
          >
            <option value="1">Value 1</option>
            <option value="2">Value 2</option>
            <option value="3">Value 3</option>
            <option value="4">Value 4</option>
          </SelectField>
          <hr />
          <InputGroup title="Output Details" />
          <Row>
            <Col xs={9}>
              <InputField
                required
                type="text"
                name="dbName"
                label="DB Name"
                placeholder="Choose the database where you want to store the output"
              />
            </Col>
            <Col xs={3}>
              <InputGroup>
                <Button type="button" color="blue" style={{ marginTop: 24 }}>
                  Add new DB
                </Button>
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col xs={9}>
              <InputField
                type="text"
                name="tablePrefix"
                label="Table prefix name (optional)"
                placeholder="Enter table prefix if you want to add prefix to your created DB table names"
              />
            </Col>
            <Col xs={3}>&nbsp;</Col>
          </Row>
          <hr />
          <Row>
            <Col xs={12}>
              <Button
                type="submit"
                color="blue"
                className="light"
                style={{ marginRight: 8 }}
              >
                Create Job
              </Button>
              <Button type="button" onClick={props.handleReset}>
                Cancel
              </Button>
            </Col>
          </Row>
        </form>
      )}
    </Formik>
  );
};

export default CreateJobForm;
