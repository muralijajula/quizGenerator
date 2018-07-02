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
var QuestionComponent = /** @class */ (function () {
    function QuestionComponent(quizService) {
        this.quizService = quizService;
        this.question = new question_model_1.Question("", "");
        this.success = false;
    }
    QuestionComponent.prototype.addQuestion = function () {
        var _this = this;
        this.quizService.addquestion(this.question).subscribe(function (result) {
            _this.question = new question_model_1.Question("", "");
            _this.success = true;
        }, function (error) { return console.error(error); });
    };
    QuestionComponent = __decorate([
        core_1.Component({
            selector: "app-question",
            templateUrl: './question.component.html',
        }),
        __metadata("design:paramtypes", [quiz_service_1.QuizService])
    ], QuestionComponent);
    return QuestionComponent;
}());
exports.QuestionComponent = QuestionComponent;
//# sourceMappingURL=question.component.js.map