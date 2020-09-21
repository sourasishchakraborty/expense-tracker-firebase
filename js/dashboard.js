if(localStorage.getItem("name") === null){
    window.location.href = "home.html";
}


document.querySelector('#user_image').setAttribute('src',localStorage.getItem('picture'));
document.querySelector('#user_name').textContent = localStorage.getItem('name');

document.querySelector('#logout').addEventListener('click',function (){
    //alert("hello");

    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        localStorage.removeItem("name");
        localStorage.removeItem("picture");
        localStorage.removeItem("userId");

        window.location.href = "home.html";
    }).catch(function(error) {
        // An error happened.
        alert("Some error occurred!")
    });
})