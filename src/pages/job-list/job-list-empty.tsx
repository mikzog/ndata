import React from 'react';
import { Button } from 'components/ui';
import { NoData } from 'components/common';

interface Props {}

export const JobListEmpty: React.FC<Props> = () => {
  return (
    <NoData
      title="No Job!"
      description="You haven’t created any job yet! Please click on the button below to start a new job"
    >
      <Button color="blue" className="light">
        + Create New Job
      </Button>
    </NoData>
  );
};

export default JobListEmpty;
