<!DOCTYPE html>
<head>
    <title>Memer</title>
    <meta name="viewport" content="width=480">
    <link rel="stylesheet" href="../css/upload.css" type="text/css" />
    <script type="text/javascript" src="../js/jquery-2.2.3.min.js"></script>
    <script src="../bower_components/sweetalert2/dist/sweetalert2.min.js"></script>
    <link rel="stylesheet" href="../bower_components/sweetalert2/dist/sweetalert2.min.css" />
    <script type="text/javascript" src="../js/all.js"></script>
</head>
<body id='container'>
    <div id='txtbox'>
        <strong id='txt'>
            Memer
        </strong>
    </div>
    <div id="upload">
        <form class='upl' action = "" method = "POST" enctype = "multipart/form-data">
         <input type = "file" name = "image" />
         <input type = "submit"/>
			    <ul>
                <li>Sent file: <?php echo $_FILES['image']['name'];  ?>
                <li>File size: <?php echo $_FILES['image']['size'];  ?>
                <li>File type: <?php echo $_FILES['image']['type'] ?>
            </ul>
        </form>
    </div>
    <div id='select' style="width: 8%; top: 3%; right: 2%; position: absolute;">
    </div>
    <?php
        if(isset($_FILES['image'])){
          $errors= array();
          $file_name = $_FILES['image']['name'];
          $file_size = $_FILES['image']['size'];
          $file_tmp = $_FILES['image']['tmp_name'];
          $file_type = $_FILES['image']['type'];
          $file_ext=strtolower(end(explode('.',$_FILES['image']['name'])));
          
          $expensions= array("jpeg","jpg","png","gif");
          
          if(in_array($file_ext,$expensions)=== false){
             $errors[]="extension not allowed, please choose a Gif JPG JPEG or PNG file.";
          }
          
          if($file_size > 2097152) {
             $errors[]='File size must be under 2 MB';
          }
          
          if(empty($errors)==true) {
             move_uploaded_file($file_tmp,"../check/".$file_name);
             echo "Success";
          }else{
             print_r($errors);
          }
       }
    ?>
    <script>
        selector(1,1);
    </script>
    <script type="text/javascript" src="../js/upload.js"></script>

    <div id="ads" style="width:100vw;position:relative;float:left;margin-top:5px;">
        <script type="text/javascript">
        amzn_assoc_placement = "adunit0";
        amzn_assoc_enable_interest_ads = "true";
        amzn_assoc_tracking_id = "memer.tk-20";
        amzn_assoc_ad_mode = "auto";
        amzn_assoc_ad_type = "smart";
        amzn_assoc_marketplace = "amazon";
        amzn_assoc_region = "US";
        amzn_assoc_linkid = "ccc9b10ed2c89e59001dc1ad8a52549c";
        amzn_assoc_rows="1";
        amzn_assoc_emphasize_categories = "16261631,2619525011,2617941011,15684181,165796011,3760911,283155,13900861,2335752011,36632,1036592,9003130011,13900871,130,163856011,172282,5088769011,979455011,2238192011,16310101,672123011,3760901,1055398,16310091,3367581,133140011,284507,599858,10272111,301668,11091801,1064954,2972638011,2619533011,229534,3375251,3250697011,228013,165793011,404272,468642,377110011";
        amzn_assoc_fallback_mode = {"type":"search","value":"urban dictionary"};
        amzn_assoc_default_category = "All";
        </script>
        <script src="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US"></script>
    </div>
</body>
</html>