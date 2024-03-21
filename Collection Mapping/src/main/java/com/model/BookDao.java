package com.model;

import java.util.List;

import com.pojo.Book;
import com.pojo.StoryBook;

public interface BookDao {
		public boolean addBook(StoryBook book);
		public List<StoryBook> getAllStoryBooks();

}