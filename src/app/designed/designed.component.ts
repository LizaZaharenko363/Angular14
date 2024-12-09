import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Material Imports
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatBottomSheetModule, MatBottomSheet, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
interface Product {
  name: string;
  price: number;
  selected: boolean;
}

@Component({
  selector: 'app-designed',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatGridListModule,
    MatCardModule,
    MatCheckboxModule,
    MatBottomSheetModule,
    MatListModule,
    MatButtonModule,
  ],
  templateUrl: './designed.component.html',
  styleUrl: './designed.component.css',
})
export class DesignedComponent {
  products: Product[] = [
    { name: 'Laptop', price: 999.99, selected: false },
    { name: 'Smartphone', price: 599.99, selected: false },
    { name: 'Headphones', price: 199.99, selected: false },
    { name: 'Tablet', price: 349.99, selected: false },
    { name: 'Smartwatch', price: 249.99, selected: false },
    { name: 'Wireless Earbuds', price: 129.99, selected: false }
  ];

  selectedProducts: any[] = [];

  constructor(private bottomSheet: MatBottomSheet) {}

  onProductSelect(product: any) {
    if (product.selected) {
      this.selectedProducts.push(product);
    } else {
      this.selectedProducts = this.selectedProducts.filter(p => p !== product);
    }
  }

  openBottomSheet() {
    const bottomSheetRef = this.bottomSheet.open(ProductBottomSheetComponent, {
      data: { products: this.selectedProducts }
    });
  }
}

@Component({
  selector: 'app-product-bottom-sheet',
  standalone: true,
  imports: [MatListModule, CommonModule],
  templateUrl: './bottom-sheet.component.html',
})
export class ProductBottomSheetComponent {
  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any) {}
}
