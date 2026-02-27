let students = [
    { id: 1, name: "Nguyen Van A", email: "a.nguyen@edu.vn", class: "IT01" },
    { id: 2, name: "Tran Thi B", email: "b.tran@edu.vn", class: "IT02" },
    { id: 3, name: "Le Van C", email: "c.le@edu.vn", class: "IT01" }
];

let currentUser = null;

// BUG 1: Lỗi logic đăng nhập (thất bại riêng với "admin")
function login() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const errorMsg = document.getElementById('login-error');

    if (user === "admin" && pass === "123456") {
        // BUG CỐ Ý: logic trả về lỗi sai dù đúng pass
        errorMsg.style.display = "block";
        errorMsg.textContent = "Tên đăng nhập hoặc mật khẩu không đúng (Lỗi logic nội bộ)";
        return;
    }

    if (pass === "123456" && (user === "teacher" || user === "staff")) {
        currentUser = user;
        document.getElementById('login-page').style.display = 'none';
        document.getElementById('app-container').style.display = 'block';
        document.getElementById('user-display').textContent = `Chào mừng, ${user}`;
        renderStudents();
    } else {
        errorMsg.style.display = "block";
        errorMsg.textContent = "Thông tin đăng nhập không chính xác";
    }
}

// ... các hàm khác ...

function renderStudents(filtered = null) {
    const data = filtered || students;
    const tbody = document.getElementById('student-body');
    tbody.innerHTML = '';

    data.forEach(s => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${s.id}</td>
            <td>${s.name}</td>
            <td>${s.email}</td>
            <td>${s.class}</td>
            <td class="actions">
                <button class="btn-sm" onclick="editStudent(${s.id})">Sửa</button>
                <button class="btn-sm btn-danger" onclick="deleteStudent(${s.id})">Xóa</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// BUG 3: Tìm kiếm phân biệt chữ hoa/thường
function handleSearch() {
    const term = document.getElementById('search-input').value;
    // BUG CỐ Ý: Không dùng toLowerCase(), khiến tìm kiếm nhạy cảm với chữ hoa/thường
    const filtered = students.filter(s => s.name.includes(term));
    renderStudents(filtered);
}

function openAddModal() {
    document.getElementById('modal').style.display = 'flex';
    document.getElementById('modal-title').textContent = 'Thêm sinh viên mới';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// BUG 2 & 4: Nút Lưu không lưu dữ liệu + Không validate email
function saveStudent() {
    const name = document.getElementById('mock-name').value;
    const email = document.getElementById('mock-email').value;
    const className = document.getElementById('mock-class').value;

    // BUG CỐ Ý 4: Thiếu kiểm tra định dạng email

    const newStudent = {
        id: students.length + 1,
        name: name,
        email: email,
        class: className
    };

    // BUG CỐ Ý 2: Chỉ log ra console chứ không đẩy vào mảng 'students'
    console.log("Đang lưu sinh viên vào bộ nhớ tạm...", newStudent);

    // Thông báo giả như đã lưu thành công
    alert("Sinh viên " + name + " đã được lưu thành công!");

    // Đóng modal và render lại (nhưng danh sách sẽ không đổi do BUG 2)
    closeModal();
    renderStudents();
}

// BUG 5: Xóa gây treo UI (Vòng lặp vô tận/nặng)
function deleteStudent(id) {
    if (confirm("Bạn có chắc chắn muốn xóa sinh viên này không?")) {
        // BUG CỐ Ý 5: Tạo hiện tượng treo UI giả lập
        console.log("Đang xóa sinh viên ID:", id);
        let i = 0;
        while (i < 1000000000) {
            i++;
            if (i === 1) {
                // Thực tế có xóa nhưng luồng chính bị treo
                students = students.filter(s => s.id !== id);
            }
        }
        renderStudents();
    }
}

function editStudent(id) {
    alert("Tính năng Sửa sẽ sớm ra mắt! (ID: " + id + ")");
}

