console.log("Hello from JS");

//document.getElementById("loader").style.display = "none";

document.getElementById("loader").style.display = "block";

fetch("/api/todos")
    .then(function(response){
        return response.json();
    })

    .then(function(data){
        console.log(data);

        document.getElementById("loader").style.display = "none";


    });


    var light = true;


    function setTheme(){
        if(light){
            document.documentElement.setAttribute("data-bs-theme","dark");
            document.getElementById("themeButton").innerHTML = '<i class="fas fa-sun fa-lg fa-fw"></i></button> ';
        }
        else{
            document.documentElement.setAttribute("data-bs-theme","light");
            document.getElementById("themeButton").innerHTML = '<i class="fas fa-moon fa-lg fa-fw"></i></button> ';
        }
        light = ! light;
    }
//to hide  leader

//to show loader
// document.getElementById("loader").style.display="block";
