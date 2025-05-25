import { Info, ArrowUpRight, ArrowDownLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Transaction } from "@/types/transaction"
import { getCategoryIcon } from "@/utils/transactionUtils"

interface TransactionItemProps {
  transaction: Transaction
  onViewDetails: (transaction: Transaction) => void
}

export function TransactionItem({ transaction, onViewDetails }: TransactionItemProps) {
  return (
    <li className="bg-background/80 backdrop-blur-sm rounded-md overflow-hidden border border-[#9d00ff]/30 hover:border-[var(--green-border)] transition-all duration-300 group">
      <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-start sm:items-center gap-2">
            <div className={`p-2 rounded-full shrink-0 ${
              transaction.type === 'income' ? 'bg-green-500/20' : 'bg-red-500/20'
            }`}>
              {transaction.type === 'income' ? 
                <ArrowUpRight className="h-5 w-5 text-green-500" /> : 
                <ArrowDownLeft className="h-5 w-5 text-red-500" />
              }
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-lg text-color group-hover:text-primary transition-colors truncate">
                {transaction.description}
              </h3>
              <div className="flex flex-wrap items-center gap-2 mt-1">
                <span className="text-sm text-dark-grey">{transaction.date}</span>
                <span className="text-dark-grey hidden sm:inline">•</span>
                <div className="flex items-center gap-1 text-dark-grey">
                  {getCategoryIcon(transaction.category)}
                  <span className="text-sm capitalize">{transaction.category}</span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm font-medium text-primary mt-2 group-hover:text-[#00ffc8]">
            ${Math.abs(transaction.amount).toLocaleString()}
          </p>
        </div>

        <Button
          onClick={() => onViewDetails(transaction)}
          variant="outline"
          size="sm"
          className="shrink-0 border border-[var(--medium-purple)]/50 bg-transparent text-color hover:bg-[var(--green-hover-light)] hover:text-[var(--green-hover)] hover:border-[var(--green-border)] transition-all duration-300"
        >
          <Info className="h-4 w-4 mr-2" />
          Details
        </Button>
      </div>
    </li>
  )
} 