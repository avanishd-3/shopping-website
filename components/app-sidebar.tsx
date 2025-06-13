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
} from "@/components/ui/sidebar"

import { Button } from "@/components/ui/button"

import { Home, ShoppingCartIcon, StoreIcon} from "lucide-react" // Icons

import Link from "next/link"

// Menu items
const items = [
    {
        title: "Home",
        url: "/",
        icon: Home
    },
    {
        title: "Shop",
        url: "/shop",
        icon: StoreIcon
    },
    {
        title: "Cart",
        url: null, // Cart is handled by a sheet instead of a page
        icon: ShoppingCartIcon
    },
]

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  onCartClick: () => void;
}

export function AppSidebar({ onCartClick, ...props }: AppSidebarProps) {
  return (
    <Sidebar collapsible="icon" {...props}>
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
                      <Button size={"icon"} onClick={onCartClick} style={{justifyContent: "flex-start"}}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Button>
                    ) : (
                      <Link href={item.url!}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
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
