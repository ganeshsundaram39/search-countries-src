import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() searchedText: string;
  @Input() searchedType = 'All';
  categories: string[] = ['name', 'region', 'currency', 'language'];
  showFilter = true;
  @Output() categorySelecting = new EventEmitter<string>();
  @Output() enteringText = new EventEmitter<string>();
  constructor() {}
  ngOnInit() {}
  onSubmit() {}
  userEnteringText() {
    // emit the entered text by user
    this.enteringText.emit(this.searchedText);
  }

  userSelectingCategory() {
    // emit the selected category by user
    console.log(this.searchedType);
    this.categorySelecting.emit(this.searchedType);
  }
}
