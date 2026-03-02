# Quản lý Prompt

> Kiểm soát hành vi cốt lõi của AI, thiết lập tư duy và tiêu chuẩn chấm điểm.

## Tổng quan
Prompt là những chỉ lệnh cốt lõi điều khiển toàn bộ nền tảng AI Coach. Tính năng này giúp quản trị viên điều chỉnh cách AI đóng vai khách hàng, tiêu chí đánh giá báo cáo, và các quy tắc hệ thống.

> Chỉ dành cho Quản trị viên.

## Cấu trúc Giao diện
Trang quản lý được chia làm hai phần chính:
- **Thanh Công cụ & Bộ lọc (Trái/Trên)**:
  - **Công ty/Phòng ban (Company/Department):** Danh sách thả xuống để lọc bộ prompt áp dụng riêng cho một tổ chức (VD: 台灣國泰人壽).
  - **Phiên bản (Version):** Chọn phiên bản prompt đang thao tác (VD: v1.0, v2.0 - Đang sử dụng).
- **Danh sách & Trình soạn thảo**: Khung hiển thị danh sách các Prompt và trình soạn thảo mã nguồn prompt chi tiết.

---

## Chi tiết Thẻ Prompt
Mỗi thẻ prompt hiển thị:
- **Tên**: Tên nhận dạng duy nhất trong hệ thống.
- **Danh mục (Category)**: Phân loại prompt (VD: System, Character, Judge, Auto-Suggestions).
- **Mô tả**: Tóm tắt ngắn gọn chức năng của nó.
- **Trạng thái**: Nhãn cho biết Prompt có đang nằm trong phiên bản "Đang sử dụng/Active" hay không.

Trình soạn thảo cung cấp vùng không gian lớn để quản trị viên nhập văn bản Prompt một cách trực tiếp.

---

## Hệ thống Biến (Variables)
Trong nội dung Prompt, bạn có thể sử dụng các biến động trong ngoặc nhọn `{...}` để hệ thống tự động điền dữ liệu thực tế tại thời điểm chạy:
Ví dụ: 
- `{question}`: Câu hỏi mới nhất của người dùng.
- `{character_detail}`: Chân dung và tiểu sử khách hàng được tạo tự động.
- `{conversation_history}`: Lịch sử trò chuyện cho đến thời điểm hiện tại.
- `{stage_description}`: Mô tả của các giai đoạn bán hàng đang áp dụng.

---

## Quản lý Phiên bản (Version Control)
Hệ thống cho phép bạn chỉnh sửa và kiểm thử Prompt mà không gây ảnh hưởng đến phiên bản người dùng đang sử dụng.
- **Thêm Phiên bản**: Sao chép toàn bộ Prompt từ phiên bản hiện tại sang một phiên bản nháp mới.
- **Lưu/Áp dụng sửa đổi**: Các thay đổi chỉ tác động trong phạm vi phiên bản đã chọn.
- **Phát hành (Publish)**: Chính thức đưa phiên bản nháp lên môi trường thực tế làm phiên bản Đang sử dụng. Lưu ý: Phiên bản mới chỉ áp dụng cho các phiên luyện tập *mới* sau thời điểm phát hành.
