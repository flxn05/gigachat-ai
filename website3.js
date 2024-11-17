
async function send_req(){
    let req = document.getElementById("inputField").value();
    if (req == ""){
        return;
    } 



}

function add_msg(msg, dir){
    let node = document.createTextNode(msg)
    let qwery = document.createElement("div");
    let z = document.createElement("div");
    if (dir == "tx"){
        qwery.setAttribute("id", "userInput");
        z.setAttribute("id", "userBubble");
    }
    else if (dir == "rx"){
        qwery.setAttribute("id", "aiOutput");
        z.setAttribute("id", "aiBubble");
    }
    let llll = document.getElementById("chatSection");
    qwery.appendChild(node);
    z.appendChild(qwery);
    llll.appendChild(z);

}


