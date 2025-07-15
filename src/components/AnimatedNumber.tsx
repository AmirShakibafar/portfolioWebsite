'use client';
import CountUp from 'react-countup';

const AnimatedNumber = ({ value, decimals = 0 }: { value: number, decimals?: number }) => {
  return (
    <CountUp
      end={value}
      decimals={decimals}
      duration={2.5}
      enableScrollSpy
      scrollSpyOnce 
    />
  );
};

export default AnimatedNumber;