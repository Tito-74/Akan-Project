function akanPrint(){
   
    var Birth = document.getElementById("date").value;
    var gender = document.getElementById("gender").value;
    var male = [" Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    var female = ["Akosua"," Adwoa","Abenaa"," Akua","Yaa","Afua"," Ama"];
    var day_name = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    if( Birth == "" ) {
        alert( "Please provide your Birthday!" ); 
        return false;
     }
     else{


            var cc=parseInt(Birth.slice(0,2));
            var yy=parseInt(Birth.slice(2,4));
            var mm=parseInt(Birth.slice(5,7));
            var dd=parseInt(Birth.slice(8,10));

            var w_day = Math.abs((((cc/4)-2*cc-1) + ((5*yy/4)) + ((26*(mm+1)/10))+dd)%7);
            if(gender.toLowerCase() != "male")
            {
                return [female[Math.floor(w_day)], day_name[Math.floor(w_day)]];
                // document.getElementById("predict").innerHTML="Your Akan name is " + " "+ female[Math.floor(w_day)]  + " since you are female and born on " + day_name[Math.floor(w_day)];
                // return false;
            }
                else
            {
                return [male[Math.floor(w_day)], day_name[Math.floor(w_day)]];
                // document.getElementById("predict").innerHTML="Your Akan name is " + " "+ male[Math.floor(w_day)]  + " since you are female and born on " + day_name[Math.floor(w_day)];
                // return false;
            };
    };

    // document.getElementById("predict").innerHTML="hello"+ w_day;
    

};
function printName(){
    
    var output = akanPrint();
    document.getElementById("predict").innerHTML="Your Akan name is " + " "+ output[0]  + " since you are female and born on " + output[1];
    document.getElementById("form").reset();
    return false;
   
}
