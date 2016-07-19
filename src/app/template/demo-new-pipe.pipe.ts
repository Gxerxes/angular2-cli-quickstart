import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'demoNewPipe'
})
export class DemoNewPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
