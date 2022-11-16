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
			{ type==="address" ? <MapPin className="map" size={22} /> : <CurrencyDollar className="currency" size={22} /> }
			<div>
				<span>{title}</span>
				<p>{description}</p>
			</div>
		</HeaderTitleContainer>
	);
}