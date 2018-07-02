using System.Linq;

namespace QuizGenerator.Database.Repositories
{
    public interface IRepository<T>
    {
        void Insert(T entity);
        IQueryable<T> GetAll();
        T GetById(int id);
    }
}
