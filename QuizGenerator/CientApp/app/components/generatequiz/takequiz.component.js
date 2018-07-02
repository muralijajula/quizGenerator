"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var question_model_1 = require("../../models/question.model");
var quiz_service_1 = require("../../services/quiz.service");
var TakeQuizComponent = /** @class */ (function () {
    function TakeQuizComponent(quizService) {
        var _this = this;
        this.quizService = quizService;
        this.displayAnswer = false;
        this.quizService.getquestion().subscribe(function (result) {
            if (result) {
                _this.questionVM = result.json();
                _this.question = new question_model_1.Question(_this.questionVM.QuestionText, _this.questionVM.Answer);
                _this.displayAnswer = false;
            }
        }, function (error) { return console.error(error); });
    }
    TakeQuizComponent.prototype.showAnswer = function () {
        this.displayAnswer = true;
    };
    TakeQuizComponent.prototype.nextquestion = function () {
        var _this = this;
        this.quizService.getquestion().subscribe(function (result) {
            if (result) {
                _this.questionVM = result.json();
                _this.question = new question_model_1.Question(_this.questionVM.QuestionText, _this.questionVM.Answer);
                _this.displayAnswer = false;
            }
        }, function (error) { return console.error(error); });
    };
    TakeQuizComponent = __decorate([
        core_1.Component({
            selector: "take-quiz",
            templateUrl: './takequiz.component.html',
        }),
        __metadata("design:paramtypes", [quiz_service_1.QuizService])
    ], TakeQuizComponent);
    return TakeQuizComponent;
}());
exports.TakeQuizComponent = TakeQuizComponent;
var QuestionViewModel = /** @class */ (function () {
    function QuestionViewModel() {
    }
    return QuestionViewModel;
}());
exports.QuestionViewModel = QuestionViewModel;
//# sourceMappingURL=takequiz.component.js.map