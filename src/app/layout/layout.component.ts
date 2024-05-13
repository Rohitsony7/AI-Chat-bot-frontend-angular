import { Component, EventEmitter, Output } from '@angular/core';
import { LayoutModule } from './layout/layout.module';
import { QuerySectionComponent } from '../query-section/query-section.component';
import { GptResSectionComponent } from '../gpt-res-section/gpt-res-section.component';
import { MatSidenavModule } from '@angular/material/sidenav';
interface Prompt {
  icon: string;
  promptText: string;
}

@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  imports: [
    LayoutModule,
    QuerySectionComponent,
    GptResSectionComponent,
    MatSidenavModule,
  ],
})
export class LayoutComponent {
  receivedPrompts: Prompt[] = [];

  receivePrompt(prompts: Prompt[]) {
    this.receivedPrompts = prompts;
  }

  receiveSinglePrompt(prompt: Prompt) {
    this.receivedPrompts.push(prompt);
  }
}
