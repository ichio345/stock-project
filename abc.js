        var startYear = "2013"
    var endYear = "2016"

    var csv = ".txt";
    var dataPath = "https://ichio345.github.io/stock-project/";
    var type =1;
    var comparison = 1
    var text = 2
    var testrequest = {target:"ATNI", comparison:1, data :"2", boolean:1}
    var testrequest2 = {target:"DR", comparison:2, data:"3", boolean:1}
    var testrequest3 = {target:"DY", comparison:0, data:"20", boolean:0}
    var testrequest4 = {target:"0", comparison:0,data:"3", boolean:0}
    
     var result1 = []
     var result2 = []
     var result3 = []
     var result4 = []
     var outcome = []
    
    
    function getURL(request){
        var filename = request.target 
        var comparison = request.comparison
        var text = request.data
        var dataURL = dataPath+filename+csv;
        return dataURL

    }

function search(){
     //result1   
    d3.csv( getURL(testrequest), 

    function first(data1){
    console.log(data1);
    var k ;
    
    for(k=0; k<data1.length; k++){
        var x= data1[k];
    


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
                                    result1.push({id: parseInt(x["index"]) ,companyName:x["company name"], value: average})                        
                                     }
                            }  
}
console.log(result1)

//result2
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

//result3
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

//result4
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


for (i=0; i< result1.length ; i++){
    var r1 = result1[i]
    for (j=0;j<result2.length;j++){
        var r2 =result2[j]
        if (r1["id"]==r2["id"]){
            for(k=0;k<result3.length; k++){
            var r3 = result3[k]
            if(r1["id"]== r3["id"]){
                for(l=0;l<result4.length;l++){
                    var r4 = result4[l]
                    if(r1["id"]=r4["id"]){
                        outcome.push({id: r1["id"], companyName:r1["companyName"], value1: r1["value"], value2: r2["value"], value3: r3["value"], value4:r4["value"]})

                    }
                }
            }
}
}
}
}
            console.log(outcome)
                    for(m=0;m<outcome.length;m++){
                     // alert("hi");
                     var y = outcome[m]
                     var bigDiv = document.createElement("div")
                     bigDiv.setAttribute("id", y["id"]);
                     var containerDiv = document.getElementById("mytable")
                     containerDiv.appendChild(bigDiv)
                    }

                    for(n=0;n<outcome.length;n++){
                    var y = outcome[n]
                     var newDiv = document.createElement("button"); 
                     newDiv.style.backgroundColor = "Gainsboro";
                     newDiv.style. width = "100%"
                     newDiv.style.textAlign = "center"
                     newDiv.style.borderStyle = "solid"
                     newDiv.style.borderWidth = "1px"
                     newDiv.style.height = "100%"

                     var demo = document.getElementById(y["id"]);

                     demo.appendChild(newDiv);
                      var newContent = document.createTextNode(y["id"]); 
                      newDiv.appendChild(newContent);
                      var currentDiv = document.getElementById("div"); 
                      demo.insertBefore(newDiv, currentDiv);
                      demo.style.display = "inline-block";
                      //value1 display
                    var newDiv2 =document.createElement("button")
                    newDiv2.style.backgroundColor="papayawhip"
                    newDiv2.style.width = "100%"
                    newDiv2.style.textAlign = "center"
                    newDiv2.style.borderStyle = "solid";
                    newDiv2.style.borderWidth = "1px";
                    newDiv2.style.height = "100%"
                    var demo2 = document.getElementById(y["id"])
                    demo2.appendChild(newDiv2);
                    var newContent2 = document.createTextNode(y["companyName"])
                    newDiv2.appendChild(newContent2);
                    var currentDiv2 = document.getElementById("div");
                    demo2.insertBefore(newDiv2, currentDiv2);   
                    demo2.style.display = "inline-block";

                     var newDiv3 =document.createElement("button")
                    newDiv3.style.backgroundColor="papayawhip"
                    newDiv3.style.width = "100%"
                    newDiv3.style.textAlign = "center"
                    newDiv3.style.borderStyle = "solid";
                    newDiv3.style.borderWidth = "1px";
                    newDiv3.style.height = "100%"
                    var demo3 = document.getElementById(y["id"])
                    demo3.appendChild(newDiv3);
                    var newContent3 = document.createTextNode(y["value1"])
                    newDiv3.appendChild(newContent3);
                    var currentDiv3 = document.getElementById("div");
                    demo3.insertBefore(newDiv3, currentDiv3);   
                    demo3.style.display = "inline-block";

                    var newDiv4 =document.createElement("button")
                    newDiv4.style.backgroundColor="papayawhip"
                    newDiv4.style.width = "100%"
                    newDiv4.style.textAlign = "center"
                    newDiv4.style.borderStyle = "solid";
                    newDiv4.style.borderWidth = "1px";
                    newDiv4.style.height = "100%"
                    var demo4 = document.getElementById(y["id"])
                    demo4.appendChild(newDiv4);
                    var newContent4 = document.createTextNode(y["value2"])
                    newDiv4.appendChild(newContent4);
                    var currentDiv4 = document.getElementById("div");
                    demo4.insertBefore(newDiv4, currentDiv4);   
                    demo4.style.display = "inline-block";

                    var newDiv5 =document.createElement("button")
                    newDiv5.style.backgroundColor="papayawhip"
                    newDiv5.style.width = "100%"
                    newDiv5.style.textAlign = "center"
                    newDiv5.style.borderStyle = "solid";
                    newDiv5.style.borderWidth = "1px";
                    newDiv5.style.height = "100%"
                    var demo5 = document.getElementById(y["id"])
                    demo5.appendChild(newDiv5);
                    var newContent5 = document.createTextNode(y["value3"])
                    newDiv5.appendChild(newContent5);
                    var currentDiv5 = document.getElementById("div");
                    demo5.insertBefore(newDiv5, currentDiv5);   
                    demo5.style.display = "inline-block";

                    var newDiv6 =document.createElement("button")
                    newDiv6.style.backgroundColor="papayawhip"
                    newDiv6.style.width = "100%"
                    newDiv6.style.textAlign = "center"
                    newDiv6.style.borderStyle = "solid";
                    newDiv6.style.borderWidth = "1px";
                    newDiv6.style.height = "100%"
                    var demo6 = document.getElementById(y["id"])
                    demo6.appendChild(newDiv6);
                    var newContent6 = document.createTextNode(y["value2"])
                    newDiv6.appendChild(newContent6);
                    var currentDiv6 = document.getElementById("div");
                    demo6.insertBefore(newDiv6, currentDiv6);   
                    demo6.style.display = "inline-block";                   

                    }

}

)


}
//if result4.boolean ==0
else{
    for (i=0; i< result1.length ; i++){
    var r1 = result1[i]
    for (j=0;j<result2.length;j++){
        var r2 =result2[j]
        if (r1["id"]==r2["id"]){
            for(k=0;k<result3.length; k++){
            var r3 = result3[k]
            if(r1["id"]== r3["id"]){
                 outcome.push({id:r1["id"], companyName:r1["companyName"] ,value1:r1["value"], value2:r2["value"], value3:r3["value"]})

            }
            }
        }
        }
        }
            console.log(outcome)
            for(m=0;m<outcome.length;m++){
                     // alert("hi");
                     var y = outcome[m]
                     var bigDiv = document.createElement("div")
                     bigDiv.setAttribute("id", y["id"]);
                     var containerDiv = document.getElementById("mytable")
                     containerDiv.appendChild(bigDiv)
                    }

                    for(n=0;n<outcome.length;n++){
                    var y = outcome[n]
                     var newDiv = document.createElement("button"); 
                     newDiv.style.backgroundColor = "Gainsboro";
                     newDiv.style. width = "100%"
                     newDiv.style.textAlign = "center"
                     newDiv.style.borderStyle = "solid"
                     newDiv.style.borderWidth = "1px"
                     newDiv.style.height = "100%"

                     var demo = document.getElementById(y["id"]);

                     demo.appendChild(newDiv);
                      var newContent = document.createTextNode(y["id"]); 
                      newDiv.appendChild(newContent);
                      var currentDiv = document.getElementById("div"); 
                      demo.insertBefore(newDiv, currentDiv);
                      demo.style.display = "inline-block";
                      //value1 display
                    var newDiv2 =document.createElement("button")
                    newDiv2.style.backgroundColor="papayawhip"
                    newDiv2.style.width = "100%"
                    newDiv2.style.textAlign = "center"
                    newDiv2.style.borderStyle = "solid";
                    newDiv2.style.borderWidth = "1px";
                    newDiv2.style.height = "100%"
                    var demo2 = document.getElementById(y["id"])
                    demo2.appendChild(newDiv2);
                    var newContent2 = document.createTextNode(y["companyName"])
                    newDiv2.appendChild(newContent2);
                    var currentDiv2 = document.getElementById("div");
                    demo2.insertBefore(newDiv2, currentDiv2);   
                    demo2.style.display = "inline-block";

                     var newDiv3 =document.createElement("button")
                    newDiv3.style.backgroundColor="papayawhip"
                    newDiv3.style.width = "100%"
                    newDiv3.style.textAlign = "center"
                    newDiv3.style.borderStyle = "solid";
                    newDiv3.style.borderWidth = "1px";
                    newDiv3.style.height = "100%"
                    var demo3 = document.getElementById(y["id"])
                    demo3.appendChild(newDiv3);
                    var newContent3 = document.createTextNode(y["value1"])
                    newDiv3.appendChild(newContent3);
                    var currentDiv3 = document.getElementById("div");
                    demo3.insertBefore(newDiv3, currentDiv3);   
                    demo3.style.display = "inline-block";

                    var newDiv4 =document.createElement("button")
                    newDiv4.style.backgroundColor="papayawhip"
                    newDiv4.style.width = "100%"
                    newDiv4.style.textAlign = "center"
                    newDiv4.style.borderStyle = "solid";
                    newDiv4.style.borderWidth = "1px";
                    newDiv4.style.height = "100%"
                    var demo4 = document.getElementById(y["id"])
                    demo4.appendChild(newDiv4);
                    var newContent4 = document.createTextNode(y["value2"])
                    newDiv4.appendChild(newContent4);
                    var currentDiv4 = document.getElementById("div");
                    demo4.insertBefore(newDiv4, currentDiv4);   
                    demo4.style.display = "inline-block";

                    var newDiv5 =document.createElement("button")
                    newDiv5.style.backgroundColor="papayawhip"
                    newDiv5.style.width = "100%"
                    newDiv5.style.textAlign = "center"
                    newDiv5.style.borderStyle = "solid";
                    newDiv5.style.borderWidth = "1px";
                    newDiv5.style.height = "100%"
                    var demo5 = document.getElementById(y["id"])
                    demo5.appendChild(newDiv5);
                    var newContent5 = document.createTextNode(y["value3"])
                    newDiv5.appendChild(newContent5);
                    var currentDiv5 = document.getElementById("div");
                    demo5.insertBefore(newDiv5, currentDiv5);   
                    demo5.style.display = "inline-block";
                }


}

}

)



}
// if result3.boolean == 0
else{
    for (i=0; i< result1.length ; i++){
    var r1 = result1[i]
    for (j=0;j<result2.length;j++){
        var r2 =result2[j]
        if (r1["id"]==r2["id"]){
            outcome.push({id:r1["id"], companyName:r1["companyName"], value1: r1["value"],value2: r2["value"]})
        }
        }
        }
                    console.log(outcome)
                     var stockNumber = document.createElement("div")
                     stockNumber.innerHTML = "股票代號";
                     stockNumber.style.backgroundColor = "skyblue"
                     stockNumber.style.textAlign = "center"
                     stockNumber.style.display = "inline-block"
                     stockNumber.style.height = "40px"
                     stockNumber.style.paddingTop = "10px"
                     stockNumber.style.width = "25%"
                     var dataValue = document.createElement("div")
                     dataValue.innerHTML = "公司名稱";
                     dataValue.style.textAlign = "center"
                     dataValue.style.display = "inline-block"
                     dataValue.style.backgroundColor = "skyblue"
                     dataValue.style.height = "40px"
                     dataValue.style.paddingTop = "10px"    
                     dataValue.style.width = "25%"

                     var dataValue2 = document.createElement("div")
                     dataValue2.innerHTML = testrequest["target"]
                     dataValue2.style.textAlign = "center"
                     dataValue2.style.display = "inline-block"
                     dataValue2.style.backgroundColor = "skyblue"
                     dataValue2.style.height = "40px"
                     dataValue2.style.paddingTop = "10px"    
                     dataValue2.style.width = "25%"

                     var dataValue3 = document.createElement("div")
                     dataValue3.innerHTML = testrequest2["target"]
                     dataValue3.style.textAlign = "center"
                     dataValue3.style.display = "inline-block"
                     dataValue3.style.backgroundColor = "skyblue"
                     dataValue3.style.height = "40px"
                     dataValue3.style.paddingTop = "10px"    
                     dataValue3.style.width = "25%"

                     var title = document.getElementById("mytable2")
                     title.appendChild(stockNumber)
                     title.appendChild(dataValue)
                     title.appendChild(dataValue2)
                     title.appendChild(dataValue3)

                   for(m=0;m<outcome.length;m++){
                     // alert("hi");
                     var y = outcome[m]
                     var bigDiv = document.createElement("div")
                     bigDiv.setAttribute("id", y["id"]);
                     var containerDiv = document.getElementById("mytable2")
                     containerDiv.appendChild(bigDiv)
                     bigDiv.style.width = "100%"
                    }

                    for(n=0;n<outcome.length;n++){
                    var y = outcome[n]
                     var newDiv = document.createElement("button"); 
                     newDiv.style.backgroundColor = "Gainsboro";
                     newDiv.style. width = "25%"
                     newDiv.style.textAlign = "center"
                     newDiv.style.borderStyle = "solid"
                     newDiv.style.borderWidth = "1px"
                     newDiv.style.height = "25%"
                     newDiv.style.display = "inline-block"
                     var demo = document.getElementById(y["id"]);

                     demo.appendChild(newDiv);
                      var newContent = document.createTextNode(y["id"]); 
                      newDiv.appendChild(newContent);
                      var currentDiv = document.getElementById("div"); 
                      demo.insertBefore(newDiv, currentDiv);
                      //value1 display
                    var newDiv2 =document.createElement("button")
                    newDiv2.style.backgroundColor="papayawhip"
                    newDiv2.style.width = "25%"
                    newDiv2.style.textAlign = "center"
                    newDiv2.style.borderStyle = "solid";
                    newDiv2.style.borderWidth = "1px";
                    newDiv2.style.height = "25%"
                    newDiv2.style.display = "inline-block"

                    var demo2 = document.getElementById(y["id"])
                    demo2.appendChild(newDiv2);
                    var newContent2 = document.createTextNode(y["companyName"])
                    newDiv2.appendChild(newContent2);
                    var currentDiv2 = document.getElementById("div");
                    demo2.insertBefore(newDiv2, currentDiv2);   

                     var newDiv3 =document.createElement("button")
                    newDiv3.style.backgroundColor="papayawhip"
                    newDiv3.style.width = "25%"
                    newDiv3.style.textAlign = "center"
                    newDiv3.style.borderStyle = "solid";
                    newDiv3.style.borderWidth = "1px";
                    newDiv3.style.height = "25%"
                    newDiv3.style.display = "inline-block"
                    var demo3 = document.getElementById(y["id"])
                    demo3.appendChild(newDiv3);
                    var newContent3 = document.createTextNode(y["value1"])
                    newDiv3.appendChild(newContent3);
                    var currentDiv3 = document.getElementById("div");
                    demo3.insertBefore(newDiv3, currentDiv3);   

                    var newDiv4 =document.createElement("button")
                    newDiv4.style.backgroundColor="papayawhip"
                    newDiv4.style.width = "25%"
                    newDiv4.style.textAlign = "center"
                    newDiv4.style.borderStyle = "solid";
                    newDiv4.style.borderWidth = "1px";
                    newDiv4.style.height = "25%"
                    newDiv4.style.display = "inline-block"
                    var demo4 = document.getElementById(y["id"])
                    demo4.appendChild(newDiv4);
                    var newContent4 = document.createTextNode(y["value2"])
                    newDiv4.appendChild(newContent4);
                    var currentDiv4 = document.getElementById("div");
                    demo4.insertBefore(newDiv4, currentDiv4);   
                }
}
}

)





}

//if result2.boolean ==0
else{
    for(i=0; i< result1.length; i++){
            var r1 = result1[i]
    outcome.push({id:r1["id"], companyName:r1["companyName"],value1: r1["value"]})

}
            console.log(outcome)
                          for(m=0;m<outcome.length;m++){
                     // alert("hi");
                     var y = outcome[m]
                     var bigDiv = document.createElement("div")
                     bigDiv.setAttribute("id", y["id"]);
                     var containerDiv = document.getElementById("mytable")
                     containerDiv.appendChild(bigDiv)
                    }

                    for(n=0;n<outcome.length;n++){
                    var y = outcome[n]
                     var newDiv = document.createElement("button"); 
                     newDiv.style.backgroundColor = "Gainsboro";
                     newDiv.style. width = "100%"
                     newDiv.style.textAlign = "center"
                     newDiv.style.borderStyle = "solid"
                     newDiv.style.borderWidth = "1px"
                     newDiv.style.height = "100%"
                     newDiv.style.display = "inline-block"
                     var demo = document.getElementById(y["id"]);

                     demo.appendChild(newDiv);
                      var newContent = document.createTextNode(y["id"]); 
                      newDiv.appendChild(newContent);
                      var currentDiv = document.getElementById("div"); 
                      demo.insertBefore(newDiv, currentDiv);
                      //value1 display
                    var newDiv2 =document.createElement("button")
                    newDiv2.style.backgroundColor="papayawhip"
                    newDiv2.style.width = "100%"
                    newDiv2.style.textAlign = "center"
                    newDiv2.style.borderStyle = "solid";
                    newDiv2.style.borderWidth = "1px";
                    newDiv2.style.height = "100%"
                    var demo2 = document.getElementById(y["id"])
                    demo2.appendChild(newDiv2);
                    var newContent2 = document.createTextNode(y["companyName"])
                    newDiv2.appendChild(newContent2);
                    var currentDiv2 = document.getElementById("div");
                    demo2.insertBefore(newDiv2, currentDiv2);   

                     var newDiv3 =document.createElement("button")
                    newDiv3.style.backgroundColor="papayawhip"
                    newDiv3.style.width = "100%"
                    newDiv3.style.textAlign = "center"
                    newDiv3.style.borderStyle = "solid";
                    newDiv3.style.borderWidth = "1px";
                    newDiv3.style.height = "100%"
                    var demo3 = document.getElementById(y["id"])
                    demo3.appendChild(newDiv3);
                    var newContent3 = document.createTextNode(y["value1"])
                    newDiv3.appendChild(newContent3);
                    var currentDiv3 = document.getElementById("div");
                    demo3.insertBefore(newDiv3, currentDiv3);   
                    }

}








}

)
















// // for(z=0; z< result1.length; z++ ){
// //     var rr = result1[z]
    
// //     outcome.push({id: parseInt(rr["id"]), companyName:rr["companyName"],value1: rr["value"]})

// // }
// // console.log(outcome);


    






 
 // var stockNumber = document.getElementById("table2")
 // stockNumber.innerHTML = "股票代號";
 // stockNumber.style.backgroundColor = "skyblue"
 // stockNumber.style.textAlign = "center"
 // stockNumber.style.display = "inline-block"
 // stockNumber.style.height = "40px"
 // stockNumber.style.paddingTop = "10px"
 // stockNumber.style.width = "25%"
 // var dataValue = document.getElementById("table2")
 // dataValue.innerHTML = "公司名稱";
 // dataValue.style.textAlign = "center"
 // dataValue.style.display = "inline-block"
 // dataValue.style.backgroundColor = "skyblue"
 // dataValue.style.height = "40px"
 // dataValue.style.paddingTop = "10px"    
 // dataValue.style.width = "25%"

 // var dataValue2 = document.getElementById("table2")
 // dataValue2.innerHTML = testrequest["target"]
 // dataValue2.style.textAlign = "center"
 // dataValue2.style.display = "inline-block"
 // dataValue2.style.backgroundColor = "skyblue"
 // dataValue2.style.height = "40px"
 // dataValue2.style.paddingTop = "10px"    
 // dataValue2.style.width = "25%"

 // var dataValue3 = document.getElementById("table2")
 // dataValue3.innerHTML = testrequest2["target"]
 // dataValue3.style.textAlign = "center"
 // dataValue3.style.display = "inline-block"
 // dataValue3.style.backgroundColor = "skyblue"
 // dataValue3.style.height = "40px"
 // dataValue3.style.paddingTop = "10px"    
 // dataValue3.style.width = "25%"


}
