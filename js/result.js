var pi=[];
max=localStorage.getItem('max');
pi=JSON.parse(localStorage.getItem('pi'));
var max=localStorage.getItem('max');
for (var r=1;r<=25;r++) {  
    for (var i=1;i<=max;i++) {
        if (Math.max.apply(Math, pi)==pi[i]&&Math.max.apply(Math, pi)>=2) {
            i++;
            document.getElementById('img'+r).src="../img/"+i+".gif";
            i--;
            pi[i]=1;
        }
    }
    if ($('#img'+r).attr('src') == '#'){
        $('#img'+r).hide();
    }
}
setInterval(function(){
    if($("body").width()>1500){
        $(".galimg").animate({
            width: "20%",
            height: "35%",
            marginLeft: "4%"
        },500);
    }else if($("body").width()>1000){
        $(".galimg").animate({
            width: "28%",
            height: "46%",
            marginLeft: "4%"
        },500);
    }else if ($("body").width()>500) {
        $(".galimg").animate({
            width: "42%",
            height: "50%",
            marginLeft: "6%"
        },500);
    }else if($("body").width()<=500) {
        $(".galimg").animate({
            width: "70%",
            height: "50%",
            marginLeft: "15%"
        },500);
    }
}, 500)  