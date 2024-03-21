package com.test;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.model.AuthorCrud;
import com.model.BookCrud;
import com.pojo.Author;
import com.pojo.Book;
import com.pojo.StoryBook;

public class test {

	public static void main(String[] args) {
	
		  BookCrud bookcrud=new BookCrud(); 
		 /* 
		 * Author auth=new Author(156,"Ramesh Kumar", 30); boolean
		 * b1=authcrud.addAuthor(auth); Book book=new
		 * Book("Learn Basics of Python",550,auth); boolean b2=bookcrud.addBook(book);
		 * System.out.println(b1);
		 */
		
		Author author1=new Author(23,"Sandesh Patil",12);
		Author author2=new Author(24,"Kishor Kumar",20);
		Author author3=new Author(25,"Sadhana Parel",22);
		
		Set<Author> authors=new HashSet<>();
		authors.add(author1);
		authors.add(author2);
		authors.add(author3);
		
		StoryBook storyBook=new StoryBook(211,"Syndrella",780,authors);
		
		boolean bb=bookcrud.addBook(storyBook);
		System.out.println(bb);
		
		List<StoryBook> b1 = bookcrud.getAllStoryBooks();
		System.out.println(b1);
	}

}