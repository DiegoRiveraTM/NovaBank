 "use client";

import axios from "axios";
//import { set } from "mongoose";
import React, { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import type { Transaction } from '../types/transaction';
import { Eye, EyeOff } from "lucide-react";

export default function DashboardPage() {
    const [balance, setBalance] = useState<number | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [showBalance, setShowBalance] = useState(true);
    useEffect(() => {

        const fetchBalance = async () => {
            try {
                const token = localStorage.getItem('token');
                
                if (!token) {
                    setError("Authentication token is missing");
                    setLoading(false);
                    return;
                }

                const balanceResponse = await axios.get('/api/transactions/balance', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setBalance(balanceResponse.data.balance);

                const response = await axios.get(`/api/transactions?page=${currentPage}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                setTransactions(response.data.transactions);
                setTotalPages(response.data.totalPages);


            } catch (error) {

                console.error("Failed to load transactions:", error);
                setError("Failed to load transactions");

            } finally {

                setLoading(false);
            }
        }

        fetchBalance();
    }, [currentPage]);

    
    return (
        <div className="max-w-4xl w-full mx-auto px-4">
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {balance !== null && (
                <div className="flex items-center justify-center mt-8 gap-4">
                    <h2 className="text-5xl font-extrabold tracking-tight">
                        {showBalance ? (
                            <>
                                <span className="font-semibold">Your balance is: </span> ${balance}
                            </>
                        ) : (
                            <>
                                <span className="font-semibold">Your balance is: </span> ****
                            </>
                        )}
                    </h2>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setShowBalance(!showBalance)}
                        aria-label="Toggle balance visibility"
                    >
                        {showBalance ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </Button>
                </div>
            )}

            
            <div className="flex justify-center gap-4 mt-6">
                <a href="/dashboard/deposits" className="px-6 py-3 text-lg">            
                    <Button>Deposits</Button>
                </a>
                <a href="/dashboard/transfers" className="px-6 py-3 text-lg">
                    <Button>Transfer</Button>
                </a>
            </div>

            <div>
            <Table className="mt-4">
                <TableHeader>
                    <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {transactions.map((transaction) => (
                        <TableRow key={transaction._id}>
                            <TableCell>{new Date(transaction.date).toLocaleDateString()}</TableCell>
                            <TableCell>{transaction.type}</TableCell>
                            <TableCell>${transaction.amount}</TableCell>
                            <TableCell>{transaction.status}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
            <div className="flex justify-center mt-4 space-x-2">
                {Array.from ({ length: totalPages }, (_, index) => (
                    <Button
                    key={index + 1}
                    onClick={() => setCurrentPage(index + 1)}
                    variant={currentPage === index + 1 ? "default" : "outline"} 
                    className="px-4 py-1.5"
                >
                    {index + 1}
                    </Button>
                
                ))}
            </div>
        </div>
    );
}



