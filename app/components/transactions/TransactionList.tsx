import { useState, useEffect } from "react"
import { useUser } from "@clerk/nextjs"
import { useRouter } from "next/navigation"
import LoadingSpinner from "@/app/components/LoadingSpinner"
import { Transaction } from "@/types/transaction"
import { TransactionItem } from "@/app/components/transactions/TransactionItem"
import { TransactionDetailsDialog } from "@/app/components/transactions/TransactionDetailsDialog"
import { TransactionFilter } from "@/app/components/transactions/TransactionFilter"
import { transformProductToTransaction, filterTransactions } from "@/app/utils/transactionUtils"

export function TransactionList() {
  const { isSignedIn, isLoaded } = useUser()
  const router = useRouter()
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null)
  const [open, setOpen] = useState(false)
  const [filter, setFilter] = useState<"all" | "income" | "expense">("all")

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push("/sign-in")
      return
    }

    if (isSignedIn) {
      fetch("https://dummyjson.com/products?limit=2000")
        .then((res) => res.json())
        .then((data) => {
          const transformedTransactions = data.products.map(transformProductToTransaction)
          setTransactions(transformedTransactions)
          setLoading(false)
        })
        .catch((error) => {
          console.error("Error fetching transactions:", error)
          setLoading(false)
        })
    }
  }, [isSignedIn, isLoaded, router])

  const openTransactionDetails = (transaction: Transaction) => {
    setSelectedTransaction(transaction)
    setOpen(true)
  }

  const filteredTransactions = filterTransactions(transactions, filter)

  if (!isLoaded || loading) {
    return <LoadingSpinner />
  }

  if (!isSignedIn) {
    return null
  }

  return (
    <main className="min-h-screen  text-color px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
      <div className="max-w-4xl mx-auto relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="w-full h-full bg-[linear-gradient(to_right,var(--primary)_1px,transparent_1px),linear-gradient(to_bottom,var(--primary)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-6 sm:mb-8 mt-10">
          <h1 className="text-xl md:text-3xl font-bold text-primary">
            Recent Transactions
          </h1>
          
          <TransactionFilter value={filter} onChange={setFilter} />
        </div>

        <ul className="space-y-4 relative z-10 max-h-[calc(100vh-180px)] sm:max-h-[calc(100vh-200px)] overflow-y-auto pr-2">
          {filteredTransactions.map((transaction) => (
            <TransactionItem
              key={transaction.id}
              transaction={transaction}
              onViewDetails={openTransactionDetails}
            />
          ))}
        </ul>
      </div>

      <TransactionDetailsDialog
        transaction={selectedTransaction}
        open={open}
        onOpenChange={setOpen}
      />
    </main>
  )
} 