import React from 'react';
import { Button } from 'antd';
import { PageHead } from 'components/layout';

interface Props {
  name: string;
  status: string;
}

export const JobDetailHeader: React.FC<Props> = ({ name, status }) => {
  return (
    <PageHead
      headline={name}
      subHeadline={
        <>
          <span className="status-color yellow" />
          Status: {status}
        </>
      }
      extra={
        <>
          <Button type="primary" icon="caret-right" className="nd-trans">
            Run Job
          </Button>
          <Button icon="delete" className="nd-trans">
            Delete
          </Button>
        </>
      }
    />
  );
};

export default JobDetailHeader;
