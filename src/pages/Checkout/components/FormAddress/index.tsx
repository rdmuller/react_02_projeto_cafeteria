import { BaseInput, FormContainer, InputContainerRow } from "./styles";

export function FormAddress() {
	return (
		<FormContainer>
			<form action="">
				<InputContainerRow>
					<BaseInput id="CEP" placeholder="CEP"  maxLength={8} />
				</InputContainerRow>
				<InputContainerRow>
					<BaseInput id="street" placeholder="Rua" style={{flexGrow:"1"}} />
				</InputContainerRow>
				<InputContainerRow>
					<BaseInput id="number" placeholder="Número"  />
					<BaseInput id="complement" placeholder="Complemento" style={{flexGrow:"1"}} />
				</InputContainerRow>
				<InputContainerRow>
					<BaseInput id="district" placeholder="Bairro" />
					<BaseInput id="city" placeholder="Cidade"  style={{flexGrow:"1"}} />
					<BaseInput id="state" placeholder="UF" maxLength={2} style={{width: "3.75rem"}} />
				</InputContainerRow>          
			</form>
		</FormContainer>
	);
}