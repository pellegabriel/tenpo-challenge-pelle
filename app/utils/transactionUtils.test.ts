import { transformProductToTransaction, filterTransactions } from './transactionUtils';
import { Transaction } from '@/types/transaction';

describe('transactionUtils', () => {
  describe('transformProductToTransaction', () => {
    it('should transform a product into a transaction with correct structure', () => {
      const mockProduct = {
        id: 1,
        price: 100,
        title: 'Test Product',
        category: 'test'
      };

      const result = transformProductToTransaction(mockProduct);

      expect(result).toHaveProperty('id', mockProduct.id);
      expect(result).toHaveProperty('description', mockProduct.title);
      expect(result).toHaveProperty('category', mockProduct.category);
      expect(result).toHaveProperty('type');
      expect(['income', 'expense']).toContain(result.type);
      expect(result).toHaveProperty('status');
      expect(['completed', 'pending']).toContain(result.status);
      expect(result).toHaveProperty('amount');
      expect(typeof result.amount).toBe('number');
      expect(result).toHaveProperty('date');
      expect(typeof result.date).toBe('string');
    });
  });

  describe('filterTransactions', () => {
    const mockTransactions: Transaction[] = [
      {
        id: 1,
        date: '2024-01-01',
        amount: 100,
        type: 'income',
        description: 'Test Income',
        status: 'completed',
        category: 'test'
      },
      {
        id: 2,
        date: '2024-01-02',
        amount: -50,
        type: 'expense',
        description: 'Test Expense',
        status: 'completed',
        category: 'test'
      }
    ];

    it('should return all transactions when filter is "all"', () => {
      const result = filterTransactions(mockTransactions, 'all');
      expect(result).toHaveLength(2);
      expect(result).toEqual(mockTransactions);
    });

    it('should filter income transactions correctly', () => {
      const result = filterTransactions(mockTransactions, 'income');
      expect(result).toHaveLength(1);
      expect(result[0].type).toBe('income');
    });

    it('should filter expense transactions correctly', () => {
      const result = filterTransactions(mockTransactions, 'expense');
      expect(result).toHaveLength(1);
      expect(result[0].type).toBe('expense');
    });
  });
}); 