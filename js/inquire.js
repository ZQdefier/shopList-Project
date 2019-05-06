class Inquire{
    constructor(selector){
        this.tbody = document.querySelector(selector);
        this.init();
    }
    init(){
        
        // tools.ajaxGetPromise("api/inquire.php").then(data => {
        //     if(data.res_code ===1){
        //         this.render(data.res_body.data);
        //     }else{
        //         alert("查询失败")
        //     }
        // })
        console.log(tools)

        tools.ajaxGet("api/inquire.php", null, data => {
            console.log(data)
            this.render(data.res_body.data);
        })
    }
    render(list){
        let html = "";
        list.forEach((food, index) => {
            html += `<tr data-id = "${food.Id}">
                <td>${index+1}</td>
                <td>${food.name}</td>
                <td><span>${food.price}</span><input type="text" class="input-price"></td>
                <td><span>${food.num}</span><input type="text" class="input-num"></td>
                <td>
                    <button class="btn btn-xs btn-info editBtn">编辑</button>
                    <button class="btn btn-xs btn-success okBtn">确定</button>
                    <button class="btn btn-xs btn-danger delBtn">删除</button>
                    <button class="btn btn-xs btn-primary cBtn">取消</button>                       
                </td>
            </tr>`
            

        });
        // console.log(html)
        this.tbody.innerHTML = html;
    }
}
let getData = new Inquire("tbody");