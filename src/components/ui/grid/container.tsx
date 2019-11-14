import cx from 'classnames';
import React from 'react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  fluid?: boolean;
}

export const Container: React.FC<Props> = ({
  className,
  children,
  fluid,
  ...props
}) => {
  return (
    <div
      className={cx(className, {
        'nd-container-fluid': fluid,
        'nd-container': !fluid,
      })}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
