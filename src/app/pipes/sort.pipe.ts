import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Injectable()
@Pipe({
  name: 'typeFilter',
})
export class SortPipe implements PipeTransform { 
  transform(list: any[], filterText: string): any {
      debugger
      switch (filterText) {
        case "name":
            return list.sort((a, b) =>{
                    return  a.name?.localeCompare(b.name, 'en', { numeric: true }); 
            })
        case "height":
            return list.sort((a, b) =>{
                return b.height - a.height;
        })
        case "weight":
            return list.sort((a, b) =>{
                return b.weight - a.weight;
            })

        default:
        return list;
           
      }

  }
}
