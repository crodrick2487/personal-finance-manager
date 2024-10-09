import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewTransactionsComponent } from './view-transactions/view-transactions.component';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';

const routes: Routes = [
  { path: 'transactions', component: ViewTransactionsComponent },
  { path: 'add-transaction', component: AddTransactionComponent },
  { path: '', redirectTo: '/transactions', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
