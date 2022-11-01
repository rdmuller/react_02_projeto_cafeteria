import { AddressContainer, CofeeCardContainer, MainContainer, RequestContainer } from "./styles";

export function Checkout() {
	return (
		<MainContainer>
			<RequestContainer>
				<h4>Complete seu pedido</h4>
				<AddressContainer></AddressContainer>
			</RequestContainer>
			<CofeeCardContainer>
				<h4>Cafés selecionados</h4>
			</CofeeCardContainer>
		</MainContainer> 
	);
}