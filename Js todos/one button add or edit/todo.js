var arry = [
    { id: 1, name: "jadav" },
    { id: 2, name: "ravi" },
    { id: 3, name: "bhuro" }
];

var inp_tag = document.getElementById("inp");
var div = document.getElementById("printdata");

function showdata() {
    var h = `<table border="1">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>`;

    arry.map((v) => {
        h += `
            <tr>
                <td>${v.id}</td>
                <td>${v.name}</td>
                <td>
                    <button onclick="hendleedit(${v.id})">edit</button>
                    <button onclick="hendledelete(${v.id})">delete</button>
                </td>
            </tr>`;
    });

    h += `</tbody></table>`;
    div.innerHTML = h;
}

showdata();

let nextId = arry.length + 1;

function hendletodos() {

    var x = parseInt(inp_tag.getAttribute("data")); // Get the data attribute as integer

    if (x) {

        arry = arry.map((v) => {

            if (v.id === x) {
                return { ...v, name: inp_tag.value }
            }

            else {
                return v
            }

        })
    }

    else {

        // Add new item
        arry.push({ id: nextId++, name: inp_tag.value });
    }

    inp_tag.removeAttribute("data"); // Clear data attribute

    inp_tag.value = ""; // Clear input field

    showdata(); // Update table
}

function hendleedit(eid) {

    let item = arry.find((v) => v.id === eid);

    if (item) {

        inp_tag.setAttribute("data", item.id); // Set data attribute for edit
        inp_tag.value = item.name; // Populate input field with current name
    }
}

function hendledelete(dlt) {

    arry = arry.filter((v) => v.id !== dlt);
    
    showdata(); // Update table
}
