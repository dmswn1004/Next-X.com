import React from "react";

export default function AfterLoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      AfterLoginLayout
      {children}
    </div>
  );
}
