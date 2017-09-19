var obj, Id, Name, Provider, Url, Length, retrievedObject, xmlhttp, del, i, idvalue, namevalue, providervalue, urlvalue;
var table = [];
function employeeDetails() {
   document.getElementById("ContentDisplayer").innerHTML ='<button onclick = "gotoemployee();"> view emp details </button> ';
   
  var xmlhttp = new XMLHttpRequest();
  
    xmlhttp.onreadystatechange = function() {
	    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			console.log(xmlhttp.responseText);
            obj = JSON.parse(xmlhttp.responseText);
			localStorage.setItem('obj', JSON.stringify(obj));

			retrievedObject = JSON.parse(localStorage.getItem('obj'));

			console.log('retrievedObject: ', retrievedObject);
			
			
				
		}
		 
	}
xmlhttp.open('GET','empJson.json',true);
xmlhttp.send(); 
}
function gotoemployee() {
				document.getElementById('ContentDisplayer').innerHTML = "<button onclick = 'addRow();'>add</button> <table border = '1' id = 'tablecontent'><thead><th>id</th><th>name</th><th>provider</th><th>url</th><th>action</th></thead>";
				
				for(  i = 0; i < retrievedObject.length ; i++ ) {
					document.getElementById('tablecontent').innerHTML += "<tbody><tr><td>"+retrievedObject[i].id+"</td><td>"+retrievedObject[i].name+"</td><td>"+retrievedObject[i].provider+"</td><td>"+retrievedObject[i].url+"</td><td><button id = 'editrow()' onclick ='editfuncton("+i+")' >edit</button><button id = 'deleterow' onclick ='deletefunction("+i+")'>delete</button></tr></tbody></table>"
				}
}
function deletefunction(val) {
	retrievedObject.splice(val,1);
	updateempJson();
    gotoemployee();
}

function updateempJson(){
	localStorage.setItem('obj', JSON.stringify(retrievedObject));
}

function editfunction(editvalue) {
	
	
}
function addRow(){
	 i += i;
	 var addrowtotable = document.getElementById('ContentDisplayer').innerHTML += "id:<input type ='number' id = 'id1'/> name:<input type ='text' id = 'name1'/>provider:<input type ='text' id = 'provider1'/> url:<input type ='text' id = 'url1'/>";
	 var a = getElementById('id1').value;
	 var b = getElementById('name1').value;
	 var c = getElementById('provider1').value;
	 var d = getElementById('url1').value ;
	 document.getElementById('ContentDisplayer').innerHTML +=  '<button onclick = 'save(a,b,c,d);'>save</button>';
	 
}
function save(idvalue, namevalue, providervalue, urlvalue) {
	
}
function companyDetails() {
  document.getElementById("ContentDisplayer").innerHTML ="hi I am from company";
}

