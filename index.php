<html>
<head>
<title>
Typing Tutor Input
</title>
<script  src="type.js">
</script>
<link type = "text/css" rel = "stylesheet" href = "../sideb.css" />
<link type = "text/css" rel = "stylesheet" href = "type.css" />
<body>
<div id = "ftest">
<div id = "nwftest">
<input type = "submit" onclick = "nwtest()" value = "New Test">
</div>
<div id = "stmarq">
<input type = "submit" onclick = "sttest()" value = "Start" id ="stbtest">
<span id = "txtmarq"></span>
</div>
<input type = "text" id="tstentry" onkeypress = "nextchar()">
<div id = "tstdata">
<span id = "wpm"></span>
<span for = "cnt" class = "right">Times Taken:&nbsp;&nbsp;
<span id = "cnt" ></span>
</span>
<div id = "accu"></div>
<div id = "mis"></div>
</div>
<input type = "hidden" id = "sttime">
</div>
<div id = "dtext">
<input type = "text" id="tsttext">
<input type = "submit" value ="Create Test" onclick = "mktest()" id = "crtest">

</div>
<? include("../sideb.php"); ?>
<script type = "text/javascript">
	root();
</script>
</body>