# Quản lý Giai đoạn

> Xác định các giai đoạn thực hành bán hàng, thiết lập tiêu chuẩn và mục tiêu đánh giá.

## Tổng quan
Các giai đoạn bán hàng là nền tảng của bài thực hành. Mỗi giai đoạn đại diện cho một bước quyết định trong cuộc trò chuyện; AI sẽ theo dõi và đánh giá bạn dựa trên cấu hình này.

> Chỉ dành cho Quản trị viên có quyền Quản lý Giai đoạn.

## Cấu trúc Trang
Các thẻ giai đoạn được sắp xếp theo số thứ tự:
- **Tiêu đề**: Định dạng "Giai đoạn N: {Tên Giai đoạn}"
- **Trạng thái Khách hàng**: Trạng thái tâm lý hoặc hành vi hiện tại của khách hàng.
- **Tùy chọn**: Chỉnh sửa / Xóa.

---

## Thuộc tính Giai đoạn

### Số Giai đoạn
- Xác định thứ tự. Phải là số nguyên dương và không được trùng lặp. Không thể sửa sau khi đã tạo.

### Tên Giai đoạn
- Mục tiêu và tên gọi (VD: Phá băng, Khám phá nhu cầu).

### Trạng thái Khách hàng Hiện tại
- Mô tả tâm lý khách hàng để AI dựa vào đó phản hồi (VD: "Khách hàng còn e ngại và chưa tin tưởng").

---

## Thao tác
- **Thêm Giai đoạn**: Nhấp "Thêm Giai đoạn". Điền Số, Tên, Mô tả.
- **Chỉnh sửa**: Nhấp "Chỉnh sửa" trên thẻ (Không sửa được Số Giai đoạn).
- **Xóa**: Nhấp "Xóa". Có thể ảnh hưởng đến lịch sử trước đó.

---

## Gợi ý Thiết kế
1. **Tiến trình hợp lý**: Từ dễ đến khó, theo quy trình bán hàng tự nhiên.
2. **Mục tiêu rõ ràng**: Mỗi giai đoạn nên có mục tiêu cụ thể, đo lường được.
3. **Mô tả chân thực**: Trạng thái khách hàng phải phản ánh đúng tâm lý thực tế.
4. **Vừa phải**: Từ 3-7 giai đoạn là hợp lý.
