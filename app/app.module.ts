import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import {HttpModule} from "@angular/http";
import { ChatWindow }  from './components/ChatWindow';
import { UserGroup }  from './components/UserGroup';
import { ChatThread }  from './components/ChatThread';
import {List} from './util/List'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  declarations: [
    AppComponent,
    ChatWindow
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }