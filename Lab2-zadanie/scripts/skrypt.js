const form =document.getElementById("form");

form.addEventListener ( 'submit',(event)=> {
    event.preventDefault(); 
    var zapisaneImie=document.getElementById("imie").value;
    document.cookie=zapisaneImie;
});
