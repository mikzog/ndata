import React from 'react';
import {
  LayerIcon,
  TargetGreyIcon,
  PlayGreyIcon,
  SortGreyIcon,
  FilterGreyIcon,
  MergedGreyIcon,
} from 'components/ui/icons';
import './flow-tab.css';

interface Props {}

const FlowTab: React.FC<Props> = () => {
  return (
    <div className="nd-tabs">
      <ul className="tabs">
        <li className="active">
          <a>
            <LayerIcon height="14" /> Diagram
          </a>
        </li>
      </ul>

      <ul className="regualar-tabs">
        <li className="active">
          <a href="#">
            <PlayGreyIcon /> Source
          </a>
        </li>
        <li className="">
          <a href="#">
            <TargetGreyIcon /> Target
          </a>
        </li>
        <li className="">
          <a href="#">
            <FilterGreyIcon /> Filter
          </a>
        </li>
        <li className="">
          <a href="#">
            <SortGreyIcon /> Sorten
          </a>
        </li>
        <li className="">
          <a href="#">
            <MergedGreyIcon />
            Join
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FlowTab;
