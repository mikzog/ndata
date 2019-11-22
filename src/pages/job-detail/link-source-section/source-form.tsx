import * as Yup from 'yup';
import React from 'react';
import { Formik, FormikProps } from 'formik';
import { Button } from 'components/ui';
import { InputGroup } from 'components/ui/input';
import { InputField, SelectField } from 'components/form';

export type TFormValues = {
  sourceURL: string;
  sourceName: string;
  classifier: string;
};

interface Props {
  onSubmit: (values: TFormValues) => void;
  onCancel?: () => void;
}

const DEFAULT_VALUES = {
  sourceURL: '',
  sourceName: '',
  classifier: '',
};

const SourceSchema = Yup.object().shape({
  sourceURL: Yup.string()
    .url('Invalid URL')
    .required('Required'),
  sourceName: Yup.string().required('Required'),
  classifier: Yup.string().required('Required'),
});

export const SourceForm: React.FC<Props> = ({ onSubmit, onCancel }) => {
  return (
    <Formik
      initialValues={DEFAULT_VALUES}
      validationSchema={SourceSchema}
      onSubmit={values => {
        onSubmit(values);
      }}
    >
      {(props: FormikProps<TFormValues>) => (
        <form onSubmit={props.handleSubmit}>
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
          <div className="action-block">
            <Button type="submit" color="blue" className="light">
              Save
            </Button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default SourceForm;
