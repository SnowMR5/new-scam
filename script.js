// JavaScript Document

      	const body = document.body;
      	let div = document.createElement('div');
      	body.append(div);
      	div.classList.add('container');
      	
      	let Two = document.createElement('div');
      	div.append(Two);
      	Two.classList.add('Two');
      	
      	let img = document.createElement('img');
      	Two.append(img);
      	img.id = 'img_id';
      	img.className = 'img_two'
      	//img.src = 'mapa.png';
      	
      	let h = document.createElement('h1');
      	div.append(h);
      	h.className = 'htc';
      	let text_two = document.createTextNode('Net {©J©} People');
      	h.appendChild(text_two);
      	
      	let p = document.createElement('p');
      	div.append(p);
      	p.className = 'phc';
      	let text_three = document.createTextNode('"La red mas utilizada y favorita de toda LATAM"');
      	p.appendChild(text_three);
      	
      	let pf = document.createElement('p');
      	div.append(pf);
      	pf.className = 'phx';
      	let text_four = document.createTextNode('Unete a la red moderna mas increible donde encontraras personas muy cerca de ti, podras charlar y pasar un tiempo muy divertido.');
      	pf.appendChild(text_four);
      	
      	let butt = document.createElement('button');
      	div.append(butt);
      	butt.id = 'buttp';
      	butt.className = 'buttons'
      	let text = document.createTextNode('Ingresar ');
      	butt.appendChild(text);
      	document.querySelector('.buttons').addEventListener('click', () => {
      	alert('Acabas de dar click');
      let eval = ["https://facebook.com","https://netflix.com","https://google.com", "https://atomix.vg", "https://github.com", "https://telegram.com", "https://twitter.com", "https://instagram.com", "https://whatsapp.com"],
      	link = eval[Math.floor(Math.random() * eval.length)]; 
      	window.location = link;
      	})
      	
      	let icon = document.createElement('i');
      	butt.append(icon);
      	icon.className = 'fa fa-spinner fa-pulse'
      	icon.id = 'iconx';
      	
      	//canvas
      	let pinta;
      	let gxl = new Array();
      	window.onload = function(){
      		
      		for(i=0; i<=200; i++){
      			let fugaz = {x:0, y:0, v:0};
      			fugaz.x = Math.floor(Math.random()*500);
      			fugaz.y = Math.floor(Math.random()*500);
      			fugaz.v = Math.floor(Math.random()*4)+1;
      			gxl[i] = fugaz;
      		}
      		pinta = lienzo.getContext('2d');
      		tklog = setInterval(function(){
      			dibujar();
      		}, 1000/25)
      	}
      	
      	function dibujar(){
      		pinta.fillStyle = 'black';
      		pinta.fillRect(0,0,500,500);
      		
      		for(i=0; i<=200; i++){
      			pinta.fillStyle = 'rgba(255,255,255,'+(gxl[i].v*0.25)+')';
      			pinta.fillRect(gxl[i].x, gxl[i].y,2,2);
      			gxl[i].x+=gxl[i].v;
      			if(gxl[i].x>=500){
      				gxl[i].x=0;
      				gxl[i].y = Math.floor(Math.random()*500);
      			}
      		}
      	}