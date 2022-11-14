import { Trash } from "phosphor-react";
import { useContext } from "react";
import { ProductQuantity } from "../../../../components/ProductQuantity";
import { ShoppingCartContext } from "../../../../contexts/ShoppingCart";
import { ShoppingCartProduct } from "../../../../reducers/ShoppingCart/reducer";
import { ButtonRemove, ButtonsContainer, LabelPrice, ProductCartContainer, ProductData, ProductInfo, ProductName } from "./styles";

interface ProductProps {
    product: ShoppingCartProduct;
}

export function ProductCart({product}: ProductProps) {
	const { changeQuantity, removeProduct } = useContext(ShoppingCartContext);

	function handleChangeQty (qty: number) {
		changeQuantity(product, qty);
	}

	function handleRemoveProduct() {
		removeProduct(product.productId);
	}

	return (
		<ProductCartContainer>
			<ProductInfo>
				<ProductData>
					<img src={product.productPicture} alt="" />
					<div>
						<ProductName>{product.productName}</ProductName>
						<ButtonsContainer>
							<ProductQuantity productQuantity={product.productQuantity} onChange={handleChangeQty} size={2} />
							<ButtonRemove onClick={handleRemoveProduct}>
								<Trash size={16} />
								REMOVER
							</ButtonRemove>
						</ButtonsContainer>
					</div>
				</ProductData>
				<LabelPrice>{product.productValue.toFixed(2)}</LabelPrice>
			</ProductInfo>
			<hr />
		</ProductCartContainer>
	);
}