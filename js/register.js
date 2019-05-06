class Register{
    constructor(){
        this.username = document.querySelector("#inputEmail3");
        this.password = document.querySelector("#inputPassword3");
        this.reBtn = document.querySelector("#register");
        this.bindevent();
    }
    bindevent(){
        this.reBtn.onclick = () =>{
            let name = this.username.value,
                psd = this.password.value;
                // console.log(1)
            tools.ajax("POST","../api/register.php",{name,psd},data =>{
                // console.log(2);
                alert(data.res_message+"快去登录吧");
                window.location.href = "login.html";              
            });
            return false;
        }
    }
}
new Register();