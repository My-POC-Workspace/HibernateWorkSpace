<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<form action="UserServlet">
		<label>Enter Username for deletion : </label> 
		<input type="text"id="deluser" name="user">
		 <input type=submit> 
		<input type="hidden" name="act" value="DeleteUser">
	</form>
</body>
</html>