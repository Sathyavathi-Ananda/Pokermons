import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  
  transform(list: any, searchText?: any): any {
debugger
    if(searchText !="" && searchText!=undefined){
        return  list.filter((item: { name: string; }) =>{
  
          return item.name?.toLowerCase().includes(searchText?.toLowerCase()) })
      }
           
      else{
        return list
      }
      
    }
  }

