import { atom } from "nanostores";

export type SideBarState = {
    open: boolean;
    isMobile: boolean;
    openMobile: boolean;
    state: "expanded" | "collapsed";
}

export const sidebar = atom<SideBarState>({ open: true, isMobile: false, openMobile: false, state: "collapsed" });

export function toggleSidebar() {
    const current = sidebar.get();
    sidebar.set({ ...current, open: !current.open });
}

export function toggleSidebarState() {
    const current = sidebar.get();
    const newState = current.state === "expanded" ? "collapsed" : "expanded";
    sidebar.set({ ...current, state: newState });
}

export function setOpenMobile(open: boolean) {
    const current = sidebar.get();
    sidebar.set({ ...current, openMobile: open });
}