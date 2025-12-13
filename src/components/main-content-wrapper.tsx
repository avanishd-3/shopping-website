import React, { useState } from "react";
import { SidebarTrigger} from "./ui/sidebar";


export default function MainContentWrapper({ pathname, children }: { pathname: string; children: React.ReactNode }) {
  const [sidebarState, setSidebarState] = useState("expanded");
  const [isMobile, setIsMobile] = useState(false);

  // Update isMobile based on window size
    React.useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640); // Mobile breakpoint
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Initial check

        return () => window.removeEventListener("resize", handleResize);
    }, []);


  let paddingLeft = "0";
  let marginTop = "0";

  if (!isMobile) {
    if (pathname === "/shop") {
      paddingLeft = sidebarState === "expanded" ? "0rem" : "5.5rem";
      marginTop = sidebarState === "expanded" ? "-1.5rem" : "-2rem";
    } else {
      paddingLeft = sidebarState === "expanded" ? "4.5rem" : "12.5rem";
      marginTop = "0rem";
    }
  }

  return (
    <div className="transition-all duration-500">
      <main>
        <SidebarTrigger onToggle={() => setSidebarState(s => s === "expanded" ? "collapsed" : "expanded")} />
        <div style={{ paddingLeft, marginTop }}>
          {children}
        </div>
      </main>
    </div>
  );
}