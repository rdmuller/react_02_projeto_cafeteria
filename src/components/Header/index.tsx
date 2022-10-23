import { ButtonCart, ButtonLocation, HeaderContainer } from "./style";
import logoCoffee from "../../assets/logo-coffee.svg";
import { NavLink } from "react-router-dom";
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header() {
	return (
		<HeaderContainer>
			<NavLink to="/">
				<img src={logoCoffee} alt="" />
			</NavLink>

			<nav>
				<NavLink to="/checkout" title="">
					<ButtonLocation>
						<MapPin size={22} weight="fill" />
						<span>Farroupilha, RS</span>
					</ButtonLocation>
				</NavLink>
				<NavLink to="/checkout" title="">
					<ButtonCart>
						<ShoppingCart size={22} weight="fill"/>
					</ButtonCart>
				</NavLink>
			</nav>
		</HeaderContainer>
	);
}