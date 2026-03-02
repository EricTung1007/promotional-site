# Hướng dẫn nhanh

> Từ đăng nhập đến khi hoàn thành bài thực hành đầu tiên chỉ mất 5 phút.

## Yêu cầu Hệ thống

| Tiêu chí | Yêu cầu |
| --- | --- |
| Trình duyệt | Phiên bản mới nhất của Chrome, Edge, Firefox, Safari |
| Mạng | Kết nối internet ổn định |
| Thiết bị | Máy tính bàn, Laptop, Máy tính bảng (Hỗ trợ thiết kế đa màn hình) |
| Micro | Tùy chọn, cần thiết nếu dùng tính năng nhập bằng giọng nói |

## Đăng nhập

AI Coach sử dụng hệ thống đăng nhập SSO cấp doanh nghiệp. Bạn không cần đăng ký tài khoản riêng.

### Phương thức đăng nhập

1. **Đăng nhập bằng Microsoft** — Sử dụng tài khoản Microsoft của công ty.
2. **Đăng nhập bằng Google** — Sử dụng tài khoản Google của công ty.

> Các tùy chọn đăng nhập phụ thuộc vào cài đặt của công ty bạn. Đôi khi chỉ có tùy chọn Microsoft.

### Khắc phục sự cố đăng nhập

| Tình huống | Mô tả | Giải pháp |
| --- | --- | --- |
| Tài khoản chưa đăng ký | Tài khoản chưa được thêm vào hệ thống | Liên hệ quản trị viên |
| Tài khoản bị khóa | Cảnh báo "Tài khoản bị vô hiệu hóa" | Liên hệ quản trị viên để kiểm tra trạng thái |
| Xác thực thất bại | Cảnh báo "Đăng nhập thất bại" | Tải lại trang hoặc xóa bộ nhớ cache |

## Tổng quan Giao diện

### Thanh điều hướng (Menu trên cùng)

| Thành phần | Mô tả |
| --- | --- |
| Logo AI Coach | Nhấp để quay lại Bảng điều khiển |
| Bộ chuyển đổi ngôn ngữ | Thay đổi ngôn ngữ giao diện (Tiếng Việt / Phồn thể) |
| Trợ lý Kiến thức | Mở hộp thoại Hỏi & Đáp (cần quyền truy cập) |
| Cài đặt | Dành cho quản trị viên cấu hình hệ thống |
| Đăng xuất | Đăng xuất khỏi hệ thống an toàn |

### Các Trang Chính

| Trang | Đường dẫn | Mô tả |
| --- | --- | --- |
| Bảng điều khiển | `/dashboard` | Trang chủ, hiển thị thống kê học tập và dữ liệu gần đây |
| Thực hành | `/chat` | Trò chuyện mô phỏng với khách hàng AI |
| Báo cáo đánh giá | `/review/:sessionId` | Xem kết quả phân tích đánh giá sau thực hành |
| Lịch sử | `/practice-history` | Xem danh sách tất cả các bài thực hành trước |

## Bài Thực Hành Đầu Tiên: Quy trình hoàn chỉnh

### Bước 1: Xem Bảng điều khiển
Đăng nhập để xem bảng điều khiển. Các chỉ số sẽ là 0 trong lần đầu tiên sử dụng.

### Bước 2: Bắt đầu Thực hành
Nhấp vào nút **"Bắt đầu trò chuyện"** (Start Conversation) trên Bảng điều khiển.

### Bước 3: Chọn Kịch bản
| Kịch bản | Mô tả |
| --- | --- |
| Chân dung Ngẫu nhiên | Hệ thống tạo ngẫu nhiên một khách hàng để luyện tập. Phù hợp để bắt đầu nhanh. |
| Chân dung Tùy chỉnh | Bạn tự định nghĩa đặc điểm khách hàng để huấn luyện cho tình huống cụ thể. |

> **Mẹo:** Khuyến nghị chọn **"Chân dung Ngẫu nhiên"** cho lần đầu tiên.

### Bước 4: Trò chuyện
Giao diện trò chuyện bao gồm:
- **Bên trái**: Thông tin hồ sơ khách hàng
- **Ở giữa**: Cửa sổ trò chuyện với khách hàng AI
- **Bên trên**: Đồng hồ bấm giờ để theo dõi thời lượng
Nhập tin nhắn của bạn và nhấn Enter để gửi.

### Bước 5: Kết thúc
Khi hoàn tất, hãy nhấp vào nút **"Kết thúc trò chuyện"** (End Conversation) ở góc trên bên phải. Hệ thống sẽ tự động tổng hợp và lưu kết quả.

### Bước 6: Xem Đánh giá
Báo cáo sẽ mất từ 30 giây đến 2 phút để tạo và phân tích tự động. Nó bao gồm:
- **Đánh giá Toàn diện**: Đánh giá hiệu suất chung và theo giai đoạn
- **Phản hồi Từng câu**: Các nhận xét chi tiết cho từng tin nhắn bạn đã gửi

---

## Bước tiếp theo

- Tìm hiểu toàn bộ chức năng của [Bảng điều khiển](dashboard.md)
- Khám phá cài đặt nâng cao của chức năng [Thực hành](practice.md)
- Hiểu các chỉ số trong [Báo cáo Đánh giá](evaluation.md)
