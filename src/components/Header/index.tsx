import { HeaderContainer } from "./style";
import logoCoffee from "../../assets/logo-coffee.svg";


export function Header() {
	return (
		<HeaderContainer>
			<img src={logoCoffee} alt="" />
		</HeaderContainer>
	);
}