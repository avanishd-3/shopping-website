import { atom } from "nanostores";

export type SideBarState = {
    open: boolean;
    isMobile: boolean;
    state?: any;
}

export const sidebar = atom<SideBarState>({ open: true, isMobile: false, state: "collapsed" });

export function toggleSidebar() {
    const current = sidebar.get();
    sidebar.set({ ...current, open: !current.open });
}