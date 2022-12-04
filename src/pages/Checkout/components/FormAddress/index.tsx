import { BaseInput, ErrorText, FormContainer, InputContainerRow } from "./styles";
import { useFormContext } from "react-hook-form";
import axios from "axios";
import { ChangeEvent, useState } from "react";

export function FormAddress() {
	const { register, setValue, /*watch, formState: {errors}*/ } = useFormContext();
	const [ cepMessageError, setCepMessageError ] = useState("");

	function handleSetCEP(event: ChangeEvent<HTMLInputElement>){
		const cep = event.target.value;

		if (cep.length === 8){
			axios({
				method: "get",
				url: `https://brasilapi.com.br/api/cep/v1/${cep}`,
				headers: { }

			}).then(response => {
				setValue("street", response.data.street);
				setValue("state", response.data.state);
				setValue("city", response.data.city);
				setValue("district", response.data.neighborhood);
				setCepMessageError("");

			}).catch((error) => {
				setCepMessageError("CEP inválido");
				console.error(error);
			});
		}
	}
	
	return (
		<FormContainer>
			<InputContainerRow>
				<BaseInput 
					id="CEP"
					placeholder="CEP"  
					maxLength={8} 
					required
					{...register("CEP", { 
						valueAsNumber: true, 
						pattern: /[0-9]{5}-[\d]{3}/, 
						required: true, 
						onBlur(event) {
							handleSetCEP(event);	
						},
					})}
				/>
				<ErrorText>{cepMessageError}</ErrorText>
			</InputContainerRow>			
			<InputContainerRow>
				<BaseInput 
					id="street"
					placeholder="Rua" 
					required
					style={{flexGrow:"1"}}
					{...register("street")}
				/>
			</InputContainerRow>
			<InputContainerRow>
				<BaseInput 
					id="number"
					placeholder="Número"
					type="number"
					required
					{...register("number", { valueAsNumber: true })}
				/>
				<BaseInput 
					id="complement"
					placeholder="Complemento" 
					style={{flexGrow:"1"}} 
					{...register("complement")}
				/>
			</InputContainerRow>
			<InputContainerRow>
				<BaseInput 
					id="district"
					placeholder="Bairro" 
					{...register("district")}
				/>
				<BaseInput 
					id="city"
					placeholder="Cidade"  
					required
					style={{flexGrow:"1"}} 
					{...register("city")}
				/>
				<BaseInput 
					id="state"
					placeholder="UF" 
					required
					maxLength={2} 
					style={{width: "3.75rem"}} 
					{...register("state")}
				/>
			</InputContainerRow>   
		</FormContainer>
	);
}