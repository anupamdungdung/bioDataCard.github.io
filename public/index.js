var form=document.getElementById('form');

// const isValidObjField = (obj) => {
//     return Object.values(obj).every(value => value.trim());
// }

// const isValidEmail = (value) => {
//     //RegEx for email validation
//     const regx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
//     return regx.test(value);
// }

form.addEventListener('submit',(e)=>{

    e.preventDefault();
    var nameField=document.getElementById("name").value;
    var about=document.getElementById("about").value;
    var address=document.getElementById("address").value;
    var phone=document.getElementById("phoneNo").value;
    var college=document.getElementById("college").value;

    

    document.getElementById("nameText").innerHTML=nameField;
    document.getElementById("aboutText").innerHTML=about;
    document.getElementById("addressText").innerHTML=address;
    document.getElementById("phoneText").innerHTML=phone;
    document.getElementById("collegeText").innerHTML=college;  
    
    document.getElementById("name").value='';
    document.getElementById("about").value='';
    document.getElementById("address").value='';
    document.getElementById("phoneNo").value='';
    document.getElementById("college").value='';

    
});









