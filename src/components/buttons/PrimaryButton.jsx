import React from 'react';
import classNames from 'classnames'

const PrimaryButton = ({ children, className, onClick, ...props }) => {
  const cx = classNames([
    'bg-primary rounded-lg text-white py-4 px-8',
    className,
  ]);
  return (
    <button onClick={onClick} className={cx} {...props}>
      {children}
    </button>
  );
};

export default PrimaryButton;
