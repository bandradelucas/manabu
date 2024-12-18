import { ReactNode } from "react";
import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";

interface Props {
  children: ReactNode
}

export function BasicLayout({ children }: Props) {
  return (
    <div>
      <Header />
      <div className="min-h-screen flex">
        <Sidebar />
        <main className="p-4 flex-1 min-w-0 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}