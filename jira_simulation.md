# Phần B: Quản lý lỗi bằng Jira (Mô phỏng doanh nghiệp)

## 1. Cấu hình dự án
**Tên dự án:** Student Management System (SMS)
**Loại issue:** Bug (Lỗi), Task (Nhiệm vụ), Story (Kịch bản người dùng)
**Các trường tùy chỉnh (Custom Fields):**
- **Severity (Mức độ nghiêm trọng):** Blocker (Chặn đứng), High (Cao), Medium (Trung bình), Low (Thấp)
- **Priority (Độ ưu tiên):** P1 (Cao nhất) đến P4 (Thấp nhất)
- **Test Environment (Môi trường test):** Windows 11 / Chrome v122

## 2. Quy trình xử lý lỗi (Workflow)
`New` (Mới) -> `Open` (Mở) -> `In Progress` (Đang xử lý) -> `Fixed` (Đã sửa) -> `QA Verify` (QA xác nhận) -> `Done` (Hoàn thành)

## 3. Danh sách lỗi chi tiết (8 lỗi)

| Mã lỗi | Tóm tắt lỗi | Mức độ | Ưu tiên | Trạng thái |
|--------|-------------|---------|---------|------------|
| SMS-01 | [BLOCKER] Lỗi logic đăng nhập Admin | Blocker | P1 | Open |
| SMS-02 | [CRITICAL] Thao tác xóa gây treo UI | Blocker | P1 | New |
| SMS-03 | Nút Thêm sinh viên không lưu vào DB | High | P2 | In Progress |
| SMS-04 | Tìm kiếm tên phân biệt chữ hoa/thường | Medium | P3 | Open |
| SMS-05 | Thiếu kiểm tra định dạng email | Medium | P3 | Fixed |
| SMS-06 | Thanh điều hướng đè lên nội dung trên mobile | Medium | P4 | New |
| SMS-07 | Hiển thị ID Database thô trên hồ sơ | Low | P4 | QA Verify |
| SMS-08 | Thống kê "Doanh thu" trên Dashboard bị tĩnh | Low | P4 | Done |

## 4. Phân tích lỗi nghiêm trọng

### [SMS-01] Lỗi logic đăng nhập Admin (Blocker)
- **Vấn đề:** Mã nguồn tại `app.js` cố tình kiểm tra `user === "admin"` và trả về lỗi bất kể mật khẩu đúng hay sai.
- **Tác động:** Quản trị viên (người dùng quan trọng nhất) không thể vào hệ thống.
- **Nguyên nhân gốc:** Sai sót logic trong hàm `login()`.

### [SMS-02] Thao tác xóa gây treo UI (Blocker)
- **Vấn đề:** Một vòng lặp `while` với 1 tỷ lần lặp được kích hoạt khi xóa, chặn đứng luồng xử lý chính của trình duyệt.
- **Tác động:** Trải nghiệm người dùng cực kỳ kém; người dùng sẽ tưởng ứng dụng bị hỏng hoặc phải tắt trình duyệt.
- **Nguyên nhân gốc:** Vòng lặp nặng không cần thiết trong hàm `deleteStudent()`.

## 5. Báo cáo & Thống kê

### Lỗi theo Trạng thái (Bug by Status)
- **Mới/Mở (New/Open):** 25% (2 lỗi)
- **Đang xử lý (In Progress):** 12.5% (1 lỗi)
- **Đã sửa (Fixed):** 12.5% (1 lỗi)
- **Đang kiểm lại (QA Verify):** 25% (2 lỗi)
- **Hoàn thành (Done):** 25% (2 lỗi)
  
<img width="801" height="770" alt="image" src="https://github.com/user-attachments/assets/d9298d01-498d-47be-812f-526f3618df49" />

### Lỗi theo Độ ưu tiên (Bug by Priority)
- **P1 (Cao nhất):** 25% (2 lỗi)
- **P2 (Cao):** 12.5% (1 lỗi)
- **P3 (Trung bình):** 25% (2 lỗi)
- **P4 (Thấp):** 37.5% (3 lỗi)

<img width="802" height="725" alt="image" src="https://github.com/user-attachments/assets/ce1d7639-716a-41f3-95c5-567d0e7c6539" />

### Xu hướng lỗi (Bug Trend - 7 ngày qua)
- **Ngày 1:** Phát hiện 4 lỗi
- **Ngày 3:** Phát hiện 3 lỗi
- **Ngày 5:** Phát hiện 1 lỗi
- **Nhận xét:** Số lượng lỗi mới đang giảm dần, hệ thống đang dần ổn định.

<img width="799" height="736" alt="image" src="https://github.com/user-attachments/assets/e4329d95-5f8b-4292-ac81-22c973f0eb9d" />
