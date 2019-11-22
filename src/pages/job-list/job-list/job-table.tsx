import React from 'react';
import { useHistory } from 'react-router-dom';
import { Table } from 'components/ui';
import { TJob } from './job-list';
import JobRowActions from './job-row-actions';

interface Props {
  jobs: TJob[];
}

const JOB_COLUMNS = [
  {
    title: 'Job Name',
    dataIndex: 'name',
  },
  {
    title: 'Source Location',
    dataIndex: 'source',
  },
  {
    title: 'Status',
    dataIndex: 'status',
  },
  {
    title: 'Last Modified',
    dataIndex: 'updated_at',
  },
  {
    title: 'Action',
    dataIndex: '',
    width: 200,
    render: () => <JobRowActions />,
  },
];

export const JobTable: React.FC<Props> = ({ jobs }) => {
  const history = useHistory();
  const handleRowClick = (job: TJob, index: number) => {
    history.push(`/jobs/${job.id}`);
  };

  return (
    <div className="nd-table nd-table2 nd-table-clients all-accounts">
      <Table
        rowKey="id"
        data={jobs}
        columns={JOB_COLUMNS}
        onRow={(record: TJob, rowIndex: number) => ({
          onClick: () => handleRowClick(record, rowIndex),
        })}
      />
    </div>
  );
};

export default JobTable;
