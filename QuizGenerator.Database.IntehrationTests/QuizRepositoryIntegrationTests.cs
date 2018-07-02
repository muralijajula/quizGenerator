using System.Linq;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using QuizGenerator.Database.Repositories;
using QuizGenerator.Databse;
using QuizGenerator.Models;

namespace QuizGenerator.Database.IntehrationTests
{
    [TestClass]
    public class QuizRepositoryIntegrationTests
    {
       
        [TestMethod]
        public void QueryAllQuestions()
        {
            using (var dataContext = new QuizGeneratorContext())
            {
                var questionRepository = new Repository<Question>(dataContext);

                IQueryable<Question> questions = questionRepository
                     .GetAll();

                Assert.AreEqual(2, questions.Count());

            }
        }

        [TestInitialize]
        public void Init()
        {
            Cleanup();

            using (var dataContext = new QuizGeneratorContext())
            {
                var q1 = new Question { QuestionText = "Q1", Answer = "A" };
                var q2 = new Question { QuestionText = "Q2", Answer = "B" };

                dataContext.Questions.Add(q1);
                dataContext.Questions.Add(q2);
                dataContext.SaveChanges();
            }
        }

        [TestCleanup]
        public void Cleanup()
        {
            using (var dataContext = new QuizGeneratorContext())
            {
                IQueryable<Question> questions = dataContext.Questions.Select(x => x);

                foreach (Question question in questions)
                {
                    dataContext.Questions.Remove(question);
                }

                dataContext.SaveChanges();
            }
        }

    }
}
