class Add{
    constructor() {
        this.add_body = document.querySelector(".add-body");
        this.name = this.add_body.querySelector(".add-name"); 
        this.price = this.add_body.querySelector(".add-price"); 
        this.num = this.add_body.querySelector(".add-num");
        this.addBtn = this.add_body.querySelector(".add-btn");
        this.init();
    }
    init(){
        this.addBtn.onclick = () => {
            var name = this.name.value,
                price = this.price.value,
                num = this.num.value;
                tools.ajaxGetPromise("api/add.php",{name,price,num}).then(data => {
                if(data.res_code===1){
                    this.name.value = this.price.value = this.num.value = "";
                    $('#myModal').modal('hide');
                    getData.init();
                }
                alert(data.res_message);
            })
            
        }
    }
}
new Add();