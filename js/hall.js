(function() {
    var body = document.getElementById('body');
    var section = document.createElement('section');

    body.appendChild(section);
	
	
		
		
	document.querySelector('section').innerHTML += `
       <div class="container">
	        <div class="row">
			     <div class="col-md-12">
				     <h1 class="color_white">Our Halls</h1>
				 </div>
			</div>
	   </div>`
        ;
})()


var hall = function(){
	body = document.getElementById('my_body');
    article_1 = document.createElement('article');
    body.appendChild(article_1);
   article_1.setAttribute('class', 'article9');
article_1.innerHTML += '<div class="container"><div class="row text-center"><h2 class="text-center">Our Halls</h2><p>Rounak |  Flamingo | Eagle | Dove | Swan | Mayur</p></div></div>';
	
	var jason09 = [{
		 class:'hall_1',
	     name:'Banquet Hall',
	},{
		class:'hall_2',
		name:'Conference Hall'
		
	},{
		class:'hall_3',
		name:'Marrige Hall'
	},{
		class:'hall_4',
		 name:'Party Hall',
	}]
	
	for(var i = 0;i<jason09.length;i++){
		document.querySelector('.article9>.container>.row').innerHTML +=`
		  <div class="col-md-4">
		       <div class="${jason09[i].class} text-center">
			      <div class="blur">
			         <p class="color_white text_back">${jason09[i].name}</p>
				   </div>
			   </div>
		  </div>
		`;
	}
}
hall();
