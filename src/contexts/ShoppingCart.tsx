import { createContext, ReactNode, useEffect, useReducer } from "react";
import { ActionTypes } from "../reducers/ShoppingCart/actions";
import { ShoppingCartProduct, ShoppingCartReducer, PaymentMode, Address } from "../reducers/ShoppingCart/reducer";

interface ShoppingCartContextType {
    products: ShoppingCartProduct[];
	totalValue: number;
	totalDelivery: number;
	totalItems: number;
	qtyItems: number;
	paymentMode: PaymentMode;
	address: Address;
    addProductToCart: (product: ShoppingCartProduct) => void;
	changeQuantity: (product: ShoppingCartProduct, addQty: number) => void;
	removeProduct: (productId: number) => void;
	changePaymentMode: (paymentMode: PaymentMode) => void;
	updateAddress: (address: Address) => void;
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextType);

type ShoppingCartContextProviderProps = {
    children: ReactNode;
}

export function ShoppingCartContextProvider({children, }: ShoppingCartContextProviderProps) {
	const [shoppingCartState, dispatch] = useReducer(ShoppingCartReducer,
		{ 
			products: [],
			totalValue: 0,
			totalItems: 0,
			totalDelivery: 0,
			qtyItems: 0,
			address: {
				CEP: null,
				street: "",
				number: null,
				complement: "",
				district: "",
				city: "",
				state: "",
			},
			paymentMode: "CREDIT_CARD",
		}, 
		() => {
			const storedState = localStorage.getItem("@react-02-coffe:cartState");

			if (storedState) {
				return JSON.parse(storedState);
			} else {
				return { products: [], totalValue: 0, totalItems: 0, totalDelivery: 0, qtyItems: 0, paymentMode: "MONEY", address: { 
					CEP: null,
					street: "",
					number: null,
					complement: "",
					district: "",
					city: "",
					state: "", 
				} };
			}
		});

	useEffect(() => {
		const stateJSON = JSON.stringify(shoppingCartState);
		localStorage.setItem("@react-02-coffe:cartState", stateJSON);
	}, [shoppingCartState]);

	function addProductToCart(newProduct: ShoppingCartProduct) {
		dispatch({
			type: ActionTypes.ADD_PRODUCT_TO_CART,
			payload: {
				newProduct,
			},
		});
	}

	function changeQuantity(product: ShoppingCartProduct, addQty: number) {
		dispatch({
			type: ActionTypes.CHANGE_QUANTITY,
			payload: {
				product,
				addQty,
			}
		});
	}

	function removeProduct(productId: number) {
		dispatch({
			type: ActionTypes.DELETE_PRODUCT,
			payload: {
				productId
			}
		});
	}	

	function changePaymentMode(paymentMode: PaymentMode) {
		dispatch({
			type: ActionTypes.CHANGE_PAYMENT_MODE,
			payload: {
				paymentMode,
			}
		});
	}

	function updateAddress(address: Address) {
		dispatch({
			type: ActionTypes.UPDATE_ADDRESS,
			payload: {
				address,
			}
		});
	}

	const { totalDelivery, totalItems, totalValue, products, qtyItems, paymentMode, address } = shoppingCartState;
    
	return (
		<ShoppingCartContext.Provider value={{ totalValue, totalDelivery, qtyItems, totalItems, products, paymentMode, address, addProductToCart, changeQuantity, removeProduct, changePaymentMode, updateAddress, }}>
			{children}
		</ShoppingCartContext.Provider>
	);
}