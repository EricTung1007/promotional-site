# Quản lý Giai đoạn

> Xác định các giai đoạn thực hành bán hàng, thiết lập tiêu chuẩn và mục tiêu đánh giá.

## Tổng quan
Các giai đoạn bán hàng là nền tảng của bài thực hành. Mỗi giai đoạn đại diện cho một bước quyết định trong cuộc trò chuyện; AI sẽ theo dõi và đánh giá bạn dựa trên cấu hình này.

::: warning Lưu ý Phân quyền
Quản lý Giai đoạn Nâng cao hiện bị giới hạn. Chỉ **Siêu Quản trị viên (Superuser)** hệ thống mới có thể xem và sửa đổi.
:::

## Cấu trúc Giao diện
Trang quản lý hiển thị một danh sách các giai đoạn được sắp xếp theo số thứ tự (từ 1 đến 5 hoặc hơn):
- **Tiêu đề Thẻ**: Định dạng "Giai đoạn N: {Tên Giai đoạn}" (có hỗ trợ hiển thị song ngữ, ví dụ tiếng Việt và tiếng Trung).
- **Trạng thái Khách hàng (Mô tả)**: Trạng thái tâm lý hoặc hành vi dự kiến của khách hàng trong bước này.
- **Tùy chọn thao tác**: Các nút biểu tượng để Chỉnh sửa (Edit) hoặc Xóa (Delete) giai đoạn.

---

## Thuộc tính Giai đoạn

### Số Giai đoạn
- Xác định thứ tự diễn ra của giai đoạn. Phải là số nguyên dương và không được trùng lặp. Không thể sửa sau khi đã tạo.

### Tên Giai đoạn
- Tên gọi chính thức của bước bán hàng (VD: 1. Phá băng, 2. Khám phá nhu cầu, 3. Chốt sale). Hỗ trợ nhập đa ngôn ngữ.

### Trạng thái Khách hàng Hiện tại
- Mô tả dòng tâm lý của khách hàng để AI sử dụng làm tiêu chuẩn để đánh giá xem tư vấn viên đã vượt qua rào cản tâm lý này chưa. (VD: "Khách hàng còn e ngại và chưa tin tưởng").

---

## Thao tác
- **Thêm Giai đoạn (Add Stage)**: Nhấp nút Thêm để điền Số, Tên, Mô tả bằng ngôn ngữ tương ứng.
- **Chỉnh sửa**: Nhấp biểu tượng cái bút trên thẻ (Lưu ý: Không sửa được Số Giai đoạn).
- **Xóa**: Nhấp biểu tượng thùng rác. Xóa giai đoạn có thể ảnh hưởng đến kết quả của các lịch sử thực hành trước đó.

---

## Gợi ý Thiết kế Giai đoạn
1. **Tiến trình hợp lý**: Sắp xếp từ dễ đến khó, theo quy trình chốt sale thực tế.
2. **Mục tiêu rõ ràng**: Mỗi giai đoạn nên có mục tiêu cụ thể, đo lường được để AI dễ dàng chấm điểm.
3. **Mô tả chân thực**: Trạng thái tâm lý khách hàng phải phản ánh đúng thực tế.
4. **Số lượng vừa phải**: Từ 3-7 giai đoạn là hợp lý nhất cho một phiên thực hành.
