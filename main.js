const F_NAME = document.querySelector(`#fname`);
const L_NAME = document.querySelector(`#lname`);
const SAVE_BTN = document.querySelector(`#userInputBtn`);
const CONTAINER_ONE =document.querySelector(`.containerOne`);
const CONTAINER_TWO =document.querySelector(`.containerTwo`);
const MAIN_CONTENT_NAME = document.querySelector(`.mainContent > p > strong`);
const MAIN_CONTENT_DATE = document.querySelector(`#date`);
const MAIN_CONTENT_DAY = document.querySelector(`#day`);
const MAIN_CONTENT_TIME = document.querySelector(`#time`);

// Disable ContainerOne function
function disableContainerOne(){
    CONTAINER_ONE.style.display = "none";
};
// Enable ContainerTwo function
function enableContainerTwo(){
    CONTAINER_TWO.style.display = "block";
};


                        // Date & Time 
const d = new Date();
var turkishMonths;
//Days of week translated to  Turkish Days with Array
const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

// Months of year translated to Turkish Months with Switch
switch(d.getMonth()){
    case 0:
        turkishMonths = `Ocak`
        break;
    case 1:
        turkishMonths = `Şubat`
        break;
    case 2:
        turkishMonths = `Mart`
        break;
    case 3:
        turkishMonths = `Nisan`
        break;
    case 4:
        turkishMonths = `Mayıs`
        break;
    case 5:
        turkishMonths = `Haziran`
        break;
    case 6:
        turkishMonths = `Temmuz`
        break;
    case 7:
        turkishMonths = `Ağustos`
        break;
    case 8:
        turkishMonths = `Eylül`
        break;
    case 9:
        turkishMonths = `Ekim`
        break;
    case 10:
        turkishMonths = `Kasım`
        break;
    case 11:
        turkishMonths = `Aralık`
        break;
        
};

// Add zero to single digits //
function addZero(i){
    i < 10 ? i = "0" + i : i
    return i
};

// Start Time funtion used with addZero function.
setInterval(timeStart, 1000);
function timeStart(){
    const da = new Date();
        
        let h = addZero(da.getHours());
        let m = addZero(da.getMinutes());
        let s = addZero(da.getSeconds());
    MAIN_CONTENT_TIME.innerHTML = `${h}:${m}:${s}`
}




// save button actions
function inputCheck(){
    var letters = /^[A-Za-z]+$/;
    
    if(F_NAME.value.match(letters) && L_NAME.value.match(letters) )
    {   
        disableContainerOne();
        enableContainerTwo()
        MAIN_CONTENT_NAME.innerHTML = `${F_NAME.value[0].toUpperCase()}${F_NAME.value.slice(1).toLowerCase()} ${L_NAME.value[0].toUpperCase()}${L_NAME.value.slice(1).toLowerCase()}`
        MAIN_CONTENT_DATE.innerHTML = `${addZero(d.getDate())}/${turkishMonths}/${d.getFullYear()}`;
        MAIN_CONTENT_DAY.innerHTML = `${days[d.getDay()]}`;
       
       
    }else if(!F_NAME.value){
        alert(`Please type your first name.`)
    }else if(!L_NAME.value){
        alert(`Please type your last name.`)
    }   else
    {
    alert("Enter alphabets only. First Name and Last Name must contain only letters. Numbers or characters are not allowed!  ");
    
    }
    
    
};



  
