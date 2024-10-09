import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransactionService } from '../transaction.service';
import { Transaction } from '../transaction.model';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent implements OnInit {
  transactionForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private transactionService: TransactionService
  ) {
    this.transactionForm = this.fb.group({
      amount: ['', Validators.required],
      date: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.transactionForm.valid) {
      const transaction: Transaction = {
        id: Math.random(), // Generate a random ID for the transaction
        amount: this.transactionForm.value.amount,
        date: this.transactionForm.value.date,
        description: this.transactionForm.value.description
      };
      this.transactionService.addTransaction(transaction);
      this.transactionForm.reset(); // Reset the form after submission
    }
  }
}
