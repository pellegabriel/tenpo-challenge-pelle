import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Transaction } from "@/types/transaction"

interface TransactionDetailsDialogProps {
  transaction: Transaction | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function TransactionDetailsDialog({ transaction, open, onOpenChange }: TransactionDetailsDialogProps) {
  if (!transaction) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={`sm:max-w-lg bg-background/95 backdrop-blur-md border ${
        transaction.status === 'completed' ? 'border-[#03cc78]/50' : 'border-[#ffa84b]/50'
      } text-color`}>
        <DialogHeader>
          <DialogTitle className="text-[#03cc78] text-xl font-bold">{transaction.description}</DialogTitle>
          <DialogDescription className="text-[#9b9b9b]">
            {transaction.date} - {transaction.category}
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="font-medium mr-2 text-[#e7ffee]">Status:</span>
              <span className={`text-sm ${
                transaction.status === 'completed' ? 'text-[#03cc78]' : 'text-[#ffa84b]'
              }`}>
                {transaction.status === 'completed' ? 'Completed' : 'Pending'}
              </span>
            </div>
            <span className={`text-xl font-bold ${
              transaction.type === 'income' ? 'text-[#03cc78]' : 'text-[#ff5e69]'
            }`}>
              ${Math.abs(transaction.amount).toLocaleString()}
            </span>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-[#9b9b9b]">Type:</span>
              <span className="text-[#e7ffee]">{transaction.type === 'income' ? 'Income' : 'Expense'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#9b9b9b]">Category:</span>
              <span className="text-[#e7ffee] capitalize">{transaction.category}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#9b9b9b]">Date:</span>
              <span className="text-[#e7ffee]">{transaction.date}</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 