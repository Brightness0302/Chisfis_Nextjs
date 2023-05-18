"use client";

import Image from "next/image";
import React, { FC, useState } from "react";
import IconField from "./IconField";
import Label from "./Label";
import GradientIconField from "./GradientIconField";

export interface DividerFieldProps {
    className?: string;
    imageSrc?: string;
    imageAlt?: string;
    heading?: string;
    children?: React.ReactNode;
    onClick?: () => void;
}

const DividerField: FC<DividerFieldProps> = ({
    className="", 
    imageSrc="", 
    imageAlt="", 
    heading="", 
    children, 
    onClick = () => {}, 
}) => {
    return (
        <div onClick={()=>onClick()} className={`${className} flex flex-col gap-3 p-8 border`}>
            <div className="flex justify-center">
                <img src={imageSrc} alt={imageAlt} className="carimageContainer filter dark:invert" />
            </div>
            <Label className={"text-2xl text-center"}>{heading}</Label>
            {children}
        </div>
    );
};

export default DividerField;
