(function() {
    var body = document.getElementById('body');
    var section = document.createElement('section');

    body.appendChild(section);
	
	
	document.querySelector('section').innerHTML += `
       <div class="container">
	        <div class="row">
			     <div class="col-md-12">
				    <h1 class="color_white"> Book Your Table/Room</h1>
				 </div>
			</div>
	   </div>`
        ;
})()

var form = function(){
	 var body = document.getElementById('my_body');
    var article09 = document.createElement('article');
	
	body.appendChild(article09);
	article09.setAttribute('class','article09');
	
	article09.innerHTML+=`
	   <div class="container">
	        <div class="row">
			    <div class="col-md-6">
				    <div class="my_form">
					     <h2>Don't be Feel Hasitate To Contact Us</h3>
						 <form>
						      <div class="form-group">
							      <input type="text" placeholder="Name" class="form-control">
							  </div>
							  <div class="form-group">
							      <input type="Email" placeholder="Email" class="form-control">
							  </div>
							  <div class="form-group">
							      <input type="text" placeholder="Phone" class="form-control">
							  </div>
							  <div class="form-group">
							      <input type="date" placeholder="Date" class="form-control">
							  </div>
							  <div class="form-group">
							      <input type="city" placeholder="city" class="form-control">
							  </div>
							  <div class="form-group">
							      <input type="text" placeholder="Table/Room" class="form-control">
							  </div>
							  <div class="form-group">
							      <input type="Submit" placeholder="Table/Room" class="my_btn">
							  </div>
						 </form>
					</div>
				</div>
				<div class="col-md-6">
				    <div class="my_form pad-10">
					     <h3>Visit Us</h3>
						 <ul class="nav">
						     <li><a href="tel:8349680000"><i class="fa fa-whatsapp"></i> 8349680000</a></li>
							 <li><a href="tel:07752357487"><i class="fa fa-whatsapp"></i> 07752357487</a></li>
							  <li><a href="tel:9407973731"><i class="fa fa-phone" ></i> 9407973731</a></li>
							 <li><a href="mailto:maajagdambahotel2021@gmail.com"><i class="fa fa-envelope" ></i> maajagdambahotel2021@gmail.com</a></li>
							  <li><a href="#"><i class="fa fa-map-marker" ></i> Mangla Road, Beside Holy Cross School, Bilaspur</a></li>
						 </ul>
						 
					</div>
				</div>
			</div>
	   </div>
	`;
	
	
}
form();