// Sidebar should always be present
import { SidebarProvider, SidebarTrigger, useSidebar} from "./ui/sidebar";
import { Astro } from "astro";

// Handle dynamic padding based on sidebar state
export function MainContent({children}: {children: React.ReactNode}) {

  const {state, isMobile} = useSidebar();

  let paddingLeft = "0";
  let marginTop = "0";

  const pathname = Astro.url.pathname();
  // Sidebar is an overlay on mobile, so no padding is needed
  if (!isMobile) {
    // Pad more when sidebar is minimized so content is centered properly
    // There's still some padding when sidebar is expanded because it looks better
    
    if (pathname === "/shop") { // Shop stuff takes up more space, so it has less padding than home page
      paddingLeft = state === "expanded" ? "0rem" : "5.5rem";
      marginTop = state === "expanded" ? "-1.5rem" : "-2rem";
    }
    else { // Should only apply to home page
      paddingLeft = state === "expanded" ? "4.5rem" : "12.5rem";
      marginTop = "0rem";

    }
  }

  return (
      <div className="transition-all duration-500">
      <main>
        <SidebarTrigger />
        {/*
                The SidebarTrigger is used to toggle the sidebar visibility.
                It can be placed anywhere in the layout, but typically it is
                placed in the header or main content area.
              */}
        <div
         style={{paddingLeft, marginTop}}>
          {children}
        </div>
        
      </main>
    </div>
  );
}