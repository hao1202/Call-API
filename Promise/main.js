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

