function login() {
    const Uname = document.getElementById('userid').value;
    const Upass = document.getElementById('password').value;

    if (Uname != null && Upass == "VoCart@999") {
        // document.getElementById('error_msg').innerHTML = ('Login....Successful.....!!');
        location.href = "home.html";
        localStorage.setItem('UserId', Uname);

        localStorage.setItem('LogOut', Uname);


        // window.open("home.html");
    } else if (Uname == "558" && Upass == "558") {

        location.href = "home.html";
        localStorage.setItem('Likhi', 'Likhith Sai Vekop');

    } else {
        document.getElementById('error_msg').innerHTML = ('User Id or Password Incorrect....!!');
    }

}

window.addEventListener('load', (event) => {


    const Lout = localStorage.getItem("LogOut");


    if (Lout != null) {
        document.getElementById("error_msg").innerHTML = (Lout + ", You've been logged out.....!!");
    }

    localStorage.clear();

});