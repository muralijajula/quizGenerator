
import { Component } from "@angular/core";

import { Http } from '@angular/http';

import { Question } from '../../models/question.model';

import { QuizService } from '../../services/quiz.service'

@Component({
    selector: "app-question",
    templateUrl: './question.component.html', 
})

export class QuestionComponent {
  
     question: Question = new Question("", "");

    public success: boolean = false;

    constructor(private quizService: QuizService) {       
    }

    addQuestion() { 
        this.quizService.addquestion(this.question).subscribe(result => {  
            this.question = new Question("", "");
            this.success = true;
        }, error => console.error(error));
    }
}
