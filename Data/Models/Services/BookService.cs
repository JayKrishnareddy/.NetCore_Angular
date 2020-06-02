using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using _NetCore_Angular.Controllers;

namespace _NetCore_Angular.Data{
    public class BookService : IBookService
    {
        public void AddBook(Book newbook)
        {
            Data.Books.Add(newbook);
        }

        public void DeleteBook(int id)
        {
            var book = Data.Books.FirstOrDefault(c=>c.Id == id);
            Data.Books.Remove(book);
        }

        public List<Book> GetAllBooks()
        {
           return Data.Books.ToList();
        }

        public Book GetBookById(int Id)
        {
           return Data.Books.FirstOrDefault(c=>c.Id == Id);
        }

        public void UpdateBook(int Id, Book newbook)
        {
           var oldbook = Data.Books.FirstOrDefault(c=>c.Id == Id);
           if(oldbook != null){
               oldbook.Title = newbook.Title;
               oldbook.Author = newbook.Author;
               oldbook.Description = newbook.Description;
               oldbook.Rate = newbook.Rate;
               oldbook.DateStart = newbook.DateStart;
               oldbook.DateEnd = newbook.DateEnd;

           }
        }
    }
}