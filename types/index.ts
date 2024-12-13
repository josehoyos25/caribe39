import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
}
export interface SearchManuFacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}
export interface FilterProps {
    fuel?: string;
    year?: number;
    manufacturer?: string;
    model?: string;
    limit?: number;
}

export interface CarsProps {
    id: number;
    model: string;
    manufacturer: string;
    year: number;
    fuel: string;
    price: number;
    image?: string;
}