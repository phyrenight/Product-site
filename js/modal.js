(function() {
  
  var bikes =[{
  	pic : "images/bicycle1640.jpg",
  	descript: "Quisque elementum, quam vitae lobortis ultricies, metus ligula volutpat lectus.",
  	price: "0.00",
  	name: "Quisque" 
  },{
    pic: "images/bicycle2640.jpg",
    descript: "Quisque elementum, quam vitae lobortis ultricies, metus ligula volutpat lectus.",
    price: "0.00",
    name: "Elementum"
  },{
  	pic: "images/bike3640.jpg",
  	descript: "Quisque elementum, quam vitae lobortis ultricies, metus ligula volutpat lectus.",
  	price: "0.00",
  	name: "Ultricies"
  },{
  	pic: "images/bike4640.jpg",
  	descript: "Quisque elementum, quam vitae lobortis ultricies, metus ligula volutpat lectus.",
  	price: "0.00",
  	name: "Quam"
  },{
  	pic: "images/bike5640.jpg",
  	descript: "Quisque elementum, quam vitae lobortis ultricies, metus ligula volutpat lectus.",
  	price: "0.00",
  	name: "Vitae"
  },{
  	pic: "images/hybrid6640.jpg",
  	descript: "Quisque elementum, quam vitae lobortis ultricies, metus ligula volutpat lectus.",
  	price: "0.00",
  	name: "Lobortis"
  }];


  let items = [];
  
  /** attaches click event to each bike container
  */
  let assignIdToItems = function(){
    let i = 1;
    const numberOfBikesOnPage = 6;

    while(i <= 6){
      items[i] = document.getElementById("item-container-"+ i);
      i++;
    }
    for(let n in items){
      items[n].onclick  = displayInfo;
    }
  }

  var span = document.getElementById("close");

  var modal = document.getElementById("modal");

  var modalImage = document.getElementById("modal-image");

  var bikeName = document.getElementById("bike-name");

  var modalPrice = document.getElementById("modal-price");

  var bikeDescription = document.getElementById("description");

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

assignIdToItems();
})();