import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { WelcomTemplateComponent } from './welcom-template/welcom-template.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

interface Prompt {
  icon: string;
  promptText: string;
}

@Component({
  selector: 'app-gpt-res-section',
  standalone: true,
  templateUrl: './gpt-res-section.component.html',
  styleUrl: './gpt-res-section.component.scss',
  imports: [
    CommonModule,
    WelcomTemplateComponent,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
  ],
})
export class GptResSectionComponent {
  @Input() prompts: any = [];
  typedText: string = '';
  isBlinking: boolean = true;

  getSinglePrompt($prompt: Prompt) {
    console.log('This is in gpt res :::', $prompt);
    this.prompts.push($prompt);
  }

  getGptRes(promptText: string) {
    return 'The Ai Chat Bot now in learing phase. Please give it some to train on the method and will get to you with more power. ';
  }
}
