let fname = document.getElementById('name');
var about = document.querySelector('h5');
var addFriend = document.querySelector('#add');
var remove = document.querySelector('#remove');

console.log(fname.textContent);

addFriend.addEventListener('click',()=>{
    
    if(addFriend.innerText == "Add Friend"){
        addFriend.innerText = "Unfriend";
        about.innerText = "Friend";
        about.style.color = "green";
        alert(`Now ${fname.innerText} is your friend`);
    }else{
        addFriend.innerText = "Add Friend";
        about.innerText = "Stranger";
        about.style.color = "red";
    }
});

