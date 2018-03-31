<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title></title>
    <link rel="stylesheet" href="">
</head>
<body>
    <?php
    $unselected = false;
    $Airport_Location_Code=$_POST['PICKUP_LOCATION_CODE'];
    $Street_Address=$_POST['PICKUP_STREET_ADDRESS'];
    $City_Town=$_POST['PICKUP_CITY_NAME'];
    $State_Province=$_POST['PICKUP_STATE'];
    if (!isset($_POST['CAR_GROUP_CODE'])){
      $Car_Selection="";
    }else{
      $Car_Selection=$_POST['CAR_GROUP_CODE'];
    }
    $First_Name=$_POST['FIRST_NAME'];
    $Last_Name=$_POST['LAST_NAME'];
    $Email_Address=$_POST['EMAIL_ADDRESS'];
    if(!(($Airport_Location_Code!="")||(($Street_Address!="")&&($City_Town!="")&&($State_Province!="")))){
      $unselected = true;
    }
    if($unselected||$Car_Selection == ""||$First_Name == ""||$Last_Name == ""||$Email_Address == ""||((!$City_Town=="")&&(!preg_match("/^[a-zA-Z]+$/",$City_Town)))||((!$First_Name=="")&&(!preg_match("/^[a-zA-Z]+$/",$First_Name)))||((!$Last_Name == "")&&(!preg_match("/^[a-zA-Z]+$/",$Last_Name)))||((!$Email_Address == "")&&(!filter_var($Email_Address, FILTER_VALIDATE_EMAIL)))){
      echo "<h2>You didn't pass the validations, Please include the following informations or validate your answers!</h2>";
    }else{
      echo "<h2>Congratulations! You have passed all the validations!</h2>";
    }
    if($unselected){
      echo "Please input the Airplan Location Code or All the Address details<br />";
    }
    if($Car_Selection == ""){
      echo "Please select a Car!<br />";
    }
    if($First_Name == ""){
      echo "Please input your First Name!<br />";
    }
    if($Last_Name == ""){
      echo "Please input your Last Name!<br />";
    }
    if($Email_Address == ""){
      echo "Please input your Email Address<br />";
    }
    if ((!$City_Town=="")&&(!preg_match("/^[a-zA-Z]+$/",$City_Town))) {
      echo "Invalid City or Town Name!<br />";
    }
    if ((!$First_Name=="")&&(!preg_match("/^[a-zA-Z]+$/",$First_Name))) {
      echo "Invalid First Name!<br />";
    }
    if ((!$Last_Name == "")&&(!preg_match("/^[a-zA-Z]+$/",$Last_Name))) {
      echo "Invalid Last Name!<br />";
    }
    if ((!$Email_Address == "")&&(!filter_var($Email_Address, FILTER_VALIDATE_EMAIL))) {
      echo "Invalid Email Address!<br />";
    }

 ?>
</body>
</html>
