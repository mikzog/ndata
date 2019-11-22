import React from 'react';
import { PlayIcon } from 'components/ui/icons';
import SourceForm, { TFormValues } from './source-form';

interface Props {}

const LinkSourceSection: React.FC<Props> = () => {
  const handleSubmit = (values: TFormValues) => {
    console.log({ values });
  };

  return (
    <React.Fragment>
      <div className="nd-tabs">
        <ul className="tabs">
          <li className="active">
            <a href="#">
              <PlayIcon /> Link source node
            </a>
          </li>
          <li className="">
            <a href="#">Error Log</a>
          </li>
        </ul>
      </div>
      <div className="target-node-info">
        <SourceForm onSubmit={handleSubmit} />
      </div>
    </React.Fragment>
  );
};

export default React.memo(LinkSourceSection);
