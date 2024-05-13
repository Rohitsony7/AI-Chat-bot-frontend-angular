import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
declare var webkitSpeechRecognition: new () => any;
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Comment } from '@angular/compiler';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-command-box',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
  ],
  templateUrl: './input-command-box.component.html',
  styleUrl: './input-command-box.component.scss',
})
export class InputCommandBoxComponent {
  message: string = ''; // Input message
  isMuted: boolean = true; // Boolean to track mute/unmute state
  micState: string = 'off';
  @Output() messageSent: EventEmitter<string> = new EventEmitter<string>();

  toggleMicrophone() {
    // Toggle the mute/unmute state
    this.isMuted = !this.isMuted;
    this.micState = this.isMuted ? 'off' : 'on';
    // Additional logic based on mute/unmute state goes here
    if (this.isMuted) {
      console.log('Microphone muted');
    } else {
      console.log('Microphone unmuted');
      this.startListening();
    }
  }

  results: any;

  startListening() {
    if ('webkitSpeechRecognition' in window) {
      const vSearch = new webkitSpeechRecognition();
      vSearch.continuous = false;
      vSearch.interimresults = false;
      vSearch.lang = 'en-US';
      vSearch.start();
      vSearch.onresult = (e: { results: { transcript: any }[][] }) => {
        console.log(e);
        this.results = e.results[0][0].transcript;
        this.message += this.results;
        this.getResult();
        // this.sendMessage();
        // console.log(this.results);
        vSearch.stop();
        // this.toggleMicrophone();
      };
    } else {
      alert('Your browser does not support voice recognition!');
      this.toggleMicrophone();
    }
  }

  getResult() {
    console.log(this.results);
    this.message += this.results;
  }

  sendMessage() {
    if (this.message.trim() !== '') {
      // Emit the message to the parent component
      this.messageSent.emit(this.message);
      // Clear the input field after sending the message
      this.message = '';
    }
  }

  isStopped: boolean = true; // Initial state

  toggleIcon() {
    this.isStopped = !this.isStopped; // Toggle the state
  }
}
