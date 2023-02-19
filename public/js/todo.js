console.log("hello from js");
document.getElementById("loader").style.display="none";

fetch("/api/todos")
   .then(function(response)
    {
    return response.json();
    })
    .then(function(date)
    {
        console.log(data);
        document.getElementById("loader").style.display="none";

    });
    var light=true;
    function setTheme()
    {
        if(light)
        {
           document.documentElement.setAttribute("data-bs-theme","dark");
           
        }

        else{
            document.documentElement.setAttribute("data-bs-theme","light");

        }
        light=!light;
    }
  
//to hide  leader

//to show loader
// document.getElementById("loader").style.display="block";
