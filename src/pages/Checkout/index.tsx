import { useContext } from "react";
import { ShoppingCartContext } from "../../contexts/ShoppingCart";
import { ProductCart } from "./components/ProductCart";
import { AddressContainer, CofeeCardContainer, MainContainer, RequestContainer, SummaryContainer, SummaryTotals, LabelSummary, LabelTotalSummary, ButtonConfirm } from "./styles";

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
					<SummaryTotals>
						<div>
							<LabelSummary>Total de itens</LabelSummary>
							<span>{totalItems.toFixed(2)}</span>
						</div>
						<div>
							<LabelSummary>Entrega</LabelSummary>
							<span>{totalDelivery.toFixed(2)}</span>
						</div>
						<div>
							<LabelTotalSummary>Total</LabelTotalSummary>
							<LabelTotalSummary>{totalValue.toFixed(2)}</LabelTotalSummary>
						</div>
					</SummaryTotals>
					<ButtonConfirm>CONFIRMAR PEDIDO</ButtonConfirm>
				</SummaryContainer>
			</CofeeCardContainer>
		</MainContainer> 
	);
}