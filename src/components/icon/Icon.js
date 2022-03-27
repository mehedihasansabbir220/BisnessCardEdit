import React from 'react';

const Icon = props => {
  let {
    color, size, className, innerIcon,
    innerColor, innerSize, innerClassName, prefix,
  } = props;

  prefix = props.prefix || 'fa fas ';

  const getIconHtml = (prefix, name, className, size, color) => {
    const iconClassName = `${prefix} fa-${name} ${className}`;
    const iconStyle = Object.assign({}, props.style, {
      fontSize: `${size}em`,
      color,
    });
    return (
      <i className={iconClassName}
        style={iconStyle}
        onClick={props.onClick} />);
  };

  let { name } = props;
  if (name.startsWith('icon-')) {
    name = name.substr('icon-'.length);
  }
  const iconHtml = getIconHtml(prefix, name, className, size, color);
  let innerIconHtml = null;
  if (innerIcon) {
    innerIconHtml = getIconHtml(
      innerIcon, innerClassName, innerSize, innerColor,
    );
  } else {
    return iconHtml;
  }

  return (
    <span className="fa-stack">
      {iconHtml}
      {innerIconHtml}
    </span>
  );
};


export default Icon;
