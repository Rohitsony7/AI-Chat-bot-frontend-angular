import { Component, EventEmitter, Output } from "@angular/core";
import { QuerySectionModule } from "./query-section.module";
import { PromptsComponent } from "./prompts/prompts.component";
import { InputCommandBoxComponent } from "./input-command-box/input-command-box.component";
interface Prompt {
  icon: string;
  promptText: string;
}
@Component({
  selector: "app-query-section",
  standalone: true,
  templateUrl: "./query-section.component.html",
  styleUrl: "./query-section.component.scss",
  imports: [QuerySectionModule, PromptsComponent, InputCommandBoxComponent],
})
export class QuerySectionComponent {
  @Output() promptChanged: EventEmitter<Prompt[]> = new EventEmitter<
    Prompt[]
  >();

  @Output() sendNewPromptToGPT: EventEmitter<Prompt> =
    new EventEmitter<Prompt>();

  //ALL THE PREDEFINED PROMPTS

  prompts: Prompt[] = [
    {
      icon: "./assets/amazon-icon/icons8-amazon-30.png",
      promptText: "Add the book zero to one in my amazon account ",
    },
    {
      icon: "exit_to_app",
      promptText: "What is the top post on hackernews ",
    },
    {
      icon: "fastfood",
      promptText:
        "Reserve a table at Fogo de chao in San Jose for 2 people via OpenTable ",
    },
    {
      icon: "trending_up",
      promptText: "How much did NVIDIA stock gain today?",
    },
  ];

  //this will create the prompt form the existing questions
  addPrompt(promptText: string) {
    this.sendNewPromptToGPT.emit({ icon: "person", promptText: promptText });
  }

  //This will send an event to laypout to wiht prompt
  getPrompt(prompt: Prompt) {
    this.sendNewPromptToGPT.emit(prompt);
  }
}
