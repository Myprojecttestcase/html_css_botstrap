function vald(){
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
            html+="<tr><td>"+element.name+"</td><td>"+element.sq+"</td><td>"+element.lang+"</td>";
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
    document.getElementById('add').style.display='none';
    document.getElementById('update').style.display='block';
    document.getElementById('update').onclick=function (){
        slist[index].name=document.getElementById('name').value;
        slist[index].pass=document.getElementById('pass').value;
        slist[index].cpass=document.getElementById('cpass').value;
        slist[index].sqa=document.getElementById('sqa').value;
        slist[index].sq=document.getElementById('sq').value;
        slist[index].lang=document.getElementById('plang').value;
        if(vald()){
        localStorage.setItem("task", JSON.stringify(slist));
        sdata();
        document.getElementById('add').style.display='block';
    document.getElementById('update').style.display='none';}
    }
}
