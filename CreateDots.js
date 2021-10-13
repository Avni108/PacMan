 function createdotsx(numdots,x_coor,y_coor) {
     for (var i=0; i< numdots; i++)
   {
     dots = createSprite(x_coor+40*i,y_coor,5,5);
     dots.shapeColor = "red";
     dots.addImage(coin);
     dots.scale=0.2;
     pills.push(dots);
    TotDots++;
   }
 }
  
    function createdotsy(numdots,x_coor,y_coor) {
      for (var i=0; i< numdots; i++)
    {
      dots = createSprite(x_coor,y_coor+40*i,5,5);
      dots.shapeColor = "red";
      dots.addImage(coin);
      dots.scale=0.2;
      pills.push(dots);
     TotDots++;
    }
    }