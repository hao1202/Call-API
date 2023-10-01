/*
    Đồng bộ (synchronous) , Bất đồng bộ (Asynchronous)

    - Đồng bộ thì code sẽ được chạy theo trình tự viết sẵn (từ trên xuống dưới) ,
    tại một thời điểm chỉ thực thi được 1 dòng lệnh duy nhất , khi một function
    dựa trên kết quả của 1 function khác thì nó phải đợi cho đến khi nó trả về
    kết quả thì nó mới thực hiện tiếp

    - Bất đồng bộ thì ta có thể di chuyển sang các cái tác vụ khác để thực thi
    mà không phải trờ cho tác vụ hiện tại thực thi xong
    => Giúp cho chúng ta thực hiện nhiều tác vụ đồng thời , làm được nhiều việc
    hơn trong một khoảng thời gian

    +> Có 3 cách để xử lí bất đồng bộ trong JS
    - callback
    - promise
    - async / await

    +> Có 2 loại bất đồng bộ 
    - Browser API / Web API => setTimeout , setInterval , click , scroll , ...
    - Promise là đối tượng JS để thực hiện bất đồng bộ

*/
/*
    callback là một cách hiệu quả khi muốn trì hoãn một function 
    nào đó và chờ cho đến khi một function khác thực thi và trả về kết quả
*/

// callAPI
function httpGetAsync(theUrl, callback) {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = () => {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            callback(xmlHttp);
        }
    };
    xmlHttp.open("GET", theUrl, true);
    xmlHttp.send(null);
}
httpGetAsync('https://picsum.photos/200/300', (data) => {
    console.log(data);
});
/*
    Nhưng dùng callback lại xảy ra một trường hơp đó là callback hell
    => Tạo ra những đoạn code nồng vào nhau rất khó để bảo trì sau này
    Để xử lí vấn đề này người ta dùng promise
*/
httpGetAsync('https://picsum.photos/200/300', (data) => {
    document.getElementById('img_1').setAttribute('src', data.responseURL);
    httpGetAsync('https://picsum.photos/200/300', (data) => {
        document.getElementById('img_2').setAttribute('src', data.responseURL);
        httpGetAsync('https://picsum.photos/200/300', (data) => {
            document.getElementById('img_3').setAttribute('src', data.responseURL);
        });
    });
})




// Khởi tạo promise bằng class có sẵn Promise
const promise = new Promise(
    /*
        chuyền vào executor và nó nhận vào 2 tham số 
        - resolve : là hàm sẽ được gọi khi promise hoàn thành
        - reject : là hàm được gọi khi lỗi xảy ra
    */
    (resolve, reject) => {

    }
);

