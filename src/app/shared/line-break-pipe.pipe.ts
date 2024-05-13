import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lineBreak',
  standalone: true,
})
export class LineBreakPipe implements PipeTransform {
  transform(value: string, maxLength: number): string {
    const words = value.split(' ');
    let lines = [''];
    let currentLine = 0;

    words.forEach((word) => {
      if (lines[currentLine].length + word.length > maxLength) {
        currentLine++;
        lines[currentLine] = word;
      } else {
        lines[currentLine] += (lines[currentLine] === '' ? '' : ' ') + word;
      }
    });

    let result = '';
    lines.forEach((line, index) => {
      if (index === 0) {
        result += `<strong>${line}</strong>`;
      } else {
        result += `<br>${line}`;
      }
    });

    return result;
  }
}
