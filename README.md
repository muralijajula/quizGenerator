Quiz Generator
=============
sample output images:  https://github.com/muralijajula/quizGenerator/blob/master/AddQuestion.PNG
                       https://github.com/muralijajula/quizGenerator/blob/master/TakeQuiz.PNG
                       
Note: due to busy time schedules i could not able to write any TDD tests.

steps to run this project :


1) install node js
2)install angular cli
3)make sure you have visual studio 2017 and mssql databse
4)before run project go to the QuizGenerator web project and restore script packages
5)build and run the project


Projects Overview:

1)quizGenrator - Mvc Project

  -- it uses angular 5 features to create single page application
  -- connects to quizGenrator.service project to store or get questions

2)quizGenrator.service 

  -- is a reusable service layer projects which acts as mediator between data acess layer and front end

3)quizGenrator.databse

 -- is database projects which has entity framework code first context classes
 -- here we directly talk to databse to store or get changes

4)quizGenerator.models

 -- contains all the databse entites

5) quizGenrator.Repositories

  -- which uses repository pattern to communicate with databse

6)quizGenrator.Integrationtests

  -- has few tests to test data is saving in databse






