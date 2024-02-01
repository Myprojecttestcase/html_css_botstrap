function vald(){
    var ptest=document.getElementById('pname').value;
    var atest=document.getElementById('p.age').value;
    var pantest=document.getElementById('pan').value;
    if(document.getElementById('name').value==""){
        document.getElementById('iname').innerHTML="Username is required * ";
        return false;
    }else{
        document.getElementById('iname').innerHTML="";
    }
    if(document.getElementById('pass').value==""){
        document.getElementById('ipass').innerHTML="Password is required * ";
        return false;
    }else{
        document.getElementById('ipass').innerHTML="";
    }
    if(document.getElementById('cpass').value==""){
        document.getElementById('icpass').innerHTML="Confirm Password is required * ";
        return false;
    }
    else if(document.getElementById('cpass').value!==document.getElementById('pass').value){
        document.getElementById('icpass').innerHTML="Confirm Password is should be matched with password* ";
        return false;
    }
    else{
        document.getElementById('icpass').innerHTML="";
    }
    if(document.getElementById('sq').value=="Open this select menu"||document.getElementById('sq').value==""){
        document.getElementById('sqvify').innerHTML="Select the options * ";
        return false;
    }
    else if(document.getElementById('sqa').value==""){
        document.getElementById('sqvify').innerHTML="";
        document.getElementById('sqavify').innerHTML="Security Answer is required *";
        return false;
    }else{
        document.getElementById('sqvify').innerHTML="";
        document.getElementById('sqavify').innerHTML="";
    }
    if(document.getElementById('plang').value=="Open this select menu"||document.getElementById('plang').value==""){
        document.getElementById('plvify').innerHTML="Language is required * ";
        return false;
    }else{
        document.getElementById('plvify').innerHTML="";
    }
    if(document.getElementById('pname').value==""){
        document.getElementById('ipname').innerHTML="person name is required * ";
        return false;
    }
    else if(!(/^[a-z A-Z]+$/).test(ptest)){
        document.getElementById('ipname').innerHTML="Name should be A-Z and a-z";
        return false;
    }
    else{
        document.getElementById('ipname').innerHTML="";
    }
    if(document.getElementById('p.age').value==""){
        document.getElementById('iage').innerHTML="AGE is required * ";
        return false;
    }else if(Number(atest)>=150||Number(atest)<=0){
        document.getElementById('iage').innerHTML="Age should between 0-150";
        return false;
    }
    else{
        document.getElementById('iage').innerHTML="";
    }
    if(document.getElementById('pan').value==""){
        document.getElementById('ipan').innerHTML="Pan number is required * ";
        return false;
    } else if(!(/^[A-Z]{5,5}[0-9]{4,4}[A-Z]{1,1}$/).test(pantest)){
        document.getElementById('ipan').innerHTML="pan should be five character four number and one charecter and all must in uppercase";
        return false;
    }
    else{
        document.getElementById('ipan').innerHTML="";
    }
    if(document.getElementById('addres').value==""){
        document.getElementById('iaddres').innerHTML="Address is required * ";
        return false;
    }else{
        document.getElementById('iaddres').innerHTML="";
    }
    
   return true; 
}
function addData(){
    if(vald()){

        var name=document.getElementById('name').value;
    var sq=document.getElementById('sq').value;
    var lang=document.getElementById('plang').value;
    var pass=document.getElementById('pass').value;
    var cpass=document.getElementById('cpass').value;
    var sqa=document.getElementById('sqa').value;
    var pname=document.getElementById('pname').value;
    var mname=document.getElementById('mname').value;
    var lname=document.getElementById('lname').value;
    var peage=document.getElementById('p.age').value;
    var addres=document.getElementById('addres').value;
    var pan=document.getElementById('pan').value;
    
        var slist="";
        if (localStorage.getItem("task")==null) {
            slist=[];
        }
        else{
            slist=JSON.parse(localStorage.getItem("task"));
        }
        slist.push({
            name: name,
            lang: lang,
            sq:sq,
            pass:pass,
            sqa:sqa,
            cpass:cpass,
            pname:pname,
            lname:lname,
            mname:mname,
            peage:peage,
            addres:addres,
            pan:pan,
        });
        localStorage.setItem("task",JSON.stringify(slist));
        sdata();
    }

}
function sdata(){
    var slist="";
        if (localStorage.getItem("task")==null) {
            slist=[];
            return false;
        }
        else{
            slist=JSON.parse(localStorage.getItem("task"));
            
        }
        var html ="";
        slist.forEach((element,index)=>{
            html+="<tr><td>"+element.pname+"</td><td>"+element.peage+"</td><td>"+element.addres+"</td><td>"+element.pan+"</td><td>"+element.lang+"</td><td>"+element.sqa+"</td>";
            html += '<td> <button class="btn btn-outline-dark" onclick="dData(' + index + ')">DELETE</button><button class="btn btn-outline-dark" onclick="uData(' + index + ')">EDIT</button></td>'
            html += "</tr>";
        });
        document.querySelector('#tdata').innerHTML = html;
        document.getElementById('name').value="";
        document.getElementById('sq').value="";
        document.getElementById('plang').value="";
        document.getElementById('pass').value="";
        document.getElementById('cpass').value="";
        document.getElementById('sqa').value="";
        document.getElementById('pname').value="";
        document.getElementById('mname').value="";
        document.getElementById('lname').value="";
        document.getElementById('p.age').value="";
        document.getElementById('addres').value="";
        document.getElementById('pan').value="";
        
        
        
}
function dData(index) {
    var slist="";
    if (localStorage.getItem("task")==null) {
        slist=[];
    }
    else{
        slist=JSON.parse(localStorage.getItem("task"));
        
    }
    slist.splice(index,1);
    localStorage.setItem("task",JSON.stringify(slist));
    sdata();
    
}
function uData(index) {
    var slist="";
    if (localStorage.getItem("task")==null) {
        slist=[];
    }
    else{
        slist=JSON.parse(localStorage.getItem("task"));
        
    }
    document.getElementById('name').value=slist[index].name;
    document.getElementById('sq').value=slist[index].sq;
    document.getElementById('sqa').value=slist[index].sqa;
    document.getElementById('plang').value=slist[index].lang;
    document.getElementById('pname').value=slist[index].pname;
    document.getElementById('mname').value=slist[index].mname;
    document.getElementById('lname').value=slist[index].lname;
    document.getElementById('p.age').value=slist[index].peage;
    document.getElementById('addres').value=slist[index].addres;
    document.getElementById('pass').placeholder="Set Password";
    document.getElementById('cpass').placeholder="Confirm Password";
    document.getElementById('pan').value=slist[index].pan;
    document.getElementById('add').style.display='none';
    document.getElementById('update').style.display='block';
    document.getElementById('update').onclick=function (){
        slist[index].name=document.getElementById('name').value;
        slist[index].pass=document.getElementById('pass').value;
        slist[index].cpass=document.getElementById('cpass').value;
        slist[index].sqa=document.getElementById('sqa').value;
        slist[index].sq=document.getElementById('sq').value;
        slist[index].lang=document.getElementById('plang').value;
        slist[index].pname=document.getElementById('pname').value;
        slist[index].peage=document.getElementById('p.age').value;
        slist[index].addres=document.getElementById('addres').value;
        slist[index].pan=document.getElementById('pan').value;
        if(vald()){
        localStorage.setItem("task", JSON.stringify(slist));
        sdata();
        document.getElementById('add').style.display='block';
    document.getElementById('update').style.display='none';}
    }
    
}
