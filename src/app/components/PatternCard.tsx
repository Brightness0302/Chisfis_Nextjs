"use client";

import React, { FC } from "react";
import Label from "./Label";
import Image from "next/image";

export interface PatternCardProps {
  imageSrc?: string;
  imageAlt?: string;
  heading?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const PatternCard: FC<PatternCardProps> = ({
  imageSrc="", 
  imageAlt="", 
  heading="", 
  children, 
  onClick = () => {},
}) => {
    return (
        <div onClick={()=>onClick()} className="flex flex-col gap-3 p-8 border">
            <div className="flex justify-center">
                <Image src={imageSrc} alt={imageAlt} width={96} height={96} />
            </div>
            <Label className={"text-2xl text-center"}>{heading}</Label>
            {children}
        </div>
    );
};

export default PatternCard;
