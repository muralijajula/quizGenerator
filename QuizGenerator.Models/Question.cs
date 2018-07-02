namespace QuizGenerator.Models
{
    public class Question : IEntity
    {
        public string QuestionText { get; set; }
        public string Answer { get; set; }



        #region IEntity Members

        public int Id { get; set; }

        #endregion
    }
}
