function displayFullName() {
    // Tạo đối tượng
    const httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => {
        if (httpRequest.readyState === 4 && httpRequest.status === 200) {
            const response = JSON.parse(httpRequest.responseText);
            let responseHTML = '';
            for(let key in response) {
                responseHTML += `<li>${response[key].fullname}</li>`;
            }
            document.getElementById("list-students").innerHTML = responseHTML;
        }
    }
    // Tạo yêu cầu
    // Ở đây fake API bằng json-server
    httpRequest.open('GET' , 'http://localhost:3000/students' ,true);
    // Gửi yêu cầu
    httpRequest.send();
}

document.getElementById('btn-getFullName').onclick = displayFullName;
