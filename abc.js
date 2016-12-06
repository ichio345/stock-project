
	//get the input
	(function myfunction(){
			var target = document.getElementById('target').value;
			var comparison = document.getElementById('comparison').value;
			var text = document.getElementById('text');

			alert(target+comparison);
	})
	var filename
	switch(getElementById('target').value){
			case 1:
			filename="eps"
			case 2:
			filename=""
			case 3:
			filemane=""
			case 4:
			filename=""
			case 5:
			filename:""
	}
	var startYear = "2013"
	var endYear = "2016"
	//var text = document.getElementById('text')10
	//var comparison = ">";
	var csv = ".csv";
	var target = "equity"
	var dataPath = "https://ichio345.github.io/stock-project/";
	var dataURL = dataPath+target+csv;
	var type =1;
	var comparison = 1
	var text = 1500
	//var table = document.getElementById("mytable");
//average function
	

	d3.csv(dataURL, 

	function (data){
	console.log(data);

	var k ;
	var result1= []
	for(k=0; k<4; k++){
		var x= data[k];
	


	if 	(type > 0){
	var text1 =0
	
	var i;
	//the function for endyear=2016
	if(parseInt(endYear) > 2015){
	for (i=parseInt(startYear);i<=2015; i++){
		
		var	sum = parseInt(x[i+"Q1"])+ parseInt(x[i+"Q2"])+parseInt(x[i+"Q3"])+parseInt(x[i+"Q4"])
		   text1  += parseInt(sum);
	}
	var value2016 =parseInt(x["2016Q1"])+parseInt(x["2016Q2"])+parseInt(x["2016Q3"])

	var average = (text1+value2016)/((2015-parseInt(startYear)+1)*4+3)
	alert(average)


	
		
	}
				//the function for endyear is not 2016

				else{
					for (i=parseInt(startYear);i<=parseInt(endYear); i++){
					
					sum = parseInt(x[i+"Q1"])+ parseInt(x[i+"Q2"])+parseInt(x[i+"Q3"])+parseInt(x[i+"Q4"])
					
					text1 += parseInt(sum) ;
					}
					var average = text1/((parseInt(endYear)-parseInt(startYear)+1)*4)
					alert(average)
					}
					
								//function for >,<
							if (comparison == 1){
							if (average >= text ){
								result1.push({id: parseInt(x["CompanyName"]) , value: average})
							}
							}
							else if (comparison ==2){
								if (average <= text){
									result1.push({id: parseInt(x["CompanyName"]) , value: average})							}
							}
								
	}
	
	//minimum function
	else{
		var text1=0;
		var i ;
		var arr=[];
		var j;

		for (i=parseInt(startYear);i < parseInt(endYear)+1 ;i++){
			for(j=1; j<=4; j++){
				if (i<2016){
				arr.push(x[i+"Q"+j]);	
				}
				else{
				arr.push(x[i+"Q1"],x[i+"Q2"],x[i+"Q3"]);
				}
				
			}
			
		}
		console.log(arr)
		var min = Math.min.apply(null, arr)
		alert(min);
		if (comparison == 1)
		{
			if (min >= text ){
				result1.push({id: parseInt(x["CompanyName"]) , value: min})			}
		}
		else if (comparison ==2)
		{
			if (min <= text){
				result1.push({id: parseInt(x["CompanyName"]) , value: min})
			}
		}
	}
}
console.log(result1)
var l;
	for(l=0; l<result1.length; l++ ){
	var div = document.createElement('div')
		div.id += 'block1'+l
		div.class = 'block1'+l

	}
	for (m=0; m<result1.length;m++){
		var w = result1[m];
		var z = w["id"];
		document.getElementById("block1"+m).innerHTML = z;
	}
}
)





