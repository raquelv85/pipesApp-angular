import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'customFlyingPipe'
})
export class flyingPipe implements PipeTransform {
    transform(value: string): string {
     return value ? 'Si' : 'No';
    }

}