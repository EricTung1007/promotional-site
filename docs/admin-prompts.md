# Quản lý Prompt

> Kiểm soát hành vi của AI, tạo trải nghiệm thực hành sát với thực tế nhất.

## Tổng quan
Prompt là chỉ lệnh cốt lõi điều khiển hành vi của AI. Tính năng này giúp quản trị viên điều chỉnh cách AI phản hồi, tiêu chí đánh giá, và quy tắc tạo vai, nhằm đáp ứng mục tiêu đào tạo.

> Chỉ dành cho Quản trị viên có quyền Quản lý Prompt.

## Cấu trúc Trang
- **Thanh Tiêu đề**: Chọn Công ty/Phòng ban, Chọn Phiên bản, và các nút thao tác.
- **Danh sách Thẻ Prompt**: Hiển thị tất cả Prompt trong phiên bản hiện tại.
- **Bảng Chỉnh sửa**: Khung trượt bên phải hiển thị giao diện chỉnh sửa.

---

## Chi tiết Thẻ Prompt
Mỗi thẻ hiển thị:
- **Tên**: Tên nhận dạng duy nhất
- **Mô tả**: Tóm tắt chức năng
- **Thẻ Phân loại**: Danh mục của Prompt (như Character, Judge, System...)
- **Nhãn "Đang sử dụng"**: Nếu Prompt đã được phát hành
- **Chỉnh sửa / Xóa**: Các nút thao tác

---

## Chỉnh sửa Prompt
Nhấp **"Chỉnh sửa"** để mở bảng điều khiển bên phải.

### Trường thông tin
- **Tên**: Nhận dạng duy nhất (Bắt buộc).
- **Danh mục**: Danh sách phân loại.
- **Mô tả**: Chức năng của Prompt.
- **Nội dung Prompt**: Trình soạn thảo văn bản lớn để nhập chỉ lệnh.

### Hệ thống Biến
Sử dụng dấu ngoặc nhọn `{...}` để chèn biến.
VD: `{question}`, `{character_detail}`, `{conversation_history}`, `{stage_description}`.

---

## Quản lý Phiên bản
Tính năng này giúp bạn chỉnh sửa và kiểm thử Prompt mà không ảnh hưởng đến phiên bản hiện tại.

- **Thêm Phiên bản**: Sao chép Prompt từ phiên bản hiện tại sang phiên bản mới.
- **Phát hành**: Đặt phiên bản làm phiên bản Đang sử dụng.
- Lưu ý: Chỉ phiên bản "Phát hành" mới được áp dụng cho các bài tập mới. Các bài tập đang diễn ra sẽ sử dụng phiên bản cũ.

---

## Lời khuyên
1. **Luôn tạo phiên bản mới** thay vì sửa đổi trực tiếp phiên bản Đang sử dụng.
2. **Kiểm thử kỹ lưỡng** trước khi Phát hành.
