<?php
include("./config.php");
$name = $_POST["name"];
$psd = $_POST["psd"];

$sql = "insert into user (username,password) values ('$name',$psd)";

$res = mysql_query($sql);

if($res){
    echo json_encode(Array(
        "res_code" => 1,
        "res_message" => "注册成功"
    ));
}else{
    echo json_encode(Array(
        "res_code" => 0,
        "res_message" => "注册失败"
    ));
}
?>