import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'limit',
    pure: false
})
export class ResultPipe implements PipeTransform {

    transform( value: any, args?: any ): any {
        return value.filter( ( item, index ) => index < args );
    }

}
