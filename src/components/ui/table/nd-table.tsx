import React from 'react';

interface Props {}

export const NDTable: React.FC<Props> = props => {
  return <table className="table nd-table-code" {...props} />;
};

export default NDTable;
