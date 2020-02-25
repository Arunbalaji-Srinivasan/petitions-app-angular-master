import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { ChatDialogComponent } from './chat-dialog/chat-dialog.component';
import { CommonModule } from '@angular/common';
import { ChatbotModule } from '../chatbot.module';
import {ChatService} from '../chat.service';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
 


@NgModule({
  declarations: [ChatDialogComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
exports: [ ChatDialogComponent ], // <-- export here
 
providers: [ChatService]

})
export class ChatModule { }
