const left_arrow = document.getElementById("left_arrow");
const right_arrow = document.getElementById("right_arrow");
const location_part = document.getElementById("location");
const location_1 = document.getElementById("location_1");
const location_2 = document.getElementById("location_2");
const location_3 = document.getElementById("location_3");
const location_4 = document.getElementById("location_4");


export function aboutPage(){


    left_arrow.style.display = "block";
    right_arrow.style.display = "block";
    let location = location_1;
  
    let a = 0;
    let i = 0;
    let i_plus_1 = 1;

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
       

        let location_total = [location_1, location_2, location_3, location_4];

        
      
        location = location_total[i];

        location_total[i].style.display = "block";
        location_total[i].style.display = "flex";

        location_total[i_plus_1].style.display = "block";
        location_total[i_plus_1].style.display = "flex";

        i =  Math.abs(a%4);
        i_plus_1 = Math.abs((i+1)%4);
        

    
    }

    right_arrow.onclick = function(){

        a += 1;

        console.log(a);
        

        const location_1 = document.getElementById("location_1");
        const location_2 = document.getElementById("location_2");
        const location_3 = document.getElementById("location_3");
        const location_4 = document.getElementById("location_4");

        location_1.style.display = "none";
        location_2.style.display = "none";
        location_3.style.display = "none";
        location_4.style.display = "none";

        let location_total = [location_1, location_2, location_3, location_4];
        let i =  Math.abs(a%4);
        let i_plus_1 = Math.abs((i+1)%4);
        location = location_total[i];

        
        location_total[i].style.display = "block";
        location_total[i].style.display = "flex";

        location_total[i_plus_1].style.display = "block";
        location_total[i_plus_1].style.display = "flex";
    }
   

}
