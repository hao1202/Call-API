function getFullName() {
    fetch('http://localhost:3000/students')
        .then(res => res.json())
        .then(students => {
            let responseHTML = '';
            for (let key in students) {
                responseHTML += `<li>${students[key].fullname}</li>`;
            }
            document.getElementById("list-students").innerHTML = responseHTML;
        })
        .catch(e => console.log(e))
}

document.getElementById('btn-getFullName').onclick = getFullName;
