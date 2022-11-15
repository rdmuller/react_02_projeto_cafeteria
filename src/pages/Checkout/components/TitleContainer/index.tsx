import { CurrencyDollar, MapPin } from "phosphor-react";
import { HeaderTitleContainer } from "./style";

interface TitleContainerProps {
    type: "address" | "payment",
    title: string,
    description: string,
}



export function TitleContainer({ title, description, type }: TitleContainerProps) {
	return (
		<HeaderTitleContainer>
			{ type==="address" ? <MapPin size={22} /> : <CurrencyDollar size={22} /> }
			<span>{title}</span>
			<p>{description}</p>
		</HeaderTitleContainer>
	);
}