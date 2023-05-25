"use client";

import Image from "next/image";
import React, { FC, useState } from "react";
import IconField from "./IconField";
import Label from "./Label";
import GradientIconField from "./GradientIconField";

export interface CarCardProps {
    className?: string;
    imageSrc?: string;
    imageAlt?: string;
    heading?: string;
    children?: React.ReactNode;
    onClick?: () => void;
}

const CarCard: FC<CarCardProps> = ({
    className="", 
    imageSrc="", 
    imageAlt="", 
    heading="", 
    children, 
    onClick = () => {}, 
}) => {
    return (
        <div onClick={()=>onClick()} className={`${className} flex flex-col justify-between gap-3 p-8 border`}>
            <div className="flex justify-center">
                <Image src={imageSrc} alt={imageAlt} width={200} height={200}/>
            </div>
            <Label className={"text-2xl text-center"}>{heading}</Label>
            {children}
        </div>
    );
};

export default CarCard;
