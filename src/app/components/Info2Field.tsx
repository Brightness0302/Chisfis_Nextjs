"use client";

import React, { FC } from "react";
import Label from "./Label";
import IconField from "./IconField";
import Button from "./shared/Button";
import Image from 'next/image'

export interface InfoFieldProps {
  heading?: string; 
  content?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageDesc?: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const Info2Field: FC<InfoFieldProps> = ({
    heading = "", 
    content = "", 
    imageSrc = "", 
    imageAlt = "", 
    imageDesc = "", 
    className = "", 
    children, 
    onClick = () => {},
}) => {
    return (
        <div className={`${className} border border-gray-300 rounded-lg shadow-xl h-full`}>
            <div className="flex p-5 min-h-47 items-center" onClick={onClick}>
                <div className="flex flex-row gap-5">
                    <div className="flex text-2xl border border-red-400 rounded-full text-red-400 bg-red-50 min-w-12 h-12">
                        <IconField iconName="las la-file-upload" className="items-center m-auto" />
                    </div>
                    <div className="flex flex-col gap-3">
                        <Label className="text-base font-bold">{heading}</Label>
                        <Label className="text-sm">{content}</Label>
                        <hr />
                        <div className="flex flex-row justify-start gap-3">
                            <Image src={imageSrc} alt={imageAlt} width={32} height={32} />
                            <Label>{imageDesc}</Label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-between gap-5 p-4 border border-0 border-t-2 border-gray-300 bg-zinc-50 dark:bg-zinc-800">
                <Button className="border border-gray-500 text-neutral-200 dark:text-neutral-700 rounded-md bg-d-background dark:bg-background d-backgroundButton w-full" sizeClass="px-3 py-1"><IconField iconName="las la-exclamation-triangle" />View Template</Button>
                <Button className="border border-gray-500 text-neutral-700 dark:text-neutral-200 rounded-md bg-background dark:bg-d-background backgroundButton w-full" sizeClass="px-3 py-1">View Repo</Button>
            </div>
        </div>
    );
};

export default Info2Field;
