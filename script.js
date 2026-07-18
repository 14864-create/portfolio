const gears = document.querySelectorAll(".gear");

gears.forEach((gear,index)=>{

    let x=Math.random()*(window.innerWidth-100);
    let y=Math.random()*(window.innerHeight-100);

    let dx=(Math.random()*2+1);
    let dy=(Math.random()*2+1);

    if(Math.random()>0.5) dx=-dx;
    if(Math.random()>0.5) dy=-dy;

    let angle=0;

    function move(){

        x+=dx;
        y+=dy;

        if(x<=0 || x>=window.innerWidth-80){
            dx=-dx;
        }

        if(y<=0 || y>=window.innerHeight-80){
            dy=-dy;
        }

        angle+=2+(index*0.5);

        gear.style.left=x+"px";
        gear.style.top=y+"px";
        gear.style.transform=`rotate(${angle}deg)`;

        requestAnimationFrame(move);
    }

    move();

});
