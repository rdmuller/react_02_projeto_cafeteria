import { Coffee, CurrencyDollar, MapPin, Package, ShoppingCart, Timer } from "phosphor-react";
import { ContainerRoundedIcon } from "./styles";

interface RoundedIconProps {
    size: number;
    wheight?: "fill";
    iconStyle: "ShoppingCart" | "MapPin" | "Timer" | "CurrencyDollar" | "Package" | "Coffee";
    color: "yellowDark" | "gray" | "purple" | "yellow";
}

export function RoundedIcon(roundedIconProps: RoundedIconProps) {
	return (
		<ContainerRoundedIcon iconColor={roundedIconProps.color}>

			{roundedIconProps.iconStyle==="ShoppingCart" && <ShoppingCart size={roundedIconProps.size} weight="fill"/>}
			{roundedIconProps.iconStyle==="MapPin" && <MapPin size={roundedIconProps.size} weight="fill"/>}
			{roundedIconProps.iconStyle==="CurrencyDollar" && <CurrencyDollar size={roundedIconProps.size} weight="fill"/>}
			{roundedIconProps.iconStyle==="Timer" && <Timer size={roundedIconProps.size} weight="fill"/>}
			{roundedIconProps.iconStyle==="Package" && <Package size={roundedIconProps.size} weight="fill"/>}
			{roundedIconProps.iconStyle==="Coffee" && <Coffee size={roundedIconProps.size} weight="fill"/>}
            
		</ContainerRoundedIcon>
	);
}