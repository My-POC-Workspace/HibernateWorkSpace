<%@page import="com.mysql.cj.protocol.Message"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<form action="UserServlet" method="post">
		<h1 class="title">Register here...</h1>
		<label>USER</label> <input type="radio" checked="checked" name="radio"
			id="user"> <span> <label>ADMIN</label> <input
			type="radio" name="radio" id="admin">
		</span>
		<div class="login-div">
			<div class="logo">
				<!--             <img src="./Media/Car_dealer.jpg" id="companyLogoforR"> -->
			</div>
			<div id="punch">Welcome to Kabab FoodService...</div>
			<div class="email">
				<input type="text"  name="username"
					placeholder="Enter your Username" onblur="validateUser()">
			</div>
			<div id="err1"></div>
			<input type = "text" name = name placeholder = "Enter your Name"> 
			<div class="pass">
				<input type="email" id="pass" name="email"
					placeholder="Enter your Email" onblur="validateEmail()">
			</div>
			<div class="email">
				<input type="number" id="contact" name="userContact"
					placeholder="Enter your Contactno" onblur="validatePass()">
			</div>
		<div class="email">
				<input type="text" id="add" name="userAddress"
					placeholder="Enter your Address" onblur="validatePass()">
			</div>
			<div id="err2"></div>
			<div class="email">
				<input type="password" id="pass1" name="pass"
					placeholder="Enter your password" onblur="validatePass()">
			</div>
			<div id="err3"></div>
			

			<input type="submit" value="REGISTER" id="submit"
				onclick="validateLogin()">
			<!-- <input type="submit" value="REGISTER"> -->
			<h4 class="log-register">
				Already have an account? <span> <a href="./Login.jsp"
					id="loginHo">Login</a></span>
			</h4>
		</div>
		<input type="hidden" name="act" value="registration">
		<!-- 		<script src="./Scripts/Register.js"></script> -->
	</form>
<%
String msg = request.getParameter("message");
if("success".equals(msg)){
%>
<h3>Registered Successfully...</h3>
<%
} 
%>

<%
if("fail".equals(msg)){
%>
<h3>Something Went Wrong...</h3>
<% 
}
%>  
</body>
</html>