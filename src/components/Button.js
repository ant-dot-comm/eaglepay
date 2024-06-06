import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Button = ({ as = 'button', to, href, children, className = '', ...props }) => {
  const Component = as === 'link' ? Link : as === 'a' ? 'a' : 'button';

  return (
    <Component
      to={as === 'link' ? to : undefined}
      href={as === 'a' ? href : undefined}
      className={classNames(`button button--${as} ${className}`, 'px-16 py-8 rounded-md font-semibold', {
        'bg-gradient-to-b from-emerald-20 to-emerald-10 text-emerald-50': props.color === 'light',
        'bg-gradient-to-b from-emerald-50 to-emerald-40 text-emerald-10': props.color === 'dark',
        'border border-emerald-50': props.color === 'hollow',
      
      })}
      {...props}
    >
      {children}
    </Component>
  );
};

Button.propTypes = {
  as: PropTypes.oneOf(['button', 'a', 'link']),
  to: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf(['light', 'dark', 'hollow'])
};
