document.addEventListener("DOMContentLoaded", function () {

    var table = document.querySelector('table');
    var form = document.querySelector("form");
    var btn =  document.querySelector('button');
    form.onsubmit=function(){
        return validate();
    };
    function validate(){
        var team1= document.querySelector("#team1").value;
        var team2= document.querySelector("#team2").value;
        var points1= document.querySelector("#points1").value*1;
        var points2= document.querySelector("#points2").value*1;
        if(team1!=team2 && points1>=0 && points2>=0){
            var row=table.insertRow(-1);
            for(var i=0; i<3; i++){
                var cell=row.insertCell(i);
                if(i==0)
                    cell.innerHTML=team1;
                if(i==1)
                    cell.innerHTML=team2;
                if(i==2)
                    cell.innerHTML=points1+" - "+points2;
            }
        }
        return false;
    }

})