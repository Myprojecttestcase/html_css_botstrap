function valid(){
    var name=document.getElementById('name').value;
    var age=document.getElementById('age').value;
    var address=document.getElementById('address').value;
    var email=document.getElementById('email').value;

    if(name==""){
        alert("enter name");
        return false;
    }
    if(age==""){
        alert("enter age");
        return false;
    }
    if(address==""){
        alert("enter address");
        return false;
    }
    if(email==""){
        alert("enter email");
        return false;
    }
    return true;
}
function addData(){
    if(valid()){

        var name=document.getElementById('name').value;
    var age=document.getElementById('age').value;
    var address=document.getElementById('address').value;
    var email=document.getElementById('email').value;
        var slist="";
        if (localStorage.getItem("Data")==null) {
            slist=[];
        }
        else{
            slist=JSON.parse(localStorage.getItem("Data"));
        }
        slist.push({
            name: name,
            address: address,
            age: age,
            email: email,
        });
        localStorage.setItem("Data",JSON.stringify(slist));
        sdata();
    }

}

function sdata(){
    var slist="";
        if (localStorage.getItem("Data")==null) {
            slist=[];
            return false;
        }
        else{
            slist=JSON.parse(localStorage.getItem("Data"));
            
        }
        var html ="";
        slist.forEach((element,index)=>{
            html+="<tr><td>"+element.name+"</td><td>"+element.age+"</td><td>"+element.address+"</td><td>"+element.email+"</td>";
            html += '<td> <button class="btn btn-outline-dark" onclick="dData(' + index + ')">DELETE</button><button class="btn btn-outline-dark" onclick="uData(' + index + ')">EDIT</button></td>'
            html += "</tr>";
        });
        document.querySelector('#tdata').innerHTML = html;
        document.getElementById('name').value="";
        document.getElementById('age').value="";
        document.getElementById('address').value="";
        document.getElementById('email').value="";
        
}
function dData(index) {
    var slist="";
    if (localStorage.getItem("Data")==null) {
        slist=[];
    }
    else{
        slist=JSON.parse(localStorage.getItem("Data"));
        
    }
    slist.splice(index,1);
    localStorage.setItem("Data",JSON.stringify(slist));
    sdata();
    
}
function uData(index) {
    var slist="";
    if (localStorage.getItem("Data")==null) {
        slist=[];
    }
    else{
        slist=JSON.parse(localStorage.getItem("Data"));
        
    }
    document.getElementById('name').value=slist[index].name;
    document.getElementById('age').value=slist[index].age;
    document.getElementById('address').value=slist[index].address;
    document.getElementById('email').value=slist[index].email;
    document.getElementById('add').style.display='none';
    document.getElementById('update').style.display='block';
    document.getElementById('update').onclick=function (){
        slist[index].name=document.getElementById('name').value;
        slist[index].age=document.getElementById('age').value;
        slist[index].address=document.getElementById('address').value;
        slist[index].email=document.getElementById('email').value;
        localStorage.setItem("Data", JSON.stringify(slist));
        sdata();
        document.getElementById('add').style.display='block';
    document.getElementById('update').style.display='none';
    }
}

