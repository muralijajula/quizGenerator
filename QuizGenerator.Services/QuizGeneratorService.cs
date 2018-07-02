using System.Collections.Generic;
using System.Linq;
using QuizGenerator.Database.Repositories;
using QuizGenerator.Databse;
using QuizGenerator.Models;

namespace QuizGenerator.Services
{
    public class QuizGeneratorService : IQuizGeneratorService
    {

        public void Insert(Question question)
        {
            using (var dataContext = new QuizGeneratorContext())
            {
                dataContext.Questions.Add(question);
                dataContext.SaveChanges();
            }
        }

        public IEnumerable<Question> GetAll()
        {
            using (var dataContext = new QuizGeneratorContext())
            {
                var questionRepository = new Repository<Question>(dataContext);

                IQueryable<Question> questions = questionRepository
                     .GetAll();

                return questions;
            }
        }

        public Question GetById(int id)
        {
            using (var dataContext = new QuizGeneratorContext())
            {
                var questionRepository = new Repository<Question>(dataContext);

                Question question = questionRepository
                    .GetById(id);

                return question;
            }
        }
    }
}
