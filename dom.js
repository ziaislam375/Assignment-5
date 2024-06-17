const container = document.getElementById('container');

const seats = document.querySelectorAll(".row .seat:not(.sold)");
//console.log(seats)
//console.log(seat)
const seatCount = document.getElementById('seat-count');
const totalPrice = document.getElementById('total-price');

const selectSeatValue = document.getElementById('select-seat-value');


const priceChange = document.getElementById('price-change');
 
const totalSeat = document.getElementById('total-seat');

const Price = document.getElementById('trick-price');

//console.log(trickPrice);

Price.addEventListener("change", e => {
    //Update ticket price and store selected movie data
    ticketPrice = +e.target.value;
   
  
    //console.log(changePrice)
  });

  let bgCount = 0;

  // Event listner for seat clicks
container.addEventListener("click", e => {
    // check if a seat is clicked and not sold
    if (
      e.target.classList.contains("seat") &&
      !e.target.classList.contains("sold") && bgCount <4){
      //Toggle seat selection
      bgCount =bgCount + 1;
        ///---------------------------------------------
      const targetText = event.target.innerText;
     console.log(targetText)
      const appendContainer = document.getElementById('append-container');
      const p1 = document.createElement("p");
      p1.innerText = targetText;

      const p2 = document.createElement("p");
      p2.innerText = "Economoy"

      const p3 = document.createElement("p");
        p3.innerText = 550;

        const div = document.createElement("div")

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        div.classList.add("flex");
        div.classList.add("justify-between");
        console.log(div);
        appendContainer.appendChild(div);

     



      e.target.classList.toggle("selected");
      //selectSeatValue.innerText = e.target.classList.contains("seat").value;

      //e.target.classList.style.backgroundColor ='red';
  
      // Update displayed count and total
     
    }
    else{
        alert('This Trickt is selected')
    }

     
    
    updateSelectedCount();
  });


  // function select(){
  //   const selectedSeats = document.querySelectorAll(".row .seat.selected");
  //   const value = +selectedSeats.value;
  //   console.log(selectedSeats.value)
  //   selectSeatValue.innerText = value;
  // }

  function updateSelectedCount() {
    // Get all selected seats
    const selectedSeats = document.querySelectorAll(".row .seat.selected");
    
    // Get an array of selected seats's indexes
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
  
    // Store selected seats index into local storage
    //localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));
  
    // Calculate selected seats and count
    const selectedSeatsCounts = selectedSeats.length;
  
    // Update UI with selected seats count and total price
    count.innerText = selectedSeatsCounts;
    priceChange.innerText = ticketPrice;
    const Total = selectedSeatsCounts * ticketPrice;


    



// discount cupoon section ///
document.getElementById('apply-btn').addEventListener('click', function () {

  const cuponField = document.getElementById('cupun-field').value;
  if (cuponField === "Couple 20") {

      const grandTotal = document.getElementById('grand-total');
      const grandTotalValue = parseInt(grandTotal.innerText);
      const grand = Total - (grandTotalValue * 0.20);

      grandTotal.innerText = grand;

      // console.log(grandTotal)

      // const inputField = document.getElementById('input-field');
      // inputField.classList.add('hidden');
      // modal //
      const showModal = document.getElementById('');
      showModal.addEventListener('click', function () {
          my_modal_1.showModal();
      })

  }
  else if (cuponField === "NEW15") {
      const grandTotal = document.getElementById('grand-total');
      const grandTotalValue = parseInt(grandTotal.innerText);
       

       const grand = Total - (grandTotalValue * 0.15);

       grandTotal.innerText = grand;

      // const inputField = document.getElementById('input-field');
      // inputField.classList.add('hidden')
  }
  else {
      alert("Invalid Cupon Code");
      document.getElementById('cupun-field').value = "";
  }

})
    total.innerText = Total;
  
    totalSeat.innerText = 40 - selectedSeatsCounts;
    
  }
  
 function show(){
  const Main = document.getElementById('main');
  Main.classList.add('hidden')
  const complied = document.getElementById('compiled');
   complied.classList.remove('hidden')
 }
 