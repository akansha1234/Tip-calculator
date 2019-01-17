function calculateTip(){
 var billamt= document.getElementById("billamt").value;
  var servicequal = document.getElementById("servicequal").value;
  var people = document.getElementById("peopleamt").value;
if(billamt===""|| servicequal==0)
	{ alert("Please enter values");
    return;
	}
if(people===""||people<=1){
	people=1;
	document.getElementById("each").style.display="none";
}
	else
		{document.getElementById("each").style.display="block";
}


var total= (billamt*servicequal)/people;
 total=Math.round(total);
  total=total.toFixed(2);

 document.getElementById("totalTip").style.display="block";
 document.getElementById("tip").innerHTML=total;
}
document.getElementById("totalTip").style.display="none";
document.getElementById("each").style.display="none";

document.getElementById("calculate").onclick=
 function(){
 	calculateTip();
 };