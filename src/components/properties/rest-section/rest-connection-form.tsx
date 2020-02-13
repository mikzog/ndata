import React, { useState } from 'react';

interface Props {}

const RESTConnectionForm: React.FC<Props> = () => {
  const [activeTab, setActiveTab] = useState('general');

  return (
    <>
      <div className="combo-field">
        <div className="nd-input-group">
          <div className="nd-select-group">
            <select className="nd-input">
              <option value="">GET</option>
              <option value="">POST</option>
            </select>
            <div className="nd-caret">
              <svg width="14px" height="14px" viewBox="0 0 18 18"
                   role="presentation" aria-hidden="true"
                   focusable="false">
                <path
                  d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z"
                  fill-rule="evenodd"></path>
              </svg>
            </div>
          </div>
          <input id="modal-pillar" type="text" className="nd-input"
                 placeholder="Input URL here" value=""/>
        </div>

        <a href="#" className="nd-button button-blue-line" title="">
          <svg width="18" height="18" viewBox="0 0 48 48">
            <path d="M0 0h48v48H0z" fill="none"/>
            <path
              d="M7.8 24c0-3.42 2.78-6.2 6.2-6.2h8V14h-8C8.48 14 4 18.48 4 24s4.48 10 10 10h8v-3.8h-8c-3.42 0-6.2-2.78-6.2-6.2zm8.2 2h16v-4H16v4zm18-12h-8v3.8h8c3.42 0 6.2 2.78 6.2 6.2s-2.78 6.2-6.2 6.2h-8V34h8c5.52 0 10-4.48 10-10s-4.48-10-10-10z"/>
          </svg>
          Test Connection
        </a>

        <a href="#" className="nd-button button-blue-line" title="">
          <svg width="18" height="18" viewBox="0 0 48 48">
            <path d="M0 0h48v48H0z" fill="none"/>
            <path
              d="M24 9C14 9 5.46 15.22 2 24c3.46 8.78 12 15 22 15s18.54-6.22 22-15C42.54 15.22 34.01 9 24 9zm0 25c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10zm0-16c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z"/>
          </svg>
          Preview Data
        </a>
      </div>
      <div className="sub-tabs connection">
        <ul>
          <li>
            <a className="active">
              Params
            </a>
          </li>
          <li>
            <a>
              Authorization
            </a>
          </li>
          <li>
            <a>
              Headers
            </a>
          </li>
          <li className="disabled">
            <a>
              Body
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default RESTConnectionForm;
