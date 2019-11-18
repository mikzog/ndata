import React from 'react';
import CreateJobForm, { TFormValues } from './create-job-form';

interface Props {}

export const CreateJob: React.FC<Props> = () => {
  const handleSubmit = (values: TFormValues) => {
    console.log({ values });
  };

  return <CreateJobForm onSubmit={handleSubmit} />;
};

export default CreateJob;
