var click=localStorage.getItem('click');
if (click>0) {
    click=click;
} else {
    click=0;
}
var min=25; 
var left=min-click;
function clickblock() {
    if (click>=min) {
        window.location.href = 'result';
    } else {
        swal("Wait",'To see your favorite memes you first have to vote at least ' + min + ' times, you have ' + left + ' more to go', "error");
    }
}
function info() {
    swal({
        title: 'Instructions',
        type: 'info',
        html: '<ol><li>Click on vote to go to the voting page</li><li>Once you vote' + min +' times you can click on, the best to see you favorite memes</li><li>click the + symbol to upload your own images</ol>'
    });
}