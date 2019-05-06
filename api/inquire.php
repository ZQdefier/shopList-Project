<?php
    include("./config.php");
    
    //查询数据

    $sql = "select * from foods";

    $res = mysql_query($sql);

    $foods = array();

    while($row = mysql_fetch_assoc($res)){
        array_push($foods, $row);
    }

    $json = array(
        "res_code" => 1,
        "res_message" => "查询成功",
        "res_body" => array(
            "data" => $foods
        )
    );

    echo json_encode($json);

    mysql_close();
?>