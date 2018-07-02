import { Component } from '@angular/core';

//import { QuestionComponent } from "./components/question/question.component";
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    name = 'Welcome to C# Corner';

    public shouldShowQuestionModal: boolean = false;

    public shouldShowGenerateQuestionModal: boolean =  false;

    public onClickAddQuestion() {
        this.shouldShowQuestionModal = true;
        this.shouldShowGenerateQuestionModal = false;
    }

   public onClickGenerateQuestion() {
        this.shouldShowQuestionModal = false;
        this.shouldShowGenerateQuestionModal = true;
    }
}
