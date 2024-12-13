const left_arrow = document.getElementById("left_arrow");
const right_arrow = document.getElementById("right_arrow");
const location_1 = document.getElementById("location_1");
const location_2 = document.getElementById("location_2");
const location_3 = document.getElementById("location_3");
const location_4 = document.getElementById("location_4");
const location_part = document.getElementById("location");


export function aboutPage(){

    left_arrow.style.display = "block";
    right_arrow.style.display = "block";
    let location = location_1;
  
    let a = 0;

    function changeImage(location){


        location.style.display = "block";
        location.style.display = "flex";
    }

    left_arrow.onclick = function(){

        a -= 1;

        const location_1 = document.getElementById("location_1");
        const location_2 = document.getElementById("location_2");
        const location_3 = document.getElementById("location_3");
        const location_4 = document.getElementById("location_4");

        location_1.style.display = "none";
        location_2.style.display = "none";
        location_3.style.display = "none";
        location_4.style.display = "none";


        console.log(a);
        console.log(location_part);

        

        let location_total = [location_1, location_2, location_3, location_4];
        let i =  Math.abs(a%4);
        location = location_total[i];

        setInterval(function() {
            changeImage(location);
          },0);

    
    }

    right_arrow.onclick = function(){


        const location_1 = document.getElementById("location_1");
        const location_2 = document.getElementById("location_2");
        const location_3 = document.getElementById("location_3");
        const location_4 = document.getElementById("location_4");

        location_1.style.display = "none";
        location_2.style.display = "none";
        location_3.style.display = "none";
        location_4.style.display = "none";

        a += 1;

        console.log(a);
        console.log(location_part);

        let location_total = [location_1, location_2, location_3, location_4];
        let i =  Math.abs(a%4);
        location = location_total[i];
        setInterval(function() {
            changeImage(location);
          },100);

    ;
    }
   

}
