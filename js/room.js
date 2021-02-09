(function() {
    var body = document.getElementById('body');
    var section = document.createElement('section');

    body.appendChild(section);
	
	
	document.querySelector('section').innerHTML += `
       <div class="container">
	        <div class="row">
			     <div class="col-md-12">
				    <h1 class="color_white">Our Rooms</h1>
				 </div>
			</div>
	   </div>`
        ;
})()


var room01 = function() {
    body = document.getElementById('my_body');
    article08 = document.createElement('article');
    body.appendChild(article08);
    article08.setAttribute('class', 'article08');
    article08.innerHTML += '<div class="container"><div class="row"><h2 class="text-center">Luxurious & Convenient</h2></div></div>';

    var jason04 = [{
        photo: 'images/room01.jpg',
        name: 'Luxurious Suite Room',
        type: 'Type - AIR CONDITIONING',
        price: '<b>TARIFF</b> <br><p>Single - 1799/-</p><p>Double - 1999/-</p>',
        link: 'booking.html'

    }, {
        photo: 'images/room02.jpg',
        name: 'AC Deluxe Room',
        type: 'Type - AIR CONDITIONING',
        price: '<b>TARIFF</b> <br><p>Single - 1299/-</p><p>Double - 1499/-</p>',
        link: 'booking.html'
    }, {
        photo: 'images/hotel03.jpg',
        name: 'Non AC Deluxe Room',
        type: 'Type - AIR CONDITIONING',
        price: '<b>TARIFF</b> <br><p>Single - 999/-</p><p>Double - 999/-</p>',
        link: 'booking.html'
    }, {
        photo: 'images/ac_room_in_jagdamba_palace_bilaspur_chhatisgarh.jpg',
        name: 'Non AC Deluxe Room',
        type: 'Type - Non AIR CONDITIONING',
        price: '<b>TARIFF</b> <br><p>Single - 999/-</p><p>Double - 999/-</p>',
        link: 'booking.html'
    }, {
        photo: 'images/delux_room_in_bilaspur_jagdamba_palace_bilaspur_chhattisgarh.jpg',
        name: 'Non AC Deluxe Room',
        type: 'Type - Non AIR CONDITIONING',
        price: '<b>TARIFF</b> <br><p>Single - 999/-</p><p>Double - 999/-</p>',
        link: 'booking.html'
    }, {
        photo: 'images/ac_rooms_in_jagdamba_palace_bilaspur_.jpg',
        name: 'Non AC Deluxe Room',
        type: 'Type - Non AIR CONDITIONING',
        price: '<b>TARIFF</b> <br><p>Single - 999/-</p><p>Double - 999/-</p>',
        link: 'booking.html'
    }]

    for (var i = 0; i < jason04.length; i++) {
        document.querySelector('.article08>.container>.row').innerHTML += `
            <div class="col-md-4">
                <div class="my_room">
                    <img src="${jason04[i].photo}" class="img-responsive">
                    <p>${jason04[i].name}</p>
                    <p>${jason04[i].price}</p>
                    <a href="${jason04[i].link}" class="my_btn_1">Book Now</a>
                </div>
            </div>
        `;
    }

}
room01();