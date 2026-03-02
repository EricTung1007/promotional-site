# Đánh giá & Phản hồi

> Nhận phản hồi chuyên môn, chi tiết từng câu nói đến toàn bộ cuộc trò chuyện.

## Tổng quan
Sau mỗi bài thực hành, AI Coach tự động tạo một báo cáo đánh giá chi tiết với 3 cấp độ phân tích:
1. **Đánh giá Giai đoạn** — Việc hoàn thành các giai đoạn bán hàng và gợi ý cải thiện.
2. **Đánh giá Toàn diện** — Tóm tắt hiệu suất tổng thể và định hướng học tập.
3. **Đánh giá Từng câu** — Phân tích chi tiết từng tin nhắn.

---

## Giao diện Báo cáo Đánh giá

Khi mở báo cáo (từ nút "Xem Đánh giá" trong Lịch sử), giao diện được chia làm các phần chính:

### Thanh Công cụ & Tùy chọn Chế độ Xem
- **Nút Trở về:** Quay lại danh sách Lịch sử hoặc Bảng điều khiển.
- **Trình chuyển đổi Ngôn ngữ:** Đổi ngôn ngữ báo cáo.
- **Nút Chuyển đổi Chế độ Xem:** Một nút nổi bật để chuyển đổi giữa hai chế độ:
  - **Đánh giá Toàn diện (Mặc định)**: Xem Đánh giá Giai đoạn và Đánh giá Toàn diện.
  - **Đánh giá Từng câu (檢視逐句評價)**: Đi sâu vào phân tích từng tin nhắn.

### Bảng Thông tin Chân dung (Bảng Phía Phải)
Luôn hiển thị trên màn hình để bạn đối chiếu nhận xét của AI với ngữ cảnh khách hàng:
- **Kiểu tính cách (MBTI):** Ví dụ INTJ (Kiến trúc sư). Rất quan trọng để hiểu phong cách ra quyết định của khách hàng.
- **Chi tiết Khách hàng:** Học vấn, Tình trạng hôn nhân, Cấp độ thu nhập.
- **Mối quan hệ:** Quan hệ hiện tại giữa khách và Tư vấn viên.

---

## Quá trình Tạo Báo cáo

### Thời điểm Kích hoạt
Khi bạn nhấp "Kết thúc trò chuyện", hệ thống:
Đóng trò chuyện → Kích hoạt 3 tác vụ nền:
- Tạo Đánh giá Giai đoạn
- Tạo Đánh giá Toàn diện
- Tạo Tóm tắt Cuộc gọi

> Lưu ý: Đánh giá Từng câu được tạo ở chế độ nền trong suốt quá trình trò chuyện, ngay sau mỗi tin nhắn.

### Trạng thái Giao diện
Quá trình tạo thường mất từ 30 giây đến 2 phút.

---

## 1. Đánh giá Giai đoạn
AI đánh giá toàn bộ cuộc trò chuyện một lần dựa trên các tiêu chuẩn do quản trị viên thiết lập để xác định bạn đã đạt đến giai đoạn bán hàng nào.

### Đầu ra
Đối với mỗi giai đoạn đạt được, thẻ đánh giá sẽ cung cấp phân tích. Nếu bạn không thể thăng cấp lên giai đoạn tiếp theo, một phần "Lý do Không Thăng cấp" sẽ giải thích những gì bạn cần cải thiện.

---

## 2. Đánh giá Toàn diện
Không giống Đánh giá Giai đoạn, Đánh giá Toàn diện xem xét màn thể hiện của bạn từ góc độ kỹ năng mềm: chất lượng hội thoại, kỹ năng bán hàng, tạo dựng mối quan hệ, và thể hiện sự chuyên nghiệp.

### Đầu ra
Báo cáo bằng Markdown bao gồm:
- Tổng quan hiệu suất
- Đánh giá Điểm mạnh
- Lĩnh vực Cần Cải thiện
- Đề xuất Bước đi Tiếp theo

---

## 3. Đánh giá Từng câu
Cấp độ phản hồi chi tiết nhất, phân tích từng tin nhắn của bạn đang diễn ra. Chuyển sang chế độ này bằng nút "Đánh giá Từng câu" trên thanh công cụ.

### Cách thức Hoạt động
Tính năng này chạy ngầm trong suốt buổi thực hành. Khi bạn chuyển sang tab Đánh giá Từng câu, bạn có thể xem lại:
- **Suy nghĩ nội tâm của AI:** Điều khách hàng đang thực sự nghĩ nhưng không nói ra.
- Phản hồi chi tiết cho từng tin nhắn: Cách diễn đạt, hiệu quả sử dụng kỹ năng.

---

## Cung cấp Phản hồi cho Phân tích của AI
Bên dưới Đánh giá Toàn diện và mỗi mục Từng câu, bạn có thể nhấn Thích/Không Thích để cung cấp phản hồi về chất lượng phân tích của hệ thống AI, qua đó giúp cải thiện hệ thống trong tương lai.

## Lời khuyên
1. Đọc **Đánh giá Giai đoạn** để biết bạn đã làm tốt ở bước nào.
2. Kiểm tra phần **Không thăng cấp** để xem thiếu sót.
3. Đọc **Đánh giá Toàn diện** để biết định hướng.
4. Nhấc tab **Đánh giá Từng câu** và chú ý phần **Suy nghĩ nội tâm của AI** để thấu hiểu tâm lý khách hàng dựa trên MBTI của họ.
