console.log("Handler is Loaded")



let clicks = 0;

function add(){
    clicks++;
    document.getElementById("clicker").innerHTML = 'Clicks: ' + clicks;
};