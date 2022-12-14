const onScreen = [];
index = 0;
index2 = 0;

function loadFile(filePath) {
    var result = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filePath, false);
    xmlhttp.send();
    if (xmlhttp.status==200) {
      result = xmlhttp.responseText;
    }
    return result;
}

function checkFunctions(y){
    y = y.toLowerCase();
    const x = y.split(" ");
    if (x[0] == "whoareu" || x[0] == "whoareyou"){
        return "I am a Proggramer from the uk that has made some projects and this website is for showing them";
    }
    if (x[0] == "help" || x[0] == "commands"){
        return `Commands:
        help,
        whoareu,
        projects(project),
        projectslist`;
    }
    if (x[0] == "projects" || x[0] == "project"){
        if (loadFile("/projects/").includes(x[1]) == true){
            window.location.href = window.location.href + "projects/" + x[1];
        }
    }
    if (x[0] == "projectlist"){
        return loadFile("/projects/");
    }
}
function removeElementsByClass(className){
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}
$(document).ready(function() {
    function displayHandeler() {
        var x = $("input:text").val();
        document.getElementById("terminal-content").innerHTML = document.getElementById("terminal-content").innerHTML + "<p id='" + index + "'>"+ "Guest@TheSecretDev:/$" + x + "<p id='r"+ index +"'>" + checkFunctions(x) + "</p>" + "</p>";
        onScreen.push(index)
        var divHeight = document.getElementById('content').offsetHeight;
        if (divHeight >= 816){
            //location.reload();
            var targetHeight = document.getElementById(onScreen[onScreen.length - 1]).offsetHeight;
            for (let i = 0; i < onScreen.length; i++){
                if (targetHeight <= 0){
                    break;
                }
                console.log(String(onScreen[i] + index2));
                var lastHeight = document.getElementById(String(onScreen[i] + index2)).clientHeight;
                var element = document.getElementById(String(onScreen[i] + index2));
                element.remove();
                var element = document.getElementById("r" + String(onScreen[i] + index2));
                console.log("r" + onScreen[i] + index2);
                element.remove();
                targetHeight -= lastHeight;
                index2++;
            }
        }
        index++;
    };
    $(".terminal-text").keyup(function(event){
        if (event.which == 13){
            displayHandeler();
        }
    });
});