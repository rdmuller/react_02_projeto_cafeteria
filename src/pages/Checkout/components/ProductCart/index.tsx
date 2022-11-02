import { ProductQuantity } from "../../../../components/ProductQuantity";
import { ShoppingCartProduct } from "../../../../contexts/ShoppingCart";
import { LabelPrice, ProductCartContainer } from "./styles";

interface ProductProps {
    product: ShoppingCartProduct;
}

export function ProductCart({product}: ProductProps) {
	return (
		<ProductCartContainer>
			<img src={product.productPicture} alt="" />
			<span>{product.productName}</span>
			<LabelPrice>{product.productPrice.toFixed(2)}</LabelPrice>
			<ProductQuantity productQuantity={product.productQuantity} onChange={(qty: number) => qty} />
			<hr />
		</ProductCartContainer>
	);
}