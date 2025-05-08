
export interface Transaction {
    _id: string;
    user: string;
    amount: number;
    type: 'deposit' | 'withdrawal' | 'transfer';
    status: 'pending' | 'completed' | 'failed';
    date: string;
    createdAt?: string;
    updatedAt?: string;
}
