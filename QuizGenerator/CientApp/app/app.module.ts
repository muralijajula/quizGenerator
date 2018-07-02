import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { QuestionComponent } from './components/question/question.component';
import { TakeQuizComponent } from './components/generatequiz/takequiz.component';
import { QuizService } from './services/quiz.service';

@NgModule({
    imports: [BrowserModule,
        FormsModule, CommonModule,
        HttpModule],
    providers: [QuizService],
    declarations: [AppComponent, QuestionComponent, TakeQuizComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
