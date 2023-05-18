"use client";

import React, { FC } from "react";

export interface IconFieldProps {
  title?: string;
  iconName?: string;
  className?: string;
  onClick?: () => void;
}

const IconField: FC<IconFieldProps> = ({
  title,
  iconName = "las la-search",
  className = "",
  onClick = () => {},
}) => {
    return (
        <i title={title} className={`${iconName} ${className}`} onClick={() => onClick && onClick()}></i>
    );
};

export default IconField;
