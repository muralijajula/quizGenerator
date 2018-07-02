using System.Data.Entity;
using QuizGenerator.Models;

namespace QuizGenerator.Databse
{
    public class QuizGeneratorContext : DbContext
    {
        public DbSet<Question> Questions { get; set; }
    }

}
