const contacts = [
    { name: 'Alvin', number: '6466422432'} ,
    { name: 'Crystal', number: "9492324045"} ,
]

function printContacts() {
    let html = "<ul>";

    contacts.forEach(element => {
        html += "<li>" + element.name + "</li>";    
    });
    html += "</ul>";
    document.body.innerHTML = html;
}

printContacts();

function addContact(contact, callback) {
    setTimeout(() => {
        contacts.push(contact);
        callback();
    }
    , 2000);
}

addContact({name:"Lambert", number:"999"}, printContacts);