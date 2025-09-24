function validation(){
    if(document.Formfill.Username.value=="")
    {
        document.getElementById("result").innerHTML="<span style='color: red;'>Enter username*</span>";
        return false;
    }

    else if(document.Formfill.Username.value.length<6)
    {
        document.getElementById("result").innerHTML="<span style='color: red;'>At least six letters*</span>";
        return false;
    }

    else if(document.Formfill.Email.value=="" || !document.Formfill.Email.value.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/))
    {
        document.getElementById("result").innerHTML="<span style='color: red;'>Enter your email*</span>";
        return false;
    }

    else if(document.Formfill.password.value=="")
    {
        document.getElementById("result").innerHTML="<span style='color: red;'>Enter your Password*</span>";
        return false;
    }

    else if(document.Formfill.password.length<6)
    {
        document.getElementById("result").innerHTML="<span style='color: red;'>Password must be 6-digits*</span>";
        return false;
    }

    else if(document.Formfill.cPassword.value=="")
    {
        document.getElementById("result").innerHTML="<span style='color: red;'>Enter confirm Password*</span>";
        return false;
    }

    else if(document.Formfill.cPassword.value !== document.Formfill.password.value)
    {
        document.getElementById("result").innerHTML="<span style='color: red;'>Password does not match</span>";
        return false;
    }
    
    alert("You're registered successfully!"); 
		return true;
}