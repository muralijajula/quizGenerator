using System.Collections.Generic;
using QuizGenerator.Models;

namespace QuizGenerator.Services
{
    public interface IQuizGeneratorService
    {
        void Insert(Question question);
        Question GetById(int id);

        IEnumerable<Question> GetAll();
    }
}