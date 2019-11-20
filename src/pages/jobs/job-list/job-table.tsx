import React from 'react';
import { Table } from 'components/ui';
import { TJob } from './job-list';

interface Props {
  jobs: TJob[];
}

const JOB_COLUMNS = [
  {
    title: 'Job Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Source Location',
    dataIndex: 'source',
    key: 'source',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Last Modified',
    dataIndex: 'updated_at',
    key: 'updated_at',
  },
  {
    title: 'Action',
    dataIndex: '',
    width: 200,
    key: 'action',
    render: () => (
      <div className="data actions">
        <a className="nd-trans button grey ">
          <svg
            aria-hidden="true"
            width="12"
            height="12"
            version="1.1"
            viewBox="0 0 47.607 47.607"
          >
            <g>
              <path
                d="M17.991,40.976c0,3.662-2.969,6.631-6.631,6.631l0,0c-3.662,0-6.631-2.969-6.631-6.631V6.631C4.729,2.969,7.698,0,11.36,0
															l0,0c3.662,0,6.631,2.969,6.631,6.631V40.976z"
              ></path>
              <path
                d="M42.877,40.976c0,3.662-2.969,6.631-6.631,6.631l0,0c-3.662,0-6.631-2.969-6.631-6.631V6.631
															C29.616,2.969,32.585,0,36.246,0l0,0c3.662,0,6.631,2.969,6.631,6.631V40.976z"
              ></path>
            </g>
          </svg>
        </a>
      </div>
    ),
  },
];

export const JobTable: React.FC<Props> = ({ jobs }) => {
  return (
    <div className="nd-table nd-table2 nd-table-clients all-accounts">
      <Table data={jobs} columns={JOB_COLUMNS} />
    </div>
  );
};

export default JobTable;
