import { Intro } from "./components/Intro";
import { ItemsContainer } from "./style";
import items from "../../assets/items.json";

export interface CofeeItem {
	id: number,
	name: string,
	description: string,
	price: number,
	tags: string[]
}

export function Home () {
	const cofeeItems: CofeeItem[] = items as CofeeItem[];

	return (
		<div>
			<Intro />
			<ItemsContainer>
				<h2>Nossos cafés</h2>
			</ItemsContainer>
			{cofeeItems.map(cofeeItem => {
				return (<h4>{cofeeItem.name}</h4>);
			})}
		</div>
	);
}