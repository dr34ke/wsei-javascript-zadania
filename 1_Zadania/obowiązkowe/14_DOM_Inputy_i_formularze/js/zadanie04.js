document.addEventListener("DOMContentLoaded", function(){
    var creditInput= document.querySelector("#name");
    var creditOutput= document.querySelector("#type");
    creditInput.addEventListener("keyup", function(){
        if(!isNaN(this.value)){
            if(this.value.startsWith('4')){
                creditOutput.innerHTML="Visa";
                if(this.value.length>12 && this.value.length<17)
                    this.style.borderColor="green";
                else
                    this.style.borderColor="black";
            } 
            else if(this.value.startsWith('5')){
                creditOutput.innerHTML="Mastercard";
                if(this.value.length==16)
                    this.style.borderColor="green";
                else
                    this.style.borderColor="black";
            }
            else if(this.value.startsWith('3')){
                if(this.value.substring(1,2)=='4' || this.value.substring(1,2)=='7'){
                    creditOutput.innerHTML="American Express";
                    if(this.value.length==15)
                        this.style.borderColor="green";
                    else
                        this.style.borderColor="black";
                }
                else
                    creditOutput.innerHTML="";
            }
            else
                creditOutput.innerHTML="";
        }
        else {
            this.style.borderColor="black";
            creditOutput.innerHTML="Nie poprawny znak";
        }
            
    })
})