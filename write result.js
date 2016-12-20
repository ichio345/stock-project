
var outcome=[]
for (i=1; i< result1.length ; i++){
	var r1 = result1[i]
	if(request2 == true){
	for (j=1;j<result2.length;j++){
		var r2 =result2[j]
		if (r1["id"]==r2["id"]){
			if(request3==true){
			for(k=1;k<result3.length; k++){
			var r3 = result3[k]
			if(r1["id"]== r3["id"]){
				if(request4 == true){
				for(l=1;l<result4.length;l++){
					var r4 = result4[l]
					if(r1["id"]=r4["id"]){
						outcome.push({id: r1["id"], value1: r1["value"], value2: r2["value"], value3: r3["value"], value4:r4["value"]})
					}
				}
			}
			else{
				outcome.push(id:r1["id"], value1:r1["value"], value2:r2["value"], value3:r3["value"])
			}
			}


			
		}
		}
		else{
			outcome.push(id:r1["id"], value1: r1["value"],value2: r2["value"])
		}
		
	}
}
}
else {
	outcome.push(id:r1["id"], value1: r1["value"])
}
}