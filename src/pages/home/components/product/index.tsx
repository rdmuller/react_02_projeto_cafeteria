import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { CofeeItem } from "../..";
import { ProductFooter, ProductContainer, ProductDescription, ProductTags, ProductPrice, ProductBuy } from "./style";

interface ProductProps {
    cofeeItem: CofeeItem;
}

export function Product({cofeeItem}: ProductProps) {
	return (
		<ProductContainer>
			<img src={"/src/assets/" + cofeeItem.picture} alt="" />
			<ProductTags>
				{cofeeItem.tags.map(tag => { 
					return(<span key={cofeeItem.id}>{tag}</span>); 
				})}
			</ProductTags>

			<h4>{cofeeItem.name}</h4>

			<ProductDescription>{cofeeItem.description}</ProductDescription>

			<ProductFooter>
				<ProductPrice>{cofeeItem.price}</ProductPrice>
				<ProductBuy>
					<div>
						<button className="ButtonQuanttity">
							<Plus weight="bold" size={14} />
						</button>
						<span>1</span>
						<button className="ButtonQuanttity">
							<Minus weight="bold" size={14} />
						</button>
					</div>
					<button className="ButtonBuy">
						<ShoppingCart size={22} weight="fill" />
					</button>
				</ProductBuy>
			</ProductFooter>
		</ProductContainer>
	);
}


