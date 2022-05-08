const business = { start: 9, end: 18 }





init()
function init(){
    var cont = $(".container");
    $("#currentDay").append(moment().format('MMMM Do YYYY'));


    for(let i = business.start; i < business.end; i++){
        let hr = i; 
        if(hr > 12){
            hr = hr - 12;
        }
        if( i < 12)
          hr = hr + 'am';
          else
          hr = hr + "pm"
          
        cont.append(`<div class= 'container-row'> 
         ${hr} 
        <textarea class='note-box note-input-${i}' />
        <input type='button'class='savebtn'/> </div>`);
        
    }
    applyclr();
}

function applyclr(){
    for(let i = business.start; i < business.end; i++){
      var timeclass= 'past';
        let currenttime =  moment().format('H');

        if(i > currenttime){
         timeclass = 'future';
         
        }
        else if(i == currenttime){
            timeclass = 'present';
        }
      $('.note-input-' + i).addClass(timeclass);
}  
}