
	// // //get the input
	//  (function myfunction(){
	//  		var target1 = document.getElementById('target1').value;
	//  		var comparison1 = document.getElementById('comparison1').value;
	//  		var text1 = document.getElementById('text1');

	//  		alert(target+comparison);
	//  })
	// var filename
	//  switch(getElementById('target1').value){
	//  		case 1:
	//  		filename="eps"
	//  		case 2:
	//  		filename=""
 //     		case 3:
	//  		filemane=""
	//  		case 4:
	//  		filename=""
	//  		case 5:
	//  		filename=""
	// }
 //    var 
    var startYear = "2013"
    var endYear = "2016"
    //var filename = "equity";

    //var text = document.getElementById('text')10
    //var comparison = ">";
    var csv = ".csv";
    var dataPath = "https://ichio345.github.io/stock-project/";
    //var dataURL = dataPath+filename+csv;
    var type =1;
    var comparison = 1
    var text = 15253895.6
    var testrequest = {target:"equity", comparison:1, data :"15253895.6"}
    
    function getURL(request){
        var filename = request.target 
        var comparison = request.comparison
        var text = request.data
        var dataURL = dataPath+filename+csv;
        return dataURL
    }
    //var table = document.getElementById("mytable");
//average function
    

    function search(){
         d3.csv( getURL(testrequest), 

    function (data){
    console.log(data);

    var k ;
    var result1= []
    for(k=0; k<data.length; k++){
        var x= data[k];
    


    if  (type > 0){
    var text1 =0
    
    var i;
    //the function for endyear=2016
    if(parseInt(endYear) > 2015){
    for (i=parseInt(startYear);i<=2015; i++){
        
        var sum = parseInt(x[i+"Q1"])+ parseInt(x[i+"Q2"])+parseInt(x[i+"Q3"])+parseInt(x[i+"Q4"])
           text1  += parseInt(sum);
    }
    var value2016 =parseInt(x["2016Q1"])+parseInt(x["2016Q2"])+parseInt(x["2016Q3"])

    var average = (text1+value2016)/((2015-parseInt(startYear)+1)*4+3)
    


    
        
    }
                //the function for endyear is not 2016

                else{
                    for (i=parseInt(startYear);i<=parseInt(endYear); i++){
                    
                    sum = parseInt(x[i+"Q1"])+ parseInt(x[i+"Q2"])+parseInt(x[i+"Q3"])+parseInt(x[i+"Q4"])
                    
                    text1 += parseInt(sum) ;
                    }
                    var average = text1/((parseInt(endYear)-parseInt(startYear)+1)*4)
                    
                    }
                    
                                //function for >,<
                            if (comparison == 1){
                            if (average >= text ){
                                result1.push({id: parseInt(x["CompanyName"]) , value: average})
                            }
                            }
                            else if (comparison ==2){
                                if (average <= text){
                                    result1.push({id: parseInt(x["CompanyName"]) , value: average})                         }
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
        
        if (comparison == 1)
        {
            if (min >= text ){
                result1.push({id: parseInt(x["CompanyName"]) , value: min})         }
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



  var stockNumber = document.getElementById("row1")
 stockNumber.innerHTML = "股票代號";
 stockNumber.style.backgroundColor = "skyblue"
 stockNumber.style.width = "400px"
 stockNumber.style.textAlign = "center"
 stockNumber.style.display = "inline-block"
 stockNumber.style.height = "40px"
 stockNumber.style.paddingTop = "10px"
 var dataValue = document.getElementById("row2")
 dataValue.innerHTML = "equity"
 dataValue.style.width = "600px"
 dataValue.style.textAlign = "center"
 dataValue.style.display = "inline-block"
 dataValue.style.backgroundColor = "skyblue"
 dataValue.style.height = "40px"
 dataValue.style.paddingTop = "10px"    






for(m=0;m<result1.length;m++){
  
 var y = result1[m]
 var newDiv = document.createElement("div"); 
 newDiv.style.backgroundColor = "Gainsboro";
 newDiv.style. width = "400px"
 newDiv.style.textAlign = "center"
 newDiv.style.borderStyle = "solid"
 newDiv.style.borderWidth = "1px"

  var demo = document.getElementById("mytable");

 demo.appendChild(newDiv);
  var newContent = document.createTextNode(y["id"]); 
  newDiv.appendChild(newContent);
  var currentDiv = document.getElementById("div"); 
  demo.insertBefore(newDiv, currentDiv);
  demo.style.display = "inline-block";
  //value display
var newDiv2 =document.createElement("div")
newDiv2.style.backgroundColor="papayawhip"
newDiv2.style.width = "600px"
newDiv2.style.textAlign = "center"
newDiv2.style.borderStyle = "solid";
newDiv2.style.borderWidth = "1px";
var demo2 = document.getElementById("mytable2")
demo2.appendChild(newDiv2);
var newContent2 = document.createTextNode(y["value"])
newDiv2.appendChild(newContent2);
var currentDiv2 = document.getElementById("div");
demo2.insertBefore(newDiv2, currentDiv2);   
demo2.style.display = "inline-block";
}
}
)


}