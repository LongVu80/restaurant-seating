const container = document.querySelector('.container');
let eightSeats = document.querySelectorAll('.eight');
let twelveSeats = document.querySelectorAll('.twelve');
let fourSeats = document.querySelectorAll('.four');
let occupied = document.querySelectorAll('.occupied')
let value = document.querySelector('.value')

function how(){
    alert(`inspired from movie seating.

    to seat customers: enter the number of guests, choose table, confirm, to remove and choose other table, click remove,
    
    to remove table with occupied status to available: go to dashboard, choose the occupied table, click remove.`)
}

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
    })
}

function remove(){
    $(document).ready(function(){
        $('.occupied').addClass('table');
        $('.selected').removeClass('occupied');
        $('.selected').removeClass('selected');
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





