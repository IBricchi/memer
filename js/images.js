var max=355;
var click=0;
var pi=[];
function info() {
    swal({
        title: 'Instructions',
        type: 'info',
        html: '<ol><li>look at both memes</li><li>click on your favorite meme</li><li>enter endless loop</li></ol>'
    });
}
if(JSON.parse(localStorage.getItem('pi'))===null){
    for (var i = 0; i <max; i++) {
        localStorage.setItem('max', max);
        localStorage.setItem('click', 0);
        pi.push(1);
        info();
    }
}else{
    if(localStorage.getItem('max')<max){
        for (var i = pi.length+1; i<max; i++) {
            pi.push(1);
        }
        localStorage.setItem('pi', JSON.stringify(pi));
    }
    pi=JSON.parse(localStorage.getItem('pi'));
    localStorage.setItem('max', max);
    click=localStorage.getItem('click')
}
localStorage.setItem('pi', JSON.stringify(pi));
var url1=Math.floor((Math.random() * max) + 1);
var url2=Math.floor((Math.random() * max) + 1);
if(url1==url2){
    url2=url2+2;
    if(url2>max){
        url2=url2-max;
    }
}
document.getElementById('imgimg1').src='../img/'+url1+'.gif';
document.getElementById('imgimg2').src='../img/'+url2+'.gif';
var v1=url1-1;
var v2=url2-1;
function vote1() {
    pi[v1]=pi[v1]+(pi[v2]/pi[v1])+click/100;
    click++;
    localStorage.setItem('click', click);
    localStorage.setItem('pi',JSON.stringify(pi));
    location.reload();
}
function vote2() {
    pi[v2]=pi[v2]+(pi[v1]/pi[v2])+click/100;
    click++;
    localStorage.setItem('click', click);
    localStorage.setItem('pi',JSON.stringify(pi));
    location.reload();
}