import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "./ui/sidebar"

import { Button } from "./ui/button"

import { Home, ShoppingCartIcon, StoreIcon} from "lucide-react" // Icons

import { isCartOpen } from "../contexts/cart-sheet-state"
import { useStore } from "@nanostores/react"

const base = import.meta.env.BASE_URL;

// Menu items
const items = [
    {
        title: "Home",
        url: `${base}/`,
        icon: Home
    },
    {
        title: "Shop",
        url: `${base}/shop`,
        icon: StoreIcon
    },
    {
        title: "Cart",
        url: null, // Cart is handled by a sheet instead of a page
        icon: ShoppingCartIcon
    },
]

export function AppSidebar() {
  const $isCartOpen = useStore(isCartOpen);

  const onCartClick = () => {
    isCartOpen.set(!$isCartOpen);
  }
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Minimal Store</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    {/* Cart opens sheet, so need to handle */}
                    {item.title === "Cart" ? (
                        <Button
                        size="icon"
                        variant="ghost" // Consistent with the rest of the sidebar
                        onClick={onCartClick}
                        style={{ justifyContent: "flex-start"}}
                        >
                        <item.icon />
                        <span>{item.title}</span>
                      </Button>
                    ) : (
                      <a href={item.url!}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      {/* Visual indicator for sidebar toggle */}
      <SidebarRail />
    </Sidebar>
  )
}
