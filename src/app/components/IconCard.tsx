"use client";

import Image from "next/image";
import React, { FC, useState } from "react";
import IconField from "./IconField";
import Label from "./Label";
import GradientIconField from "./GradientIconField";

export interface IconCardProps {
  className?: string;
  iconName?: string;
  iconType?: string;
  heading?: string;
  content?: string;
}

const IconCard: FC<IconCardProps> = ({ className="", iconName, iconType="linear", heading, content }) => {
    const renderIcon = () => {
        if (iconType == "linear")
            return <IconField iconName={iconName} className={`${className} text-3xl p-1 border border-d-background dark:border-background`} />
        else if (iconType == "gradient")
            return <GradientIconField iconName={iconName} className={`${className} text-2xl`} />
    }
  return (
    <div className={`flex flex-col gap-3 p-8 border ${className}`}>
        {renderIcon()}
        <Label className="text-xl font-bold">Advanced observability</Label>
        <Label className="font-normal">Understand Next.js performance with Vercel&apos;s speed insight and monitering tools</Label>
    </div>
  );
};

export default IconCard;
