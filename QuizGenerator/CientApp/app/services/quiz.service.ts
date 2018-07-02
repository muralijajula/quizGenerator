import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Question } from '../models/question.model';

@Injectable()
export class QuizService {

    constructor(private http: Http) { }
   
    getquestion() {
        return this.http.get('/quizGenerator/getQuestion');
    }

    addquestion(question: Question) {
        return this.http.post('/quizGenerator/addQuestion', question)
    }
}