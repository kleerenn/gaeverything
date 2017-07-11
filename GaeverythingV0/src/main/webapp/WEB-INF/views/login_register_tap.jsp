<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8" session="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!--Tabs -->
<div class="sign-in-form style-1">
	<ul class="tabs-nav">
		<li class=""><a href="#tab1">Log In</a></li>
		<li><a href="#tab2">Register</a></li>
	</ul>
	<div class="tabs-container alt">
		<!-- Login -->
		<div class="tab-content" id="tab1" style="display: none;">
			<form action="/login" method="post" class="login">
				<p class="form-row form-row-wide">
					<label for="username">Username:
						<i class="im im-icon-Male"></i>
						<input type="text" class="input-text" name="email" id="username" value="" />
					</label>
				</p>

				<p class="form-row form-row-wide">
					<label for="password">Password:
						<i class="im im-icon-Lock-2"></i>
						<input class="input-text" type="password" name="pw" id="password"/>
					</label>
					<span class="lost_password">
						<a href="#" >Lost Your Password?</a>
					</span>
				</p>

				<div class="form-row">
					<input type="submit" class="button border margin-top-5" name="login" value="Login" />
					<div class="checkboxes margin-top-10">
						<input id="remember-me" type="checkbox" name="check">
						<label for="remember-me">Remember Me</label>
					</div>
				</div>
			</form>
		</div>

		<!-- Register -->
		<div class="tab-content" id="tab2" style="display: none;">
			<form  action="/signUp/registMember" method="post" class="register">
				<p class="form-row form-row-wide">
					<label for="username2">Nickname:
						<i class="im im-icon-Male"></i>
						<input type="text" class="input-text" name="nickname" id="username2" value="" />
					</label>
				</p>
					
				<p class="form-row form-row-wide">
					<label for="email2">Email Address:
						<i class="im im-icon-Mail"></i>
						<input type="text" class="input-text" name="email" id="email2" value="" />
					</label>
				</p>
	
				<p class="form-row form-row-wide">
					<label for="password1">Password:
						<i class="im im-icon-Lock-2"></i>
						<input class="input-text" type="password" name="pw" id="password1"/>
					</label>
				</p>
	
				<p class="form-row form-row-wide">
					<label for="password2">Repeat Password:
						<i class="im im-icon-Lock-2"></i>
						<input class="input-text" type="password" name="pw1" id="password2"/>
					</label>
				</p>
				<input type="submit" class="button border fw margin-top-10" name="register" value="Register" />
			</form>
		</div>
	</div>
</div>