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

        lstproduct = xmlDoc.getElementsByTagName('BS')[0].getElementsByTagName("product");
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

        return data;
    }
    function HienThi(lstrecord) {
        tbody = document.getElementById("idmaintable")
        numtdeachrow = 3;
        widthimage = 300;
        heightimage = 300;
        for (i = 0; i < parseInt(lstrecord.length / numtdeachrow); i++) {
                var tr = document.createElement("tr")
                tbody.appendChild(tr)
                var record1 = lstrecord[i * numtdeachrow]
                var record2 = lstrecord[i * numtdeachrow + 1]
                var record3 = lstrecord[i * numtdeachrow + 2]
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


                var name1 = document.createElement("p")
                name1.innerText = "Tên: " + record1[1]
                var des1 = document.createElement("p")
                des1.innerText = "Mô tả: " + record1[2]
                var price1 = document.createElement("p")
                price1.innerText = "Giá: " + record1[4]
                td1.appendChild(name1)
                td1.appendChild(des1)
                td1.appendChild(price1)

                var img2 = document.createElement("img")
                img2.setAttribute("src", record2[3])
                img2.setAttribute("width", widthimage)
                img2.setAttribute("height", heightimage)
                td2.appendChild(img2)

                var name2 = document.createElement("p")
                name2.innerText = "Tên: " + record2[1]
                var des2 = document.createElement("p")
                des2.innerText = "Mô tả: " + record2[2]
                var price2 = document.createElement("p")
                price2.innerText = "Giá: " + record2[4]
                td2.appendChild(name2)
                td2.appendChild(des2)
                td2.appendChild(price2)

                var img3 = document.createElement("img")
                img3.setAttribute("src", record3[3])
                img3.setAttribute("width", widthimage)
                img3.setAttribute("height", heightimage)
                td3.appendChild(img3)

                var name3 = document.createElement("p")
                name3.innerText = "Tên: " + record3[1]
                var des3 = document.createElement("p")
                des3.innerText = "Mô tả: " + record3[2]
                var price3 = document.createElement("p")
                price3.innerText = "Giá: " + record3[4]
                td3.appendChild(name3)
                td3.appendChild(des3)
                td3.appendChild(price3)
        }
    }
}