var totTime=0;

function addActivity(){
    var get_Text=document.getElementById("activity");
    var task=get_Text.value.trim();
    var getTime=document.getElementById('minutes').value

    if(task===""){
        alert("Please enter a task!");
        return;
    }
    if(getTime===""){
        alert("Please enter a Time Period!");
        return;
    }

    if(getTime<=0){
        alert("Please enter  correct Time!");
        return;
    }
    const li=document.createElement("li");
    li.textContent=task+' '+getTime;
    const ul=document.getElementById("activityList");
    ul.appendChild(li);
    getTime=parseInt(getTime);
    totTime=totTime+getTime;
    document.getElementById("total").textContent=totTime.toString();

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";
    deleteButton.onclick= function(){
         li.remove();              
        totTime -= getTime;        
        document.getElementById("total").textContent = totTime;
    }

    const doneBtn = document.createElement("button");
    doneBtn.textContent = "Done";
    doneBtn.className = "done-btn";

    doneBtn.onclick=function(){
        li.style.color='green';
        li.style.textDecoration = "line-through";
    }

    li.appendChild(doneBtn);
    li.appendChild(deleteButton);
    document.getElementById("activityList").appendChild(li);

    


    if(totTime>120){
        document.getElementById('status').textContent="Focus"
    }

    document.getElementById("activity").value='';
    document.getElementById('minutes').value='';
}

if (totTime <= 120) {
            document.getElementById("status").textContent = "Distract";
    };

if(totTime>120){
        document.getElementById('status').textContent="Focus"
    }

function resetSession(){
    location.reload();
}