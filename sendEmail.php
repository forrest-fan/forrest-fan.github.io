<?php
	if(isset($_POST['email'])) {
		$email_to = "forrest.c.fan@gmail.com";
		$email_subject = "New Email!"
		
		function died($error) {
			echo "We are sorry, but the following error(s) were found in your submission: <br><br>";
			echo $error."<br><br>";
			echo "Please go <a href-\"index.html\">back</a> and fix these errors.";
			die();
		}
		
		if(!isset($_POST['email'])) {
			died("Please enter your email");
		}
		
		$email = $POST_['email'];
		
		$error_msg = "";
		$email_exp = "/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/";
		
		if (!preg_match($email_exp,$email)) {
			$error_msg .= "Please enter a valid email address";
		}
		
		$bad = array("content-type", "bcc:", "to:", "cc:", "href");
		$email_msg = str_replace($bad, "", $email);
		
		@mail($email_to, $email_subject, $email_msg);
	}
?>