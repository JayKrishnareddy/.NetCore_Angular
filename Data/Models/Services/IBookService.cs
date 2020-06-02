using System.Collections.Generic;
using System.Threading.Tasks;
using _NetCore_Angular.Controllers;

namespace _NetCore_Angular.Data{
    public interface IBookService{
      
        List<Book> GetAllBooks();
        Book GetBookById(int Id);
        void UpdateBook(int Id, Book newbook);
        void DeleteBook(int id);
        void AddBook(Book newbook);
    }
}