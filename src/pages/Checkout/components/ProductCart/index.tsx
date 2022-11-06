import { useContext } from "react";
import { ProductQuantity } from "../../../../components/ProductQuantity";
import { ShoppingCartContext } from "../../../../contexts/ShoppingCart";
import { ShoppingCartProduct } from "../../../../reducers/ShoppingCart/reducer";
import { LabelPrice, ProductCartContainer } from "./styles";

interface ProductProps {
    product: ShoppingCartProduct;
}

export function ProductCart({product}: ProductProps) {
	const { changeQuantity } = useContext(ShoppingCartContext);

	function handleChangeQty (qty: number) {
		changeQuantity(product, qty);
	}

	return (
		<ProductCartContainer>
			<div>
				<img src={product.productPicture} alt="" />
				<div>
					<div>
						<span>{product.productName}</span>
						<LabelPrice>{product.productPrice.toFixed(2)}</LabelPrice>
					</div>
					<div>
						<ProductQuantity productQuantity={product.productQuantity} onChange={handleChangeQty} />
					</div>
				</div>
			</div>
			<hr />
		</ProductCartContainer>
	);
}