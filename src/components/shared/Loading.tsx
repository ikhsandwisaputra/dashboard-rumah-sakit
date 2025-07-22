import React from 'react';
import '~/css/loader.css'

const Loader: React.FC = () => {
  const delays = ['0ms', '100ms', '200ms', '100ms', '200ms', '200ms', '300ms', '300ms', '400ms'];
  const colors = [
    '#00FF87', '#0CFD95', '#17FBA2',
    '#23F9B2', '#30F7C3', '#3DF5D4',
    '#45F4DE', '#53F1F0', '#60EFFF'
  ];

  return (
    <div className="flex flex-wrap w-[168px] h-[168px]">
      {Array.from({ length: 9 }).map((_, index) => (
        <div
          key={index}
          className="box-border rounded-[4px] m-[1px] flex-none w-[52px] h-[52px] animate-ripple"
          style={{
            animationDelay: delays[index],
            // Warna dikontrol via CSS variable
            //@ts-ignore
            '--cell-color': colors[index]
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

export default Loader;
