
function getGender() {
    var e = document.getElementById("gender");
    var strUser = e.options[e.selectedIndex].value;
    return strUser;
}

function getActivity() {
    var e = document.getElementById("activity");
    var strAct = e.options[e.selectedIndex].value;
    return strAct;
}

function calculateTotal() {
    var gender = getGender();
    var age = document.getElementById("age").value;
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    var activity = getActivity();

    if(checkInput(gender, age, weight, height, activity)==true){
        var result;
        if (gender == "F") {
            result = calculateForFemale(gender, age, weight, height, activity);
        } else if (gender == "M") {
            result = calculateForMale(gender, age, weight, height, activity);
        }
        var divobj = document.getElementById('totalPrice');
        divobj.style.display='block';
        divobj.innerHTML = "Max colories per day: "+result;
    }

}

function checkInput(gender, age, weight, height, activity) {
    var result = true;
    if(gender==""){
        alert("Please enter gender!");
        result = false;
    }else if(age==""){
        alert("Please enter age!");
        result = false;
    }else if(weight==""){
        alert("Please enter weight!");
        result = false;
    }else if(height==""){
        alert("Please enter height!");
        result = false;
    }else if(activity==""){
        alert("Please enter activity!");
        result = false;
    }
    return result;
}

function calculateForFemale(gender, age, weight, height, activity) {

    var bmr = Math.round(655 + (9.6 * weight) + (1.8 * height) - (4.7 * age));
    var withact =bmr * activity;
    return Math.round(withact);
}

function calculateForMale(gender, age, weight, height, activity) {
    var bmr = Math.round(66 + (13.7 * weight) + (5 * height) - (6.8 * age));
    var withact =bmr * activity;
    return Math.round(withact);
}