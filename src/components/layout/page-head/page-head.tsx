import React from 'react';
import { Headline } from 'components/ui';
import './page-head.css';

interface Props {
  headline: string;
  subHeadline?: string | React.ReactElement;
  extra?: React.ReactElement;
}

export const PageHead: React.FC<Props> = ({
  headline,
  subHeadline,
  children,
  extra,
}) => {
  return (
    <div className="nd-pageHead">
      <Headline>{headline}</Headline>
      {extra && <div className="nd-pageHead__extra">{extra}</div>}
      {subHeadline && <p>{subHeadline}</p>}
      {children}
    </div>
  );
};

export default PageHead;
