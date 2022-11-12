/* eslint-disable @typescript-eslint/no-explicit-any */
import { ActionTypes } from "./actions";

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

	default:
		return state;   
	}
}

function calculateTotals(state: ShoppingCartState) {
	let totalItems = 0;
	const totalDelivery = 0;
	let totalValue = 0;

	const products = state.products.map(item => {
		item.productValue = item.productPrice * item.productQuantity;
		totalItems += item.productValue;
		return item;
	});

	totalValue += totalItems + totalDelivery;

	return {
		...state,
		products,
		totalItems,
		totalDelivery,
		totalValue,
	};
}