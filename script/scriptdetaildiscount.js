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
    var id = unescape(getUrlVars()["id"])
    header = document.getElementById("header")
    switch (id) {
        case '1':
            img.setAttribute("src", "../images/Uudai1.jpg")
            header.innerHTML = '<h2>Giảm giá trà sữa khi đặt qua ứng dụng Now</h2>'
            pcontent.innerHTML = 
                "<b>Giảm 20 % trà sữa - Order thả ga trên NOW APP</b><br/>" +
                "Hôm nay bạn không biết ăn gì, uống gì thì mở app Now ra tha hồ lựa món.<br/>" +
                "Nhập mã: NOWAPP20 giảm 20 %, ship liền trong vài nốt nhạc.Trà Sữa JavaScript đang vẫy gọi nha.<br/>" +
            "Thời gian: 01/12/ 2019 - 25/12/2019<br/>"+
            "Chỉ áp dụng đặt món trên Now App<br/>"+
            "Điều kiện hoá đơn trên 100k, giảm tối đa 100k.<br/>"+
            "Freeship khi thanh toán qua AirPay.<br/>"+
            "Ghé Now, mình đặt thức uống JavaScipt ngay thôi mọi người ơi!"

            break;
        case '2':
            img.setAttribute("src", "../images/Uudai2.jpg")
            header.innerHTML = '<h2>Giảm ngay 20% trà sữa khi thanh toán bằng ví điện tử</h2>'
            pcontent.innerHTML = 

                "<b>20% OFF - LỰA GIỜ VÀNG SĂN TRÀ SỮA NGAY THÔI</b><br/>" +
                "Ngày mới hẳn sẽ trở nên ngọt ngào hơn vì đã có những ly trà ngọt mát của JavaScipt ở đây rồi, lựa giờ vàng, bạn hãy ghé JavaScipt  hưởng ưu đãi nhé:<br/>" +
                "Giảm 20% cho hóa đơn từ 99.000 VNĐ khi thanh toán bằng ví điện tử Momo, Airpay.<br/>" +
                "Thời gian: 01/12/ 2019 - 15/12/2019<br/>" +
                "Chỉ áp dụng khi mua hàng tại CH<br/>" +
                "Trà ngon giá ưu đãi và không gian xinh xắn để check-in đang chờ bạn tại JavaScipt đấy, có lý do nào mà không dành chút thời gian ghé qua bạn nhỉ?"
            break;
        case '3':
            img.setAttribute("src", "../images/Uudai3.jpg")
            header.innerHTML = '<h2>Siêu ưu đãi mua 1 tặng 1 tất cả các chi nhánh</h2>'
            pcontent.innerHTML = 

                "<b>Thứ 2 hàng tuần - Mua 1 tặng 1</b><br/>" +
                "Nếu bạn là tín đồ thức uống đá xay , đừng quên ghé JavaScript để hưởng ưu đãi dành cho dòng thức uống này nhé!<br/>" +
                "ƯU ĐÃI: Mua 1 tặng 1 cho dòng thức uống đá xay<br/>" +
                "Các ngày thứ hai từ 01/12/2019  - 31/12/2019<br/>" +
                "Chỉ áp dụng khi mua hàng tại CH<br/>" +
                "Bạn sẽ lựa chọn thức uống nào cho ưu đãi lần này? Đá xay ngọt thơm, phiên bản có thêm thạch lá nếp thanh mềm, hay bạc xỉu trân châu đường đen - màn kết hợp thú vị chỉ có duy nhất tại JavaScript nhỉ?"
            break;
        case '4':
            img.setAttribute("src", "../images/Uudai4.jpg")
            header.innerHTML = '<h2>Topping nhân đôi miễn phí thứ 3 hàng tuần</h2>'
            pcontent.innerHTML = 

                "<b>Thứ 3 - Miễn phí Topping</b><br/>" +
                "Tặng miễn phí topping uống kèm với bất kỳ món nước bạn thích." +
                "Thời gian: 01/12/ 2019 - 31/12/2019<br/>" +
                "Chỉ áp dụng khi mua hàng tại CH<br/>" +
                "<b>Lưu ý:</b><br/>" +
                "- Mỗi ly chỉ áp dụng tặng 1 phần topping<br/>" +
                "- Áp dụng thẻ tích điểm.<br/>" +
                "- Chỉ áp dụng khi mua trực tiếp tại cửa hàng JavaScript.<br/>" +
                "- Không áp dụng chung với các chương trình khuyến mãi khác"
            break;
    }
}