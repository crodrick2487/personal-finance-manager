import { Injectable } from '@angular/core';
import { Transaction } from './transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private transactions: Transaction[] = []; // Array to hold transactions

  constructor() { }

  addTransaction(transaction: Transaction) {
    this.transactions.push(transaction);
  }

  getTransactions() {
    return this.transactions;
  }
}
