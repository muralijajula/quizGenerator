
import { Component } from "@angular/core";

import { Http } from '@angular/http';

import { Question } from '../../models/question.model';

import { QuizService } from '../../services/quiz.service'


@Component({
    selector: "take-quiz",
    templateUrl: './takequiz.component.html', 
})

export class TakeQuizComponent {

    public question: Question;

    public displayAnswer: boolean = false;   

    questionVM: QuestionViewModel;

    constructor(private quizService: QuizService) {

        this.quizService.getquestion().subscribe(result => {
            if (result) {
                this.questionVM = result.json() as QuestionViewModel;
                this.question = new Question(this.questionVM.QuestionText, this.questionVM.Answer);
                this.displayAnswer = false;               
            }
        }, error => console.error(error));
    }

    public showAnswer() {
        this.displayAnswer = true;
    }

    public nextquestion() {
        this.quizService.getquestion().subscribe(result => {
            if (result) {
                this.questionVM = result.json() as QuestionViewModel;
                this.question = new Question(this.questionVM.QuestionText, this.questionVM.Answer);
                this.displayAnswer = false;               
            }
        }, error => console.error(error));
    }
}

export class QuestionViewModel {
    public QuestionText: string;
    public Answer: string;
}
