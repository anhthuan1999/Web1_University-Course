function loading() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            HienThi(changetolistdata(this));
        }
    };
    xhttp.open("GET", "../data/product.xml", true);
    xhttp.send();
    var lstproduct;
    var xmlDoc;
    var data = [];
    function changetolistdata(xml) {

        xmlDoc = xml.responseXML;
        var lstmuc = ['BS','B', 'DX', 'T', 'TS', 'TH', 'ST']

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
        for (i = 0; i < lstrecord.length; i++) {
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
                case 0:
                    tdhead.setAttribute('id', 'bestsales')
                    tdhead.innerText = 'Bán chạy nhất'
                    break;
                case 1:
                    tdhead.setAttribute('id', 'banhngot')
                    tdhead.innerText = 'Bánh ngọt'
                    break;
                case 2:
                    tdhead.setAttribute('id', 'daxay')
                    tdhead.innerText = 'Đá xay'
                    break;
                case 3:
                    tdhead.setAttribute('id', 'tra')
                    tdhead.innerText = 'Trà'
                    break;
                case 4:
                    tdhead.setAttribute('id', 'trasua')
                    tdhead.innerText = 'Trà sữa'
                    break;
                case 5:
                    tdhead.setAttribute('id', 'topping')
                    tdhead.innerText = 'Topping'
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
                btnmua1.innerText = "Bỏ vào giỏ hàng"


                var btnmua2 = document.createElement("p")
                btnmua2.setAttribute("class", "btnmua")
                btnmua2.setAttribute("onclick", "xuLymua(this)")
                btnmua2.innerText = "Bỏ vào giỏ hàng"

                var btnmua3 = document.createElement("p")
                btnmua3.setAttribute("class", "btnmua")
                btnmua3.setAttribute("onclick", "xuLymua(this)")
                btnmua3.innerText = "Bỏ vào giỏ hàng"

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
                    btnmua.innerText = "Bỏ vào giỏ hàng"

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
    }
    
}
function xuLymua(v) {
    a = v.parentNode.childNodes[1].childNodes[0].childNodes[0].nodeValue;
    alert(a)
}