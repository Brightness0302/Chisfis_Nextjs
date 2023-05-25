import { useEffect, useState } from 'react';

const useCountdown = () => {
  const [countDown, setCountDown] = useState<number>(1);

  useEffect(() => {
    const interval = setInterval(() => {
        let value = (countDown + 0.5);
        // console.log(value);
        if (value>400)
          value-=360;
        setCountDown(value);
    }, 30);

    return () => clearInterval(interval);
  }, [countDown]);

  return countDown;
};

export { useCountdown };