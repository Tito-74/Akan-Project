function print(){
    var Birth = document.getElementById("date").value;
    var gender = document.getElementById("gender").value;
    var male = [" Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    var female = ["Akosua"," Adwoa","Abenaa"," Akua","Yaa","Afua"," Ama"];
    var day_name = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];



    var cc=parseInt(Birth.slice(0,2))
    var yy=parseInt(Birth.slice(2,4))
    var mm=parseInt(Birth.slice(5,7))
    var dd=parseInt(Birth.slice(8,10))

    var w_day = Math.abs((((cc/4)-2*cc-1) + ((5*yy/4)) + ((26*(mm+1)/10))+dd)%7);
       if(gender.toLowerCase() != "male")
       {
           document.getElementById("predict").innerHTML="Your Akan name is " + " "+ female[Math.floor(w_day)]  + " since you are female and born on " + day_name[Math.floor(w_day)];
          
       }
           else
       {
           document.getElementById("predict").innerHTML="Your Akan name is " + " "+ male[Math.floor(w_day)]  + " since you are female and born on " + day_name[Math.floor(w_day)];
       };

    // document.getElementById("predict").innerHTML="hello"+ w_day;
    

}