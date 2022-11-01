import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useContext, useState } from "react";
import { CofeeItem } from "../..";
import { ShoppingCartContext, ShoppingCartProduct } from "../../../../contexts/ShoppingCart";
import { ProductFooter, ProductContainer, ProductDescription, ProductTags, ProductPrice, ProductBuy } from "./style";

interface ProductProps {
    cofeeItem: CofeeItem;
}

export function Product({cofeeItem}: ProductProps) {
	const [quantity, setQuantity] = useState(1);
	const { addProductToCart } = useContext(ShoppingCartContext);

	function handleIncrement() {
		setQuantity(quantity + 1);
	}

	function handleDecrement() {
		if (quantity > 1) {
			setQuantity(quantity - 1);
		}
	}

	function addProduct() {
		const product = { 
			productName: cofeeItem.name,
			productPrice: cofeeItem.price,
			productQuantity: quantity,
		} as ShoppingCartProduct;

		addProductToCart(product);
		setQuantity(1);
	}

	return (
		<ProductContainer>
			<img src={"/src/assets/" + cofeeItem.picture} alt="" />
			<ProductTags>
				{cofeeItem.tags.map(tag => { 
					return(<span key={cofeeItem.id + tag}>{tag}</span>); 
				})}
			</ProductTags>

			<h4>{cofeeItem.name}</h4>

			<ProductDescription>{cofeeItem.description}</ProductDescription>

			<ProductFooter>
				<ProductPrice>{cofeeItem.price.toFixed(2)}</ProductPrice>
				<ProductBuy>
					<div>
						<button className="ButtonQuanttity" onClick={handleDecrement}>
							<Minus weight="bold" size={14} />
						</button>
						<span>{quantity}</span>
						<button className="ButtonQuanttity" onClick={handleIncrement}>
							<Plus weight="bold" size={14} />
						</button>
					</div>
					<button className="ButtonBuy" onClick={addProduct}>
						<ShoppingCart size={22} weight="fill" />
					</button>
				</ProductBuy>
			</ProductFooter>
		</ProductContainer>
	);
}


