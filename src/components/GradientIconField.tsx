"use client";

import React, { FC } from "react";
import IconField from "./IconField";

export interface GradientIconFieldProps {
  title?: string;
  iconName?: string;
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const GradientIconField: FC<GradientIconFieldProps> = ({
  title,
  iconName = "las la-search",
  className = "",
  onClick = () => {},
}) => {
    return (
        <div className="inline-flex">
            <div className="rounded-lg bg-gradient-to-bl from-black dark:from-background via-background dark:via-d-background to-black dark:to-background p-px">
                <div className="rounded-lg bg-gray-100 dark:bg-d-background">
                    <IconField iconName={iconName} className={`${className} font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-background dark:from-d-background via-d-background dark:via-background to-background dark:to-d-background p-2`} />
                </div>
            </div>
        </div>
    );
};

export default GradientIconField;
