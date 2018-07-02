using QuizGenerator.Services;
using System.Web.Mvc;
using System.Linq;
using QuizGenerator.Models;
using System.Collections.Generic;
using System;

namespace QuizGenerator.Controllers
{
    public class QuizGeneratorController : Controller
    {
        private readonly IQuizGeneratorService _quizGeneratorService;

        private  static List<Question> m_questions = new List<Question>();

        public QuizGeneratorController()
        {
            //note: could be better by injecting dependency using autofaq or someother
            _quizGeneratorService = new QuizGeneratorService();
        }
        // GET: QuizGenerator
        public ActionResult Index()
        {
            return View();
        }

        // GET: QuizGenerator/getQuestion
        public JsonResult GetQuestion()
        {
            // var question = _quizGeneratorService.GetAll()?.FirstOrDefault();

            var question = m_questions.OrderBy(x => Guid.NewGuid()).FirstOrDefault();
            return Json(question, JsonRequestBehavior.AllowGet);
        }      

        // POST: QuizGenerator/addQuestion
        [HttpPost]
        public JsonResult AddQuestion(Question question)
        {
            m_questions.Add(question);
           // _quizGeneratorService.Insert(question);

            return Json(true,JsonRequestBehavior.AllowGet);
          
        }
        
    }
}
