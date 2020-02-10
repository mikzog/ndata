import React from 'react';

interface TabData {
  key: string;
  title: string;
  icon?: React.ReactNode;
  content?: React.ReactNode;
}

interface Props {
  data: TabData[];
  active: string;
  onClick?: any;
}

const Tabs: React.FC<Props> = ({ data, active, onClick }) => {
  return (
    <div className="nd-tabs">
      <ul className="tabs">
        {data.map(tab => (
          <li
            className={active === tab.key ? 'active': ''}
            key={tab.key}
          >
            <a onClick={() => onClick(tab.key)}>
              {tab.icon}
              &nbsp;{tab.title}
            </a>
          </li>
        ))
        }
      </ul>
    </div>
  );
};

export default Tabs;
