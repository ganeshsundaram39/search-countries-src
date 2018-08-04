import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "searchResults"
})
export class SearchResultsPipe implements PipeTransform {
  transform(value: any, searchedText: string): any {
    if (!searchedText) return null;

    return value.filter(v => v.name.match(new RegExp(searchedText, "gi")));
  }
}
