import { ShoppingCart } from "phosphor-react";
import { useContext, useState } from "react";
import { CofeeItem } from "../..";
import { ProductQuantity } from "../../../../components/ProductQuantity";
import { ShoppingCartContext, ShoppingCartProduct } from "../../../../contexts/ShoppingCart";
import { ProductFooter, ProductContainer, ProductDescription, ProductTags, ProductPrice, ProductBuy } from "./style";

interface ProductProps {
    cofeeItem: CofeeItem;
}

export function Product({cofeeItem}: ProductProps) {
	const [quantity, setQuantity] = useState(1);
	const { addProductToCart } = useContext(ShoppingCartContext);

	function handleChangeQuantity(qty: number) {
		if (quantity + qty > 1) {
			setQuantity(quantity + qty);
		}
	}

	function addProduct() {
		const product = { 
			productId: cofeeItem.id,
			productName: cofeeItem.name,
			productPrice: cofeeItem.price,
			productQuantity: quantity,
			productPicture: cofeeItem.picture,
		} as ShoppingCartProduct;

		addProductToCart(product);
		setQuantity(1);
	}

	return (
		<ProductContainer>
			<img src={cofeeItem.picture} alt="" />
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
					<ProductQuantity productQuantity={quantity} onChange={handleChangeQuantity} />
					<button className="ButtonBuy" onClick={addProduct}>
						<ShoppingCart size={22} weight="fill" />
					</button>
				</ProductBuy>
			</ProductFooter>
		</ProductContainer>
	);
}


