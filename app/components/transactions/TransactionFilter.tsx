import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface TransactionFilterProps {
  value: string
  onChange: (value: string) => void
}

export function TransactionFilter({ value, onChange }: TransactionFilterProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[180px] bg-black/80 backdrop-blur-sm border border-[#9d00ff]/30">
        <SelectValue placeholder="Filter by type" />
      </SelectTrigger>
      <SelectContent className="bg-black border border-[#9d00ff]/30">
        <SelectItem value="all">All</SelectItem>
        <SelectItem value="income">Income</SelectItem>
        <SelectItem value="expense">Expenses</SelectItem>
      </SelectContent>
    </Select>
  )
} 