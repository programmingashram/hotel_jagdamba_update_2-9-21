
(function() {
    var body = document.getElementById('body');
    var section = document.createElement('section');

    body.appendChild(section);
	
	
		
		
	document.querySelector('section').innerHTML += `
       <div class="container">
	        <div class="row">
			     <div class="col-md-12">
				     <h1 class="color_white">Our Gallery</h1>
				 </div>
			</div>
	   </div>`
        ;
})()




var my_gallery = function() {
    var body = document.getElementById('my_body');
    var article010 = document.createElement('article');
    body.appendChild(article010);
    article010.setAttribute('class', 'article010');
    //create SOme Bascic Elements
    document.querySelector('.article010').innerHTML += '<div class="container"><div class="row"></div></div>';

    // Craeting Jason Data 
    var myContent = [{

       
		image: 'images/chines_restaurent_in_bilaspur_hotel_jagadamba_palace.jpg',

    },{

        
		image: 'images/resturent_hotel_jagdamba_palace_in_bilaspur.jpg',
		

    },{

       
        image: 'images/party_hall_in_jagdamba_palace_bilaspur_chhattishgarh02.jpg', 
		

    },{

       
        image: 'images/party_hall_in_jagdamba_palace_bilaspur_chhattishgarh_12.jpg',
        

    },{

       
        image: 'images/party_hall_in_jagdamba_palace_bilaspur_chhattishgarh.jpg',
       

    },{

       
        image: 'images/jagdamba_palace_bilaspur_slider0.jpg',
       

    },{

       
        image: 'images/jagdamba_palace_in_bilaspur_slider01.jpg',
       

    },{

       
        image: 'images/ac_rooms_in_bilaspur_jagdamba_palace.jpg',
       

    },{

       
        image: 'images/jagdamba_palace+in_bilaspur_reception.jpg',
       

    }]
	for(var i= 0;i < myContent.length;i++){
		document.querySelector('.article010>.container>.row').innerHTML +=`
		   <div class="col-md-4">
		        <div class="my_gallery">
				    <img src="${myContent[i].image}" class="img-responsive">
				</div>
           </div>
		`;
	}

   
                  

}
my_gallery();
