export class Question {
    constructor(questionTitle: string, answer: string) {
        this.questionText = questionTitle;
        this.answer = answer;      
    }

    public questionText: string;
    public answer: string;
  
}
