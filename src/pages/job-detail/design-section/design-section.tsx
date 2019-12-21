import 'assets/css/scale-diagram.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  DesignAction,
  setAction,
  setSelectedAction,
} from 'pages/job-detail/job-detail-slice';
import ActionList from 'components/actions/action-list';
import DesignDroppable from './design-droppable';
import DesignSectionTabs from './design-section-tabs';
import { RootState } from '../../../rootReducer';

interface Props {}

const DesignSection: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const { actions, selectedAction } = useSelector(
    (state: RootState) => state.jobDetail
  );

  const handleDropped = (action: DesignAction) => dispatch(setAction(action));

  const handleCardSelect = (code: string) => dispatch(setSelectedAction(code));

  return (
    <div className="flow-section">
      <DesignSectionTabs />
      <div className="nd-diagram-flow max-three-nodes-cover">
        <DesignDroppable onDropped={handleDropped}>
          <ActionList
            data={actions}
            selectedAction={selectedAction}
            onSelect={handleCardSelect}
          />
        </DesignDroppable>
      </div>
    </div>
  );
};

export default DesignSection;
