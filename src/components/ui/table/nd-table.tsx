import React from 'react';

interface Props {}

export const NDTable: React.FC<Props> = ({ children, ...props }) => {
  console.log({ props });
  return <table className="table nd-table-code">{children}</table>;
};

export default NDTable;
