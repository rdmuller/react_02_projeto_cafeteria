import { useContext } from "react";
import { ProductQuantity } from "../../../../components/ProductQuantity";
import { ShoppingCartContext } from "../../../../contexts/ShoppingCart";
import { ShoppingCartProduct } from "../../../../reducers/ShoppingCart/reducer";
import { LabelPrice, ProductCartContainer, ProductData, ProductInfo, ProductName } from "./styles";

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
			<ProductInfo>
				<ProductData>
					<img src={product.productPicture} alt="" />
					<div>
						<ProductName>{product.productName}</ProductName>
						<div>
							<ProductQuantity productQuantity={product.productQuantity} onChange={handleChangeQty} />
						</div>
					</div>
				</ProductData>
				<LabelPrice>{product.productValue.toFixed(2)}</LabelPrice>
			</ProductInfo>
			<hr />
		</ProductCartContainer>
	);
}