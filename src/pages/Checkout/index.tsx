import { useContext } from "react";
import { ShoppingCartContext } from "../../contexts/ShoppingCart";
import { ProductCart } from "./components/ProductCart";
import { AddressContainer, CofeeCardContainer, MainContainer, RequestContainer, SummaryContainer } from "./styles";

export function Checkout() {
	const { products, totalDelivery, totalItems, totalValue } = useContext(ShoppingCartContext);


	return (
		<MainContainer>
			<RequestContainer>
				<h4>Complete seu pedido</h4>
				<AddressContainer></AddressContainer>
			</RequestContainer>
			<CofeeCardContainer>
				<h4>Cafés selecionados</h4>
				<SummaryContainer>
					{products.map(item => 
						<ProductCart key={item.productId} product={item} />
					)}
					<div>
						<span>Total de itens</span>
						<span>{totalItems.toFixed(2)}</span>
						<span>Entrega</span>
						<span>{totalDelivery.toFixed(2)}</span>
						<span>Total</span>
						<span>{totalValue.toFixed(2)}</span>
					</div>
				</SummaryContainer>
			</CofeeCardContainer>
		</MainContainer> 
	);
}