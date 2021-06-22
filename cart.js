window.addEventListener('load', () => {
    const proprice = localStorage.getItem('proP');
    const proP = JSON.parse(proprice);

    const sum = proP.reduce(function(a, b) {
        return a + b;
    }, 0);

    console.log(sum);
    localStorage.setItem('SubTotal', sum);

    var x;
    x = sum + 100;


    document.getElementById('Sub-total').innerHTML = ('₹ ' + sum);
    document.getElementById('Total').innerHTML = ('₹ ' + x);
    document.getElementById('Final-price').innerHTML = ('₹ ' + x);
    document.getElementById('item-p-total').innerHTML = ('₹ ' + proprice);

    couponapply();

});


const proname = localStorage.getItem('proN');
const proimg = localStorage.getItem('proI');
const protxt = localStorage.getItem('proPT');
const proprice = localStorage.getItem('proP');

const proN = JSON.parse(proname);
const proI = JSON.parse(proimg);
const proPT = JSON.parse(protxt);
const proP = JSON.parse(proprice);

let ul, li;

const repeatRow = (i) => {

    ul = document.getElementById('ul');

    li = document.createElement('li');

    document.getElementById("EmptyCart").style.visibility = "hidden";
    document.getElementById("tableHead").style.visibility = "visible";


    li.innerHTML = `
    
        <table>
            <tr>
                <td><img src= ${proI[i]} width="100px"><br><button onClick="remove(${i})" class="btn1">Remove</button></td>
                <td><p>${proN[i]}</p></td>
                <td><p>${proPT[i]}</p></td>
            </tr>
        </table><br>
    `;

    ul.appendChild(li);

}

for (let i = 0; i < proN.length; i++)
    repeatRow(i);

// });



// var x, y;
// y = Number(proP)
// x = y + 100;


// document.getElementById('Sub-total').innerHTML = ('₹ ' + sum);
// document.getElementById('Total').innerHTML = ('₹ ' + x);
// document.getElementById('Final-price').innerHTML = ('₹ ' + x);
// document.getElementById('item-p-total').innerHTML = ('₹ ' + proprice);


function couponapply() {
    var coup = document.getElementById('coupon-c').value;
    var couplower = coup.toLowerCase();

    if (couplower == "likhi999") {

        document.getElementById('Final-price').innerHTML = ('FREE');
        alert("Coupon Applied...!!")

    } else {
        alert(bold("Invalid Coupon.....Try with valid Coupon....!!"));
    }

}

function BuyNow() {
    alert("Thanks for shopping with us, Due to this pandemic we are unable to dispatch your product");

    window.location.reload();

    localStorage.clear();
}



const removeButton = document.getElementsByClassName('btn1');

function remove(i) {
    // console.log("done", i);
    // console.log(document.getElementById('ul').getElementsByTagName('li')[i]);
    document.getElementById('ul').getElementsByTagName('li')[i].innerHTML = "";

    const Tot = localStorage.getItem("SubTotal");

    const subTotal = (Tot - proP[i]);

    console.log(subTotal);

    if (subTotal == 0) {
        localStorage.clear();
    }

    // console.log(proN[i], proP[i]);

    localStorage.setItem('SubTotal', subTotal);

    var x;
    x = subTotal + 100;


    document.getElementById('Sub-total').innerHTML = ('₹ ' + subTotal);
    document.getElementById('Total').innerHTML = ('₹ ' + x);
    document.getElementById('Final-price').innerHTML = ('₹ ' + x);
    document.getElementById('item-p-total').innerHTML = ('₹ ' + proprice);


    // localStorage.setItem(proN[i], 'hello');




}