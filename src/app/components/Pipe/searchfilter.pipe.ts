import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform
 {
  transform(value : any[], filterString: string, branch:string): any[] {
    const result:any =[];
    if(!value || filterString==='' || branch ==='')
    {
      return value;
    }
    value.forEach((a:any)=>{
      if(a[branch].trim().toLowerCase().includes(filterString.toLowerCase())){
        result.push(a);
      }
    });
    return result;
  }

}
