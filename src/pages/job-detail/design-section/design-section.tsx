import 'assets/css/scale-diagram.css';

import uuid from 'uuid';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  setEntity,
  setSelectedEntityId,
  removeSelectedEntity,
} from 'pages/job-detail/job-detail-slice';
import ActionList from 'components/actions/action-list';
import DesignDroppable, { ITarget } from './design-droppable';
import DesignSectionTabs from './design-section-tabs';
import { RootState } from '../../../rootReducer';

interface Props {}

const DesignSection: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const { entities, selectedEntityId } = useSelector(
    (state: RootState) => state.jobDetail
  );

  const handleDropped = (target: ITarget) => {
    dispatch(
      setEntity({
        id: uuid(),
        type: target.data.type,
      })
    );
  };

  const handleCardSelect = (id: string) => dispatch(setSelectedEntityId(id));
  const handleCardDelete = (id: string) => dispatch(removeSelectedEntity(id));

  return (
    <div className="flow-section">
      <DesignSectionTabs />
      <div className="nd-diagram-flow max-three-nodes-cover">
        <DesignDroppable onDropped={handleDropped}>
          <ActionList
            data={entities}
            selectedEntityId={selectedEntityId}
            onSelect={handleCardSelect}
            onRemove={handleCardDelete}
          />
        </DesignDroppable>
      </div>
    </div>
  );
};

export default DesignSection;
