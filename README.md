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
+ Chức năng thêm xoá sửa xem đối với các tài khoản
+ Chức năng cấu hình số trang cho toàn bộ tài khoản user
+ Chức năng thêm xoá sửa các vị trí đặt các máy in trong khuôn viên nhà trường
+ Chức năng xem thêm xoá sửa các giao dịch in ấn của toàn bộ hệ thống
+ Chức năng thống kê và xuất file xlsx cho các giao dịch in ấn trong khoảng thời gian
+ Chức năng đăng nhập đối với admin và user
+ Sơ bộ về chức năng in cho user (chưa hoàn thiện)


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
    + Thay đổi `user` và `password` trong [`config`](./server/src/config/db/credentials.json) theo như username và password của mình
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

Chủ biên: [Lê Hoàng Phúc](https://github.com/PhucLe03)

Biên tập viên kiêm Tester: [Nguyễn Trang Sỹ Lâm](https://github.com/silam741852963)

Back-end: [Lê Nguyễn Phước Lộc](https://github.com/i-am-page)

Front-end: [Nguyễn Duy](https://github.com/duynguyen38), [Lê Nguyễn Phước Lộc](https://github.com/i-am-page)

Viết báo cáo: [Phạm Thanh Tùng](https://github.com/pthanhtung412), [Đặng Thanh Huy](https://github.com/ThanhHuy1006), [Nguyễn Hoàng Khôi Nguyên](https://github.com/DracNguyen)
