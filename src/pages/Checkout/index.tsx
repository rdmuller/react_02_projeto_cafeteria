import { useContext } from "react";
import { ShoppingCartContext } from "../../contexts/ShoppingCart";
import { ProductCart } from "./components/ProductCart";
import { TitleContainer } from "./components/TitleContainer";
import { BaseContainer, CofeeCardContainer, MainContainer, RequestContainer, SummaryContainer, SummaryTotals, LabelSummary, LabelTotalSummary, ButtonConfirm } from "./styles";

export function Checkout() {
	const { products, totalDelivery, totalItems, totalValue } = useContext(ShoppingCartContext);

	return (
		<MainContainer>
			<RequestContainer>
				<h4>Complete seu pedido</h4>
				<BaseContainer>
					<TitleContainer title="Endereço de Entrega" description="Informe o endereço onde deseja receber seu pedido" type="address" />
				</BaseContainer>
				<BaseContainer>
					<TitleContainer title="Pagamento" description="O pagamento é feito na entrega. Escolha a forma que deseja pagar" type="payment" />
				</BaseContainer>
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