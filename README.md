# BTL CNPM - Smart Printer

Smart Printer là phần mềm quản lý máy in được phát triển như một phần của dự án trường đại học nhằm hỗ trợ dịch vụ in ấn cho sinh viên trong khuôn viên trường.

## Mô tả

Hệ thống cung cấp các chức năng quản lý các tác vụ in, theo dõi lịch sử in và quản lý cấu hình máy in. Nó hoạt động bằng kiến trúc ba lớp với Vue, Bootstrap cho giao diện người dùng, Node.js và Express.js cho phần backend và MySQL cho cơ sở dữ liệu.

## Các chức năng

Ở đây chúng tôi chỉ phát triển mô-đun quản lí máy in cho SPSO gồm những chức năng sau:

+ Xem thông tin và trạng thái các máy in có trên hệ thống
+ Thêm máy in vào hệ thống
+ Chỉnh sửa thông tin và trạng thái các máy in trên hệ thống
+ Xóa máy in khỏi hệ thống

## Cài đặt

+ Clone hoặc tải file từ repository này
```c
git clone https://github.com/PhucLe03/BTL-CNPM
```
+ Truy vấn vào thư mục của project
```c
cd BTL-CNPM
```
+ Khởi tạo cở sở dữ liệu 
    + Tạo database từ các câu lệnh trong file [`sql_cnpm 2.sql`](./sql_cnpm%202.sql)
    + Thay đổi `user` và `password` trong [`config`](./server/src/config/db/credentials.json)
+ Sử dụng npm để cài đặt các dependencies
    + Đối với client
    ```c
    cd client
    npm i
    ```
    + Đối với server
    ```c
    cd server
    npm i
    ```
+ Khởi động ứng dụng
    + Đối với client
    ```c
    npm run dev
    ```
    + Đối với server
    ```c
    npm run start
    ```

## Người đóng góp

[Lê Hoàng Phúc](https://github.com/PhucLe03)

[Nguyễn Trang Sỹ Lâm](https://github.com/silam741852963)

[Lê Nguyễn Phước Lộc](https://github.com/i-am-page)

[Nguyễn Duy](https://github.com/duynguyen38)