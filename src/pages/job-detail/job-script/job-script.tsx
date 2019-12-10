import React from 'react';
import { ScriptIcon } from 'components/ui/icons';
import Editor from 'components/editor';
import './job-script.css';

interface Props {}

const JobScript: React.FC<Props> = () => {
  return (
    <div className="nd-wrapper">
      <div className="script-section-tab">
        <div className="nd-tabs">
          <ul className="tabs">
            <li className="active">
              <a href="#">
                <ScriptIcon /> Job script
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="script-section">
        <Editor />
      </div>
    </div>
  );
};

export default JobScript;
