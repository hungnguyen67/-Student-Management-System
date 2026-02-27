# BÁO CÁO THỰC HÀNH TỔNG HỢP: QUẢN LÝ LỖI PHẦN MỀM

## 1. Thông tin chung
- **Dự án:** Hệ thống quản lý sinh viên (SMS)
- **Thành viên:** Nhóm 01
- **Công cụ áp dụng:** GitHub Issues, Jira Software (Giả lập)

## 2. Liên kết tài liệu
- **Mô phỏng GitHub Issues:** [github_issues_sim.md](github_issues_sim.md)
- **Mô phỏng Jira:** [jira_simulation.md](jira_simulation.md)

## 3. Danh sách lỗi tiêu biểu
Chúng tôi đã thực hiện kiểm thử thủ công trên hệ thống SMS và ghi nhận 5 lỗi chính:
1. **Lỗi Đăng nhập Admin:** Không thể đăng nhập bằng quyền admin (Nghiêm trọng).
2. **Lỗi Lưu dữ liệu:** Sinh viên mới thêm không được cập nhật vào danh sách (Lớn).
3. **Lỗi Treo ứng dụng:** Thao tác xóa gây đơ trình duyệt (Nghiêm trọng).
4. **Lỗi Tìm kiếm:** Phân biệt chữ hoa/thường gây khó khăn cho người dùng (Nhẹ).
5. **Lỗi Email:** Cho phép lưu email sai định dạng (Nhẹ).

## 4. Phân tích lỗi nghiêm trọng
| Mã lỗi | Vấn đề | Phân tích chi tiết |
|--------|--------|-------------------|
| SMS-01 | Admin Login Fail | Lỗi logic tại frontend khiến tài khoản 'admin' luôn bị từ chối. Lỗi này chặn đứng mọi quyền quản trị hệ thống. |
| SMS-02 | Delete Crash | Việc xử lý vòng lặp tính toán quá nặng trên luồng chính gây treo UI. Làm hỏng trải nghiệm và uy tín của ứng dụng. |

## 5. So sánh GitHub Issues vs Jira
| Tiêu chí | GitHub Issues | Jira Software |
|----------|---------------|---------------|
| **Độ phức tạp** | Rất đơn giản, làm quen nhanh | Phức tạp, cần thời gian cấu hình |
| **Quy trình (Workflow)**| Cơ bản (Mở/Đóng) | Chuyên nghiệp (Nhiều trạng thái) |
| **Báo cáo & Thống kê** | Hạn chế | Rất mạnh (Biểu đồ, xu hướng) |
| **Môi trường phù hợp** | Dự án nhỏ, Open Source | Doanh nghiệp, Agile, Scrum |

## 6. Kết luận về quy trình Quản lý lỗi
Thông qua bài thực hành, nhóm nhận thấy việc quản lý lỗi bài bản giúp:
- **Tester:** Ghi nhận lỗi chi tiết, chuyên nghiệp, không bị bỏ sót.
- **Developer:** Hiểu rõ cách tái hiện lỗi để sửa chữa nhanh chóng.
- **Quản lý:** Nắm bắt được tiến độ dự án và chất lượng phần mềm thông qua các báo cáo thống kê.
- **Teamwork:** Tăng cường sự minh bạch và phối hợp nhịp nhàng giữa các bộ phận.
