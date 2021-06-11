
function calcular_ex1(base, altura)
{
	var b = 0; 
	var a = 0; 
	var area = 0; 

	base.value = base.value.replace(".","").replace(",",".");
	altura.value = altura.value.replace(".","").replace(",",".");

	try 
	{ 
     	b = parseFloat(base.value);
		a = parseFloat(altura.value);

        if (isNaN(b)) throw "<font color=red>Base deve ser numérica!</font>";
        if (isNaN(a)) throw "<font color=red>Altura deve ser numérica!</font>";
    }
    catch(erro) 
    {
        document.getElementById("e1_lblResultado").innerHTML = erro;
		return;
    }

	area = b * a;
	
	document.getElementById("e1_lblResultado").innerHTML = "Área: " + area.toFixed(2).toString().replace(".",",");
}



function calcular_ex2(aresta)
{
	var a = 0;
	var area = 0;

	aresta.value = aresta.value.replace(".","").replace(",",".");

	try
	{
		a = parseFloat(aresta.value);
		if (isNaN(a)) throw "<font color=red> Aresta deve ser numérica! </font>";	
	}
	catch(erro)
	{
		document.getElementById("e2_lblResultado").innerHTML = erro;
		return;
	}

	area = a * a;
	document.getElementById("e2_lblResultado").innerHTML = "Área: " + area.toFixed(2).toString().replace(".",",");

}


function calcular_ex3(diagonal)
{
	var d = 0;
	var area = 0;
	diagonal.value = diagonal.value.replace(".","").replace(",",".");

	try
	{
		d = parseFloat(diagonal.value);
		if (isNaN(d)) throw "<font color = red> Diagonal deve ser númerica! </font>";
	}
	catch(erro)
	{
		document.getElementById("e3_lblResultado").innerHTML = erro;
		return;
	}
	area = d * d /2;
	document.getElementById("e3_lblResultado").innerHTML = "Área: " + area.toFixed(2).toString().replace(".",",");

}


function e4_calcular(base, altura)
{
	var b = 0;
	var a = 0;
	var area = 0;

	base.value = base.value.replace(".","").replace(",",".");
	altura.value = altura.value.replace(".","").replace(",",".");

	try
	{
		b = parseFloat(base.value);
		a = parseFloat(altura.value);

		if (isNaN(b)) throw "<font color = red> Base deve ser numérica! </font>";
		if (isNaN(a)) throw "<font color = red> Altura deve ser numérica! </font>";
	}
	catch(erro)
	{
		document.getElementById("e4_lblResultado").innerHTML = erro;
		return;
	}
	area = a * b /2;
	document.getElementById("e4_lblResultado").innerHTML = "Área: " + area.toFixed(2).toString().replace(".",",");
}


function calcular_ex5(diametro)
{
	var a = 0;
	var volume = 0;

	diametro.value = diametro.value.replace(".","").replace(",",".");

	try
	{
		a = parseFloat(diametro.value);

		if (isNaN(a)) throw "<font color = red> Diâmetro deve ser numérico! </font>";
	}
	catch(error)
	{
		document.getElementById("e5_lblResultado").innerHTML = error;
		return;
	}

	volume = (4 * Math.PI * a) / 3;

	document.getElementById("e5_lblResultado").innerHTML = "Volume: " + volume.toFixed(2).toString().replace(".",",");
}


function calcular_ex6(valor1, valor2, valor3, valor4)
{
	var val1 = 0;
	var val2 = 0;
	var val3 = 0;
	var val4 = 0;
	var media = 0;

	valor1.value = valor1.value.replace(".","").replace(",",".");
	valor2.value = valor2.value.replace(".","").replace(",",".");
	valor3.value = valor3.value.replace(".","").replace(",",".");
	valor4.value = valor4.value.replace(".","").replace(",",".");

	try
	{
		val1 = parseFloat(valor1.value);
		val2 = parseFloat(valor2.value);
		val3 = parseFloat(valor3.value);
		val4 = parseFloat(valor4.value);


		if (isNaN(val1)) throw "<font color = red> Valor 1 deve ser numérico! </font>";
		if (isNaN(val2)) throw "<font color = red> Valor 2 deve ser numérico! </font>";
		if (isNaN(val3)) throw "<font color = red> Valor 3 deve ser numérico! </font>";
		if (isNaN(val4)) throw "<font color = red> Valor 4 deve ser numérico! </font>";
	}
	catch(error)
	{
		document.getElementById("e6_lblResultado").innerHTML = error;
		return;
	}

	media = val1 + val2 + val3 + val4 / 4;

	document.getElementById("e6_lblResultado").innerHTML = "Média aritmética: " + media.toFixed(2).toString().replace(".",",");
}


function calcular_ex7(valor1, valor2)
{
	var val1 = 0;
	var val2 = 0;
	var media = 0;
	var vs = 0;

	valor1.value = valor1.value.replace(".","").replace(",",".");
	valor2.value = valor2.value.replace(".","").replace(",",".");

	try
	{
		val1 = parseFloat(valor1.value);
		val2 = parseFloat(valor2.value);


		if (isNaN(val1)) throw "<font color = red> Valor 1 deve ser numérico! </font>";
		if (isNaN(val2)) throw "<font color = red> Valor 2 deve ser numérico! </font>";
	}
	catch(error)
	{
		document.getElementById("e7_lblResultado").innerHTML = error;
		return;
	}

	vs = val1 * val2;
	media = Math.sqrt(vs);

	document.getElementById("e7_lblResultado").innerHTML = "Média geométrica: " + media.toFixed(2).toString().replace(".",",");
}


function calcular_ex8(milhas)
{
	var m = 0;
	var km = 0;

	m.value = milhas.value.replace(".","").replace(",",".");

	try
	{
		m = parseFloat(milhas.value);


		if (isNaN(m)) throw "<font color = red> Milhas deve ser numérica! </font>";
	}
	catch(error)
	{
		document.getElementById("e8_lblResultado").innerHTML = error;
		return;
	}

	km = m / 0.62137;

	document.getElementById("e8_lblResultado").innerHTML = "KM: " + km.toFixed(2).toString().replace(".",",");
}


function calcular_ex9(resistencia, corrente)
{
	var r = 0;
	var c = 0;
	var tensao = 0;

	r.value = resistencia.value.replace(".","").replace(",",".");
	c.value = corrente.value.replace(".","").replace(",",".");

	try
	{
		r = parseFloat(resistencia.value);
		c = parseFloat(corrente.value);


		if (isNaN(r)) throw "<font color = red> Resistência deve ser numérica! </font>";
		if (isNaN(c)) throw "<font color = red> Corrente deve ser numérica! </font>";
	}
	catch(error)
	{
		document.getElementById("e9_lblResultado").innerHTML = error;
		return;
	}

	tensao = r * c;

	document.getElementById("e9_lblResultado").innerHTML = "Tensão: " + tensao.toFixed(2).toString().replace(".",",");
}


function calcular_ex10(celsius)
{
	var c = 0;
	var fahrenheit = 0;

	c.value = celsius.value.replace(".","").replace(",",".");

	try
	{
		c = parseFloat(celsius.value);

		if (isNaN(c)) throw "<font color = red> Temperatura deve ser numérica! </font>";
	}
	catch(error)
	{
		document.getElementById("e10_lblResultado").innerHTML = error;
		return;
	}

	fahrenheit = 9 / 5 * c + 32;

	document.getElementById("e10_lblResultado").innerHTML = "Fahrenheit: " + fahrenheit.toFixed(2).toString().replace(".",",");
}

var background = (function(){
  
	var scene,camera,renderer,t=0,shapes=[];
	var mouseX = 0, mouseY = 0;
	var windowHalfX = window.innerWidth / 2;
	var windowHalfY = window.innerHeight / 2;
	var t = 0;
	
	var options = {
	  type: -1, //  -1: random,  0: boxes,  1: spheres,  2:  pyramids
	  n: 100,
	  mainColor: 0x2980b9,
	  paused:false
	}
	
	function init(userOptions){
	
	  extend(options, userOptions)
	  
	  scene = new THREE.Scene();
	
	  scene.fog = new THREE.Fog( options.mainColor, 7, 15 );
	
	  camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, .01, 1000);
	  camera.position.set(0,0,2);
	
  
	  renderer = new THREE.WebGLRenderer();
	  renderer.setSize(window.innerWidth, window.innerHeight);
	  renderer.setClearColor(options.mainColor);
	  renderer.domElement.style.position="fixed";
	  renderer.domElement.style.top=0;
	  renderer.domElement.style.left=0;
	  document.body.appendChild(renderer.domElement);
	
	  window.addEventListener("resize", function(){
		var WIDTH = window.innerWidth,
			HEIGHT = window.innerHeight;
		renderer.setSize(WIDTH, HEIGHT);
		camera.aspect = WIDTH / HEIGHT;
		camera.updateProjectionMatrix();
	  });
	
	  document.addEventListener( 'mousemove', onDocumentMouseMove, false );
	  
	  generateMainObjects();
	  
	  for(var i =0;i<options.n;i++){
		var type = options.type == -1?Math.floor(Math.random() * 3) + 0 : options.type;
		generateShape(type)
	  }
	  
	  
	  render();
	  
	}
	
	function generateMainObjects(){
	  var light = new THREE.HemisphereLight(0xffffff, 0xdedede, 1);
	  light.castShadow = true;
	  scene.add(light)
	
	  //grid
	  var grid = new THREE.GridHelper(50,1);
	  grid.position.set(0,-2,0);
	  grid.rotation.x=0;
	  grid.setColors(0xffffff,0xffffff);
	  grid.material.transparent = true
	  grid.material.opacity = .5
	  scene.add(grid);
	  console.log(grid.material)
	  
	  // mask plane
	  var groundGeom = new THREE.BoxGeometry(50,.1,50)
	  var material = new THREE.MeshBasicMaterial({color: options.mainColor });
	  var ground = new THREE.Mesh(groundGeom, material);
	  ground.castShadow = false;
	  ground.receiveShadow = true;
	  ground.position.set(0,-2.1,0); 
	  scene.add(ground);
	}
	
	function generateShape(type){
	  
	  //edit material
	  var material = new THREE.MeshLambertMaterial ({color: 0xffffff, transparent:true});
	  
		  
	  switch(type){
		case 0:
		  var geometry = new THREE.BoxGeometry( 1,1,1 );
		break;
		case 1:
		  var geometry = new THREE.SphereGeometry( .5, 20,20 );
		break;
		case 2:
		  var geometry = new THREE.TetrahedronGeometry( 1);
		break;
		  
	  } 
   
		var shape = new THREE.Mesh(geometry, material);
		shape.rotation.x=shape.rotation.y=shape.rotation.z=Math.random() * (360 - 0) + 0
		shape.position.set((Math.random() * (25 +25) -25),-(Math.random() * (4 - 3) + 3),-(Math.random() * (11- 0) + 0));
		shape.velocity = Math.random()/100;
		scene.add(shape);
		shapes.push(shape)
  
	 
	  
	}
	
	function render(){
	  camera.rotation.y = -1/8*Math.sin(.5*t);
	  camera.rotation.x = 1/8*Math.cos(.5*t);
   
	  for(var i =0; i<shapes.length;i++){
		if(shapes[i].material.opacity<0){
		  if(!options.paused){
			shapes[i].material.opacity =1;
			shapes[i].position.y=-4;
			shapes[i].position.set((Math.random() * (25 +25) -25),-(Math.random() * (4 - 3) + 3),-(Math.random() * (11- 0) + 0));
		  }
		  
		}else{
		  shapes[i].position.y +=shapes[i].velocity;
		  shapes[i].material.opacity -=shapes[i].velocity/5;
		  shapes[i].rotation.x+=shapes[i].velocity
		  shapes[i].rotation.y+=shapes[i].velocity
		  shapes[i].rotation.z+=shapes[i].velocity
  
		}
	
	  }
	  t+=.01;
	  requestAnimationFrame(render);
	  renderer.render(scene, camera);
	}
	
	function onDocumentMouseMove( event ) {
		  mouseX = ( event.clientX - windowHalfX );
		  mouseY = ( event.clientY - windowHalfY );
	  }
	
	function extend(a, b){
		  for(var key in b)	if(b.hasOwnProperty(key))  a[key] = b[key];
		  return a;
	  }
	
	function pausePlay(){
	  options.paused = ! options.paused
	}
	
	
	return {
	  init:init,
	  pausePlay: pausePlay
	}
	
  })();
  
  background.init({n:100})
  
  background.init()


