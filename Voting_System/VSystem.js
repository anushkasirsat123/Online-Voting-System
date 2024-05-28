
console.log(55)
// function loginFunction() {


//     console.log()
//     console.log()
//     console.log(777)
//     //print mobile value and prassword value
//     //if 2 value=="" alert('please enter valid no and pass')
//     //else window.location.href = "./Voting_SystemPage.html";


//     window.location.href = "http://127.0.0.1:5500/Project/Voting_SystemPage.html";
// }



// function displayValues(){
//     var mobile=document.getElementById("mobileNumber").value;
//     var passwordvalue=document.getElementById("password").value;

//     console.log("Mobile Number:"+ mobile);
//     console.log("Password:"+ passwordvalue);
// }



function ifloginFunction(){
    var mobile=document.getElementById("mobileNumber").value;
   var passwordvalue=document.getElementById("password").value;

   if(mobile==""){
    alert('Enter mobile no')
    return
   }
   else if(passwordvalue==""){
    alert('Enter password')
   }
   else{
    window.location.href = "http://127.0.0.1:5500/Project/Voting_SystemPage.html";
    // alert('please enter valid mobile number and password');
   }
}







// For create account
function createfunction(){
    window.location.href="http://127.0.0.1:5500/Project/Voting_System.html";
}


//call onclick function
//check wheather atleast one radio btn selected
// if(selected){


// }
// else{
//     alert
//     return
// }

function submitData(){

    var radiocounter=0
    var radioButtons = document.getElementsByName('myvote');
   
    for(var i=0;i<radioButtons.length;i++){
        if(radioButtons[i].checked){
            radiocounter=radiocounter+1
            break;
        }
    }

    console.log(radiocounter)

    if(radiocounter==0){
        alert("Choose one option")
        return
    }
    else{
        document.getElementById('thankyousectionid').style.display='block'
        document.getElementById('vtableSection').style.display='none'
    }


    
   
}

function okselect(){
    document.getElementById('thankyousectionid').style.display='none'
    document.getElementById('vtableSection').style.display='block'

    var radioButtons = document.getElementsByName('myvote');
   
    for(var i=0;i<radioButtons.length;i++){
        radioButtons[i].checked = false;
    }

}
