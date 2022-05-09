const business = { start: 9, end: 18 }

function init(){
    $("#currentDay").append(moment().format('MMMM Do YYYY'));

    var cont = $(".container");
    for(let hour = business.start; hour < business.end; hour++){
        let adjustedHour = hour; 
        let noteValue =  localStorage.getItem("note-" + hour);
       
        if(noteValue == null){ 
            noteValue = '';
       }
        if(hour > 12){
            adjustedHour = adjustedHour - 12;
        }

        if( hour < 12)
            adjustedHour = adjustedHour + 'am';
        else
            adjustedHour = adjustedHour + "pm"
          
        cont.append(`<div class= 'container-row'> 
            ${adjustedHour} 
            <textarea class='note-box note-input-${hour}'>${noteValue}</textarea>
            <button class='saveBtn' onclick='savenote(${hour})'></button>
        </div>`);
        
    }
    applyclr();
}
init();

function applyclr(){
    for(let hour = business.start; hour < business.end; hour++){
        let timeclass= 'past';
        let currenttime =  moment().format('H');

        if(hour > currenttime){
         timeclass = 'future';
         
        }
        else if(hour == currenttime){
            timeclass = 'present';
        }
      $('.note-input-' + hour).addClass(timeclass);
}  
}
function savenote(hour){
    console.log( $('.note-input-' + hour).val() );
    localStorage.setItem('note-' +hour, $('.note-input-' + hour).val() );

}