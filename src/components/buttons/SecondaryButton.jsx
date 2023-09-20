import React from 'react';
import classNames from 'classnames'

const SecondaryButton = ({ children, onClick, className, ...props }) => {
  const cx = classNames([
    'border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors duration-300 py-4 px-8',
    className,
  ]);
  return (
    <button onClick={onClick} className={cx} {...props}>
      {children}
    </button>
  );
};

export default SecondaryButton;
