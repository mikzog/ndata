import React from 'react';

interface Props {}

export const NDBodyRow: React.FC<Props> = props => {
  // console.log({ props });
  return <tr {...props} />;
};

export default NDBodyRow;
