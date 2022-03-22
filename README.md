# TestN1

## NodeJS - Fresher to Middle

### Database schema design

- Các bảng thu được sau khi phân tích

  - LoaiCongTy
  - CongTy
  - PhongBan
  - Quyen
  - NguoiDung
  - PhieuDeNghi
  - SanPham
  - MaGiamGia
  - HoaDon
  - ChiTietHoaDon

- Chi tiết và giải thích từng bảng

  - Bảng LoaiCongTy
    | Tên trường | Kiểu dữ liệu | Mô tả |
    | :------------: | :----------: | :-----------------------------------------: |
    | IDLoaiCongTy | int | Khoá chính |
    | TenLoaiCongTy | string | Tên loại công ty, default(Merchant, Audit) |

  - Bảng CongTy
    | Tên trường | Kiểu dữ liệu | Mô tả |
    | :------------: | :----------: | :-----------------------------------------: |
    | IDCongTy | int | Khoá chính |
    | TenCongTy | string | Tên loại công ty, default(Merchant, Audit) |
    | IDLoaiCongTy | int | Khoá ngoại tham chiếu từ bảng LoaiCongTy|

  - Bảng PhongBan
    | Tên trường | Kiểu dữ liệu | Mô tả |
    | :------------: | :----------: | :-----------------------------------------: |
    | IDPhongBan | int | Khoá chính |
    | TenPhongBan | string | Tên phòng ban |
    | IDCongTy | int | Khoá ngoại tham chiếu từ bảng CongTy|

  - Quyen
    | Tên trường | Kiểu dữ liệu | Mô tả |
    | :------------: | :----------: | :-----------------------------------------: |
    | IDQuyen | int | Khoá chính |
    | TenQuyen | string | Tên quyền, default(staff, company manager, department manager,... ) |
    | MoTaQuyen | string | Mô tả quyền, phân quyền người dùng đó thực hiện được những chức năng gì|

  - NguoiDung
    | Tên trường | Kiểu dữ liệu | Mô tả |
    | :------------: | :----------: | :-----------------------------------------: |
    | IDNguoiDung | int | Khoá chính |
    | Username | string | Tên đăng nhập |
    | Password | string | Mật khẩu|
    | IDQuyen | int | Khoá ngoại tham chiếu từ bảng Quyen, dựa vào IDQuyen để nhận biết người dùng đó thực hiện được những chức năng gì|
    | IDPhongBan | int | Khoá ngoại tham chiếu từ bảng PhongBan|
    Ngoài ra người dùng còn có thêm một số trường cơ bản như: tên, tuổi, giới tính, địa chỉ,....

  - MaGiamGia
    | Tên trường | Kiểu dữ liệu | Mô tả |
    | :------------: | :----------: | :-----------------------------------------: |
    | IDMaGiamGia | int | Khoá chính |
    | GiamDuocGia | double | Giá được giảm, áp dụng giảm theo phần trăm hoặc giảm bao nhiêu tiền cho 1 sản phẩm|

  - SanPham
    | Tên trường | Kiểu dữ liệu | Mô tả |
    | :------------: | :----------: | -----------------------------------------: |
    | IDSanPham | int | Khoá chính |
    | TenSanPham | string | Tên sản phẩm |
    | Gia | string | Giá sản phẩm|
    | IDCongTyCungCap | int | Khoá ngoại tham chiếu từ bảng CongTy, để nhận biết sản phẩm đó thuộc công ty nào|
    | IDMaGiamGia | int | Khoá ngoại tham chiếu từ bảng MaGiamGia|

  - PhieuDeNghi
    | Tên trường | Kiểu dữ liệu | Mô tả |
    | :------------:| :----------: | :-----------------------------------------: |
    | IDPhieuDeNghi | int | Khoá chính |
    | IDNhanVienDeNghi | int | Khoá ngoại tham chiếu từ bảng NguoiDung, nhân viên nào đề nghị mua món đồ |
    | IDSanPham | string | Khoá ngoại tham chiếu từ bảng SanPham, sản phẩm được nhân viên yêu cầu mua |
    | SoLuongSanPham | int | Số lượng sản phẩm mà nhân viên yêu cầu mua|
    | NgayLapPhieuDeNghi | datetime | Ngày lập phiếu đề nghị, có thể dùng timestamp|
    | TrangThai | boolean | Trạng thái phiếu đề nghị, default (false) là chưa được duyệt, nếu được quản lý phòng bàn hoặc giám đốc duyệt thì sẽ chuyển trạng thái thành true|
    | NgayDuyet | datetime | Ngày duyệt đề nghị, nếu yêu cầu chưa được duyệt thì trường này sẽ là null|
    | GhiChu | string | Mô tả, ghi chú lý do|

    - HoaDon
      | Tên trường | Kiểu dữ liệu | Mô tả |
      | :------------: | :----------: | :-----------------------------------------: |
      | IDHoaDon | int | Khoá chính |
      | NgayLapHoaDon | datetime | Ngày lập hoá đơn|
      | TongTien | double | Tổng tiền mua sản phẩm từ công ty khác|
      | IDCongTyCungCap | string | Khoá ngoại tham chiếu từ bảng CongTy, hoá đơn mua sản phẩm từ công ty nào|

    - ChiTietHoaDon
      | Tên trường | Kiểu dữ liệu | Mô tả |
      | :------------: | :----------: | :-----------------------------------------: |
      | IDHoaDon | int | Khoá ngoại tham chiếu từ bảng HoaDon |
      | IDSanPham | int | Khoá ngoại tham chiếu từ bảng SanPham|
      | SoLuong | int | Số lượng sản phẩm đã mua|
      | Gia | double | Giá của sản phẩm đó|

  - ERD Tiếng Việt
    ![ERD_VI](https://res.cloudinary.com/du0zjoe91/image/upload/v1647936266/ERD_VI_komftv.png)

  - ERD Tiếng Anh
    ![ERD_EN](https://res.cloudinary.com/du0zjoe91/image/upload/v1647936278/ERD_EN_nt5ndr.png)
