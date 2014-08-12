//tbind(10, 1);
function root()
{ 
    tbind(10, 1);
    //document.getElementById("tstentry").disabled = "true";
    var appn = navigator.appName
    
    //alert(appn);
    
    if (appn == "Netscape")
	firestyle();
    
    
    document.getElementById("tsttext").focus();
}

function mktest()
{
    var txttst = document.getElementById("tsttext").value;	
    document.getElementById("sttime").value = "";
    document.getElementById("stbtest").style.display = "inline";
    vistest("block", "none");
    
    //var marq = document.getElementById("stmarq");
    
    document.getElementById("txtmarq").innerHTML = txttst;
    /*marq.style.width = "80%";
      marq.style.height = "22";
      marq.style.overflow = "hidden";*/
    
    tbind(0, 10);
    document.getElementById("stbtest").focus();
    
}


//display test get rid of test creator or vice versa
function vistest(fs, dx)
{
    
    document.getElementById("ftest").style.display = fs;
    document.getElementById("dtext").style.display = dx;
}

//set tabindex
function tbind(st, cr)
{
    document.getElementById("stbtest").tabindex = st;
    document.getElementById("tstentry").tabindex = st+1;
    
    document.getElementById("crtest").tabindex = cr+1;
    document.getElementById("tsttext").tabindex = cr;
    
}

function nwtest()
{
    vistest("none", "block");
    document.getElementById("tstdata").style.display = "none";
    document.getElementById("cnt").innerHTML = "";
    document.getElementById("stmarq").style.height = "25";
    document.getElementById("tsttext").select();
    document.getElementById("tsttext").focus();
}

function sttest()
{
    var marq = document.getElementById("txtmarq");
    var txtent = document.getElementById("tstentry");
    
    
    txtent.value = "";
    marqup();
    document.getElementById("stbtest").style.display = "none";
    document.getElementById("sttime").value = Date();
    document.getElementById("stmarq").style.height = "32";

    txtent.focus();
    
    
    //txtent.onkeypress = "nextchar()";
    
    
}

function nextchar()
{
    var time = document.getElementById("sttime").value;
    if (time != "")
    {
	marqup();
	var len = document.getElementById("txtmarq").innerHTML
	if( len.length == 0)
	    tstresults();
    }
    //alert("your in");
}

function marqup()
{
    var marq = document.getElementById("txtmarq")
    var txt = marq.innerHTML;
    var start = txt.lastIndexOf(">") + 1;
    var remain = txt.substring(start);
    var spas = 1;
    
    if (remain.charAt(0) == " ")
    {	
	remain = "SPACE" + remain.substr(1);
	spas = 5;
    }
    if (remain.length > 0)
	txt = "<span id = \"big\" >" + remain.substring(0,spas) + "</span>" + remain.substr(spas);
    else
	txt = "";
    marq.innerHTML = txt;
}

function tstresults()
{
    var now =new Date()
    var then = document.getElementById("sttime").value;
    var time = now.getTime() - Date.parse(then);
    var sec = (time/1000) % 60;
    var min = (time/60000);
    var count = 0;
    var mistxt = "Input&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Actual";
    
    var wpm = document.getElementById("wpm");
    var accu = document.getElementById("accu");
    var mis = document.getElementById("mis");
    var inp = document.getElementById("tstentry").value;
    var tst = document.getElementById("tsttext").value;
    var cou = document.getElementById("cnt");
    
    if (cou.innerHTML == "")
	cou.innerHTML = 1
    else
	cou.innerHTML++;
    
    
    wpm.innerHTML = "WPM:&nbsp;&nbsp;" + Math.round((inp.length/5)/min)
    //alert (min+", "+(document.getElementById("tstentry").value.length/5));
    
    for (x = 0; x < inp.length; x++)
    {
	if (inp.charAt(x) !== tst.charAt(x))
	{
	    count++;
	    mistxt += "\n<br>\n" + inp.charAt(x) + "&nbsp;&nbsp;looking for&nbsp;&nbsp;" + tst.charAt(x);
	}
    }
    
    accu.innerHTML = "Accuracy:&nbsp;&nbsp;" + Math.round((inp.length-count)/inp.length*100) + "%";
    if (count == 0)
	mis.innerHTML = "No Mistakes";
    else
	mis.innerHTML = mistxt;
    document.getElementById("tstdata").style.display = "block";
    document.getElementById("stbtest").style.display = "inline";
    document.getElementById("stmarq").style.height = "25";
    document.getElementById("stbtest").focus(); 
    
    
    document.getElementById("txtmarq").innerHTML = tst;
    document.getElementById("sttime").value = "";
    
}

function firestyle()
{
    document.getElementById("stmarq").style.marginLeft = "10%";
    document.getElementById("tstdata").style.marginLeft = "30%";
}
