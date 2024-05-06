"use client";
import {Settings} from "@/app/[locale]/providers/settings";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <div>show a carousel</div>

            {
                Settings.getInstance().products.map((product, index) => {
                    return (
                        <div key={index}>
                            <Image src={require(`./assets/products/${product.href}`)} alt={product.title} width={100}
                                   height={100}></Image>
                        </div>
                    )
                })
            }
        </>
    );
}
