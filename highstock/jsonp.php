<?php 
date_default_timezone_set( 'UTC' ); 
//echo date('Y-m-d H:i:s'); 
$mysqli = new mysqli('localhost', 'power', 'power', 'power'); 
 
$query = "SELECT `datetime`, `voltage` FROM `t_power`;"; 
$result = $mysqli->query($query); 
 
while ($record = $result->fetch_row()){ 
    $all[] =  array(strtotime($record[0]), (float)$record[1], (float)$record[2], (float)$record[3]); 
} 
echo json_encode($all); 
 
$mysqli->close(); 
?>