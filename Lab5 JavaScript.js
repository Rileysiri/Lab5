let input1 = document.getElementById("pass1");
let input2 = document.getElementById("pass2");
let button = document.getElementById("validate");
let check = document.getElementById("check");

input1.onpaste = p => p.preventDefault();
input2.onpaste = p => p.preventDefault();

button.addEventListener("mousedown", function(){
    if(event.button == 0){
        if(input1.ariaValueMax.length < 8){
            if(input1.value == input2.value){
                check.textContent = ""
                alert("Password accepted")
            }
            else{
                check.textContent = "Passwords do not match"
                alert("Passwords do not match")
            }
            else{
                check.textContent = "Password must be at least 8 characters long"
                alert("Passwords must be at least 8 chacters long")
            }
        }
    }
})
/*if(input1.length < 8){
    alert("Password must be at least 8 Characters long")
}

if(!input1.equals(input2)){
    alert("Passwords do not match")
}

if(pass1 == pass2){
    alert("Password Works!");
}
else{
    alert("Password does not match");
}*/
