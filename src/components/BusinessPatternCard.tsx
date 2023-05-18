"use client";

import React, { FC } from "react";
import Label from "./Label";

export interface BusinessPatternCardProps {
  imageSrc?: string;
  imageAlt?: string;
  heading?: string;
  onClick?: () => void;
}

const BusinessPatternCard: FC<BusinessPatternCardProps> = ({
  imageSrc="", 
  imageAlt="", 
  heading="", 
  onClick = () => {},
}) => {
    return (
        <div onClick={()=>onClick()} className="flex flex-col gap-3 p-8 border">
            <div className="flex justify-center">
                <img src={imageSrc} alt={imageAlt} className="w-24 h-24" />
            </div>
            <Label className={"text-lg text-center"}>{heading}</Label>
        </div>
    );
};

export default BusinessPatternCard;
