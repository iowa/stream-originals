import React, { ReactNode } from "react";

export default function AppLine({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center mb-6">
      <div className="w-1 h-6 bg-primary mr-3 rounded"></div>
      {children}
    </div>
  );
}