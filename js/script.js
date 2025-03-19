var res, getUsers, table, thead, tbody, trHead, trBody, idHead, nameHead, emailHead, actionHead, delHead, idRes, nameRes, emailRes, action, del, deletedUser, deletedText, user, h3, p
table = document.getElementById("users")
thead = document.getElementById("thead")
tbody = document.getElementById("tbody")
user = document.getElementById("user")
getUsers = document.getElementById("getUsers")
trHead = document.createElement("tr")
idHead = document.createElement("th")
nameHead = document.createElement("th")
emailHead = document.createElement("th")
actionHead = document.createElement("th")
delHead = document.createElement("th")
h3 = document.createElement("h3")
p = document.createElement("p")


function getUser(id) {
    user.style.display = "block"
    user.appendChild(h3)
    user.appendChild(p)
    h3.innerHTML = `User Details`
    p.innerHTML = `<span>Username:</span> ${res[id].username}<br><span>Name:</span> ${res[id].name}<br><span>Email:</span> ${res[id].email}<br><span>Website:</span> ${res[id].website}<br><span>Address:</span> ${res[id].address.street}<br><span>Phone:</span> ${res[id].phone}<br><span>Company Name:</span> ${res[id].company.name}`
}



function deleteUser(id) {
    deletedText = document.getElementById("deleted")
    deletedUser = document.getElementById(`user-0${id}`)
    deletedUser.remove()
    user.style.display = "none"
    if (tbody.childNodes.length < 2) {
        table.remove()
        user.remove()
        deletedText.innerText = `Table is deleted`
    }
}



getUsers.addEventListener("click", function () {
    thead.appendChild(trHead)
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users")
    xhr.send("")
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                res = JSON.parse(xhr.response)
                trHead.append(idHead, nameHead, emailHead, actionHead, delHead)
                idHead.innerText = "ID"
                nameHead.innerText = "Name"
                emailHead.innerText = "Email"
                actionHead.innerText = "Actions"
                delHead.innerText = "Delete"
                for (var i = 0; i < res.length; i++) {
                    trBody = document.createElement("tr")
                    idRes = document.createElement("td")
                    nameRes = document.createElement("td")
                    emailRes = document.createElement("td")
                    action = document.createElement("td")
                    del = document.createElement("td")
                    trBody.setAttribute("id", `user-0${i + 1}`)
                    tbody.appendChild(trBody) * i
                    trBody.appendChild(idRes)
                    trBody.appendChild(nameRes)
                    trBody.appendChild(emailRes)
                    trBody.appendChild(action)
                    trBody.appendChild(del)
                    idRes.innerText = res[i].id
                    nameRes.innerText = res[i].name
                    emailRes.innerText = res[i].email
                    action.innerHTML = `<button onclick="getUser(${i})" type="button" class="getUserDetails">View Details</button>`
                    del.innerHTML = `<button onclick="deleteUser(${i + 1})" type="button" class="deleteUser">Delete User</button>`
                }
            }
        }
    }
})

