import React, { FC, HTMLAttributes } from "react";
import Button from "./shared/Button";
import Image from "next/image";
import Heading from "./Heading";
import Label from "./Label";

export interface ButtonNavProps extends HTMLAttributes<HTMLButtonElement> {
    imageSrc?: string;
    imageAlt?: string;
    heading?: string;
    content?: string;
    onClick?: () => void;
}

const ButtonNav: FC<ButtonNavProps> = ({ 
    imageSrc="", 
    imageAlt="", 
    heading, 
    content, 
    className="", 
    children, 
    onClick = () => {},
}) => {
  return (
    <Button className={`flex items-center justify-start gap-5 bg-button-bg dark:bg-button-d-bg px-6 py-3 rounded-lg ${className}`} onClick={onClick}>
        <Image src={imageSrc} alt={imageAlt} width={40} height={40} />
        <div className='flex flex-col gap-2'>
            <Heading className='text-left font-bold text-black dark:text-neutral-200 cursor-pointer'>{heading}</Heading>
            <Label className='text-left text-sm text-neutral-700 dark:text-neutral-200 cursor-pointer'>{content}</Label>
        </div>
    </Button>
  );
};

export default ButtonNav;
