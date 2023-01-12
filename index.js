function validateEmail(){
	let email = document.getElementById("email").value;
	if(email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
		alert(email);
	}
	else{
		alert("Deu ruim, brother");
	}
}

function validateTel(){

}

function validatePassword(){
	let pass = document.getElementById("password").value;
	let upperCase = /[A-Z]/
	let lowerCase = /[a-z]/
	let number = /[0-9]/
	
	if(pass.length < 6 || pass.length > 10){
		alert("Senha deve ter entre 6 e 10 dígitos");
	}
	
	else{
		if (upperCase.test(pass) == false){
			alert("A senha deve conter, ao menos, uma letra maíuscula");
		}
		if (lowerCase.test(pass) == false){
			alert("A senha deve conter, ao menos, uma letra minúscula");
		}

		if(number.test(pass) == false){
			alert("A senha deve conter, ao menos, um número");
		}
	}

}

function doesntHaveSite(){
	document.getElementById("my-site").required = false;
}

function validateURL(){
	let mySite = document.getElementById("radio-my-site"); 

	if(mySite.checked == false){
		mySite.checked = true;
		document.getElementById("my-site").required = true;

		//validar a url
	}

	else{
		doestHaveSite();
	}
}

function validateEqualPassword(){
	let pass1 = document.getElementById("password").value;
	let pass2 = document.getElementById("confirm-password").value;

	if(pass1 != pass2){
		alert("As senhas não coincidem");
	}
}
