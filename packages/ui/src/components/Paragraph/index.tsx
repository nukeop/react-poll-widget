import React from 'react';
import cx from 'classnames';

import './styles.scss';

export type ParagraphProps = {
  inline?: boolean;
};

const Paragraph: React.FC<ParagraphProps> = ({
  inline = false,
  children
}) => <p className={cx(
  'paragraph',
  { inline }
)}>
    {children}
  </p>

export default Paragraph;