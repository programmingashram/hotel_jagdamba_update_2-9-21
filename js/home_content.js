(function() {
    var body = document.getElementById('my_body');
    var article = document.createElement('article');
    body.appendChild(article);
    //create SOme Bascic Elements
    document.querySelector('article').innerHTML += '<div class="container"><div class="row"><h1 class="text-center">Welcome To  Hotel Maa Jagdamba Palace  </h1></div></div>';

    var jason = [{
        img: 'images/birthday-celebration-in_maa_jagdamba_hotel_palace_in_bilaspur.png',
        name: 'Birthday Party',
        link: 'hall.html'
    }, {
        img: 'images/kitty_party_in_maa_jagadamba_hotel_palace.png',
        name: 'Kitty Party',
        link: 'hall.html',
    }, {
        img: 'images/resturent_in_maa_jagdamba_hotel_bilaspur.png',
        name: 'Restaurent',
        link: 'resturant.html',
    }, {
        img: 'images/conference_hall_in_maa_jagdamba_hotel_palace_i_bilaspur_chhatoshgarh.png',
        name: 'Conference Hall',
        link: 'hall.html',
    }]

    for (var i = 0; i < jason.length; i++) {
        document.querySelector('article>.container>.row').innerHTML += `
             <div class="col-md-3">
                 <div class="my_facility text-center">
                     <a href="${jason[i].link}">
                         <img src="${jason[i].img}">
                         <p>${jason[i].name}</p>
                     </a>
                 </div>
             </div>
        `;
    }



})()


var my_Content = function() {
    var body = document.getElementById('my_body');
    var article01 = document.createElement('article');
    body.appendChild(article01);
    article01.setAttribute('class', 'article01');
    //create SOme Bascic Elements
    document.querySelector('.article01').innerHTML += '<div class="container"><div class="row"></div></div>';

    // Craeting Jason Data 
    var myContent = [{

        image: 'images/jagdamba_palace_bilaspur_slider0.jpg',
        image01: 'images/jagdamba_palace_in_bilaspur_slider01.jpg',
        image02: 'images/jagdamba_palace+in_bilaspur_reception.jpg',
        image03: 'images/ac_rooms_in_bilaspur_jagdamba_palace.jpg',
        image04: 'images/party_hall_in_jagdamba_palace_bilaspur_chhattishgarh.jpg',
        image05: 'images/party_hall_in_jagdamba_palace_bilaspur_chhattishgarh_12.jpg',
        image06: 'images/party_hall_in_jagdamba_palace_bilaspur_chhattishgarh02.jpg', 
		image07: 'images/resturent_hotel_jagdamba_palace_in_bilaspur.jpg',
		image08: 'images/chines_restaurent_in_bilaspur_hotel_jagadamba_palace.jpg',

    }, {
        poster01: 'images/room01.png'
    }]

    document.querySelector('.article01').innerHTML += `
                  <div class="container">
                        <div class="row">
                             <div class="col-md-6">
                              
                                <div class="my_slider">
                                    <div id="myCarousel" class="carousel slide" data-ride="carousel">
                                        <!-- Indicators -->
                                        <ol class="carousel-indicators">
                                        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                                        <li data-target="#myCarousel" data-slide-to="1"></li>
                                        <li data-target="#myCarousel" data-slide-to="2"></li>
										 <li data-target="#myCarousel" data-slide-to="3"></li>
										  <li data-target="#myCarousel" data-slide-to="4"></li>
										   <li data-target="#myCarousel" data-slide-to="5"></li>
										   <li data-target="#myCarousel" data-slide-to="6"></li>
										   <li data-target="#myCarousel" data-slide-to="7"></li>
										   <li data-target="#myCarousel" data-slide-to="8"></li>
                                        </ol>
                                        
                                        <!-- Wrapper for slides -->
                                        <div class="carousel-inner">
                                        
                                        <div class="item active">
                                           <img src="${myContent[0].image}" alt="" style="width:100%;">
                                        
                                        </div>
                                        <div class="item ">
                                           <img src="${myContent[0].image01}" alt="" style="width:100%;">
                                        
                                        </div> 
										<div class="item ">
                                           <img src="${myContent[0].image02}" alt="" style="width:100%;">
                                        
                                        </div>
										<div class="item ">
                                           <img src="${myContent[0].image03}" alt="" style="width:100%;">
                                        
                                        </div>
										<div class="item ">
                                           <img src="${myContent[0].image04}" alt="" style="width:100%;">
                                        
                                        </div>
										<div class="item ">
                                           <img src="${myContent[0].image05}" alt="" style="width:100%;">
                                        
                                        </div>
										<div class="item ">
                                           <img src="${myContent[0].image06}" alt="" style="width:100%;">
                                        
                                        </div>
										<div class="item ">
                                           <img src="${myContent[0].image07}" alt="" style="width:100%;">
                                        
                                        </div>
										<div class="item ">
                                           <img src="${myContent[0].image08}" alt="" style="width:100%;">
                                        
                                        </div>
										
                                        
                                        </div>
                                        
                                        <!-- Left and right controls -->
                                        <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                                        <span class="glyphicon glyphicon-chevron-left"></span>
                                        <span class="sr-only">Previous</span>
                                        </a>
                                        <a class="right carousel-control" href="#myCarousel" data-slide="next">
                                        <span class="glyphicon glyphicon-chevron-right"></span>
                                        <span class="sr-only">Next</span>
                                        </a>
                                        </div>
                                    
                                </div>
                             </div>
                             <div class="col-md-6">
                                 <div class="content_jagdamba_hotel">
                                     <h1>About Us</h1>
                                     <p>Hotel Hotel Maa Jagdamba Palace Palace Palace in Bilaspur-chhattisgarh. The hotel is strategically located in Mangla Road, Beside Holy Cross School, Bilaspur. Many have also reviewed the hotel to be among the sought after Hotels in Bilaspur-chhattisgarh. The hotel functions rom 10:00 - 22:00 all through the week. Catering to the convenience of its guests, the hotel makes available various.

                                     payment methods to ease out the payment process like,Net Banking & Cash.</p>
                                 </div>
                             </div>
                             
                        </div>
                  </div>`;

}
my_Content();



var facility = function() {
    var body, article02;
    body = document.getElementById('my_body');
    article02 = document.createElement('article');
    body.appendChild(article02);
    article02.setAttribute('class', 'article02');
    article02.innerHTML += '<div class="container"><div class="row"><h2 class="text-center">Our Facility</h2></div></div>';

    var jason03 = [{
        img: "<i class='fa fa-wifi font-icn color-blue pad-10' aria-hidden='true'></i>",
        text: 'Wifi Internet',
    }, {
        img: "<i class='fas fa-utensils'></i>",
        text: 'Restaurent'

    }, {
        img: "<i class='fas fa-tshirt'></i>",
        text: 'Laundry',
    }, {
        img: "<i class='fas fa-car'></i>",
        text: 'Parking'
    }, {
        img: "<i class='fas fa-coffee' ></i>",
        text: 'Room Service',
    }, {
        img: "<i class='fas fa-tty'></i>",
        text: 'Telephone Service'
    }, {
        img: "<i class='fas fa-car-side'></i>",
        text: 'PickUp & Drop '
    }, {
        img: "<i class='fas fa-shield-alt'></i>",
        text: '24 hours Security '
    }]


    for (var i = 0; i < jason03.length; i++) {
        document.querySelector('.article02>.container>.row').innerHTML += `
          <div class="col-md-3">
              <div class="facility text-center">
                  ${jason03[i].img}
                  <p>${jason03[i].text}</p>
              </div>
          </div>
       `;
    }
}
facility();


var reception = function() {
    body = document.getElementById('my_body');
    article10= document.createElement('article');
    1
    body.appendChild(article10);
    article10.setAttribute('class', 'article10');

    var jason10 = [{
        img_1: 'images/reception_hotel_jagdamba_palace_in_bilaspur.png',
		img_2: 'images/jagdamba_palace_in_bilaspur_slider01.jpg',
		img_3: 'images/jagdamba_palace+in_bilaspur_reception.jpg',
		head:'Reception',
		para:'We will delighted to welcome you at reception. Hotel Maa Jagdamba Palace is situated at the prime location of bilaspur, Mangla Road, Beside Holy Cross School, Bilaspur. '
    }]
    document.querySelector('.article10').innerHTML += `
      <div class="container">
	      <div class="row">
		      <div class="col-md-6">
			      <div class="my_blog">
				      <h2>${jason10[0].head}</h2>
					  <hr>
					  <p>${jason10[0].para}</p>
					  
					  <ul class="nav">
					     <li><a><i class="fa fa-check"></i> Wifi Internet</a></li>
						
						  <li><a><i class="fa fa-check"></i> Luxurious & Convenient Rooms</a></li>
						   <li><a><i class="fa fa-check"></i> Luxurious & Convenient Rooms</a></li>
						   <li><a><i class="fa fa-check"></i> Banquet Hall</a></li>
						    <li><a><i class="fa fa-check"></i> PickUp & Drop From Uslapur Railway Station</a></li>
						   
						  
					  </ul>
					  <br>
                      <a href="#tel:07752357487" class="my_btn_1">Call Now</a>					   
					  
				  </div>
			  </div>
			  <div class="col-md-6">
			      <div class="my_blog">
				      <img src="${jason10[0].img_1}" class="img-responsive">
				  </div>
			  </div>
		  </div>
	  </div>
   `;


}
reception();








var room = function() {
    body = document.getElementById('my_body');
    article03 = document.createElement('article');
    body.appendChild(article03);
    article03.setAttribute('class', 'article03');
    article03.innerHTML += '<div class="container"><div class="row"><h2 class="text-center">Luxurious & Convenient</h2></div></div>';

    var jason04 = [{
        photo: 'images/room01.jpg',
        name: 'Luxurious Suite Room',
        type: 'Type - AIR CONDITIONING',
        price: '<b>TARIFF</b> <p>Single - 1799/-</p><p>Double - 1999/-</p>',
        link: 'booking.html'

    }, {
        photo: 'images/room02.jpg',
        name: 'AC Deluxe Room',
        type: 'Type - AIR CONDITIONING',
        price: '<b>TARIFF</b> <p>Single - 1299/-</p><p>Double - 1499/-</p>',
        link: 'booking.html'
    }, {
        photo: 'images/hotel03.jpg',
        name: 'Non AC Deluxe Room',
        type: 'Type - AIR CONDITIONING',
        price: '<b>TARIFF</b><p>Single - 999/-</p><p>Double - 999/-</p>',
        link: 'booking.html'
    }]

    for (var i = 0; i < jason04.length; i++) {
        document.querySelector('.article03>.container>.row').innerHTML += `
            <div class="col-md-4">
                <div class="my_room">
                    <img src="${jason04[i].photo}" class="img-responsive">
                    <p>${jason04[i].name}</p>
					<hr>
                    <p>${jason04[i].price}</p>
                    <a href="${jason04[i].link}" class="my_btn_1">Book Now</a>
                </div>
            </div>
        `;
    }

}
room();


var btn = function() {
    body = document.getElementById('my_body');
    article001 = document.createElement('article');

    body.appendChild(article001);
    article001.setAttribute('class', 'article001');


    document.querySelector('.article001').innerHTML += `
      <div class="container">
	      <div class="row">
		      <div class="col-md-12">
			      <div class="my_video text-center">
				     <a href="rooms.html" class="my_btn_1">More Rooms</a>
				  </div>
			  </div>
		  </div>
	  </div>
   `;


}
btn();



var restaurent = function() {
    body = document.getElementById('my_body');
    article04 = document.createElement('article');
    body.appendChild(article04);
    article04.setAttribute('class', 'article04');
    article04.innerHTML += '<div class="container"><div class="row"><h2 class="text-center">Restaurent Food</h2></div></div>';

    var jason06 = [{
        class: 'food_1',
        name: 'Indian Food',
    }, {
        class: 'food_2',
        name: 'Chinese Food',
    }, {
        class: 'food_3',
        name: 'South Indian'
    }]

    for (var i = 0; i < jason06.length; i++) {
        document.querySelector('.article04>.container>.row').innerHTML += `
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






var video = function() {
    body = document.getElementById('my_body');
    article09 = document.createElement('article');
    1
    body.appendChild(article09);
    article09.setAttribute('class', 'article09');

    var jason08 = [{
        video_link: '<iframe width="100%" height="315" src="https://www.youtube.com/embed/NhjhKgjhG3o" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    }]
    document.querySelector('.article09').innerHTML += `
      <div class="container">
	      <div class="row">
		      <div class="col-md-12">
			      <div class="my_video text-center">
				   <h4>Our Video </h4>
				      ${jason08[0].video_link}
				  </div>
			  </div>
		  </div>
	  </div>
   `;


}
video();


