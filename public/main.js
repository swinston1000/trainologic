var contacts = [{
        id: 1,
        name: "Friends",
        type: "Group",
        contacts: [{
            id: 2,
            name: "Udi",
            type: "Contact"
        }, {
            id: 3,
            name: "Tommy",
            type: "Contact"
        }, {
            id: 6,
            name: "Old Friends",
            type: "Group",
            contacts: [{
                id: 7,
                name: "Itay",
                type: "Contact"
            }]
        }]
    },
    {
        id: 4,
        name: "Family",
        type: "Group",
        contacts: [{
            id: 5,
            name: "Roni",
            type: "Contact"
        }]
    },
    {
        id: 8,
        name: "Ori",
        type: "Contact"
    }
];


function renderArray(arr, parent) {


    var list = document.getElementById(parent);

    if (list.hasAttribute('open')) {
        while (list.children.length > 1) {
            list.removeChild(list.lastChild);
        }
        return true;
    }

    arr.forEach(function(element) {

        var item = document.createElement('div');
        var text = document.createTextNode(element.name);
        item.id = element.id;
        item.appendChild(text);
        list.append(item);

        if (element.type === "Group") {
            item.innerHTML = "<span>" + item.innerHTML + "</span>";
            item.onclick = function(e) {
                e.stopPropagation();
                var isOpen = renderArray(element.contacts, element.id)
                if(isOpen){
                    item.removeAttribute('open');
                } else {
                    item.setAttribute('open', true);
                } 
            };
         }
        else{
             item.innerHTML = "<p>" + item.innerHTML + "</p>";
        }


    })

}

renderArray(contacts, 'contact-list')