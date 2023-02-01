import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-table-ui',
  templateUrl: './table-ui.component.html',
  styleUrls: ['./table-ui.component.scss']
})
export class TableUiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toppings = new FormControl('');

  toppingList: string[] = ['ishir.shah@corpository.com', 'vaishal.shah@corpository.com', 'nipam.shah@corpository.com', 'aniket.shah@corpository.com', 'mihir.baliya@corpository.com'];

}
