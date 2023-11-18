let user = prompt('Login: ');
let parol = prompt('Password: ');
let netice

if (user == 'admin' && parol == 123456) {
    netice = 'Hello Admin';
} else if ( user == 'vahid' && parol == 201133) {
    netice = 'Hello Vahid!';
} else {
    netice = 'You are not a hacker. Because you do not know how to hack. '
}
document.getElementById('murad').innerHTML = netice;