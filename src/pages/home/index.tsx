import { Intro } from "./components/Intro";
import { ItemsContainer, ProductsContainer } from "./style";
import items from "../../assets/items.json";
import { Product } from "./components/Product";

export interface CofeeItem {
	id: number,
	name: string,
	description: string,
	price: number,
	picture: string,
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
			<ProductsContainer>
				{cofeeItems.map(cofeeItem => {
					return (<Product key={cofeeItem.id} cofeeItem={cofeeItem} />);
				})}
			</ProductsContainer>
		</div>
	);
}