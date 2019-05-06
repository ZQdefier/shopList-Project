<?php
include("./config.php");

$name = $_POST["name"];
$psd = $_POST["psd"];

$sql = "select * from user where username='$name' and password='$psd'";

$res = mysql_query($sql);

$row = mysql_num_rows($res);

if($row > 0){
    echo json_encode(Array(
        "res_code" => 1,
        "res_message" => "登陆成功"
    ));
}else{
    echo json_encode(Array(
        "res_code" => 0,
        "res_message" => "登陆失败"
    ));
}

?>