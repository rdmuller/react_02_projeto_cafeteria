import { BaseInput, FormContainer, InputContainerRow } from "./styles";
import { useFormContext } from "react-hook-form";

export function FormAddress() {
	const { register } = useFormContext();

	return (
		<FormContainer>
			<InputContainerRow>
				<BaseInput 
					placeholder="CEP"  
					maxLength={8} 
					{...register("CEP", { valueAsNumber: true })}
				/>
			</InputContainerRow>
			<InputContainerRow>
				<BaseInput 
					placeholder="Rua" 
					style={{flexGrow:"1"}}
					{...register("street")}
				/>
			</InputContainerRow>
			<InputContainerRow>
				<BaseInput 
					placeholder="Número"  
					{...register("number", { valueAsNumber: true })}
				/>
				<BaseInput 
					placeholder="Complemento" 
					style={{flexGrow:"1"}} 
					{...register("complement")}
				/>
			</InputContainerRow>
			<InputContainerRow>
				<BaseInput 
					placeholder="Bairro" 
					{...register("district")}
				/>
				<BaseInput 
					placeholder="Cidade"  
					style={{flexGrow:"1"}} 
					{...register("city")}
				/>
				<BaseInput 
					placeholder="UF" 
					maxLength={2} 
					style={{width: "3.75rem"}} 
					{...register("state")}
				/>
			</InputContainerRow>   
		</FormContainer>
	);
}