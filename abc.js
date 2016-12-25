   
    var startYear = "2013"
    var endYear = "2016"

    var csv = ".txt";
    var dataPath = "https://ichio345.github.io/stock-project/";
    var type =1;
    var comparison = 1
    var text = 2
    var testrequest = {target:"ATNI", comparison:1, data :"2", boolean:1}
    var testrequest2 = {target:"DR", comparison:2, data:"3", boolean:1}
    var testrequest3 = {target:"DY", comparison:0, data:"20", boolean:1}
    var testrequest4 = {target:"0", comparison:0,data:"3", boolean:0}
    var outcome=[]
     var result1 = []
     var result2 = []
     var result3 = []
     var result4 = []

    
    
    function getURL(request){
        var filename = request.target 
        var comparison = request.comparison
        var text = request.data
        var dataURL = dataPath+filename+csv;
        return dataURL

    }

       
    function showResult(){
        
    d3.csv( getURL(testrequest), 

    function (data1){
    console.log(data1);
    
    var k ;
    
    for(k=0; k<data1.length; k++){
        var x= data1[k];
    


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
                                result1.push({id: parseInt(x["index"]) , companyName:x["company name"], value: average})
                            }

                            }
                            else if (comparison ==2){
                                if (average <= text){
                                    result1.push({id: parseInt(x["index"]) ,companyName:x["company name"], value: average})                         }
                            }
                                
    }
    
    
   
}


console.log(result1)


}

)


if(testrequest2.boolean==1){
     d3.csv( getURL(testrequest2), 

    function (data2){
    console.log(data2);
    
    var k ;
    
    for(k=0; k<data2.length; k++){
        var x= data2[k];
    


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
                                result2.push({id: parseInt(x["index"]) , companyName:x["company name"], value: average})
                            }

                            }
                            else if (comparison ==2){
                                if (average <= text){
                                    result2.push({id: parseInt(x["index"]) ,companyName:x["company name"], value: average})                         }
                            }
                                
    }
    
    
   
}


console.log(result2)
}

)

}
else{

}

if(testrequest3.boolean == 1){
     d3.csv( getURL(testrequest3), 

    function (data3){
    console.log(data3);
    var k ;
    
    for(k=0; k<data3.length; k++){
        var x= data3[k];
    


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
                                result3.push({id: parseInt(x["index"]) , companyName:x["company name"], value: average})
                            }

                            }
                            else if (comparison ==2){
                                if (average <= text){
                                    result3.push({id: parseInt(x["index"]) ,companyName:x["company name"], value: average})                         }
                            }
                                
    }
    
    
   
}


console.log(result3)
}

)


}
else{

}
if(testrequest4.boolean == 1){
     d3.csv( getURL(testrequest4), 

    function (data4){
    console.log(data4);
    var k ;
    
    for(k=0; k<data4.length; k++){
        var x= data4[k];
    


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
                                result4.push({id: parseInt(x["index"]) , companyName:x["company name"], value: average})
                            }

                            }
                            else if (comparison ==2){
                                if (average <= text){
                                    result4.push({id: parseInt(x["index"]) ,companyName:x["company name"], value: average})                         }
                            }
                                
    }
    
    
   
}


console.log(result4)
}

)


}



//produce outcome
// var outcome=[]
// for (i=0; i< result1.length ; i++){
//     var r1 = result1[i]
//     if(testrequest2.boolean == 1){
//     for (j=0;j<result2.length;j++){
//         var r2 =result2[j]
//         if (r1["id"]==r2["id"]){
//             if(testrequest3.boolean==1){
//             for(k=0;k<result3.length; k++){
//             var r3 = result3[k]
//             if(r1["id"]== r3["id"]){
//                 if(testrequest4.boolean == 1){
//                 for(l=0;l<result4.length;l++){
//                     var r4 = result4[l]
//                     if(r1["id"]=r4["id"]){
//                         outcome.push({id: r1["id"], companyName:r1["companyName"], value1: r1["value"], value2: r2["value"], value3: r3["value"], value4:r4["value"]})
//                     }
//                 }
//             }
//             else{
//                 outcome.push({id:r1["id"], companyName:r1["companyName"] ,value1:r1["value"], value2:r2["value"], value3:r3["value"]})
//             }
//             }


            
//         }
//         }
//         else{
//             outcome.push({id:r1["id"], companyName:r1["companyName"], value1: r1["value"],value2: r2["value"]})
//         }
        
//     }
// }
// }
// else {
//     outcome.push({id:r1["id"], companyName:r1["companyName"],value1: r1["value"]})
// }
// }
// console.log(outcome)













// // for(z=0; z< result1.length; z++ ){
// //     var rr = result1[z]
    
// //     outcome.push({id: parseInt(rr["id"]), companyName:rr["companyName"],value1: rr["value"]})

// // }
// // console.log(outcome);


    






 
//  var stockNumber = document.getElementById("row1")
//  stockNumber.innerHTML = "股票代號";
//  stockNumber.style.backgroundColor = "skyblue"
//  stockNumber.style.textAlign = "center"
//  stockNumber.style.display = "inline-block"
//  stockNumber.style.height = "40px"
//  stockNumber.style.paddingTop = "10px"
//  var dataValue = document.getElementById("row2")
//  dataValue.innerHTML = testrequest["target"]
//  dataValue.style.textAlign = "center"
//  dataValue.style.display = "inline-block"
//  dataValue.style.backgroundColor = "skyblue"
//  dataValue.style.height = "40px"
//  dataValue.style.paddingTop = "10px"    





// alert(outcome.length)
// for(m=0;m<outcome.length;m++){
//  // alert("hi");
//  var y = outcome[m]
//  var newDiv = document.createElement("button"); 
//  newDiv.setAttribute("id", y["id"]) ;
//  newDiv.style.backgroundColor = "Gainsboro";
//  newDiv.style. width = "100%"
//  newDiv.style.textAlign = "center"
//  newDiv.style.borderStyle = "solid"
//  newDiv.style.borderWidth = "1px"
//  newDiv.style.height = "100%"

//   var demo = document.getElementById("mytable");

//  demo.appendChild(newDiv);
//   var newContent = document.createTextNode(y["id"]); 
//   newDiv.appendChild(newContent);
//   var currentDiv = document.getElementById("div"); 
//   demo.insertBefore(newDiv, currentDiv);
//   demo.style.display = "inline-block";
//   //value display
// var newDiv2 =document.createElement("button")
// newDiv2.style.backgroundColor="papayawhip"
// newDiv2.style.width = "100%"
// newDiv2.style.textAlign = "center"
// newDiv2.style.borderStyle = "solid";
// newDiv2.style.borderWidth = "1px";
// newDiv2.style.height = "100%"
// var demo2 = document.getElementById("mytable2")
// demo2.appendChild(newDiv2);
// var newContent2 = document.createTextNode(y["value1"])
// newDiv2.appendChild(newContent2);
// var currentDiv2 = document.getElementById("div");
// demo2.insertBefore(newDiv2, currentDiv2);   
// demo2.style.display = "inline-block";
// }
var go =1
return go
}
function search(){
    var outcome=[]
if (showResult()==1){
for (i=0; i< result1.length ; i++){
    var r1 = result1[i]
    if(testrequest2.boolean == 1){
    for (j=0;j<result2.length;j++){
        var r2 =result2[j]
        if (r1["id"]==r2["id"]){
            if(testrequest3.boolean==1){
            for(k=0;k<result3.length; k++){
            var r3 = result3[k]
            if(r1["id"]== r3["id"]){
                if(testrequest4.boolean == 1){
                for(l=0;l<result4.length;l++){
                    var r4 = result4[l]
                    if(r1["id"]=r4["id"]){
                        outcome.push({id: r1["id"], companyName:r1["companyName"], value1: r1["value"], value2: r2["value"], value3: r3["value"], value4:r4["value"]})
                    }
                }
            }
            else{
                outcome.push({id:r1["id"], companyName:r1["companyName"] ,value1:r1["value"], value2:r2["value"], value3:r3["value"]})
            }
            }


            
        }
        }
        else{
            outcome.push({id:r1["id"], companyName:r1["companyName"], value1: r1["value"],value2: r2["value"]})
        }
        
    }
}
}
else {
    outcome.push({id:r1["id"], companyName:r1["companyName"],value1: r1["value"]})
}
}
console.log(outcome)

}
}
//}