import React from 'react';

export const Href = (props) => {
  return (
    <a
      className={ props.class ? props.class : '' }
      target={ props.target ? props.target : '_SELF' }
      href={ props.url ? props.url : '#' }
      onClick={ props.onClick ? props.onClick : null }
    >{props.title}</a>
  );
}