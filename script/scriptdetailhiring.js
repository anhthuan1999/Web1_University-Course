function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
        function (m, key, value) {
            vars[key] = value;
        });
    return vars;
}
function loadingdetail() {
    img = document.getElementById("img")
    pcontent = document.getElementById("pdetail")
    header = document.getElementById("header")
    var id = unescape(getUrlVars()["id"])
    switch (id) {
        case '1':
            img.setAttribute("src", "../images/Tuyendung1.jpg")
            header.innerHTML ='Quận 3 : TUYỂN DỤNG CỘNG TÁC VIÊN TUYỂN DỤNG'
            pcontent.innerHTML = "1. Vị trí làm việc: Cộng tác viên Tuyển Dụng.<br/>"+
                    "2. Thời gian làm việc: Cộng tác viên, toàn thời gian cố định.<br/>"+
                    "3. Trách nhiệm và mô tả công việc:<br/>"+
                    "- Biên tập, soạn thảo và viết bài PR, bài quảng cáo cho các kế hoạch tuyển dụng.<br/>"+
                    "- Sáng tạo nội dung trên website, fanpage và các trang tuyển dụng.<br/>"+
                    "- Viết bài, chỉnh sửa hình ảnh cơ bản trong quá trình làm việc.<br/>"+
                    "- Hỗ trợ sắp xếp lên lịch mời phỏng vấn.<br/>"+
                    "- Nhập tài liệu, báo cáo thống kê tuyển dụng.<br/>"+
                    "- Thực hiện một số công việc theo yêu cầu Trưởng phòng.<br/>"+
                    "4. Yêu cầu công việc:<br/>"+
                    "- Ưu tiên sinh viên mới ra trường.<br/>"+
                    "- Có kỹ năng viết bài quảng cáo.<br/>"+
                    "- Sử dụng thành thạo vi tính văn phòng word, excel.<br/>"+
                    "- Có hiểu biết về Internet và các mạng xã hội.<br/>"+
                    "- Nhanh nhẹn, tỉ mỉ trong công việc.<br/>"+
                    "- Có khả năng tổng hợp thông tin từ nhiều nguồn khác nhau.<br/>"+
                    "5. Địa điểm làm việc: 23B Ngô Thời Nhiệm, Phường 6, Quận 3, Hồ Chí Minh<br/>"+
                    "6. Nộp đơn ứng tuyển tại: javascript@coffe.com<br/>"
            "7. Điện thoại: 028 3933 0934<br/>"+
            "8. Thời hạn ứng tuyển: 30/12/2019"
            break;
        case '2':
            img.setAttribute("src", "../images/Tuyendung2.jpg")
            header.innerHTML = 'QUẬN 8: TUYỂN DỤNG KẾ TOÁN TỔNG HỢP'
            pcontent.innerHTML = "1. Vị trí: Kế toán Tổng hợp.<br/>" +
                "2. Thời gian làm việc: Nhân viên chính thức, làm toàn thời gian cố định.<br/>" +
                "3. Trách nhiệm và mô tả công việc:<br/>" +
                "- Tiếp nhận, kiểm tra, soát xét tính hợp lý hợp lệ của các bút toán ghi nhận trên sổ sách chứng từ của các khối, Phòng ban, chi tiết và tổng hợp.<br/>" +
                "- Kiểm tra, soát xét, chủ động yêu cầu và hỗ trợ hoàn thiện các hồ sơ giấy tờ liên quan đến thuế.<br/>" +
                "- Hạch toán doanh thu, chi phí, khấu hao, TSCĐ, công nợ, thuế GTGT.<br/>" +
                "- Hạch toán nhập, xuất, tồn kho nguyên vật liệu, hàng hóa.<br/>" +
                "- Theo dõi và tính toán giá thành sản xuất thực tế cho từng sản phẩm, tỷ lệ hao hụt nguyên vật liệu, phụ liệu đi kèm.<br/>" +
                "- Kết chuyển chi phí, lãi lỗ, lập hoặc tổng hợp các báo cáo và phân tích báo cáo kết quả kinh doanh, báo cáo quản trị nội bộ của công ty, các cửa hàng.<br/>" +
                "- Theo dõi và quản lý công nợ tổng hợp.<br/>" +
                "- Tham gia phối hợp công tác kiểm tra, kiểm kê tại các đơn vị trực tiếp và gián tiếp.<br/>" +
                "- Lập các báo cáo tổng hợp theo quy định của công ty.<br/>" +
                "- Kiểm tra in ấn và tổ chức lưu trữ dữ liệu, chứng từ sổ sách kế toán theo quy định.<br/>" +
                "- Kiểm tra, kiểm soát và báo cáo tình hình sử dụng hóa đơn GTGT.<br/>" +
                "- Kiểm tra đối chiếu và kiểm soát kê khai thuế GTGT, thuế TNDN, thuế TNCN, thuế môn bài, thuế khác… của công ty.<br/>" +
                "- Theo dõi báo cáo tình hình nộp ngân sách, tồn đọng ngân sách, hoàn thuế của công ty.<br/>" +
                "- Lập báo cáo tài chính, báo cáo thuế theo tháng, quý, năm, báo cáo thuế TNDN và báo cáo quyết toán thuế TNCN.<br/>" +
                "- Cập nhật và chia sẻ kịp thời các thông tin, chính sách mới về luật thuế liên quan đến hoạt động sản xuất kinh doanh của công ty.<br/>" +
                "4. Yêu cầu công việc:<br/>" +
                "- Nắm vững kiến thức nghiệp vụ kế toán, kiểm toán.<br/>" +
                "- Hiểu biết và nắm rõ các quy định liên quan của Nhà nước và Pháp Luật.<br/>" +
                "- Thành thạo các phần mềm văn phòng, phần mềm chuyên ngành.<br/>" +
                "- Có kinh nghiệm ít nhất 3 năm ở vị trí kế toán, kiểm toán, kiểm soát.<br/>" +
                "- Tiếng Anh tốt<br/>" +
                "5. Địa điểm làm việc: 907 Tạ Quang Bửu, Phường 5, Quận 8, Hồ Chí Minh<br/>" +
                "6. Nộp đơn ứng tuyển tại: javascript@coffe.com<br/>"
            "7. Điện thoại: 028 5430 8448<br/>" +
                "8. Thời hạn ứng tuyển: 25/12/2019"
            break;
        case '3':
            img.setAttribute("src", "../images/Tuyendung3.jpg")
            header.innerHTML = 'Quận 11: TUYỂN DỤNG TRỢ LÝ QUẢN LÝ DỰ ÁN'
            pcontent.innerHTML = "Vị trí làm việc: Trợ lý Quản lý Dự án<br/>" +
                "2. Thời gian làm việc: Nhân viên chính thức, làm việc toàn thời gian cố định<br/>" +
                "3. Trách nhiệm và mô tả công việc:<br/>" +
                "- Hỗ trợ, sắp xếp và cập nhật tiến độ các công việc của phòng Quốc tế.<br/>" +
                "- Cập nhật và tổng hợp báo cáo các chương trình, kế hoạch, sản phẩm mới.<br/>" +
                "- Theo sát các kế hoạch và sự kiện của công ty.<br/>" +
                "- Cập nhật với các quy định liên quan chứng từ nhà chức trách nước sở tại và các thay đổi (nếu có).<br/>" +
                "- Chuẩn bị, tham dự các cuộc họp trong và ngoài theo yêu cầu của Quản lý Dự án và Giám đốc Vận hành.<br/>" +
                "- Thực hiện các nhiệm vụ theo phân công từ Quản lý Dự án.<br/>" +
                "4. Yêu cầu công việc:<br/>" +
                "- Tốt nghiệp ĐH chuyên ngành Kinh tế, Tài chính, Ngân hàng (Ưu tiên sinh viên Đại học Ngoại thương, Đại học Kinh tế Quốc dân, Học viện Tài chính)<br/>" +
                "- Khả năng làm việc độc lập, theo nhóm.<br/>" +
                "- Thái độ cầu thị, không thỏa mãn.<br/>" +
                "- Đam mê, học hỏi thêm về ngành Đồ ăn và Đồ uống (Food and Beverage), đặc biệt là các chuỗi cà phê.<br/>" +
                "- Tiếng Anh tốt là điểm cộng ( TOEIC > 850).<br/>" +
                "- Tỉ mỉ,chú trọng đến từng chi tiết và giao tiếp tốt.<br/>" +
                "5. Địa điểm làm việc: 70 Lữ Gia, Phường 15, Quận 11, Hồ Chí Minh<br/>" +
                "6. Nộp đơn ứng tuyển tại: javascript@coffe.com<br/>"
            "7. Điện thoại: 090 955 99 02<br/>" +
                "8. Thời hạn ứng tuyển: 30/12/2019"
            break;
            break;
    }
}