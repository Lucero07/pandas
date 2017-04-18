
  var div1 = document.createElement("div");
  var div2 = document.createElement("div");
  var div3 = document.createElement("div");
  var div4 = document.createElement("div");
  var img1 = document.createElement("img");
  var img2 = document.createElement("img");
  var img3 = document.createElement("img");
  var img4 = document.createElement("img");
  var borrar1 = document.createElement("input");
  var borrar2 = document.createElement("input");
  var borrar3 = document.createElement("input");
  var borrar4 = document.createElement("input");

  var contenedor = document.getElementById('contenedor');

  div1.className = "borrables";
  div2.className = "borrables";
  div3.className = "borrables";
  div4.className = "borrables";

  img1.src = "assets/panda-1.jpg";
  img2.src = "assets/panda5.jpg";
  img3.src = "assets/panda-3.jpg";
  img4.src = "assets/panda-4.jpg";

  borrar1.type = "button";
  borrar1.value = "X";
  borrar1.className = "botonBorrar";
  borrar2.type = "button";
  borrar2.value = "X";
  borrar2.className = "botonBorrar";
  borrar3.type = "button";
  borrar3.value = "X";
  borrar3.className = "botonBorrar";
  borrar4.type = "button";
  borrar4.value = "X";
  borrar4.className = "botonBorrar";

  div1.appendChild(img1);
  div1.appendChild(borrar1);
  div2.appendChild(img2);
  div2.appendChild(borrar2);
  div3.appendChild(img3);
  div3.appendChild(borrar3);
  div4.appendChild(img4);
  div4.appendChild(borrar4);

  contenedor.appendChild(div1);
  contenedor.appendChild(div2);
  contenedor.appendChild(div3);
  contenedor.appendChild(div4);

var borrar = document.getElementsByClassName('borrables');
for(var i=0; i<borrar.length; i++){
  borrar[i].addEventListener('click',function() {
    this.style.display ="none";
  });
};
