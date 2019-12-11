

    
var datashopping = JSON.parse(localStorage.getItem("lstdathang"));
if (datashopping == null) {
    datashopping = []
}
function loadingcart() {
    var xhttp = new XMLHttpRequest();
    var data = []
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            data = changetolistdata(this)
            HienThi(data);
        }
    };
    xhttp.open("GET", "../data/product.xml", true);
    xhttp.send();

    function changetolistdata(xml) {

        xmlDoc = xml.responseXML;
        var lstmuc = ['B', 'DX', 'T', 'TS', 'ST']

        for (j = 0; j < lstmuc.length; j++) {
            lstproduct = xmlDoc.getElementsByTagName(lstmuc[j])[0].getElementsByTagName("product");
            for (i = 0; i < lstproduct.length; i++) {
                var product = lstproduct[i]
                var detailproduct = []
                detailproduct.push(product.getElementsByTagName("id")[0].childNodes[0].nodeValue,
                    product.getElementsByTagName("name")[0].childNodes[0].nodeValue,
                    product.getElementsByTagName("description")[0].childNodes[0].nodeValue,
                    product.getElementsByTagName("image")[0].childNodes[0].nodeValue,
                    product.getElementsByTagName("price")[0].childNodes[0].nodeValue
                )
                data.push(detailproduct)
            }
        }
        return data;
    }
    
}
function HienThi(lstrecord) {
    
    table = document.getElementById("maintable")
    while (table.childNodes.length > 0) {
        table.removeChild(table.firstChild)
    }
    var tongtien=0
    for (k = 0; k < datashopping.length; k++) {
        for (j = 0; j < lstrecord.length; j++) {
            if (datashopping[k][0].indexOf(lstrecord[j][0]) != -1) {

                sp = datashopping[k]

                var trimg = document.createElement("tr")
                var tdimg = document.createElement("td")
                var btndel = document.createElement("span")

                btndel.innerHTML = "Xóa"
                btndel.setAttribute("class", "btndel")
                btndel.setAttribute("onclick", "delItem(this)")

                tdimg.setAttribute("id", "tdimg");
                tdimg.setAttribute("rowspan", "3")
                var img = document.createElement("img")

                img.setAttribute("height", "130")
                img.setAttribute("width", "130")

                img.setAttribute("src", lstrecord[j][3])

                tdimg.appendChild(img)
                
                trimg.appendChild(tdimg)
                table.appendChild(trimg)

                var tdten = document.createElement("td")
                tdten.innerHTML = sp[0]
                tdten.appendChild(btndel)
                trimg.appendChild(tdten)

                var trinfo = document.createElement("tr")
                var tdinfo = document.createElement("td")
                trinfo.appendChild(tdinfo)
                table.appendChild(trinfo)

                var trtopping = document.createElement("tr")
                var tdtopping = document.createElement("td")
                trtopping.appendChild(tdtopping)
                table.appendChild(trtopping)
                var topping = ""
                var info = ""

                if (sp[0][0] != 'B') {
                    info = "Số lượng: " + sp[1] + ", Loại: ";
                    if (sp[2] == 'lanh') {
                        info = info + "lạnh"
                    } else {
                        info = info + "nóng"
                    }
                    info = info + ", Đường: " + sp[3] + "%" + ", và Đá: " + sp[4] + "%"
                    

                    if (sp[5].length == 0) {
                        topping = "Không có topping"
                    } else {
                        topping = "Topping gồm:"
                        for (i = 0; i < sp[5].length; i++) {
                            topping = topping + ", " + sp[5][i]
                        }
                    }

                    
                } else {
                    info= "Số lượng: " + sp[1];
                    topping = "Không có topping";

                }

                tdinfo.innerText = info;
                tdtopping.innerText = topping;
                var hr = document.createElement("hr")
                tdtopping.appendChild(hr)

                tongtien = tongtien + parseFloat(sp[6])

                continue;
            }
            
        }
    }
    var divtongtien = document.getElementById("divtongtien")
    divtongtien.innerHTML="Tổng tiền của bạn là: "+tongtien+" VNĐ"
}
function delItem(e) {
    iddel = e.parentNode.childNodes[0].nodeValue.substring(0, 4);
    for (i = 0; i < datashopping.length; i++) {
        id = datashopping[i][0].substring(0, 4);
        if (iddel == id) {
            var removeditem = datashopping.splice(i, 1)
            localStorage.setItem('lstdathang', JSON.stringify(datashopping))
            loadingcart();
        }
    }

}

function thanhToan() {
    document.getElementById("overlay").style.display = "block";
}
function dathang() {
    if (frminfo.ten.value == "" || frminfo.diachi.value == "" ||
        frminfo.email.value == "" || frminfo.phone.value == "") {
        alert("Vui lòng nhập đầy đủ thông tin bạn nhé!")
    } else {
        var datainfo = []
        datainfo.push(frminfo.ten.value)
        datainfo.push(frminfo.diachi.value)
        datainfo.push(frminfo.phone.value)
        datainfo.push(frminfo.email.value)
        datainfo.push(frminfo.hinhthuc.value)
        var datashoppingfinal = datashopping;
        datashoppingfinal.push(datainfo)
        
        localStorage.setItem('lstdathangfinal', JSON.stringify(datashoppingfinal))

        alert('Đặt hàng thành công')
        
        datashopping = []
        localStorage.setItem('lstdathang', JSON.stringify(datashopping))
        loadingshopping();

        window.location.href = "index.html";
    }
}
