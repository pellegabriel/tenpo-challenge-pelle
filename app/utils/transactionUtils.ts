import { Transaction } from "@/types/transaction"

interface Product {
  id: number; 
  price: number;
  title: string;
  category: string;
}

export const transformProductToTransaction = (product: Product): Transaction => ({
  id: product.id,
  date: new Date(2024, Math.floor(Math.random() * 3), Math.floor(Math.random() * 28) + 1).toISOString().split('T')[0],
  amount: Math.random() > 0.5 ? product.price : -product.price,
  type: Math.random() > 0.5 ? "income" : "expense",
  description: product.title,
  status: Math.random() > 0.2 ? "completed" : "pending",
  category: product.category
})

export const filterTransactions = (transactions: Transaction[], filter: 'all' | 'income' | 'expense'): Transaction[] => {
  if (filter === "all") return transactions
  return transactions.filter(transaction => transaction.type === filter)
} 