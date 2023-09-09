import { useContext } from 'react';
import { Payments } from '../store/payments/PaymentsProvider';

export const usePayments = () => useContext(Payments);