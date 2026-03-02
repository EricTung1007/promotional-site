# Quản lý Kiến thức

> Quản lý và tải lên dữ liệu tài liệu để làm nguồn kiến thức chính xác cho Trợ lý.

## Tổng quan
Quản trị viên có thể tải lên, xem, và xóa các tệp kiến thức. Những tài liệu này được chuyển thành vector (công nghệ RAG) để Trợ lý Kiến thức có thể tìm kiếm và trả lời người dùng.

> Chỉ dành cho Quản trị viên.
> **Lưu ý**: Việc quản lý kiến thức hiện tại chủ yếu thông qua API hệ thống. Giao diện frontend đang được phát triển. 

---

## Tải lên Tài liệu

| Định dạng | Định dạng tệp |
| --- | --- |
| PDF | .pdf |
| Word | .docx |
| Text | .txt |
| HTML | .html |
| Markdown | .md |

### Quá trình Xử lý Tự động
Tài liệu Tải lên → Phân tích Tệp → Chia nhỏ Nội dung (Chunking) → Nhúng Vector (Embedding) → Lập Chỉ mục

---

## Xem Cơ sở Kiến thức
Quản trị viên có thể xem các khối (chunks) đã tải lên, bao gồm: Tên tệp, Công ty, Phòng ban, Loại khối (TEXT/TABLE/IMAGE), Cập nhật lần cuối...

### Phân ranh giới Đa người thuê (Multi-tenant)
- Dữ liệu hoàn toàn được cách ly theo công ty. Không có sự pha trộn dữ liệu.

---

## Xóa Tài liệu
Quản trị viên có thể xóa hàng loạt thông qua bộ lọc. Dữ liệu khi đã xóa sẽ không còn khả dụng cho Trợ lý Kiến thức (Hành động này không thể hoàn tác).
