import {
  Component,
  OnInit,
  ViewChild,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
import { NgForm } from "../../../node_modules/@angular/forms";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  @Input() searchedText: string = "";
  @Input() searchedType: string = "All";
  categories: string[] = ["all", "region", "currency", "language"];
  showFilter: boolean = true;
  @Output() categorySelecting = new EventEmitter<string>();
  @Output() enteringText = new EventEmitter<string>();
  @ViewChild("f") searchForm: NgForm;
  constructor() {}
  ngOnInit() {}
  onSubmit() {}
  userEnteringText() {
    // emit the entered text by user
    this.enteringText.emit(this.searchedText);
  }

  userSelectingCategory() {
    // emit the selected category by user
    this.categorySelecting.emit(this.searchedType);
  }
}
