import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter"
})
export class SearchPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!value || !args) return value;
    else
      return value.filter(
        v => v.first_name.toLowerCase().indexOf(args.toLowerCase()) != -1
      );
  }
}
