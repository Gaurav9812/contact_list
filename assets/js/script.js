console.log("script succesfully loadded");
var count=0;
var list_item=document.getElementsByTagName('li');
for(var i=0;i<list_item.length;i++) 
{
list_item[i].addEventListener('click',function(){
    console.log("this is clicked");
    this.remove();
    count++;
    setExample();
});
}
function setExample()
{
    switch(count){
        case 1:
            {
                alert("no");
                break;
            }
        case 2:
            {
                alert("please NO");
                break;
            }
        case 3:
            {
                alert("NO for God sake");
                break;
            }
        case 4:
            {
                alert("So u have chosen death");
                break;
            }
        default:
            {
                alert("here u go");
            }    
    }
}