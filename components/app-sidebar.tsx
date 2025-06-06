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
        url: "/cart",
        icon: ShoppingCartIcon
    },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
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
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
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
