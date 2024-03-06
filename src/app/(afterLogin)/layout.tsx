import React, { ReactNode } from "react";

type Prop = { children: ReactNode };

export default function AfterLoginLayout({ children }: Prop) {
  return (
    <div>
      AfterLoginLayout
      {children}
    </div>
  );
}
