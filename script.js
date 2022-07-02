document.getElementById('btn').onclick = function(){
    let username = document.getElementById('username').value
    let userpas = document.getElementById('userpas').value

    if (username == 'LADIL' && userpas == '7022791')
        window.open('mainpage.html')
}