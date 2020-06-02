using System.Threading.Tasks;
using _NetCore_Angular.Data;
using Microsoft.AspNetCore.Mvc;

namespace _NetCore_Angular.Controllers{
    [Route("api/[controller]")]
    public class BooksController : Controller{
        
         #region Created private property for IBookservice Interface
         private readonly IBookService  _bookService;
         #endregion

         #region Constructor for Books Controller for Dependency Injection of the services
        
        public BooksController(IBookService service)
        {
            _bookService = service;
        }
        #endregion
         
         #region Create/Adding new Book
         [HttpPost("AddBook")]
         public ActionResult AddBook([FromBody] Book book){
             _bookService.AddBook(book);
             return Ok("Added");
         }
         #endregion
         
         #region Read all Books 
        [HttpGet("[action]")]
        public ActionResult GetBooks(){
            var allbooks = _bookService.GetAllBooks();
            return Ok(allbooks);
        }
         #endregion

         #region Updating an existing record
         [HttpPut("UpdateBook/{id}")]
         public ActionResult UpdateBook(int id, [FromBody]Book book){
              _bookService.UpdateBook(id, book);
             return Ok(book);
         }
         #endregion

        #region Delete a Book
        [HttpDelete("DeleteBook/{id}")]
        public ActionResult DeleteBook(int id){
            _bookService.DeleteBook(id);
            return Ok();
        }
        #endregion

        #region Get a single book by Id
        [HttpGet("SingleBook/{id}")]
        public ActionResult GetBookById(int Id){
            var book = _bookService.GetBookById(Id);
            return Ok(book);
        }
        #endregion
    }
}