import React, { Suspense } from 'react';
import { Tabs as ATabs } from 'antd';
import { SectionLoader } from 'components/ui/placeholder';
import styles from './tabs.module.less';

const { TabPane } = ATabs;

interface TabData {
  key: string;
  title: string;
  icon?: React.ReactNode;
  content?: React.ReactNode;
}

interface Props {
  data: TabData[];
}

const Tabs: React.FC<Props> = ({ data }) => {
  return (
    <ATabs type="card" className={styles.tabs}>
      {data.map(tab => (
        <TabPane
          key={tab.key}
          tab={
            <span>
              {tab.icon}
              {tab.title}
            </span>
          }
        >
          <div className="target-node-info">
            <Suspense fallback={<SectionLoader />}>{tab.content}</Suspense>
          </div>
        </TabPane>
      ))}
    </ATabs>
  );
};

export default Tabs;
