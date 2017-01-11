<!-- Head -->
<?php include("inc/head_sp.inc.php"); ?>

<!-- Primary Structure -->
<div class="container">

	<div id="container_left">
		<?php include("inc/nav.inc.php"); ?>
	</div>

	<!-- Get ID from previous page in URL to include here -->
	<div id="container_right">
		<?php   
		  /* If there is no ID, then display default homepage */                   
		if (!isset($_REQUEST['page']))                   
		  include("inc/content.inc.php");        
		else               
		{   
		  /* If an ID is sent, then show that page */                   
		  $page = $_REQUEST['page'];                   
		  $nextpage = "inc/" . $page . ".inc.php";                   
		  include($nextpage);            
		}              
		?> 
	</div>

</div>

<!-- Footer -->
<?php include("inc/footer_sp.inc.php"); ?>