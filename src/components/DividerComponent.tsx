"use client";

import Image from "next/image";
import React, { FC, useState } from "react";
import IconField from "./IconField";
import Label from "./Label";
import GradientIconField from "./GradientIconField";

export interface DividerFieldProps {
    className?: string;
}

const DividerField: FC<DividerFieldProps> = ({className}) => {
    return (
        <div className={`${className} p-4`}>
            <div className="border border-d-background dark:border-background"></div>
        </div>
    );
};

export default DividerField;
