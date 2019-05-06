class Edit{
    constructor(selector){
        this.tbody = document.querySelector(selector);
        
        this.bandevents();

    }
    bandevents(){
        this.tbody.onclick = e =>{
            var target = e.target;
            var tr = target.parentNode.parentNode;
            var classList = Array.from(target.classList);
            if(classList.includes("editBtn")){
                this.editBtn(tr);
            }else if(classList.includes("okBtn")){
                this.okBtn(tr);
            }else if(classList.includes("delBtn")){
                this.delBtn(tr);
            }else if(classList.includes("cBtn")){
                this.cBtn(tr);
            }    
        }
    }
    editBtn(tr){
        Array.from(tr.querySelectorAll("span")).forEach(span => {
            span.nextElementSibling.value = span.innerHTML;
        })
        tr.classList.add("edit");
    }
    delBtn(tr){
        if(confirm("确认删除么？")){
            let id = tr.getAttribute("data-id")
            
            tools.ajaxGetPromise("api/delete.php",{id}).then(data => {
                if(data.res_code ===1){
                    console.log(getData);
                    alert(data.res_message);
                    getData.init();
                }else{
                    alert(data.res_message);            
                } 
            })
        }
    }
    okBtn(tr){
        var inputprice =tr.querySelector(".input-price"),
            inputnum =tr.querySelector(".input-num"),
            price = inputprice.value,
            num = inputnum.value,
            id = tr.getAttribute("data-id");
        tools.ajaxGetPromise("api/ok.php",{id,price,num}).then(data => {
            tr.classList.remove("edit");
            if(data.res_code === 1){
                inputprice.previousElementSibling.innerHTML = inputprice.value;
                inputnum.previousElementSibling.innerHTML = inputnum.value;
            }
        }) 
    }
    cBtn(tr){
        tr.classList.remove("edit");
    }
}
new Edit("tbody");