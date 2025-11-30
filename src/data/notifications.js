const notifications = [
  {
    id: 101,
    title: "Thông báo nghỉ học đột xuất",
    className: "Toán Cao Cấp A1 (MATH101)",
    content: "Lớp nghỉ buổi thứ 6 (22/11) do giảng viên bận công tác.",
    detail: "Chào các em, do thầy có lịch họp gấp nên buổi học ngày 22/11 sẽ được hoãn lại. Lịch học bù sẽ được thông báo sau. Các em tranh thủ ôn tập chương 2 nhé.",
    date: "20/11/2024",
    sender: "Giảng viên (tutor1)",
    important: true,
    type: "alert"
  },
  {
    id: 103,
    title: "Lịch thi Giữa kỳ dự kiến",
    className: "Toán Cao Cấp A1 (MATH101)",
    content: "Thi giữa kỳ vào tuần sau tại phòng A2-304.",
    detail: "Kỳ thi giữa kỳ sẽ diễn ra vào 09:00 sáng thứ 4 tuần sau. Nội dung bao gồm Chương 1 và Chương 2. Các em nhớ mang thẻ sinh viên.",
    date: "25/11/2024",
    sender: "Phòng đào tạo",
    important: true,
    type: "exam"
  },
  {
    id: 102,
    title: "Tài liệu nghe mới",
    className: "Luyện thi TOEIC 650+ (ENG202)",
    content: "Đã cập nhật file Audio cho bài Test 3.",
    detail: "Cô đã upload file audio cho phần Listening Test 3 lên mục Tài liệu. Các bạn tải về luyện nghe trước khi đến lớp nhé.",
    date: "21/11/2024",
    sender: "Giảng viên (tutor1)",
    important: false,
    type: "material"
  },
  {
    id: 104,
    title: "Nhắc nhở mang dụng cụ thí nghiệm",
    className: "Hóa Đại Cương (CHE102)",
    content: "Yêu cầu mang áo blouse cho buổi thực hành ngày mai.",
    detail: "Buổi học ngày mai chúng ta sẽ thực hành tại phòng thí nghiệm. Sinh viên bắt buộc phải mặc áo blouse và đeo kính bảo hộ. Ai thiếu sẽ không được vào lớp.",
    date: "26/11/2024",
    sender: "Trợ giảng",
    important: true,
    type: "alert"
  },

  {
    id: 105,
    title: "Gia hạn nộp bài tập lớn",
    className: "Lập Trình Web Cơ Bản (IT201)",
    content: "Deadline bài tập cuối khóa dời sang ngày 30/11.",
    detail: "Nhận thấy nhiều nhóm chưa hoàn thành kịp tiến độ, thầy quyết định gia hạn thêm 3 ngày. Hạn chót nộp bài là 23:59 ngày 30/11/2024.",
    date: "27/11/2024",
    sender: "Giảng viên (tutor3)",
    important: false,
    type: "info"
  },
  {
    id: 106,
    title: "Link Google Meet mới",
    className: "Lập Trình Web Cơ Bản (IT201)",
    content: "Chúng ta sẽ dùng link mới này cho các buổi còn lại.",
    detail: "Do link cũ bị lỗi giới hạn thời gian, từ nay lớp mình sẽ dùng link Meet cố định này: meet.google.com/abc-xyz-123.",
    date: "15/11/2024",
    sender: "Lớp trưởng",
    important: false,
    type: "info"
  },
  {
    id: 107,
    title: "Công bố điểm quá trình",
    className: "Cơ Sở Dữ Liệu (IT305)",
    content: "Đã có bảng điểm thành phần, các bạn kiểm tra nhé.",
    detail: "Điểm chuyên cần và bài tập cá nhân đã được cập nhật trên hệ thống. Sinh viên có thắc mắc vui lòng phản hồi trước ngày 01/12.",
    date: "28/11/2024",
    sender: "Giảng viên (tutor3)",
    important: true,
    type: "grade"
  },
  {
    id: 108,
    title: "Bảo trì hệ thống LMS",
    className: "Hệ thống",
    content: "Server sẽ bảo trì từ 0h đến 4h sáng mai.",
    detail: "Hệ thống sẽ tạm ngưng hoạt động để nâng cấp server. Các bạn vui lòng không nộp bài trong khoảng thời gian này để tránh mất dữ liệu.",
    date: "29/11/2024",
    sender: "Admin",
    important: false,
    type: "system"
  },
  {
    id: 109,
    title: "Chương trình học bổng kỳ tới",
    className: "Phòng Công tác Sinh viên",
    content: "Đã mở đơn đăng ký học bổng khuyến khích học tập.",
    detail: "Sinh viên có GPA > 3.2 vui lòng nộp hồ sơ xét duyệt học bổng về văn phòng khoa trước ngày 15/12.",
    date: "10/11/2024",
    sender: "Admin",
    important: true,
    type: "system"
  }
];

;
export default notifications