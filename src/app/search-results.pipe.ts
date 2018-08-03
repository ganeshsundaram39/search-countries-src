import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "searchResults"
})
export class SearchResultsPipe implements PipeTransform {
  transform(value: any, searchedText: string): any {
    if (!searchedText) return null;

    return value.filter(name => name.match(new RegExp(searchedText, "gi")));
  }
}
