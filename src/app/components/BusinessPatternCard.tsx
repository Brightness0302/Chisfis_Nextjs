"use client";

import React, { FC } from "react";
import Label from "./Label";
import Image from "next/image";

export interface BusinessPatternCardProps {
  className?: string;
  imageSrc?: string;
  imageAlt?: string;
  heading?: string;
  onClick?: () => void;
}

const BusinessPatternCard: FC<BusinessPatternCardProps> = ({
  className="",
  imageSrc="", 
  imageAlt="", 
  heading="", 
  onClick = () => {},
}) => {
    return (
        <div onClick={()=>onClick()} className={`flex flex-col gap-3 p-8 border ${className}`}>
            <div className="flex justify-center">
                <Image src={imageSrc} alt={imageAlt} width={96} height={96} />
            </div>
            <Label className={"text-lg text-center"}>{heading}</Label>
        </div>
    );
};

export default BusinessPatternCard;
