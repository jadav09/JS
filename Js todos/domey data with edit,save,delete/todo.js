
var arry = [
    {
        id: "1",
        name: "jadav"
    },
    {
        id: "2",
        name: "ravi"
    },
    {
        id: "3",
        name: "bhuro"
    }
]

var inp_tag = document.getElementById("inp")
var div = document.getElementById("printdata")


function showdata() {
    var h = `<table border="1">
<thead>
<tr>
<th>id</th>
<th>name</th>
<th>action</th>
</tr>
</thead>`

    arry.map((v) => (

        h = h + `
        <tbody>
        <tr>
        <td>${v.id}</td>
        <td>${v.name}</td>
        <td>
        <button onclick="hendleedit(${v.id})">edit</button>
        <button onclick="hendledelete(${v.id})">delete</button>
        </td>
        </tr>
        </tbody>
        `

    ))

    div.innerHTML = h + `</table>`
}

showdata()



ids = arry.length + 1

let hendletodos = () => {


    data = { id: ids++, name: inp_tag.value }
    console.log(data)

    arry.push(data)

    console.log(arry)

    showdata()

}


document.getElementById("editbtn").style.display = "none"

let hendleedit = (eid) => {


    let findid = arry.find((v) => { return v.id == eid })

    inp_tag.setAttribute("data", findid.id)



    inp_tag.value = findid.name

    document.getElementById("addbtn").style.display = "none"
    document.getElementById("editbtn").style.display = ""


}

var henldeedittodos = () => {


    var x = inp_tag.getAttribute("data")

    arry = arry.map((v) => {

        if (v.id == x) {

            return { ...v, id: x, name: inp_tag.value }
        }

        return v

    })

    showdata()
    document.getElementById("addbtn").style.display = ""
    document.getElementById("editbtn").style.display = "none"

    inp_tag.value = ""




}


let hendledelete = (dlt) => {

    arry = arry.filter((v) => {

        return v.id != dlt
    })

    showdata()


}




