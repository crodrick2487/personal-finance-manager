import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewTransactionsComponent } from './view-transactions/view-transactions.component';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';
import { TransactionService } from './transaction.service'; // Import your service

@NgModule({
  declarations: [
    AppComponent,
    ViewTransactionsComponent,
    AddTransactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [TransactionService], // Provide your service
  bootstrap: [AppComponent]
})
export class AppModule { }
