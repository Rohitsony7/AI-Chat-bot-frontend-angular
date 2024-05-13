import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { LineBreakPipe } from "../../shared/line-break-pipe.pipe";

interface Prompt {
  icon: string;
  promptText: string;
}

@Component({
  selector: "app-prompts",
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
    LineBreakPipe,
  ],
  templateUrl: "./prompts.component.html",
  styleUrl: "./prompts.component.scss",
})
export class PromptsComponent {
  @Output() promptSend: EventEmitter<Prompt> = new EventEmitter<Prompt>();

  @Input() prompts: Prompt[] = [
    // {
    //   icon: "person",
    //   promptText: "Add the book zero to one in my amazon account ",
    // },
    // {
    //   icon: "person",
    //   promptText: "What is the top post on hackernews ",
    // },
    // {
    //   icon: "person",
    //   promptText:
    //     "Reserve a table at Fogo de chao in San Jose for 2 people via OpenTable ",
    // },
    // {
    //   icon: "person",
    //   promptText: "How much did NVIDIA stock gain today?",
    // },
  ];

  getGptRes(item: Prompt) {
    this.promptSend.emit(item);
  }

  isMaterialIcon(icon: string): any {
    // Check if the icon starts with 'mat-' prefix (indicating Angular Material icon)
    return (
      icon &&
      ["person", "exit_to_app", "fastfood", "trending_up"].includes(icon)
    );
  }

  constructor() {}
}
