(function() {
    var body = document.getElementById('body');
    var section = document.createElement('section');

    body.appendChild(section);
	
	
		
		
	document.querySelector('section').innerHTML += `
       <div class="container">
	        <div class="row">
			     <div class="col-md-12">
				     <h1 class="color_white">Our Restaurent</h1>
				 </div>
			</div>
	   </div>`
        ;
})()


var restaurent = function(){
	body = document.getElementById('my_body');
    article04 = document.createElement('article');
    body.appendChild(article04);
    article04.setAttribute('class', 'article04');
    article04.innerHTML += '<div class="container"><div class="row"><h2 class="text-center">Restaurent Food</h2></div></div>';
	
	var jason06 = [{
		 class:'food_1',
	     name:'Indian Food',
	},{
		class:'food_2',
		 name:'Chinise Food',
	},{
		class:'food_3',
		name:'South Indian'
	}]
	
	for(var i = 0;i<jason06.length;i++){
		document.querySelector('.article04>.container>.row').innerHTML +=`
		  <div class="col-md-4">
		       <div class="${jason06[i].class} text-center">
			      <div class="blur">
			         <p class="color_white text_back">${jason06[i].name}</p>
				   </div>
			   </div>
		  </div>
		`;
	}
}
restaurent();
