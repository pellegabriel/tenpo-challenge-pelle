import { Briefcase, Utensils, ShoppingCart, Home, Gift, CreditCard } from "lucide-react"

export const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'salary':
      return <Briefcase className="h-5 w-5" />
    case 'food':
      return <Utensils className="h-5 w-5" />
    case 'shopping':
      return <ShoppingCart className="h-5 w-5" />
    case 'housing':
      return <Home className="h-5 w-5" />
    case 'gift':
      return <Gift className="h-5 w-5" />
    default:
      return <CreditCard className="h-5 w-5" />
  }
} 