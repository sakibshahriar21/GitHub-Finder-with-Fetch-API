let searchBtn = document.querySelector('#searchBtn');
let searchUser = document.querySelector('#searchUser');

searchBtn.addEventListener('click', (e) => {
    let userText = searchUser.value;
    if (userText != '') {
        //alert(userText);
        //Now Using fetch API
        fetch(`https://api.github.com/users/${userText}`)
            .then(result => result.json())
            .then(data => {
                //console.log(data);
                if(data.message == 'Not Found') {
                    //Show Alert
                } else {
                    //Show Profile
                }
            })
    } else {
        //Clear Profile
    }
});