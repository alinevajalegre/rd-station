let emailOk = false;
let telOk = true;
let passwordOk = false;

function validateEmail(){
	
	let email = document.getElementById("email").value;
	if(email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
		emailOk = true;
	}
	else{
		alert("Verifique se o seu e-mail está digitado corretamente.");
		emailOk = false;
	}
}

function validateTel(e){
	var v=e.target.value.replace(/\D/g,"");

	v=v.replace(/^(\d\d)(\d)/g,"($1)$2"); 

	v=v.replace(/(\d{5})(\d)/,"$1-$2");    

	e.target.value = v;
}

function validatePassword(){
	
	let pass = document.getElementById("password").value;
	let upperCase = /[A-Z]/
	let lowerCase = /[a-z]/
	let number = /[0-9]/
	
	if(pass.length >= 6 && pass.length <= 10 && upperCase.test(pass) == true && lowerCase.test(pass) == true && number.test(pass) == true){
		passwordOk = true;
	}
	
	else{
		alert("A senha deve conter de 6 a 10 caracteres com, ao menos, uma letra maiúscula, uma letra minúscula e um número");
		passwordOk = false;
	}

}

function doesntHaveSite(){
	
	let field = document.getElementById("my-site");
	field.value = '';
	field.required = false;
}

function validateURL(){
	let mySite = document.getElementById("radio-my-site"); 

	if(mySite.checked == false){
		mySite.checked = true;
		let field =  document.getElementById("my-site");
		field.required = true;
	}
}

function validateEqualPassword(){
	
	let pass1 = document.getElementById("password").value;
	let pass2 = document.getElementById("confirm-password").value;

	if(pass1 != pass2){
		alert("As senhas não coincidem");
	}
}

function validateForm(){

	if(emailOk == true && telOk == true && passwordOk == true){
		alert("Tá tudo certo");
		document.getElementById("contact-form").innerHTML = "<h1>Obrigado!, entraremos em contato</h1>";
	}
	else{
		alert("Não foi possível enviar seu formulário. Verifique se todos os dados estão digitados corretamente.");
	}


}

function showPass(image, field){
	let opened = document.getElementById(image).src;
	let viewPassword = document.getElementById(field);

	if(opened.includes("closed-eye")){
		document.getElementById(image).src = "assets/opened-eye.svg";
		viewPassword.setAttribute("type", "text");
	}
	else{
		document.getElementById(image).src = "assets/closed-eye.svg";	
		viewPassword.setAttribute("type", "password");
	}
}