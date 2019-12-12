import React from 'react';
import { useHistory } from 'react-router-dom';
import { Table } from 'components/ui';
import { Job } from './job-list-slice';
import JobRowActions from './job-list-row-actions';

interface Props {
  jobs: Job[];
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
  const handleRowClick = (job: Job, index: number) => {
    history.push(`/jobs/${job.id}`);
  };

  return (
    <div className="nd-table nd-table2 nd-table-clients all-accounts">
      <Table
        rowKey="id"
        data={jobs}
        columns={JOB_COLUMNS}
        onRow={(record: Job, rowIndex: number) => ({
          onClick: () => handleRowClick(record, rowIndex),
        })}
      />
    </div>
  );
};

export default JobTable;
