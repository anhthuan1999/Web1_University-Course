function defaultimg() {
    p = document.getElementById("idlistdanhsach")
    tmap = document.getElementById("idmap")
    tmap.removeChild(tmap.firstChild);
    var img = document.createElement('img')
    tmap.appendChild(img)
    img.setAttribute('height', '400')
    img.setAttribute('width', '650')
}
function getValueSelect(v) {
    var p = document.getElementById("idlistdanhsach")
    var imgdel = document.getElementById('imgstore').remove();
    tmap = document.getElementById("idmap")
    tmap.removeChild(tmap.firstChild);
    
    
    var img = document.createElement('img')
    tmap.appendChild(img)
    
    var imgstore = document.createElement('img')
    imgstore.setAttribute('height', '200')
    imgstore.setAttribute('width', '450')
    imgstore.setAttribute('id', 'imgstore')
    p.parentNode.appendChild(imgstore)
    img.setAttribute('height', '400')
    img.setAttribute('width', '650')

    switch (v) {
        case 'q1':
            p.innerHTML = "Địa chỉ: Chung cư, 14 Tôn Thất Đạm, Phường Nguyễn Thái Bình, Quận 1, Quận 1 Hồ Chí Minh<br/>"+
            "Giờ đóng cửa 22:00<br/>"+
            "Điện thoại: 0786 575 464"
            img.setAttribute('src', '../images/mapq1.jpg')
            imgstore.setAttribute('src','../images/cuahang1.jpg')
            break;
        case 'q2':
            p.innerHTML = "Địa chỉ: 10 Trần Ngọc Diện, Thảo Điền, Quận 2, Hồ Chí Minh<br/>"+
            "Giờ đóng 22:30<br/>"+
            "Điện thoại: 090 305 07 10"
            img.setAttribute('src', '../images/mapq2.jpg')
            imgstore.setAttribute('src', '../images/cuahang2.jpg')
            break;
        case 'q3':
            p.innerHTML = "Địa chỉ: 23B Ngô Thời Nhiệm, Phường 6, Quận 3, Hồ Chí Minh<br/>" +
                "Giờ đóng cửa 0:00<br/>" +
                "Điện thoại: 028 3933 0934";
            img.setAttribute('src', '../images/mapq3.jpg')
            imgstore.setAttribute('src', '../images/cuahang4.jpg')
            break;
        case 'q6':
            p.innerHTML = "Địa chỉ: 117A Tân Hòa Đông, Phường 14, Quận 6, Hồ Chí Minh<br/>"+
            "Mở cả ngày"
            img.setAttribute('src', '../images/mapq6.jpg')
            imgstore.setAttribute('src', '../images/cuahang4.jpg')
            break;
        case 'q8':
            p.innerHTML = "Địa chỉ: 907 Tạ Quang Bửu, Phường 5, Quận 8, Hồ Chí Minh<br/>" +
                "Giờ đóng cửa 22:00<br/>" +
                "Điện thoại: 028 5430 8448";
            img.setAttribute('src', '../images/mapq8.jpg')
            imgstore.setAttribute('src', '../images/cuahang5.jpg')
            break;
        case 'q11':
            p.innerHTML = "Địa chỉ: 70 Lữ Gia, Phường 15, Quận 11, <br/>Hồ Chí Minh<br/>" +
                "Giờ đóng cửa 22:30<br/>" +
                "Điện thoại: 090 955 99 02h";
            img.setAttribute('src', '../images/mapq11.jpg')
            imgstore.setAttribute('src', '../images/cuahang1.jpg')
            break;
        case 'qtd':
            p.innerHTML = "Địa chỉ: 13 Khổng Tử, Bình Thọ, Thủ Đức, Hồ Chí Minh<br/>"+
            "Giờ đóng cửa 22:15<br/>"+
            "Điện thoại: 0818 180 518" 
            img.setAttribute('src', '../images/maptd.jpg')
            imgstore.setAttribute('src', '../images/cuahang7.jpg')
            break;
        default:
            p.innerHTML = "";
            break;
            
    }
}
















