import React, {ReactNode} from 'react';

export default function AppLine({children}: {children: ReactNode}) {
  return (
    <div className="flex items-center">
      <div className="w-1 h-10 bg-primary mr-3 rounded"></div>
      {children}
    </div>
  );
}
