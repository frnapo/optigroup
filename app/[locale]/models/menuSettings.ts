import {MenuItemSettings} from "./menuItemSettings"

export interface MenuSettings {
    id: number,
    label: string;
    href: string;
    items?: Array<MenuItemSettings>;
    translate?: boolean;
}