
  function viewalbums() {
      var Picture1 = "./PHOTOS/1.png";
      var Picture2= "./PHOTOS/2.png";
      var Picture3 = "./PHOTOS/3.png";
      var Picture4 = "./PHOTOS/4.png";
      var Picture5 = "./PHOTOS/5.png";
      var Picture6 = "./PHOTOS/6.png";
      var Picture7 = "./PHOTOS/7.png";
      var Picture8 = "./PHOTOS/8.png";
      var iimg1 = document.getElementById('pic1')
      var iimg2 = document.getElementById('pic2')
      var iimg3 = document.getElementById('pic3')
      var iimg4 = document.getElementById('pic4')
      var iimg5 = document.getElementById('pic5')
      var iimg6 = document.getElementById('pic6')
      var iimg7 = document.getElementById('pic7')
      var iimg8 = document.getElementById('pic8')
      var button = document.getElementById('but1')
      iimg1.src = Picture1.replace();
      iimg2.src = Picture2.replace();
      iimg3.src = Picture3.replace();
      iimg4.src = Picture4.replace();
      iimg5.src = Picture5.replace();
      iimg6.src = Picture6.replace();
      iimg7.src = Picture7.replace();
      iimg8.src = Picture8.replace();
      iimg1.style.display = "block";
      iimg2.style.display = "block";
      iimg3.style.display = "block";
      iimg4.style.display = "block";
      iimg5.style.display = "block";
      iimg6.style.display = "block";
      iimg7.style.display = "block";
      iimg8.style.display = "block";
      button.style.display="block";
    } 
function back(){
  document.getElementById('remove').remove();
  
} 


var modal1 = document.getElementById("myModal1");
var img1 = document.getElementById("pic1");
var modalImg1 = document.getElementById("img01");
var captionText1 = document.getElementById("caption1");
img1.onclick = function(){
  modal1.style.display = "block";
  modalImg1.src = this.src;
  captionText1.innerHTML = this.alt;
}
var span1 = document.getElementsByClassName("close1")[0];
span1.onclick = function() { 
  modal1.style.display = "none";

}




var modal2 = document.getElementById("myModal2");
var img2 = document.getElementById("pic2");
var modalImg2 = document.getElementById("img02");
var captionText2 = document.getElementById("caption2");
img2.onclick = function(){
  modal2.style.display = "block";
  modalImg2.src = this.src;
  captionText2.innerHTML = this.alt;
}
var span2 = document.getElementsByClassName("close2")[0];
span2.onclick = function() { 
  modal2.style.display = "none";

}




var modal3 = document.getElementById("myModal3");
var img3 = document.getElementById("pic3");
var modalImg3 = document.getElementById("img03");
var captionText3 = document.getElementById("caption3");
img3.onclick = function(){
  modal3.style.display = "block";
  modalImg3.src = this.src;
  captionText3.innerHTML = this.alt;
}
var span3 = document.getElementsByClassName("close3")[0];
span3.onclick = function() { 
  modal3.style.display = "none";

}



var modal4 = document.getElementById("myModal4");
var img4 = document.getElementById("pic4");
var modalImg4 = document.getElementById("img04");
var captionText4 = document.getElementById("caption4");
img4.onclick = function(){
  modal4.style.display = "block";
  modalImg4.src = this.src;
  captionText4.innerHTML = this.alt;
}

var span4 = document.getElementsByClassName("close4")[0];
span4.onclick = function() { 
  modal4.style.display = "none";

}




var modal5 = document.getElementById("myModal5");
var img5 = document.getElementById("pic5");
var modalImg5 = document.getElementById("img05");
var captionText5 = document.getElementById("caption5");
img5.onclick = function(){
  modal5.style.display = "block";
  modalImg5.src = this.src;
  captionText5.innerHTML = this.alt;
}
var span5 = document.getElementsByClassName("close5")[0];
span5.onclick = function() { 
  modal5.style.display = "none";

}




var modal6 = document.getElementById("myModal6");
var img6 = document.getElementById("pic6");
var modalImg6 = document.getElementById("img06");
var captionText6 = document.getElementById("caption6");
img6.onclick = function(){
  modal6.style.display = "block";
  modalImg6.src = this.src;
  captionText6.innerHTML = this.alt;
}
var span6 = document.getElementsByClassName("close6")[0];
span6.onclick = function() { 
  modal6.style.display = "none";

}




var modal7 = document.getElementById("myModal7");
var img7 = document.getElementById("pic7");
var modalImg7 = document.getElementById("img07");
var captionText7 = document.getElementById("caption7");
img7.onclick = function(){
  modal7.style.display = "block";
  modalImg7.src = this.src;
  captionText7.innerHTML = this.alt;
}
var span7 = document.getElementsByClassName("close7")[0];
span7.onclick = function() { 
  modal7.style.display = "none";

}




var modal8 = document.getElementById("myModal8");
var img8 = document.getElementById("pic8");
var modalImg8 = document.getElementById("img08");
var captionText8 = document.getElementById("caption8");
img8.onclick = function(){
  modal8.style.display = "block";
  modalImg8.src = this.src;
  captionText8.innerHTML = this.alt;
}
var span8 = document.getElementsByClassName("close8")[0];
span8.onclick = function() { 
  modal8.style.display = "none";

}

