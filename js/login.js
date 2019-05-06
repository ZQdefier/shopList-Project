class Login{
    constructor(){
        this.username = document.querySelector("#inputEmail3");
        this.password = document.querySelector("#inputPassword3");
        this.loginBtn = document.querySelector("#loginBtn");
        this.check = document.querySelector("#check");
        this.bindevent();
    }
    bindevent(){
        this.loginBtn.onclick = ()=>{
            let name = this.username.value,
                psd = this.password.value;
            tools.ajax("POST","../api/login.php",{name,psd},data => {
                console.log(data);
                if(data.res_code === 1){
                    if(this.check.checked){
                        tools.cookie("username", name, {expires: 7, path: "/"});
                      }else{
                        tools.cookie("username", name, {path: "/"});
                      }
                      
                      alert(data.res_message);
            
                    window.location.href = "../index.html";
                }
            })
        }
    }
}
new Login();