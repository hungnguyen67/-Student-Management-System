# Phần A: Quản lý lỗi bằng GitHub Issues (Mô phỏng)

## Lỗi #1: Đăng nhập thất bại cho tài khoản 'admin' dù đúng mật khẩu
**Labels:** `bug`, `critical`
**Người xử lý:** Developer

**Tóm tắt**
Người dùng không thể đăng nhập bằng tài khoản 'admin' ngay cả khi cung cấp mật khẩu chính xác.

**Các bước tái hiện**
1. Truy cập trang đăng nhập SMS.
2. Nhập `admin` vào ô Tên đăng nhập.
3. Nhập `123456` vào ô Mật khẩu.
4. Nhấn 'Đăng nhập'.

**Kết quả mong đợi**
Người dùng được chuyển hướng đến Trang quản trị (Dashboard).

**Kết quả thực tế**
Hiển thị thông báo lỗi "Tên đăng nhập hoặc mật khẩu không đúng (Lỗi logic nội bộ)".

**Mức độ nghiêm trọng**
Nghiêm trọng (Critical)

---

## Lỗi #2: Nút "Lưu" không lưu dữ liệu sinh viên mới
**Labels:** `bug`, `major`
**Người xử lý:** Developer

**Tóm tắt**
Khi thêm sinh viên mới, nhấn "Lưu" hiện thông báo thành công nhưng sinh viên mới không xuất hiện trong danh sách.

**Các bước tái hiện**
1. Nhấn nút "+ Thêm sinh viên".
2. Điền đầy đủ Họ tên, Email, và Lớp.
3. Nhấn "Lưu".
4. Kiểm tra bảng danh sách sinh viên.

**Kết quả mong đợi**
Sinh viên mới phải được thêm vào cuối bảng.

**Kết quả thực tế**
Bảng không thay đổi; dữ liệu bị mất sau khi đóng modal.

**Mức độ nghiêm trọng**
Chính (Major)

---

## Lỗi #3: Chức năng tìm kiếm phân biệt chữ hoa/thường
**Labels:** `bug`, `minor`
**Người xử lý:** Developer

**Tóm tắt**
Tìm kiếm sinh viên yêu cầu phải khớp chính xác chữ hoa và chữ thường, gây bất tiện cho người dùng.

**Các bước tái hiện**
1. Tìm kiếm với từ khóa "nguyen".
2. Quan sát kết quả.
3. Tìm kiếm với từ khóa "Nguyen".

**Kết quả mong đợi**
Cả hai trường hợp đều phải tìm thấy "Nguyen Van A".

**Kết quả thực tế**
Kết quả trả về trống khi tìm "nguyen".

**Mức độ nghiêm trọng**
Nhẹ (Minor)

---

## Lỗi #4: Thiếu kiểm tra định dạng email
**Labels:** `bug`, `minor`
**Người xử lý:** Developer

**Tóm tắt**
Hệ thống cho phép lưu sinh viên với chuỗi email không hợp lệ (ví dụ: "abcxyz").

**Các bước tái hiện**
1. Mở form "+ Thêm sinh viên".
2. Nhập tên bất kỳ và email là "test123".
3. Nhấn "Lưu".

**Kết quả mong đợi**
Phải có thông báo lỗi yêu cầu nhập đúng định dạng email.

**Kết quả thực tế**
Sinh viên được "chấp nhận" lưu mà không có cảnh báo nào.

**Mức độ nghiêm trọng**
Nhẹ (Minor)

---

## Lỗi #5: Ứng dụng bị treo khi xóa sinh viên
**Labels:** `bug`, `critical`
**Người xử lý:** Developer

**Tóm tắt**
Nhấn nút "Xóa" khiến toàn bộ tab trình duyệt bị treo, không thể thao tác trong vài giây.

**Các bước tái hiện**
1. Chọn một sinh viên bất kỳ trong danh sách.
2. Nhấn nút "Xóa".
3. Xác nhận xóa.

**Kết quả mong đợi**
Sinh viên được xóa tức thì và giao diện vẫn hoạt động mượt mà.

**Kết quả thực tế**
Trình duyệt bị đơ (biểu tượng quay vòng) trong một thời gian dài trước khi hoàn tất.

**Mức độ nghiêm trọng**
Nghiêm trọng (Critical)
