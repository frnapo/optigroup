import menu from "../settings/menu.json";
import products from "../settings/products.json";
import {MenuSettings} from "../models/menuSettings"
import {Product} from "@/app/[locale]/models/product";


export class Settings {

    private static _instance: Settings;
    private readonly _menu: Array<MenuSettings>;
    private readonly _products: Array<Product>;

    private constructor() {
        this._menu = menu.map(x => x as MenuSettings);
        this._products = products.map(x => x as Product);
    }

    public static getInstance(): Settings {
        if (!Settings._instance) {
            Settings._instance = new Settings();
        }
        return Settings._instance;
    }
    
    public get menu(): Array<MenuSettings> {
        return this._menu;
    }
    
    public get products(): Array<Product>{
        return this._products;
    }

}