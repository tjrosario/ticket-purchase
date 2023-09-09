import { useContext } from 'react';
import { Cart } from '../store/cart/CartProvider';

export const useCart = () => useContext(Cart);