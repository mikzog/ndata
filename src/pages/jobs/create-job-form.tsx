import * as Yup from 'yup';
import React from 'react';
import { Formik, FormikProps } from 'formik';
import { Button } from 'components/ui';
import { InputField } from 'components/form';
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
          <InputField
            required
            type="text"
            name="classifier"
            label="Classify data type"
            placeholder="Use nData default classifier"
          />
          <hr />
          <InputGroup title="Output Details" />
          <InputField
            required
            type="text"
            name="dbName"
            label="DB Name"
            placeholder="Choose the database where you want to store the output"
          />
          <InputField
            type="text"
            name="tablePrefix"
            label="Table prefix name (optional)"
            placeholder="Enter table prefix if you want to add prefix to your created DB table names"
          />
          <hr />
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
        </form>
      )}
    </Formik>
  );
};

export default CreateJobForm;
