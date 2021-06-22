// window.addEventListener('load', () => {

//    

// });

// window.onbeforeunload = function(event) {
//     return confirm(window.localStorage.clear());

// }



function addtoCart1() {


    // alert(name + '\n' + price + '\n' + img);

    var name = document.getElementById("ProdName1").textContent;
    var priceTxt = document.getElementById("ProdPrice1").textContent;
    var price = Number(priceTxt.replace(/,|₹| /g, ""));
    var img = document.getElementById("ProImg1").src;

    // localStorage.setItem("PRODUCT NAME", name);
    // localStorage.setItem("PRODUCT TXT", priceTxt);
    // localStorage.setItem("PRODUCT PRICE", price);
    // localStorage.setItem("IMAGE SRC", img);

    updateCartImg();

    if (localStorage.getItem('proN') == null) {
        localStorage.setItem('proN', '[]');
    }

    var old_data = JSON.parse(localStorage.getItem('proN'));
    old_data.push(name);

    localStorage.setItem('proN', JSON.stringify(old_data));

    if (localStorage.getItem('proPT') == null) {
        localStorage.setItem('proPT', '[]');
    }

    var old_data = JSON.parse(localStorage.getItem('proPT'));
    old_data.push(priceTxt);

    localStorage.setItem('proPT', JSON.stringify(old_data));

    if (localStorage.getItem('proP') == null) {
        localStorage.setItem('proP', '[]');
    }

    var old_data = JSON.parse(localStorage.getItem('proP'));
    old_data.push(price);

    localStorage.setItem('proP', JSON.stringify(old_data));

    if (localStorage.getItem('proI') == null) {
        localStorage.setItem('proI', '[]');
    }

    var old_data = JSON.parse(localStorage.getItem('proI'));
    old_data.push(img);

    localStorage.setItem('proI', JSON.stringify(old_data));

    // alert(name + '\n' + price + '\n' + img);

    document.getElementById("btn1").style.backgroundColor = 'Red';

    document.getElementById("btn1").value = "ADDED";

    document.getElementById("btn1").disabled = true;
}

function addtoCart2() {

    var name = document.getElementById("ProdName2").textContent;
    var priceTxt = document.getElementById("ProdPrice2").textContent;
    var price = Number(priceTxt.replace(/,|₹| /g, ""));
    var img = document.getElementById("ProImg2").src;

    // localStorage.setItem("PRODUCT NAME", name);
    // localStorage.setItem("PRODUCT TXT", priceTxt);
    // localStorage.setItem("PRODUCT PRICE", price);
    // localStorage.setItem("IMAGE SRC", img);

    updateCartImg();

    if (localStorage.getItem('proN') == null) {
        localStorage.setItem('proN', '[]');
    }

    var old_data = JSON.parse(localStorage.getItem('proN'));
    old_data.push(name);

    localStorage.setItem('proN', JSON.stringify(old_data));

    if (localStorage.getItem('proPT') == null) {
        localStorage.setItem('proPT', '[]');
    }

    var old_data = JSON.parse(localStorage.getItem('proPT'));
    old_data.push(priceTxt);

    localStorage.setItem('proPT', JSON.stringify(old_data));


    if (localStorage.getItem('proP') == null) {
        localStorage.setItem('proP', '[]');
    }

    var old_data = JSON.parse(localStorage.getItem('proP'));
    old_data.push(price);

    localStorage.setItem('proP', JSON.stringify(old_data));

    if (localStorage.getItem('proI') == null) {
        localStorage.setItem('proI', '[]');
    }

    var old_data = JSON.parse(localStorage.getItem('proI'));
    old_data.push(img);

    localStorage.setItem('proI', JSON.stringify(old_data));

    // alert(name + '\n' + price + '\n' + img);

    document.getElementById("btn2").style.backgroundColor = 'Red';

    document.getElementById("btn2").value = "ADDED";

    document.getElementById("btn2").disabled = true;

}

function addtoCart3() {

    // alert(name + '\n' + price + '\n' + img);

    var name = document.getElementById("ProdName3").textContent;
    var priceTxt = document.getElementById("ProdPrice3").textContent;
    var price = Number(priceTxt.replace(/,|₹| /g, ""));
    var img = document.getElementById("ProImg3").src;

    // localStorage.setItem("PRODUCT NAME", name);
    // localStorage.setItem("PRODUCT TXT", priceTxt);
    // localStorage.setItem("PRODUCT PRICE", price);
    // localStorage.setItem("IMAGE SRC", img);

    updateCartImg();

    if (localStorage.getItem('proN') == null) {
        localStorage.setItem('proN', '[]');
    }

    var old_data = JSON.parse(localStorage.getItem('proN'));
    old_data.push(name);

    localStorage.setItem('proN', JSON.stringify(old_data));

    if (localStorage.getItem('proPT') == null) {
        localStorage.setItem('proPT', '[]');
    }

    var old_data = JSON.parse(localStorage.getItem('proPT'));
    old_data.push(priceTxt);

    localStorage.setItem('proPT', JSON.stringify(old_data));


    if (localStorage.getItem('proP') == null) {
        localStorage.setItem('proP', '[]');
    }

    var old_data = JSON.parse(localStorage.getItem('proP'));
    old_data.push(price);

    localStorage.setItem('proP', JSON.stringify(old_data));

    if (localStorage.getItem('proI') == null) {
        localStorage.setItem('proI', '[]');
    }

    var old_data = JSON.parse(localStorage.getItem('proI'));
    old_data.push(img);

    localStorage.setItem('proI', JSON.stringify(old_data));

    document.getElementById("btn3").style.backgroundColor = 'Red';

    document.getElementById("btn3").value = "ADDED";

    document.getElementById("btn3").disabled = true;

}

function addtoCart4() {

    var name = document.getElementById("ProdName4").textContent;
    var priceTxt = document.getElementById("ProdPrice4").textContent;
    var price = Number(priceTxt.replace(/,|₹| /g, ""));
    var img = document.getElementById("ProImg4").src;

    // localStorage.setItem("PRODUCT NAME", name);
    // localStorage.setItem("PRODUCT TXT", priceTxt);
    // localStorage.setItem("PRODUCT PRICE", price);
    // localStorage.setItem("IMAGE SRC", img);

    updateCartImg();

    if (localStorage.getItem('proN') == null) {
        localStorage.setItem('proN', '[]');
    }

    var old_data = JSON.parse(localStorage.getItem('proN'));
    old_data.push(name);

    localStorage.setItem('proN', JSON.stringify(old_data));

    if (localStorage.getItem('proPT') == null) {
        localStorage.setItem('proPT', '[]');
    }

    var old_data = JSON.parse(localStorage.getItem('proPT'));
    old_data.push(priceTxt);

    localStorage.setItem('proPT', JSON.stringify(old_data));


    if (localStorage.getItem('proP') == null) {
        localStorage.setItem('proP', '[]');
    }

    var old_data = JSON.parse(localStorage.getItem('proP'));
    old_data.push(price);

    localStorage.setItem('proP', JSON.stringify(old_data));

    if (localStorage.getItem('proI') == null) {
        localStorage.setItem('proI', '[]');
    }

    var old_data = JSON.parse(localStorage.getItem('proI'));
    old_data.push(img);

    localStorage.setItem('proI', JSON.stringify(old_data));

    document.getElementById("btn4").style.backgroundColor = 'Red';

    document.getElementById("btn4").value = "ADDED";

    document.getElementById("btn4").disabled = true;

}

function addtoCart5() {

    // alert(name + '\n' + price + '\n' + img);

    var name = document.getElementById("ProdName5").textContent;
    var priceTxt = document.getElementById("ProdPrice5").textContent;
    var price = Number(priceTxt.replace(/,|₹| /g, ""));
    var img = document.getElementById("ProImg5").src;

    // localStorage.setItem("PRODUCT NAME", name);
    // localStorage.setItem("PRODUCT TXT", priceTxt);
    // localStorage.setItem("PRODUCT PRICE", price);
    // localStorage.setItem("IMAGE SRC", img);

    updateCartImg();

    if (localStorage.getItem('proN') == null) {
        localStorage.setItem('proN', '[]');
    }

    var old_data = JSON.parse(localStorage.getItem('proN'));
    old_data.push(name);

    localStorage.setItem('proN', JSON.stringify(old_data));

    if (localStorage.getItem('proPT') == null) {
        localStorage.setItem('proPT', '[]');
    }

    var old_data = JSON.parse(localStorage.getItem('proPT'));
    old_data.push(priceTxt);

    localStorage.setItem('proPT', JSON.stringify(old_data));


    if (localStorage.getItem('proP') == null) {
        localStorage.setItem('proP', '[]');
    }

    var old_data = JSON.parse(localStorage.getItem('proP'));
    old_data.push(price);

    localStorage.setItem('proP', JSON.stringify(old_data));

    if (localStorage.getItem('proI') == null) {
        localStorage.setItem('proI', '[]');
    }

    var old_data = JSON.parse(localStorage.getItem('proI'));
    old_data.push(img);

    localStorage.setItem('proI', JSON.stringify(old_data));

    document.getElementById("btn5").style.backgroundColor = 'Red';

    document.getElementById("btn5").value = "ADDED";

    document.getElementById("btn5").disabled = true;

}

function addtoCart6() {

    var name = document.getElementById("ProdName6").textContent;
    var priceTxt = document.getElementById("ProdPrice6").textContent;
    var price = Number(priceTxt.replace(/,|₹| /g, ""));
    var img = document.getElementById("ProImg6").src;

    // localStorage.setItem("PRODUCT NAME", name);
    // localStorage.setItem("PRODUCT TXT", priceTxt);
    // localStorage.setItem("PRODUCT PRICE", price);
    // localStorage.setItem("IMAGE SRC", img);

    updateCartImg();

    if (localStorage.getItem('proN') == null) {
        localStorage.setItem('proN', '[]');
    }

    var old_data = JSON.parse(localStorage.getItem('proN'));
    old_data.push(name);

    localStorage.setItem('proN', JSON.stringify(old_data));

    if (localStorage.getItem('proPT') == null) {
        localStorage.setItem('proPT', '[]');
    }

    var old_data = JSON.parse(localStorage.getItem('proPT'));
    old_data.push(priceTxt);

    localStorage.setItem('proPT', JSON.stringify(old_data));


    if (localStorage.getItem('proP') == null) {
        localStorage.setItem('proP', '[]');
    }

    var old_data = JSON.parse(localStorage.getItem('proP'));
    old_data.push(price);

    localStorage.setItem('proP', JSON.stringify(old_data));

    if (localStorage.getItem('proI') == null) {
        localStorage.setItem('proI', '[]');
    }

    var old_data = JSON.parse(localStorage.getItem('proI'));
    old_data.push(img);

    localStorage.setItem('proI', JSON.stringify(old_data));

    document.getElementById("btn6").style.backgroundColor = 'Red';

    document.getElementById("btn6").value = "ADDED";

    document.getElementById("btn6").disabled = true;

}

function addtoCart7() {

    // alert(name + '\n' + price + '\n' + img);

    var name = document.getElementById("ProdName7").textContent;
    var priceTxt = document.getElementById("ProdPrice7").textContent;
    var price = Number(priceTxt.replace(/,|₹| /g, ""));
    var img = document.getElementById("ProImg7").src;

    // localStorage.setItem("PRODUCT NAME", name);
    // localStorage.setItem("PRODUCT TXT", priceTxt);
    // localStorage.setItem("PRODUCT PRICE", price);
    // localStorage.setItem("IMAGE SRC", img);

    updateCartImg();

    if (localStorage.getItem('proN') == null) {
        localStorage.setItem('proN', '[]');
    }

    var old_data = JSON.parse(localStorage.getItem('proN'));
    old_data.push(name);

    localStorage.setItem('proN', JSON.stringify(old_data));

    if (localStorage.getItem('proPT') == null) {
        localStorage.setItem('proPT', '[]');
    }

    var old_data = JSON.parse(localStorage.getItem('proPT'));
    old_data.push(priceTxt);

    localStorage.setItem('proPT', JSON.stringify(old_data));


    if (localStorage.getItem('proP') == null) {
        localStorage.setItem('proP', '[]');
    }

    var old_data = JSON.parse(localStorage.getItem('proP'));
    old_data.push(price);

    localStorage.setItem('proP', JSON.stringify(old_data));

    if (localStorage.getItem('proI') == null) {
        localStorage.setItem('proI', '[]');
    }

    var old_data = JSON.parse(localStorage.getItem('proI'));
    old_data.push(img);

    localStorage.setItem('proI', JSON.stringify(old_data));

    document.getElementById("btn7").style.backgroundColor = 'Red';

    document.getElementById("btn7").value = "ADDED";

    document.getElementById("btn7").disabled = true;

}

function addtoCart8() {

    var name = document.getElementById("ProdName8").textContent;
    var priceTxt = document.getElementById("ProdPrice8").textContent;
    var price = Number(priceTxt.replace(/,|₹| /g, ""));
    var img = document.getElementById("ProImg8").src;

    // localStorage.setItem("PRODUCT NAME", name);
    // localStorage.setItem("PRODUCT TXT", priceTxt);
    // localStorage.setItem("PRODUCT PRICE", price);
    // localStorage.setItem("IMAGE SRC", img);

    updateCartImg();

    if (localStorage.getItem('proN') == null) {
        localStorage.setItem('proN', '[]');
    }

    var old_data = JSON.parse(localStorage.getItem('proN'));
    old_data.push(name);

    localStorage.setItem('proN', JSON.stringify(old_data));

    if (localStorage.getItem('proPT') == null) {
        localStorage.setItem('proPT', '[]');
    }

    var old_data = JSON.parse(localStorage.getItem('proPT'));
    old_data.push(priceTxt);

    localStorage.setItem('proPT', JSON.stringify(old_data));


    if (localStorage.getItem('proP') == null) {
        localStorage.setItem('proP', '[]');
    }

    var old_data = JSON.parse(localStorage.getItem('proP'));
    old_data.push(price);

    localStorage.setItem('proP', JSON.stringify(old_data));

    if (localStorage.getItem('proI') == null) {
        localStorage.setItem('proI', '[]');
    }

    var old_data = JSON.parse(localStorage.getItem('proI'));
    old_data.push(img);

    localStorage.setItem('proI', JSON.stringify(old_data));

    document.getElementById("btn8").style.backgroundColor = 'Red';

    document.getElementById("btn8").value = "ADDED";

    document.getElementById("btn8").disabled = true;

}

function addtoCart9() {

    // alert(name + '\n' + price + '\n' + img);

    var name = document.getElementById("ProdName9").textContent;
    var priceTxt = document.getElementById("ProdPrice9").textContent;
    var price = Number(priceTxt.replace(/,|₹| /g, ""));
    var img = document.getElementById("ProImg9").src;

    // localStorage.setItem("PRODUCT NAME", name);
    // localStorage.setItem("PRODUCT TXT", priceTxt);
    // localStorage.setItem("PRODUCT PRICE", price);
    // localStorage.setItem("IMAGE SRC", img);

    updateCartImg();

    if (localStorage.getItem('proN') == null) {
        localStorage.setItem('proN', '[]');
    }

    var old_data = JSON.parse(localStorage.getItem('proN'));
    old_data.push(name);

    localStorage.setItem('proN', JSON.stringify(old_data));

    if (localStorage.getItem('proPT') == null) {
        localStorage.setItem('proPT', '[]');
    }

    var old_data = JSON.parse(localStorage.getItem('proPT'));
    old_data.push(priceTxt);

    localStorage.setItem('proPT', JSON.stringify(old_data));


    if (localStorage.getItem('proP') == null) {
        localStorage.setItem('proP', '[]');
    }

    var old_data = JSON.parse(localStorage.getItem('proP'));
    old_data.push(price);

    localStorage.setItem('proP', JSON.stringify(old_data));

    if (localStorage.getItem('proI') == null) {
        localStorage.setItem('proI', '[]');
    }

    var old_data = JSON.parse(localStorage.getItem('proI'));
    old_data.push(img);

    localStorage.setItem('proI', JSON.stringify(old_data));

    document.getElementById("btn9").style.backgroundColor = 'Red';

    document.getElementById("btn9").value = "ADDED";

    document.getElementById("btn9").disabled = true;

}

function addtoCart10() {

    var name = document.getElementById("ProdName10").textContent;
    var priceTxt = document.getElementById("ProdPrice10").textContent;
    var price = Number(priceTxt.replace(/,|₹| /g, ""));
    var img = document.getElementById("ProImg10").src;

    // localStorage.setItem("PRODUCT NAME", name);
    // localStorage.setItem("PRODUCT TXT", priceTxt);
    // localStorage.setItem("PRODUCT PRICE", price);
    // localStorage.setItem("IMAGE SRC", img);

    updateCartImg();

    if (localStorage.getItem('proN') == null) {
        localStorage.setItem('proN', '[]');
    }

    var old_data = JSON.parse(localStorage.getItem('proN'));
    old_data.push(name);

    localStorage.setItem('proN', JSON.stringify(old_data));

    if (localStorage.getItem('proPT') == null) {
        localStorage.setItem('proPT', '[]');
    }

    var old_data = JSON.parse(localStorage.getItem('proPT'));
    old_data.push(priceTxt);

    localStorage.setItem('proPT', JSON.stringify(old_data));


    if (localStorage.getItem('proP') == null) {
        localStorage.setItem('proP', '[]');
    }

    var old_data = JSON.parse(localStorage.getItem('proP'));
    old_data.push(price);

    localStorage.setItem('proP', JSON.stringify(old_data));

    if (localStorage.getItem('proI') == null) {
        localStorage.setItem('proI', '[]');
    }

    var old_data = JSON.parse(localStorage.getItem('proI'));
    old_data.push(img);

    localStorage.setItem('proI', JSON.stringify(old_data));

    document.getElementById("btn10").style.backgroundColor = 'Red';

    document.getElementById("btn10").value = "ADDED";

    document.getElementById("btn10").disabled = true;

}

function addtoCart11() {

    // alert(name + '\n' + price + '\n' + img);

    var name = document.getElementById("ProdName11").textContent;
    var priceTxt = document.getElementById("ProdPrice11").textContent;
    var price = Number(priceTxt.replace(/,|₹| /g, ""));
    var img = document.getElementById("ProImg11").src;

    // localStorage.setItem("PRODUCT NAME", name);
    // localStorage.setItem("PRODUCT TXT", priceTxt);
    // localStorage.setItem("PRODUCT PRICE", price);
    // localStorage.setItem("IMAGE SRC", img);

    updateCartImg();

    if (localStorage.getItem('proN') == null) {
        localStorage.setItem('proN', '[]');
    }

    var old_data = JSON.parse(localStorage.getItem('proN'));
    old_data.push(name);

    localStorage.setItem('proN', JSON.stringify(old_data));

    if (localStorage.getItem('proPT') == null) {
        localStorage.setItem('proPT', '[]');
    }

    var old_data = JSON.parse(localStorage.getItem('proPT'));
    old_data.push(priceTxt);

    localStorage.setItem('proPT', JSON.stringify(old_data));


    if (localStorage.getItem('proP') == null) {
        localStorage.setItem('proP', '[]');
    }

    var old_data = JSON.parse(localStorage.getItem('proP'));
    old_data.push(price);

    localStorage.setItem('proP', JSON.stringify(old_data));

    if (localStorage.getItem('proI') == null) {
        localStorage.setItem('proI', '[]');
    }

    var old_data = JSON.parse(localStorage.getItem('proI'));
    old_data.push(img);

    localStorage.setItem('proI', JSON.stringify(old_data));

    document.getElementById("btn11").style.backgroundColor = 'Red';

    document.getElementById("btn11").value = "ADDED";

    document.getElementById("btn11").disabled = true;

}

function addtoCart12() {

    var name = document.getElementById("ProdName12").textContent;
    var priceTxt = document.getElementById("ProdPrice12").textContent;
    var price = Number(priceTxt.replace(/,|₹| /g, ""));
    var img = document.getElementById("ProImg12").src;

    // localStorage.setItem("PRODUCT NAME", name);
    // localStorage.setItem("PRODUCT TXT", priceTxt);
    // localStorage.setItem("PRODUCT PRICE", price);
    // localStorage.setItem("IMAGE SRC", img);

    updateCartImg();

    if (localStorage.getItem('proN') == null) {
        localStorage.setItem('proN', '[]');
    }

    var old_data = JSON.parse(localStorage.getItem('proN'));
    old_data.push(name);

    localStorage.setItem('proN', JSON.stringify(old_data));

    if (localStorage.getItem('proPT') == null) {
        localStorage.setItem('proPT', '[]');
    }

    var old_data = JSON.parse(localStorage.getItem('proPT'));
    old_data.push(priceTxt);

    localStorage.setItem('proPT', JSON.stringify(old_data));


    if (localStorage.getItem('proP') == null) {
        localStorage.setItem('proP', '[]');
    }

    var old_data = JSON.parse(localStorage.getItem('proP'));
    old_data.push(price);

    localStorage.setItem('proP', JSON.stringify(old_data));

    if (localStorage.getItem('proI') == null) {
        localStorage.setItem('proI', '[]');
    }

    var old_data = JSON.parse(localStorage.getItem('proI'));
    old_data.push(img);

    localStorage.setItem('proI', JSON.stringify(old_data));

    document.getElementById("btn12").style.backgroundColor = 'Red';

    document.getElementById("btn12").value = "ADDED";

    document.getElementById("btn12").disabled = true;

}

function addtoCart13() {

    // alert(name + '\n' + price + '\n' + img);

    var name = document.getElementById("ProdName13").textContent;
    var priceTxt = document.getElementById("ProdPrice13").textContent;
    var price = Number(priceTxt.replace(/,|₹| /g, ""));
    var img = document.getElementById("ProImg13").src;

    // localStorage.setItem("PRODUCT NAME", name);
    // localStorage.setItem("PRODUCT TXT", priceTxt);
    // localStorage.setItem("PRODUCT PRICE", price);
    // localStorage.setItem("IMAGE SRC", img);

    updateCartImg();

    if (localStorage.getItem('proN') == null) {
        localStorage.setItem('proN', '[]');
    }

    var old_data = JSON.parse(localStorage.getItem('proN'));
    old_data.push(name);

    localStorage.setItem('proN', JSON.stringify(old_data));

    if (localStorage.getItem('proPT') == null) {
        localStorage.setItem('proPT', '[]');
    }

    var old_data = JSON.parse(localStorage.getItem('proPT'));
    old_data.push(priceTxt);

    localStorage.setItem('proPT', JSON.stringify(old_data));


    if (localStorage.getItem('proP') == null) {
        localStorage.setItem('proP', '[]');
    }

    var old_data = JSON.parse(localStorage.getItem('proP'));
    old_data.push(price);

    localStorage.setItem('proP', JSON.stringify(old_data));

    if (localStorage.getItem('proI') == null) {
        localStorage.setItem('proI', '[]');
    }

    var old_data = JSON.parse(localStorage.getItem('proI'));
    old_data.push(img);

    localStorage.setItem('proI', JSON.stringify(old_data));

    document.getElementById("btn13").style.backgroundColor = 'Red';

    document.getElementById("btn13").value = "ADDED";

    document.getElementById("btn13").disabled = true;

}

function addtoCart14() {

    var name = document.getElementById("ProdName14").textContent;
    var priceTxt = document.getElementById("ProdPrice14").textContent;
    var price = Number(priceTxt.replace(/,|₹| /g, ""));
    var img = document.getElementById("ProImg14").src;

    // localStorage.setItem("PRODUCT NAME", name);
    // localStorage.setItem("PRODUCT TXT", priceTxt);
    // localStorage.setItem("PRODUCT PRICE", price);
    // localStorage.setItem("IMAGE SRC", img);

    updateCartImg();

    if (localStorage.getItem('proN') == null) {
        localStorage.setItem('proN', '[]');
    }

    var old_data = JSON.parse(localStorage.getItem('proN'));
    old_data.push(name);

    localStorage.setItem('proN', JSON.stringify(old_data));

    if (localStorage.getItem('proP') == null) {
        localStorage.setItem('proP', '[]');
    }

    var old_data = JSON.parse(localStorage.getItem('proP'));
    old_data.push(price);

    localStorage.setItem('proP', JSON.stringify(old_data));

    if (localStorage.getItem('proPT') == null) {
        localStorage.setItem('proPT', '[]');
    }

    var old_data = JSON.parse(localStorage.getItem('proPT'));
    old_data.push(priceTxt);

    localStorage.setItem('proPT', JSON.stringify(old_data));


    if (localStorage.getItem('proI') == null) {
        localStorage.setItem('proI', '[]');
    }

    var old_data = JSON.parse(localStorage.getItem('proI'));
    old_data.push(img);

    localStorage.setItem('proI', JSON.stringify(old_data));

    document.getElementById("btn14").style.backgroundColor = 'Red';

    document.getElementById("btn14").value = "ADDED";

    document.getElementById("btn14").disabled = true;

}

function addtoCart15() {

    // alert(name + '\n' + price + '\n' + img);

    var name = document.getElementById("ProdName15").textContent;
    var priceTxt = document.getElementById("ProdPrice15").textContent;
    var price = Number(priceTxt.replace(/,|₹| /g, ""));
    var img = document.getElementById("ProImg15").src;

    // localStorage.setItem("PRODUCT NAME", name);
    // localStorage.setItem("PRODUCT TXT", priceTxt);
    // localStorage.setItem("PRODUCT PRICE", price);
    // localStorage.setItem("IMAGE SRC", img);

    updateCartImg();

    if (localStorage.getItem('proN') == null) {
        localStorage.setItem('proN', '[]');
    }

    var old_data = JSON.parse(localStorage.getItem('proN'));
    old_data.push(name);

    localStorage.setItem('proN', JSON.stringify(old_data));

    if (localStorage.getItem('proPT') == null) {
        localStorage.setItem('proPT', '[]');
    }

    var old_data = JSON.parse(localStorage.getItem('proPT'));
    old_data.push(priceTxt);

    localStorage.setItem('proPT', JSON.stringify(old_data));


    if (localStorage.getItem('proP') == null) {
        localStorage.setItem('proP', '[]');
    }

    var old_data = JSON.parse(localStorage.getItem('proP'));
    old_data.push(price);

    localStorage.setItem('proP', JSON.stringify(old_data));

    if (localStorage.getItem('proI') == null) {
        localStorage.setItem('proI', '[]');
    }

    var old_data = JSON.parse(localStorage.getItem('proI'));
    old_data.push(img);

    localStorage.setItem('proI', JSON.stringify(old_data));

    document.getElementById("btn15").style.backgroundColor = 'Red';

    document.getElementById("btn15").value = "ADDED";

    document.getElementById("btn15").disabled = true;

}

function addtoCart16() {

    var name = document.getElementById("ProdName16").textContent;
    var priceTxt = document.getElementById("ProdPrice16").textContent;
    var price = Number(priceTxt.replace(/,|₹| /g, ""));
    var img = document.getElementById("ProImg16").src;

    // localStorage.setItem("PRODUCT NAME", name);
    // localStorage.setItem("PRODUCT TXT", priceTxt);
    // localStorage.setItem("PRODUCT PRICE", price);
    // localStorage.setItem("IMAGE SRC", img);

    updateCartImg();

    if (localStorage.getItem('proN') == null) {
        localStorage.setItem('proN', '[]');
    }

    var old_data = JSON.parse(localStorage.getItem('proN'));
    old_data.push(name);

    localStorage.setItem('proN', JSON.stringify(old_data));

    if (localStorage.getItem('proPT') == null) {
        localStorage.setItem('proPT', '[]');
    }

    var old_data = JSON.parse(localStorage.getItem('proPT'));
    old_data.push(priceTxt);

    localStorage.setItem('proPT', JSON.stringify(old_data));


    if (localStorage.getItem('proP') == null) {
        localStorage.setItem('proP', '[]');
    }

    var old_data = JSON.parse(localStorage.getItem('proP'));
    old_data.push(price);

    localStorage.setItem('proP', JSON.stringify(old_data));

    if (localStorage.getItem('proI') == null) {
        localStorage.setItem('proI', '[]');
    }

    var old_data = JSON.parse(localStorage.getItem('proI'));
    old_data.push(img);

    localStorage.setItem('proI', JSON.stringify(old_data));

    document.getElementById("btn16").style.backgroundColor = 'Red';

    document.getElementById("btn16").value = "ADDED";

    document.getElementById("btn16").disabled = true;

}

function updateCartImg() {
    document.getElementById("CartNew").src = "Assets/Background/Shopping-bag-blue-icon-add.png";
}