

var users=[{
	'email':'as0160895@gmail.com',
	'password':123
},{'email':'hacker19091998@gmail.com',
'password';'1234'}]

var checklogin=function(email,password,allusers)
{
	var isCorrectEmail=false
    var isCorrectPassword=false
	for(currentuser in allusers)//start of loop
	{
		alert(currentuser)
		if(allusers[currentuser]['email']==email)
		{
			if(allusers[currentuser]['password']==password)
			{
				isCorrectPassword=true
				isCorrectEmail=true
				break
			}

			else {
				isCorrectPassword=false
				isCorrectEmail=true
				break;
			}
		}

		else
		{
			isCorrectPassword=false
				isCorrectEmail=false
		}
	}//end of loop
	if(isCorrectEmail==true&&isCorrectPassword==true)
	{
		alert("user logged in")
	}
	else if(isCorrectPassword==false&&isCorrectEmail=true)
	{
		alert("incorrect password")
	}
	else
	{
		alert("user does not authorized invalid user")
	}

}
alert("hiii")
var useremail=window.prompt('enter the email')
var userpassword=window.prompt('enter the password')
checklogin(useremail,userpassword,users)