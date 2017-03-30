(function() {
  
  var bikes =[{
  	pic : "images/bicycle1640.jpg",
  	descript: "",
  	price: 0.00,
  	name: "" 
  },{
    pic: "images/bicycle2640.jpg",
    descript: "",
    price: 0.00,
    name: ""
  },{
  	pic: "images/bike3640.jpg",
  	descript: "",
  	price: 0.00,
  	name: ""
  },{
  	pic: "images/bike4640.jpg",
  	descript: "",
  	price: 0.00,
  	name: ""
  },{
  	pic: "images/bike5640.jpg",
  	descript: "",
  	price: 0.00,
  	name: ""
  },{
  	pic: "images/hybrid6640.jpg",
  	descript: "",
  	price: 0.00,
  	name: ""
  }];

  var item1 = document.getElementById("item-container-1");

  var item2 = document.getElementById("item-container-2");

  var item3 = document.getElementById("item-container-3");

  var item4 = document.getElementById("item-container-4");

  var item5 = document.getElementById("item-container-5");

  var item6 = document.getElementById("item-container-6");

  var span = document.getElementById("close");

  var modal = document.getElementById("modal");

  var modalImage = document.getElementById("modal-image");

  var bikeName = document.getElementById("bike-name");

  var modalPrice = document.getElementById("modal-price");

  var bikeDescription = document.getElementById("description");
  
  item1.onclick = displayInfo;

  item2.onclick = displayInfo;

  item3.onclick = displayInfo;

  item4.onclick = displayInfo;

  item5.onclick = displayInfo;

  item6.onclick = displayInfo;

  span.onclick = function(){
    modal.style.display = "none";
  }
  
  window.onclick = function(event) {
  	if(event.target == modal) {
  		modal.style.display = "none";
  	}
  }
 function displayInfo(){
 	var str = this.id.slice(-1);
 	modal.style.display = "block";
    modalImage.src = bikes[str-1].pic;
    bikeName.innerHTML = bikes[str].name;
    modalPrice.innerHTML = bikes[str].price;
    bikeDescription.innerHTML = bikes[str].descript;
 }

})();