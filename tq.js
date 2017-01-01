function coefficient (){
	for
}



function request(target,comparison,data){
	this.target=target;
	this.comparison=comparison;
	this.data=data
	this.fullRequest=target+comparison+data;
}
function clickSearch(){
	var inpObj1 = document.getElementById("form1");
	var inpObj2 = document.getElementById("form2");
	var inpObj3 = document.getElementById("form3");
	var inpObj4 = document.getElementById("form4");

	var input1=checkInput(inpObj1);
	var input2=checkInput(inpObj2);
	var input3=checkInput(inpObj3);
	var input4=checkInput(inpObj4);
//all request are ready
//doSearch function is not in this script
	doSearch(input1,input2,input3,input4);
}
function checkInput(inpObj) {
	var thisContent = new request();
	//=============================
	var thisRequest ={searchAble:"false",content:thisContent};
	//=============================
	if(inpObj.checkValidity()==false){
		thisRequest.content=request(inpObj[target],inpObj[comparison],inpObj.data)
		thisRequest.searchAble=true;
	}
	return thisRequest;
}
document.getElementById('search').onclick=clickSearch();