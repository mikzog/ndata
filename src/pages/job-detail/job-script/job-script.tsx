import 'assets/css/script-editor.css';
import React from 'react';
import { ScriptIcon } from 'components/ui/icons';

interface Props {}

const JobScript: React.FC<Props> = () => {
  return (
    <div id="nd-wrapper">
      <div className="script-section-tab">
        <div className="nd-tabs">
          <ul className="tabs">
            <li className="active">
              <a href="#">
                <ScriptIcon /> Job script
              </a>
            </li>
            <li className="">
              <a href="#">
                <span className="status-color red"></span> 12 errors in the job
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="script-section">
        <ol className="console-box">
          <li>
            <span className="monokai-lightgrey">
              &lt;!-- Script document --&gt;
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default JobScript;
