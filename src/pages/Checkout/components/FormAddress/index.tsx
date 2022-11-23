import { BaseInput, FormContainer, InputContainerRow } from "./styles";
import { useFormContext } from "react-hook-form";

export function FormAddress() {
	const { register } = useFormContext();

	return (
		<FormContainer>
			<InputContainerRow>
				<BaseInput 
					id="CEP" 
					placeholder="CEP"  
					maxLength={8} 
					{...register("CEP")}
				/>
			</InputContainerRow>
			<InputContainerRow>
				<BaseInput 
					id="street" 
					placeholder="Rua" 
					style={{flexGrow:"1"}}
					{...register("street")}
				/>
			</InputContainerRow>
			<InputContainerRow>
				<BaseInput 
					id="number" 
					placeholder="Número"  
					{...register("number")}
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
					style={{flexGrow:"1"}} 
					{...register("city")}
				/>
				<BaseInput 
					id="state" 
					placeholder="UF" 
					maxLength={2} 
					style={{width: "3.75rem"}} 
					{...register("state")}
				/>
			</InputContainerRow>   
		</FormContainer>
	);
}