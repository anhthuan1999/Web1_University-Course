function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
        function (m, key, value) {
            vars[key] = value;
        });
    return vars;
}



function loading() {
    var dataloc_pre = getUrlVars()["search"].replace(/\+/g, '%20');
    var dataloc = decodeURIComponent(dataloc_pre)
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            HienThi(changetolistdata(this,dataloc));
        }
    };
    xhttp.open("GET", "../data/product.xml", true);
    xhttp.send();
    var lstproduct;
    var xmlDoc;
    var data = [];
    function changetolistdata(xml) {

        xmlDoc = xml.responseXML;
        var lstmuc = [ 'B', 'DX', 'T', 'TS', 'TH', 'ST']

        for (j = 0; j < lstmuc.length; j++) {
            lstproduct = xmlDoc.getElementsByTagName(lstmuc[j])[0].getElementsByTagName("product");
            for (i = 0; i < lstproduct.length; i++) {
                var product = lstproduct[i]
                name = product.getElementsByTagName("name")[0].childNodes[0].nodeValue.toLowerCase()
                if (name.indexOf(dataloc.toLowerCase()) > -1) {
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
        }
        return data;
    }
    function HienThi(lstrecord) {
        tbody = document.getElementById("mainbody")
        numtdeachrow = 3;
        widthimage = 300;
        heightimage = 300;
        infoloc = document.getElementById("infoloc")
        infoloc.innerText = "Kết quả tìm kiếm cho từ khóa \"" + dataloc + "\""
        if (lstrecord.length != 0) {
            for (k = 0; k < parseInt(lstrecord.length / numtdeachrow); k++) {
                var tr = document.createElement("tr")
                tbody.appendChild(tr)
                var record1 = lstrecord[k * numtdeachrow]
                var record2 = lstrecord[k * numtdeachrow + 1]
                var record3 = lstrecord[k * numtdeachrow + 2]
                var td1 = document.createElement("td")
                var td2 = document.createElement("td")
                var td3 = document.createElement("td")
                tr.appendChild(td1)
                tr.appendChild(td2)
                tr.appendChild(td3)

                var img1 = document.createElement("img")
                img1.setAttribute("src", record1[3])
                img1.setAttribute("width", widthimage)
                img1.setAttribute("height", heightimage)
                td1.appendChild(img1)


                var content1 = document.createElement("p")
                content1.innerHTML = record1[1] + "<br/>" +
                    record1[2] + "<br/>" + record1[4] + " VNĐ"
                td1.appendChild(content1)

                var img2 = document.createElement("img")
                img2.setAttribute("src", record2[3])
                img2.setAttribute("width", widthimage)
                img2.setAttribute("height", heightimage)
                td2.appendChild(img2)

                var content2 = document.createElement("p")
                content2.innerHTML = record2[1] + "<br/>" +
                    record2[2] + "<br/>" + record2[4] + " VNĐ"
                td2.appendChild(content2)

                var img3 = document.createElement("img")
                img3.setAttribute("src", record3[3])
                img3.setAttribute("width", widthimage)
                img3.setAttribute("height", heightimage)
                td3.appendChild(img3)

                var content3 = document.createElement("p")
                content3.innerHTML = record3[1] + "<br/>" +
                    record3[2] + "<br/>" + record3[4] + " VNĐ"
                td3.appendChild(content3)
            }
            if (lstrecord.length % numtdeachrow != 0) {
                var trlast = document.createElement('tr')
                tbody.appendChild(trlast)
                for (j = 0; j < (lstrecord.length % numtdeachrow); j++) {
                    var td = document.createElement("td")
                    trlast.appendChild(td)
                    record = lstrecord[(parseInt(lstrecord.length / numtdeachrow) * 3) + j]
                    var img = document.createElement("img")
                    img.setAttribute("src", record[3])
                    img.setAttribute("width", widthimage)
                    img.setAttribute("height", heightimage)
                    td.appendChild(img)
                    var content = document.createElement("p")
                    content.innerHTML = record[1] + "<br/>" +
                        record[2] + "<br/>" + record[4] + " VNĐ"
                    td.appendChild(content)
                }
            } 
        } else {
            tbody.innerHTML = "<h3 align=\"center\">Không có kết quả, hãy thử lại</h3>"
        }
    }

}