<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<form action="FoodServlet" method = "post">
	<h1>Add Food...</h1>
	<label>Add foodname : </label>
	<input type = "text" id = "name" name = "addName">
	<label>Add foodId : </label>
	<input type = "number" id = "id" name = "addId">
	<label>Add foodPrice : </label>
	<input type = "number" id = "price" name = "addPrice">
	<label>Mention Type : </label>
	<input type = "text" id = "type" name = "addType">
	<input type = "submit" value = "Submit">
	<input type = "hidden"  name = "act" value = "AddFood">
	</form>
</body>
</html>