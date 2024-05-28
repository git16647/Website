 function showPropertyDetails() {
    
    var info = {
        city: "دمشق",
        detail: "شقة غرفة وصالة مساحة 70م",
        rent: "300000 ",
        city2:"دمشق",
        detail2:"بيت 4غرف النوم, 5 حمامات",
        rent2:"30000000",
        city3: "حمص",
        detail3:"شقة غرفتين مساحة 100م",
        rent3:"2000000 ",
        city4:"ريف دمشق",
        detail4:"بيت مساحة 110 م",
        rent4:"2500000",
        city5:"دمشق",
        detail5:"شقة غرفتين وصالة مساحة 200م	",
        rent5:"6000000 ",
        city6:"دمشق",
        detail6:"مكتب غرفتين مساحة 70م	",
        rent6:"15000000",
        city7:"حلب",
        detail7:"شقة غرفة وحدة مساحة 60 م	",
        rent7:"100000 ",
        city8:"دمشق",
        detail8:"مكتب مساحة 100م",
        rent8:"4100000 ",
        city9:"دمشق",
        detail9:"شقة غرفتين وصالة مساحة 300م	",
        rent9:"6000000",
        city10:"دمشق",
        detail10:"شقة غرفة وصالة مساحة 80م	",
        rent10:"2400000 "
    };

    var radio= document.getElementsByName('choose')
    for(i=0;i<radio.length;i++){
        if(radio[i].checked){
            if(radio[i].value == 1){
                var popup = window.open("", "_blank", "width=400, height=300");
                popup.document.write("<h2>تفاصيل العقار</h2>");
                popup.document.write("<p>المدينة: " + info.city + "</p>");
                popup.document.write("<p> التفاصيل:" + info.detail + "</p>");
                popup.document.write("<p> الايجار الشهري:" + info.rent + "</p>");
            }else if(radio[i].value==2){

            var popup = window.open("", "_blank", "width=400, height=300");
            popup.document.write("<h2>تفاصيل العقار</h2>");
            popup.document.write("<p>المدينة: " + info.city2 + "</p>");
            popup.document.write("<p> التفاصيل:" + info.detail2 + "</p>");
            popup.document.write("<p> الايجار الشهري:" + info.rent2 + "</p>");
            }else if(radio[i].value==3){                    

            var popup = window.open("", "_blank", "width=400, height=300");
            popup.document.write("<h2>تفاصيل العقار</h2>");
            popup.document.write("<p>المدينة: " + info.city3 + "</p>");
            popup.document.write("<p> التفاصيل:" + info.detail3 + "</p>");
            popup.document.write("<p> الايجار الشهري:" + info.rent3 + "</p>");
            }else if(radio[i].value==4){
                var popup = window.open("", "_blank", "width=400, height=300");
                popup.document.write("<h2>تفاصيل العقار</h2>");
                popup.document.write("<p>المدينة: " + info.city4 + "</p>");
                popup.document.write("<p> التفاصيل:" + info.detail4 + "</p>");
                popup.document.write("<p> الايجار الشهري:" + info.rent4 + "</p>");
            }else if(radio[i].value==5){
                var popup = window.open("", "_blank", "width=400, height=300");
                popup.document.write("<h2>تفاصيل العقار</h2>");
                popup.document.write("<p>المدينة: " + info.city5 + "</p>");
                popup.document.write("<p> التفاصيل:" + info.detail5 + "</p>");
                popup.document.write("<p> الايجار الشهري:" + info.rent5 + "</p>");
            }else if(radio[i].value==6){
                var popup = window.open("", "_blank", "width=400, height=300");
                popup.document.write("<h2>تفاصيل العقار</h2>");
                popup.document.write("<p>المدينة: " + info.city6 + "</p>");
                popup.document.write("<p> التفاصيل:" + info.detail6 + "</p>");
                popup.document.write("<p> الايجار الشهري:" + info.rent6 + "</p>");
            }else if(radio[i].value==7){
                var popup = window.open("", "_blank", "width=400, height=300");
                popup.document.write("<h2>تفاصيل العقار</h2>");
                popup.document.write("<p>المدينة: " + info.city7 + "</p>");
                popup.document.write("<p> التفاصيل:" + info.detail7 + "</p>");
                popup.document.write("<p> الايجار الشهري:" + info.rent7 + "</p>");
            }else if(radio[i].value==8){
                var popup = window.open("", "_blank", "width=400, height=300");
                popup.document.write("<h2>تفاصيل العقار</h2>");
                popup.document.write("<p>المدينة: " + info.city8 + "</p>");
                popup.document.write("<p> التفاصيل:" + info.detail8 + "</p>");
                popup.document.write("<p> الايجار الشهري:" + info.rent8 + "</p>");
            }else if(radio[i].value==9){
                var popup = window.open("", "_blank", "width=400, height=300");
                popup.document.write("<h2>تفاصيل العقار</h2>");
                popup.document.write("<p>المدينة: " + info.city9 + "</p>");
                popup.document.write("<p> التفاصيل:" + info.detail9 + "</p>");
                popup.document.write("<p> الايجار الشهري:" + info.rent9 + "</p>");
            }else if(radio[i].value==10){
                var popup = window.open("", "_blank", "width=400, height=300");
                popup.document.write("<h2>تفاصيل العقار</h2>");
                popup.document.write("<p>المدينة: " + info.city10 + "</p>");
                popup.document.write("<p> التفاصيل:" + info.detail10 + "</p>");
                popup.document.write("<p> الايجار الشهري:" + info.rent10 + "</p>");
            }

        }
    }
      };
   

function toggleDetails() {
    var details = document.getElementById("hidden")
    var checkbox = document.getElementById("showDetails");

    if (checkbox.checked) {
        details.style.display = "contents"
    } else {
        details.style.display = "none";
    }
}

function toggleDetails1() {
    var details = document.getElementById("hidden1")
    var checkbox = document.getElementById("showDetails1");

    if (checkbox.checked) {
        details.style.display = "contents"
    } else {
        details.style.display = "none";
    }
}

function toggleDetails2() {
    var details = document.getElementById("hidden2")
    var checkbox = document.getElementById("showDetails2");

    if (checkbox.checked) {
        details.style.display = "contents"
    } else {
        details.style.display = "none";
    }
}
function toggleDetails3() {
    var details = document.getElementById("hidden3")
    var checkbox = document.getElementById("showDetails3");

    if (checkbox.checked) {
        details.style.display = "contents"
    } else {
        details.style.display = "none";
    }
}
function toggleDetails4() {
    var details = document.getElementById("hidden4")
    var checkbox = document.getElementById("showDetails4");

    if (checkbox.checked) {
        details.style.display = "contents"
    } else {
        details.style.display = "none";
    }
}
function toggleDetails5() {
    var details = document.getElementById("hidden5")
    var checkbox = document.getElementById("showDetails5");

    if (checkbox.checked) {
        details.style.display = "contents"
    } else {
        details.style.display = "none";
    }
}
function toggleDetails6() {
    var details = document.getElementById("hidden6")
    var checkbox = document.getElementById("showDetails6");

    if (checkbox.checked) {
        details.style.display = "contents"
    } else {
        details.style.display = "none";
    }
}
function toggleDetails7() {
    var details = document.getElementById("hidden7")
    var checkbox = document.getElementById("showDetails7");

    if (checkbox.checked) {
        details.style.display = "contents"
    } else {
        details.style.display = "none";
    }
}
function toggleDetails8() {
    var details = document.getElementById("hidden8")
    var checkbox = document.getElementById("showDetails8");

    if (checkbox.checked) {
        details.style.display = "contents"
    } else {
        details.style.display = "none";
    }
}
function toggleDetails9() {
    var details = document.getElementById("hidden9")
    var checkbox = document.getElementById("showDetails9");

    if (checkbox.checked) {
        details.style.display = "contents"
    } else {
        details.style.display = "none";
    }
}
function toggle() {
    var t = document.getElementById("form")
    t.style.display = "block"
}


function generate_captcha() {

    let result = '';
    let string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabsdefghijklmnopqrstuvwxyz0123456789';

    for (let s = 0; s < 6; s++) {
        result += string.charAt(Math.floor(Math.random() * string.length));
    }
    document.getElementById("captcha").innerHTML = result;


}
function check_captcha() {
    let text_captcha = document.getElementById("captcha").textContent;
    return text_captcha == form1.place_cood.value;
}

function number_correct() {
    var inputID = document.getElementById('phone').value;
    var isValid = validateSyrianID(inputID);

    if (!isValid) {

        alert('الرقم المدخل غير صحيح أو لا يتبع نمط الأرقام الوطنية السورية.');
    }
}

function validateSyrianID(id) {
    var syrianIDPattern = /^\d{9}$/;
    return syrianIDPattern.test(id);
}

function validateArabicName() {
    var inputName = document.getElementById('fn').value;
    var isValid = /^[ء-ي ]+$/.test(inputName);

    if (!isValid) {
        alert('الاسم المدخل غير صحيح أو يحتوي على حروف غير عربية.');
    }
}

function national(){
    var natid = document.getElementById('id').value;
    var iValid = validatnatid(natid)
    if(!iValid){
    alert ('الرقم الوطني يجب ان يكون 11 خانة')
    }

}
function validatnatid(id){
    var IDPattern = /^\d{11}$/;
    return IDPattern.test(id);
}

function validateEmail() {
    var inputEmail = document.getElementById('mail').value;
    var isValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputEmail);

    if (!isValid) {
        alert('البريد الإلكتروني غير صحيح.');
    }
}