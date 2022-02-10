const container = document.querySelector('.container');
let eightSeats = document.querySelectorAll('.eight');
let twelveSeats = document.querySelectorAll('.twelve');
let fourSeats = document.querySelectorAll('.four');
let occupied = document.querySelectorAll('.occupied')
let value = document.querySelector('.value')

document.addEventListener("click", addActive);

function addActive(evt) {
  if (evt.target.classList.contains('table') && !evt.target.classList.contains('noShow')) {
    const allItems = document.querySelectorAll(".selected");
    for (let i=0; i<allItems.length; i += 1) {
      allItems[i].classList.toggle("selected");
    }
    document.querySelector('.still').classList.toggle('selected');
    evt.target.classList.toggle("selected");
  }
}

function confirm(){
    $(document).ready(function(){
        $('.selected').addClass('occupied');
        $('.selected').removeClass('selected');
        $('.still').addClass('selected');
    })
}

function remove(){
    $(document).ready(function(){
        $('.occupied').addClass('table');
        $('.selected').removeClass('occupied');
        $('.still').addClass('selected');
    })
}

function dashboard(){
    $(document).ready(function(){
        $('.noShow').addClass('table')
        $('.noShow').removeClass('noShow')
    })
}

function changeColor(){
$(document).ready(function(){

    let guestNumbers = document.getElementById('guests').value;
    var table = document.querySelectorAll('.table');
    
    console.log(guestNumbers);
    for(let i = 0; i < table.length+1; i++){
    if(guestNumbers <= 4){
            $('.four').addClass('table');
            $('.four').removeClass('noShow');
            $('.eight').addClass('noShow');
            $('.twelve').addClass('noShow');
            $('.selected').removeClass('selected');
        }
     else if(guestNumbers > 4 && guestNumbers <= 8){
                    $('.four').addClass('noShow');
                    $('.eight').addClass('table');
                    $('.eight').removeClass('noShow');
                    $('.twelve').addClass('noShow');
                    $('.selected').removeClass('selected')
     }
         else if(guestNumbers > 8 && guestNumbers <=12){
                $('.four').addClass('noShow');
                $('.eight').addClass('noShow');
                $('.twelve').addClass('table');
                $('.twelve').removeClass('noShow');
                $('.selected').removeClass('selected')
                
            }
        }
        
    }) 
}





