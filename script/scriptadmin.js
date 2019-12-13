


var datashoppingfinal = JSON.parse(localStorage.getItem("lstdathangfinal"));
if (datashoppingfinal == null) {
    datashoppingfinal = []
}
function loadingcartadmin() {
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
    var tongtien = 0;
    var maininfo = document.getElementById("maininfo")
    info = datashoppingfinal[datashoppingfinal.length - 1]
    var s = "Khách hàng: " + info[0] + "<br/>" +
        "Địa chỉ: " + info[1] + "<br/>" +
        "Số điện thoại: " + info[2] + "<br/>" +
        "Email: " + info[3] + "<br/>"
    if (info[4] == 'tannoi') {
        s=s+"Giao hàng tận nơi"
    }
    maininfo.innerHTML = s;


    for (k = 0; k < datashoppingfinal.length; k++) {
        for (j = 0; j < lstrecord.length; j++) {
            if (datashoppingfinal[k][0].indexOf(lstrecord[j][0]) != -1) {

                sp = datashoppingfinal[k]

                var trimg = document.createElement("tr")
                var tdimg = document.createElement("td")
                

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
                    info = "Số lượng: " + sp[1];
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
    divtongtien.innerHTML = "Tổng tiền: " + tongtien + " VNĐ"
}


function loginadmin() {
    while (true) {
        var username = prompt("Username");
        var pass = prompt("Password");
        if (username == 'admin' && pass == 'admin') {
            break;
        }
    }
}