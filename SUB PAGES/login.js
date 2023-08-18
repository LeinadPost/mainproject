// let email = document.getElementById("email")
// let password = document.getElementById("password")
// let login = document.getElementById("logg")
// let form = document.getElementById("form")
// // let check = document.getElementById("check")
// let incorrectpassword = document.getElementById("incorrect-pass")
// email.onchange = function(){
//     if(email.value !== localStorage.getItem("saveMyemail")){
//         alert("me")
//     }
// }
// password.onchange = function(){
//     if(password.value !== localStorage.getItem("savepassword")){
//         incorrectpassword.innerHTML = "Please enter a correct password"
//     }else{
//         incorrectpassword.style.display = "none"
//     }
// }
// // login.addEventListener("click",function(){
// //     if(password !== localStorage.getItem("savepassword")){
// //         // alert("Incorrect password, Please enter a correct password")
// //         return false
// //     }else if(email.value == ""){
// //         alert("enter")
// //     }
// //     return false
// // })
// function validate(){
//     if(password.value !== localStorage.getItem("savepassword")){
//         alert("Incorrect password, Please enter a correct password")
//         return false
//     }
    
//     return ( true )
// }
// // check.addEventListener("click",()=>{
// //     if(check.checked){
// //         password.setAttribute("type","text")
// //     }else{
// //         password.setAttribute("type","password")
// //     }
// // })
// // localStorage.setItem("savepassword","tomf")


class Login {
    constructor(form, fields) {
        this.form = form;
        this.fields = fields
        this.validateonSubmit()
    }


    validateonSubmit() {
        let self = this

        this.form.addEventListener("submit", (e) => {
            e.preventDefault();
            var error = 0
            self.fields.forEach((field) => {
                const input = document.querySelector(`#${field}`)
                if(self.validateFields(input) === false) {
                    error++
                }
              
            });
            if(error === 0) {
                localStorage.setItem("auth", 1)
                this.form.submit();
            }
        })
    }

    validateFields(field) {
        if(field.value.trim() === "") {
            this.setStatus(
                field,
                `${field.previousElementSibling.innerText}  password cannot be blank`,
                "error"
            ) 
            return false
        }else{
            if(field.type === "password") {
                if(field.value.length < 8) {
                    this.setStatus(
                        field,
                        `${field.previousElementSibling.innerText} password must be at least 8 characters`,
                        "error"
                    ) 
                    return false
                }else{
                    this.setStatus(field, null, "success")
                    return true
                }
            }else{
                this.setStatus(field, null, "success")
                return true
            }
        }

        
    }

    setStatus(field, message, status) {
        const errorMessage = field.parentElement.querySelector(".error-message")

        if(status === "success") {
            if(errorMessage) {
                errorMessage.innerText = ''
            }
            field.classList.remove("input-error")
        }

        if(status === "error") {
            errorMessage.innerText = message;
            field.classList.add("input-error")
        }
    }
}



const form = document.querySelector(".login-form");
if(form) {
    const fields = ["email", "password"]
    const validator = new Login(form, fields)
}