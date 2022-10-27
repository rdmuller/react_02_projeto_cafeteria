import { CofeeItem } from "../../../Home";
import { ProductContainer } from "./style";

interface ProductProps {
    cofeeItem: CofeeItem;
}

export function Product({cofeeItem}: ProductProps) {
	return (
		<ProductContainer>
			<img src={"/src/assets/" + cofeeItem.picture} alt="" />
			{cofeeItem.tags.map(tag => { 
				return(<span key={cofeeItem.id}>{tag}</span>); 
			})}
			<h4>{cofeeItem.name}</h4>
			<span>{cofeeItem.description}</span>
			<span>{cofeeItem.price}</span>
		</ProductContainer>
	);
}