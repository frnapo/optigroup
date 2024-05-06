"use client";

import React, {FC, useState} from "react";
import Image from "next/image";
import {useLocale} from "use-intl";
import {
    Collapse,
    IconButton,
    List,
    ListItem,
    Menu,
    MenuHandler,
    MenuItem, MenuList,
    Navbar,
    Typography
} from "@material-tailwind/react";
import {Bars3Icon, ChevronDownIcon, XMarkIcon} from "@heroicons/react/24/outline";
import {MenuItemSettings} from "@/app/[locale]/models/menuItemSettings";
import {MenuSettings} from "@/app/[locale]/models/menuSettings";
import {useTranslations} from "next-intl";
import {Settings} from "@/app/[locale]/providers/settings";
import {useRouter} from "next/navigation";
import ReactFlagsSelect from "react-flags-select";


const AddImage: FC<MenuItemSettings> = (props) => {
    if (props.icon !== undefined) {
        return (
            <>
                <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
                    {" "}
                    <Image src={require(`../assets/${props.icon}`)} alt="" priority={true}/>
                </div>
            </>
        )
    }
};

const NavListMenu: FC<MenuSettings> = (props) => {
    const t = useTranslations();
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const renderItems = props.items?.map(
        ({icon, title}, key) => {
            return (
                <a href="#" key={key}>
                    <MenuItem className="grid grid-rows-1">
                        <div>
                            <Typography variant="h6" color="blue-gray"
                                        className={icon ? "flex items-center text-base font-bold" : "flex items-center text-sm font-normal"}>
                                {icon !== undefined ? t(`menu.${props.label}.${title}`) : title}
                            </Typography>
                        </div>

                        <AddImage title={title} icon={icon}/>

                    </MenuItem>
                </a>
            )
        }
    );

    return (
        <>
            <Menu open={isMenuOpen} handler={setIsMenuOpen} offset={{mainAxis: 20}} placement="bottom"
                  allowHover={true}>
                <MenuHandler>
                    <Typography as="div" variant="small" className="font-medium">
                        <ListItem className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
                                  selected={isMenuOpen || isMobileMenuOpen}
                                  onClick={() => setIsMobileMenuOpen((cur) => !cur)}>
                            {t(`menu.${props.label}.label`)}
                            <ChevronDownIcon strokeWidth={2.5}
                                             className={`hidden h-3 w-3 transition-transform lg:block ${
                                                 isMenuOpen ? "rotate-180" : ""
                                             }`}/>
                            <ChevronDownIcon strokeWidth={2.5}
                                             className={`block h-3 w-3 transition-transform lg:hidden ${
                                                 isMobileMenuOpen ? "rotate-180" : ""
                                             }`}/>
                        </ListItem>
                    </Typography>
                </MenuHandler>
                <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
                    <ul className="grid grid-cols-4 gap-y-2 outline-none outline-0">
                        {renderItems}
                    </ul>
                </MenuList>
            </Menu>
            <div className="block lg:hidden">
                <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
            </div>
        </>
    );
};

const NavList = () => {
    const t = useTranslations();
    return (
        <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
            {
                Settings
                    .getInstance()
                    .menu
                    .filter(value => value.items)
                    .map((menu, key) => (
                        <NavListMenu key={key} label={menu.label} items={menu.items} id={0} href={""}/>
                    ))
            }

            {
                Settings
                    .getInstance()
                    .menu
                    .filter(value => !value.items)
                    .map((item, key) => (
                        <Typography key={key} as="a" href={item.href} variant="small" color="blue-gray"
                                    className="font-medium">
                            <ListItem className="flex items-center gap-2 py-2 pr-4">
                                {t(`menu.${item.label}`)}
                            </ListItem>
                        </Typography>
                    ))
            }
        </List>
    );
};

const NavMenu = () => {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);


    return (<Navbar className="max-w-full p-0 mt-3">
            <div className="flex items-center justify-between text-blue-gray-900">
                <div className="hidden lg:block">
                    <NavList/>
                </div>
                <IconButton variant="text" color="blue-gray" className="lg:hidden"
                            onClick={() => setOpenNav(!openNav)}>
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6" strokeWidth={2}/>) : (
                        <Bars3Icon className="h-6 w-6" strokeWidth={2}/>
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <NavList/>
            </Collapse>
        </Navbar>
    );
}

export const Header = () => {
    const locale = useLocale();

    const [selected, setSelected] = useState(locale.replace("en", "gb").toUpperCase());
    const router = useRouter();

    return (
        <header>
            <div className="flex">
            <div className="flex-grow">logo</div>
            <div className="flex-grow">some links</div>
            <div>
                <ReactFlagsSelect
                    className="flex-grow justify-items-end"
                    countries={["IT", "DE", "GB"]}
                    customLabels={{GB: "english", DE: "deutsche", IT: "italiano"}}
                    selected={selected} onSelect={function (countryCode: string): void {
                    setSelected(countryCode);
                    router.replace(`/${countryCode.toLowerCase().replace("gb", "en")}`)
                }
                }/>
            </div>    
            </div>
            
            <div>
                <NavMenu></NavMenu>
            </div>

            

        </header>
    );
}

