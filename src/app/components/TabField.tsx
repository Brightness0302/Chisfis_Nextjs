"use client"

import {
    PointerEvent,
    FocusEvent,
    useEffect,
    useRef,
    useState,
    CSSProperties,
    FC,
  } from "react";
import Label from "./Label";
import Image from 'next/image'
  
type Tab = { 
  iconLightSrc: string;
  iconDarkSrc: string;
  iconInactiveSrc: string;
  heading?: string;
  content?: string;
  id: string 
};

type TabFieldProps = {
  className?: string;
  selectedTabIndex: number;
  tabs: Tab[];
  setSelectedTab: (input: number) => void;
};

export const TabField: FC<TabFieldProps> = ({
  className, 
  tabs,
  selectedTabIndex,
  setSelectedTab,
}) => {
  const [buttonRefs, setButtonRefs] = useState<Array<HTMLButtonElement | null>>(
    []
  );

  useEffect(() => {
    setButtonRefs((prev) => prev.slice(0, tabs.length));
  }, [tabs.length]);

  const [hoveredTabIndex, setHoveredTabIndex] = useState<number | null>(null);
  const [hoveredRect, setHoveredRect] = useState<DOMRect | null>(null);

  const navRef = useRef<HTMLDivElement>(null);
  const navRect = navRef.current?.getBoundingClientRect();

  const selectedRect = buttonRefs[selectedTabIndex]?.getBoundingClientRect();

  const [isInitialHoveredElement, setIsInitialHoveredElement] = useState(true);
  const isInitialRender = useRef(true);

  const onLeaveTabs = () => {
    setIsInitialHoveredElement(true);
    setHoveredTabIndex(null);
  };

  const onEnterTab = (
    e: PointerEvent<HTMLButtonElement> | FocusEvent<HTMLButtonElement>,
    i: number
  ) => {
    if (!e.target || !(e.target instanceof HTMLButtonElement)) return;

    setHoveredTabIndex((prev) => {
      if (prev != null && prev !== i) {
        setIsInitialHoveredElement(false);
      }

      return i;
    });
    setHoveredRect(e.target.getBoundingClientRect());
  };

  const onSelectTab = (i: number) => {
    setSelectedTab(i);
  };

  let hoverStyles: CSSProperties = { opacity: 0 };
  if (navRect && hoveredRect) {
    hoverStyles.transform = `translate3d(${hoveredRect.left - navRect.left}px,${
      hoveredRect.top - navRect.top
    }px,0px)`;
    hoverStyles.width = hoveredRect.width;
    hoverStyles.height = hoveredRect.height;
    hoverStyles.opacity = hoveredTabIndex != null ? 1 : 0;
    hoverStyles.transition = isInitialHoveredElement
      ? `opacity 150ms`
      : `transform 150ms 0ms, opacity 150ms 0ms, width 150ms`;
  }

  let selectStyles: CSSProperties = { opacity: 0 };
  if (navRect && selectedRect) {
    selectStyles.width = selectedRect.width * 0.8;
    selectStyles.transform = `translateX(calc(${
      selectedRect.left - navRect.left
    }px + 10%))`;
    selectStyles.opacity = 1;
    selectStyles.transition = isInitialRender.current
      ? `opacity 150ms 150ms`
      : `transform 150ms 0ms, opacity 150ms 150ms, width 150ms`;

    isInitialRender.current = false;
  }

  return (
    <div className={`${className}`}>
      <nav
        ref={navRef}
        className={`flex flex-shrink-0 items-center relative z-0 py-2 gap-5`}
        onPointerLeave={onLeaveTabs}
      >
        {tabs.map((item, i) => {
          return (
            <button
              key={i}
              className={`min-w-44 md:min-w-56 text-md relative rounded-md flex items-center py-3 md:p-4 z-20 bg-transparent text-sm cursor-pointer select-none transition-colors border border-gray-300 ${((hoveredTabIndex === i || selectedTabIndex === i)?"":"")} text-d-background dark:text-background flex flex-col gap-3 hover:cursor-pointer`}
              ref={(el) => (buttonRefs[i] = el)}
              onPointerEnter={(e) => onEnterTab(e, i)}
              onFocus={(e) => onEnterTab(e, i)}
              onClick={() => onSelectTab(i)}
            >
              <div className="w-8 md:w-10 h-8 md:h-10">
                {(hoveredTabIndex === i || selectedTabIndex === i)?
                  <Image src={item.iconLightSrc} alt="iconLightSrc" className="block" width={40} height={40} />
                  :<>
                    <Image src={item.iconDarkSrc} alt="iconDarkSrc" className="hidden dark:block" width={40} height={40} />
                    <Image src={item.iconInactiveSrc} alt="iconInactiveSrc" className="block dark:hidden" width={40} height={40} />
                  </>
                }
                
              </div>
              <Label className={`text-xl md:text-2xl cursor-pointer filter ${((hoveredTabIndex === i)?"blur-none md:blur-none":"")}`}>{item.heading}</Label>
              <Label className="text-xs md:text-sm cursor-pointer hidden md:block">{item.content}</Label>
            </button>
          );
        })}
        <div
          className="absolute z-10 top-0 left-0 rounded-md bg-cornflowerblue transition-[width]"
          style={hoverStyles}
        />
        <div
          className={"absolute z-10 bottom-0 left-0 h-0.5 bg-slate-500"}
          style={selectStyles}
        />
      </nav>
    </div>
  );
};