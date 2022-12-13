/* eslint-disable @typescript-eslint/no-explicit-any */
import { ActionTypes } from "./actions";

export type PaymentMode = "CREDIT_CARD" | "BANK" | "MONEY";

export interface Address {
	CEP?: number;
	street: string;
	number?: number;
	complement: string;
	district: string;
	city: string;
	state: string;
}

export interface ShoppingCartProduct {
    productId: number;
    productQuantity: number;
    productPrice: number;
    productName: string;
	productPicture: string;
	productValue: number;
}

interface ShoppingCartState {
	products: ShoppingCartProduct[],	
	totalItems: number;
	totalDelivery: number;
	totalValue: number;
	qtyItems: number;
	address: Address;
	paymentMode: PaymentMode;
}

export function ShoppingCartReducer(state: ShoppingCartState, action: any) {
	switch (action.type) {
	case ActionTypes.ADD_PRODUCT_TO_CART: {
		let productExists = false;

		const newProduct = { 
			...action.payload.newProduct,
			productValue: action.payload.newProduct.productQuantity * action.payload.newProduct.productPrice,
		} as ShoppingCartProduct;

		const products = state.products.map(item => {
			if (item.productId === newProduct.productId) {
				productExists = true;
				item.productQuantity += newProduct.productQuantity;				
			}
			return item;
		});

		if (!productExists) {
			products.push(newProduct);
		}

		return calculateTotals({...state, products,});
	}

	case ActionTypes.CHANGE_QUANTITY: {
		const products = state.products.map(item => {
			if (item.productId === action.payload.product.productId) {
				item.productQuantity += action.payload.addQty;
			}
			return item;
		}) ;

		return calculateTotals({...state, products, });
	}

	case ActionTypes.DELETE_PRODUCT: {
		const products = state.products.filter(item => {
			if (item.productId !== action.payload.productId) {
				return item;
			}
		});

		return calculateTotals({...state, products,});
	}

	case ActionTypes.CHANGE_PAYMENT_MODE: {
		return {
			...state,
			paymentMode: action.payload.paymentMode,
		};
	}

	case ActionTypes.UPDATE_ADDRESS: {
		return {
			...state,
			address: action.payload.address,
		};
	}

	case ActionTypes.CLEAR_CART: {
		return action.payload;
	}

	default:
		return state;   
	}
}

function calculateTotals(state: ShoppingCartState) {
	let totalItems = 0;
	const totalDelivery = 0;
	let totalValue = 0;
	let qtyItems = 0;

	const products = state.products.map(item => {
		item.productValue = item.productPrice * item.productQuantity;
		totalItems += item.productValue;
		qtyItems += 1;
		return item;
	});

	totalValue += totalItems + totalDelivery;

	return {
		...state,
		products,
		totalItems,
		totalDelivery,
		totalValue,
		qtyItems,
	};
}