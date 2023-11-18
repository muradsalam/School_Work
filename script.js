let user = prompt('Login: ');
let parol = prompt('Password: ');
let netice

if (user == 'admin' && parol == 123456) {
    netice = 'Hello Admin';
} else if ( user == 'vahid' && parol == 201133) {
    netice = 'Hello Vahid!';
}
document.getElementById('murad').innerHTML = netice;