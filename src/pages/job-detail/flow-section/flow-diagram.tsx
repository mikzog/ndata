import 'assets/css/scale-diagram.css';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  LinkSourceIcon,
  TransformDataIcon,
  TargetIcon,
} from 'components/ui/icons';

interface Props {}

const FlowDiagram: React.FC<Props> = () => {
  const { id } = useParams();

  return (
    <div className="nd-diagram-flow max-three-nodes-cover">
      <div className="nd-diagram-container max-three" id="scaleDiagram">
        <Link to={`/jobs/${id}#link-source`}>
          <div className="info-block block-blue first-child">
            <div className="icon-block">
              <LinkSourceIcon />
            </div>
            <div className="header-block">
              <span className="title">Link source</span>
              <span className="secondary-title"></span>
            </div>
          </div>
        </Link>

        <Link to={`/jobs/${id}#transform-data`}>
          <div className="info-block block-yellow">
            <div className="icon-block">
              <TransformDataIcon />
            </div>
            <div className="header-block">
              <span className="title">Transform Data</span>
              <span className="secondary-title"></span>
            </div>
          </div>
        </Link>

        <Link to={`/jobs/${id}#target`}>
          <div className="info-block block-green">
            <div className="icon-block">
              <TargetIcon />
            </div>
            <div className="header-block">
              <span className="title">Target</span>
              {/* <span className="secondary-title">
              <svg
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 295.428 295.428"
                width="14px"
                height="14px"
              >
                {' '}
                <path d="M147.714,0C66.264,0,0,66.264,0,147.714s66.264,147.714,147.714,147.714c81.45,0,147.714-66.264,147.714-147.714  S229.164,0,147.714,0z M147.714,232.68c-8.284,0-15-6.716-15-15c0-8.284,6.716-15,15-15c8.284,0,15,6.716,15,15  C162.714,225.964,155.998,232.68,147.714,232.68z M162.714,155.68c0,8.284-6.716,15-15,15c-8.284,0-15-6.716-15-15v-79  c0-8.284,6.716-15,15-15c8.284,0,15,6.716,15,15V155.68z"></path>{' '}
              </svg>{' '}
              2 errors
            </span> */}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FlowDiagram;
