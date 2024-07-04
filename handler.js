console.log("Handler is Loaded")



let clicks = 0;

let multi = 1;

function add(){
    clicks = clicks + (1 * multi)
    document.getElementById("clicker").innerHTML = 'Clicks: ' + clicks;

    
};


function level1(){
    if(clicks > 200){
         multi = 2
        clicks = clicks - 200
        document.getElementById("clicker").innerHTML = 'Clicks: ' + clicks;
       
    }
}

function level2(){
    if(clicks > 1000){
         multi = 4
        clicks = clicks - 1000
        document.getElementById("clicker").innerHTML = 'Clicks: ' + clicks;
       
    }
}

function level3(){
    if(clicks > 10000){
         multi = 10
        clicks = clicks - 10000
        document.getElementById("clicker").innerHTML = 'Clicks: ' + clicks;
       
    }
}

function level4(){
    if(clicks > 100000){
         multi = 100
        clicks = clicks - 100000
        document.getElementById("clicker").innerHTML = 'Clicks: ' + clicks;
       
    }
}