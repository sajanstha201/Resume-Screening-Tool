function activate_loader(bool){
    if(bool){
        document.getElementById('loader-box').style.display='flex'
    }
    else{
        document.getElementById('loader-box').style.display='none'
    }
    
}

//this will remove the alert box when cross button is clicked
function remove_alert_box(){
    blur_div=document.getElementById('blur-box');
    alert_div=document.getElementById('alert-box');
    blur_div.style.display='none';
    alert_div.style.display='none';
    alert_div.style.opacity=0;
}
//this is popout the alert message when some alert need to popout in window
function alert_message(message){
    var alert_div=document.getElementById('alert-box')
    var blur_div=document.getElementById('blur-box');
    alert_div.classList.toggle('alert-class')
    alert_div.style.opacity=1;
    blur_div.style.display='flex';
    alert_div.style.display='flex';
    var pElement=alert_div.querySelector('p');
    pElement.textContent=message;
}
