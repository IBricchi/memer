(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-71624396-2', 'auto');
ga('send', 'pageview');
function NA() {
    alert("at the moment this feature is still in development and doesnt work")
}
function selector(a, b, c, d) {
    $('#select').ready(function(){
        if (a==1) {
            $('#select').append('<button style="border:none; margin-left:1px; background:none; width:100%;"><a href="../"><img src="../img/home.gif" style="width:100%;"></img></a></button>');
            $('head').append('<link rel="icon" type="image/gif" href="../img/logo.gif">');
        }
        if (b==1){
            $('#select').append("<button style='border:none; margin-left:1px; background:none; width:100%;'><div style='width:100%;'onclick='info()'><img src='../img/info.gif' style='width:100%;'></img></div></button>");
        }
        if (c==1){
            $('#select').append("<button style='border:none; margin-left:1px; background:none; width:100%;'><div style='width:100%;'onclick='info()'><img src='img/info.gif' style='width:100%;'></img></div></button>");
        }
        if (d==1){
            $('#select').append('<button style="border:none; margin-left:1px; background:none; width:100%;"><a href="/upload"><img src="img/plus.gif" style="width:100%;"></img></a></button>');
        }
    });
}