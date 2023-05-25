"use client";

import Image from "next/image";
import React, { FC, useState } from "react";
import IconField from "./IconField";
import Label from "./Label";
import GradientIconField from "./GradientIconField";

export interface DividerFieldProps {    
    className?: string;
    borderColor?: string;
}

const DividerField: FC<DividerFieldProps> = ({className="p-4", borderColor="border-d-background dark:border-background"}) => {
    return (
        <div className={`${className}`}>
            <div className={`border ${borderColor}`}></div>
        </div>
    );
};

export default DividerField;
