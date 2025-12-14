import React, { useState } from "react";
import { SidebarTrigger} from "./ui/sidebar";
import { useStore } from "@nanostores/react";
import { sidebar, toggleSidebarState } from "../contexts/sidebar-context";


export default function MainContentWrapper({ children }: { children: React.ReactNode }) {
  const $sidebar = useStore(sidebar);

  return (
    <div className="transition-all duration-500">
      <main>
        {/* Sidebar trigger needed for mobile */}
        <SidebarTrigger onClick={() => toggleSidebarState()} />
        <div>
          {children}
        </div>
      </main>
    </div>
  );
}