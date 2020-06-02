using System;
using System.Collections.Generic;
using _NetCore_Angular.Controllers;

namespace _NetCore_Angular.Data{
    public static class Data{

        public static List<Book> Books => allbooks;

        static List<Book> allbooks = new List<Book>(){
            new Book(){
                Id = 1,
                Title = "Managing Oneself",
                Description = "We live in an age of unprecendented opportunity: with all in his own way",
                Author = "Jay Krishna Reddy",
                Rate = (double)4.9,
                DateStart = new DateTime(2020,06,01),
                DateEnd =  null
            },
            new Book(){
                Id = 2,
                Title = "Managing Oneself",
                Description = "We live in an age of unprecendented opportunity: with all in his own way",
                Author = "Mohit Ande",
                Rate = (double)4.9,
                DateStart = new DateTime(2020,06,01),
                DateEnd =  null
            },
            new Book(){
                Id = 3,
                Title = "Managing Oneself",
                Description = "We live in an age of unprecendented opportunity: with all in his own way",
                Author = "Bobby Kalyan",
                Rate = (double)4.9,
                DateStart = new DateTime(2020,01,02),
                DateEnd =  null
            },
            new Book(){
                Id = 4,
                Title = "Managing Oneself",
                Description = "We live in an age of unprecendented opportunity: with all in his own way",
                Author = "Asheesh Ahmed",
                Rate = (double)5.1,
                DateStart = new DateTime(2020,04,27),
                DateEnd =  null
            },
            new Book(){
                Id = 5,
                Title = "Managing Oneself",
                Description = "We live in an age of unprecendented opportunity: with all in his own way",
                Author = "Praveen Damera",
                Rate = (double)3.8,
                DateStart = new DateTime(2020,11,27),
                DateEnd =  null
            }
        };

    }
}