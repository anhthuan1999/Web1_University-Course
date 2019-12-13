var data = [];
var datashopping=[]
function loading() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            data = changetolistdata(this)
            HienThi(data);
        }
    };
    xhttp.open("GET", "../data/product.xml", true);
    xhttp.send();
    var lstproduct;
    var xmlDoc;
    
    function changetolistdata(xml) {

        xmlDoc = xml.responseXML;
        var lstmuc = ['TH','BS', 'B', 'DX', 'T', 'TS',  'ST']

        for (j = 0; j < lstmuc.length; j++) {
            lstproduct = xmlDoc.getElementsByTagName(lstmuc[j])[0].getElementsByTagName("product");
            var detailmuc = [];
            for (i = 0; i < lstproduct.length; i++) {
                var product = lstproduct[i]
                var detailproduct = []
                detailproduct.push(product.getElementsByTagName("id")[0].childNodes[0].nodeValue,
                    product.getElementsByTagName("name")[0].childNodes[0].nodeValue,
                    product.getElementsByTagName("description")[0].childNodes[0].nodeValue,
                    product.getElementsByTagName("image")[0].childNodes[0].nodeValue,
                    product.getElementsByTagName("price")[0].childNodes[0].nodeValue
                )
                detailmuc.push(detailproduct)
            }
            data.push(detailmuc)
        }
        return data;
    }
    function HienThi(lstrecord) {
        tbody = document.getElementById("mainbody")
        numtdeachrow = 3;
        widthimage = 250;
        heightimage = 250;
        for (i = 1; i < lstrecord.length; i++) {
            var trhead = document.createElement("tr")
            var tdhead = document.createElement("td")
            
            
            var hr = document.createElement("hr")
            hr.setAttribute("size", "4px")
            hr.setAttribute("width", "100px")
            hr.setAttribute("align", "left")
            hr.style.backgroundColor ="#f2bd3e"
            
            
            
            tdhead.setAttribute('colspan', 3)
            tdhead.setAttribute('class', 'header')
            tbody.appendChild(trhead)
            
            

            switch (i) {
                case 1:
                    tdhead.setAttribute('id', 'bestsales')
                    tdhead.innerText = 'Bán chạy nhất'
                    break;
                case 2:
                    tdhead.setAttribute('id', 'banhngot')
                    tdhead.innerText = 'Bánh ngọt'
                    break;
                case 3:
                    tdhead.setAttribute('id', 'daxay')
                    tdhead.innerText = 'Đá xay'
                    break;
                case 4:
                    tdhead.setAttribute('id', 'tra')
                    tdhead.innerText = 'Trà'
                    break;
                case 5:
                    tdhead.setAttribute('id', 'trasua')
                    tdhead.innerText = 'Trà sữa'
                    break;
                case 6:
                    tdhead.setAttribute('id', 'sinhto')
                    tdhead.innerText = 'Sinh tố'
                    break;
            }
            tdhead.appendChild(hr)
            trhead.appendChild(tdhead)
            
            for (k = 0; k < parseInt(lstrecord[i].length / numtdeachrow); k++) {
                var tr = document.createElement("tr")
                tbody.appendChild(tr)
                var record1 = lstrecord[i][k * numtdeachrow]
                var record2 = lstrecord[i][k * numtdeachrow+1]
                var record3 = lstrecord[i][k * numtdeachrow+2]
                var td1 = document.createElement("td")
                var td2 = document.createElement("td")
                var td3 = document.createElement("td")
                td1.setAttribute('valign', 'top')
                td2.setAttribute('valign', 'top')
                td3.setAttribute('valign', 'top')
                td1.setAttribute('width', '300')
                td2.setAttribute('width', '300')
                td3.setAttribute('width', '300')
                tr.appendChild(td1)
                tr.appendChild(td2)
                tr.appendChild(td3)

                var btnmua1 = document.createElement("p")
                btnmua1.setAttribute("class", "btnmua")
                btnmua1.setAttribute("onclick", "xuLymua(this)")
                btnmua1.innerText = "Thêm vào giỏ hàng"


                var btnmua2 = document.createElement("p")
                btnmua2.setAttribute("class", "btnmua")
                btnmua2.setAttribute("onclick", "xuLymua(this)")
                btnmua2.innerText = "Thêm vào giỏ hàng"

                var btnmua3 = document.createElement("p")
                btnmua3.setAttribute("class", "btnmua")
                btnmua3.setAttribute("onclick", "xuLymua(this)")
                btnmua3.innerText = "Thêm vào giỏ hàng"

                var img1 = document.createElement("img")
                img1.setAttribute("src", record1[3])
                img1.setAttribute("width", widthimage)
                img1.setAttribute("height", heightimage)
                td1.appendChild(img1)


                var content1 = document.createElement("p")
                content1.innerHTML = "<i>" + record1[0] + "</i>" +
                    record1[1] + "<br/>" +
                    record1[2] + "<br/>" + "<b>" + record1[4] + " VNĐ" + "</b>"
                td1.appendChild(content1)
                td1.appendChild(btnmua1)

                var img2 = document.createElement("img")
                img2.setAttribute("src", record2[3])
                img2.setAttribute("width", widthimage)
                img2.setAttribute("height", heightimage)
                td2.appendChild(img2)

                var content2 = document.createElement("p")
                content2.innerHTML = "<i>" + record2[0] + "</i>" +
                    record2[1] + "<br/>" +
                    record2[2] + "<br/>" + "<b>" + record2[4] + " VNĐ" + "</b>"
                td2.appendChild(content2)
                td2.appendChild(btnmua2)

                var img3 = document.createElement("img")
                img3.setAttribute("src", record3[3])
                img3.setAttribute("width", widthimage)
                img3.setAttribute("height", heightimage)
                td3.appendChild(img3)
                

                var content3 = document.createElement("p")
                content3.innerHTML = "<i>" + record3[0] + "</i>" +
                    record3[1] + "<br/>" +
                    record3[2] + "<br/>" + "<b>" + record3[4] + " VNĐ" + "</b>"
                td3.appendChild(content3)
                td3.appendChild(btnmua3)
            }
            if (lstrecord[i].length % numtdeachrow != 0) {
                
                var trlast = document.createElement('tr')
                tbody.appendChild(trlast)
                for (j = 0; j < (lstrecord[i].length % numtdeachrow);j++) {
                    var btnmua = document.createElement("p")
                    btnmua.setAttribute("class", "btnmua")
                    btnmua.setAttribute("onclick", "xuLymua(this)")
                    btnmua.innerText = "Thêm vào giỏ hàng"

                    var td = document.createElement("td")
                    td.setAttribute('width', '300')
                    trlast.appendChild(td)
                    record = lstrecord[i][(parseInt(lstrecord[i].length / numtdeachrow) * 3) + j]
                    var img = document.createElement("img")
                    img.setAttribute("src", record[3])
                    img.setAttribute("width", widthimage)
                    img.setAttribute("height", heightimage)
                    td.appendChild(img)
                    var content = document.createElement("p")
                    content.innerHTML = "<i>"+record[0]+"</i>"+
                        record[1] + "<br/>" +
                        record[2] + "<br/>" + "<b>" + record[4] + " VNĐ" + "</b>"

                    td.appendChild(content)
                    td.appendChild(btnmua)
                }
            }
            
        }
        var lsttopping = document.getElementById("bodychoose")
        for (k = 0; k < data[0].length; k++) {
            sp = data[0][k]
            var tr = document.createElement("tr")
            var td1 = document.createElement("td")
            var td2 = document.createElement("td")
            td2.innerHTML = "+10000"
            tr.appendChild(td1)
            tr.appendChild(td2)
            var input = document.createElement("input")
            input.setAttribute("type", "checkbox")
            input.setAttribute("id", "ckb" + sp[0])
            input.setAttribute("name", "ckb" + sp[0])
            input.setAttribute("value", sp[1])


            input.setAttribute("onchange", "themgia(this)")
            var label = document.createElement("label")
            label.setAttribute("for", "ckb" + sp[0])
            label.innerHTML = sp[1];
            td1.appendChild(input)
            td1.appendChild(label)

            lsttopping.appendChild(tr)
        }
    }
    
}
var datashopping = []

datashopping = JSON.parse(localStorage.getItem("lstdathang"));
if (datashopping == null) {
    datashopping = []
}
function xuLymua(v) {
    frm.ckbTH01.checked = false
    frm.ckbTH02.checked = false
    frm.ckbTH03.checked = false
    frm.ckbTH04.checked = false
    frm.ckbTH05.checked = false
    frm.ckbTH06.checked = false
    frm.ckbTH07.checked = false
    frm.ckbTH08.checked = false
    frm.ckbTH09.checked = false
    frm.ckbTH10.checked = false
    frm.ckbTH11.checked = false
    
    idsp = v.parentNode.childNodes[1].childNodes[0].childNodes[0].nodeValue;
    document.getElementById("overlay").style.display = "block";
    dathang = document.getElementById("mainover")

    while (dathang.childNodes.length > 0) {
        dathang.removeChild(dathang.firstChild)
    }

    for (i = 2; i < data.length; i++) {
        for (j = 0; j < data[i].length; j++) {
            var sp = data[i][j];
            if (idsp == sp[0]) {
                var tr1 = document.createElement("tr")
                var tr3 = document.createElement("tr")
                var tr4 = document.createElement("tr")
                var tr5 = document.createElement("tr")

                var img = document.createElement("img")

                var td1 = document.createElement("td")
                var td2 = document.createElement("td")
                var td3 = document.createElement("td")
                var td4 = document.createElement("td")
                var td5 = document.createElement("td")

                tr1.appendChild(td1)
                tr1.appendChild(td2)
                tr3.appendChild(td3)
                tr4.appendChild(td4)
                tr5.appendChild(td5)

                td1.appendChild(img)
                td1.setAttribute('rowspan', '4')
                td1.setAttribute('width', '150px')
                td1.setAttribute('align', 'center')
                td2.setAttribute('id', 'idnamesp')
                td2.innerHTML = sp[0]+" "+sp[1]
                td3.innerHTML = sp[2]
                td4.innerHTML = sp[4]+" VNĐ"

                img.setAttribute('src', sp[3])
                img.setAttribute('height', '130')
                img.setAttribute('width', '130')

                var plus = document.createElement("span")
                var minus = document.createElement("span")
                var quant = document.createElement("span")
                var btndathang = document.createElement("span")

                plus.innerText = '+'
                minus.innerText = '-'
                quant.innerText='1'

                plus.setAttribute("class", "btnquant")
                minus.setAttribute("class", "btnquant")
                plus.setAttribute("onclick", "xuLyquant(1)")
                minus.setAttribute("onclick", "xuLyquant(-1)")
                quant.setAttribute("id","idquant")
                btndathang.setAttribute("id", "idbtndathang")
                btndathang.setAttribute("onclick","xuLyThemGioHang()")
                btndathang.innerText="+ "+sp[4]


                td5.appendChild(minus)
                td5.appendChild(quant)
                td5.appendChild(plus)
                td5.appendChild(btndathang)

                dathang.appendChild(tr1)
                dathang.appendChild(tr3)
                dathang.appendChild(tr4)
                dathang.appendChild(tr5)

                if (sp[0][0] == 'B') {
                    document.getElementById("choose").style.display = "none";
                } else {
                    document.getElementById("choose").style.display = "block";
                }


            }
        }
    }
    

}
function xuLyquant(stt) {
    quant = document.getElementById("idquant");
    quantnum = parseFloat(quant.childNodes[0].nodeValue);
    gia = document.getElementById("idbtndathang");
    giasp = parseFloat(gia.childNodes[0].nodeValue.substring(2)) / quantnum;

    if (quantnum != 1 || stt != -1) {
        quantnum = quantnum + stt;
        quant.innerText = quantnum + "";
        gia.innerHTML = "+ " + (giasp * quantnum)
    }

}
function themgia(v) {
    
    if (v.checked == true) {

        var giathem = 10000
        
    } else {
        var giathem = -10000
    }
    gia = document.getElementById("idbtndathang");
    giasp = parseFloat(gia.childNodes[0].nodeValue.substring(2))
    giasp = giasp + giathem;
    gia.innerHTML = "+ " + giasp
}
function xuLyThemGioHang() {
    var datasp = []
    
    datasp.push(document.getElementById("idnamesp").childNodes[0].nodeValue)
    datasp.push(document.getElementById("idquant").childNodes[0].nodeValue)
    
    datasp.push(frm.loai.value)
    datasp.push(frm.duong.value)
    datasp.push(frm.da.value)
    var datackb = []
    if (frm.ckbTH01.checked == true) {
        datackb.push(frm.ckbTH01.value)
    }
    if (frm.ckbTH02.checked == true) {
        datackb.push(frm.ckbTH02.value)
    }
    if (frm.ckbTH03.checked == true) {
        datackb.push(frm.ckbTH03.value)
    }
    if (frm.ckbTH04.checked == true) {
        datackb.push(frm.ckbTH04.value)
    }
    if (frm.ckbTH05.checked == true) {
        datackb.push(frm.ckbTH05.value)
    }
    if (frm.ckbTH06.checked == true) {
        datackb.push(frm.ckbTH06.value)
    }
    if (frm.ckbTH07.checked == true) {
        datackb.push(frm.ckbTH07.value)
    }
    if (frm.ckbTH08.checked == true) {
        datackb.push(frm.ckbTH08.value)
    }
    if (frm.ckbTH09.checked == true) {
        datackb.push(frm.ckbTH09.value)
    }
    if (frm.ckbTH10.checked == true) {
        datackb.push(frm.ckbTH10.value)
    }
    if (frm.ckbTH11.checked == true) {
        datackb.push(frm.ckbTH11.value)
    }
    datasp.push(datackb)
    datasp.push(document.getElementById("idbtndathang").childNodes[0].nodeValue.substring(2))

    datashopping.push(datasp)
    
    localStorage.setItem('lstdathang', JSON.stringify(datashopping))
    loadingshopping();

    

    document.getElementById("overlay").style.display = "none";

}