import React from 'react';

interface Props {
  tag?: keyof JSX.IntrinsicElements;
}

export const Headline: React.FC<Props> = ({ tag, children, ...rest }) => {
  const Wrapper = tag as 'div';
  return <Wrapper {...rest}>{children}</Wrapper>;
};

Headline.defaultProps = {
  tag: 'h1',
};

export default Headline;
