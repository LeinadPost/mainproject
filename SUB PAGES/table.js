let users =['ben', 'john', 'sarah'];
let age = [21, 43, 27];
let email = ['baen@yahoo.com', 'john@gmail.com', 'sarah@gmail.com'];



const text = document.getElementById('text')
const table = '<table><thead><tr><th>ID</th><th>Name</th><th>Age</th><th>Email</th></tr></thead><tbody>'


for(let i = 0; i< users.length; i++) {
    table += '<tr><td>'+(i+1)+'</td><td>'+ users[i] +'</td><td>' + age[i] +'</td><td>' + email[i] + '</td></tr>'
}

table+= '</tbody></table>'

text.innerHTML = table;