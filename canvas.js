const canvas = document.querySelector('canvas');
console.log(canvas);

const c =  canvas.getContext('2d');
console.log(c);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let begin = {
    x : (innerWidth / 2) ,
    y : (innerHeight / 2),
    a : 20
}




window.addEventListener('keypress', (e)=>{
    if(e.key == 'a'){
        begin.x -= begin.a;
            
    }else if (e.key == 'd'){
        begin.x += begin.a;
    }else if (e.key == 'w'){
        begin.y -= begin.a;
    }else if (e.key == 's'){
        begin.y += begin.a;
    }

    
});
function draw(x , y) {

    this.x = x; 
    this.y = y;

    c.clearRect(0 , 0 , innerWidth , innerHeight)
    c.beginPath();
    c.rect(this.x,this.y,150,150);
    c.fillStyle = 'blue';
    c.fill();

    if( this.x > innerWidth){
        this.x -=  this.x;
    }
    
    
}

function animate(){
    requestAnimationFrame(animate);

    draw(begin.x , begin.y );
    
    
    
}
animate();