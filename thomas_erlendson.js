//Thomas Erlendson

function formValidate()
{
	if(!validateId("name"))
	{
		window.alert("Please enter the required field: Who are you?");
		return setStyle("nameLabel");
	}
	else if (!validateId("email"))
	{
		window.alert("Please enter the required field: What is your (non-spam) email?");
		return setStyle("emailLabel");
	}
	else if(!validateId("whatToDo"))
	{
		window.alert("Please enter the required field: What do you want to do?");
		return setStyle("doLabel");
	}
	else if(!validateId("availability"))
	{
		window.alert("Please enter the required field: Weekly Availability");
		return setStyle("availLabel");
	}
	else if(!validateId("nobot") || document.getElementById("nobot").value != 8)
	{
		window.alert("Incorrect Field: Prove you're human");
		return setStyle("nobotLabel");
	}
	//validate the email
	else if (!regex.test(document.getElementById("email").value))
	{
		window.alert("Please enter a valid email address");
		return setStyle("emailLabel");
	}
	else 
	{
		return true;
	}
}

//make sure input is not empty
function validateId(id) 
{
	if(document.getElementById(id).value == "")
	{
		return false;
	}
	return true;
}

//changes color to red
function setStyle(id)
{
	document.getElementById(id).classList.add("error");
	return false;
}