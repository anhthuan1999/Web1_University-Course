function loadingdetail() {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            HienThi(changetolistdata(this));
        }
    };
    xhttp.open("GET", "../data/chitiet.xml", true);
    xhttp.send();

    var lstdetail;
    var xmlDoc;
    var data = [];

    function getUrlVars() {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
            function (m, key, value) {
                vars[key] = value;
            });
        return vars;
    }
    function changetolistdata(xml) {

        xmlDoc = xml.responseXML;

        lstdetail = xmlDoc.getElementsByTagName('UD')[0].getElementsByTagName("detail");
        for (i = 0; i < lstdetail.length; i++) {
            var product = lstdetail[i]
            var detailuudai = []
            detailuudai.push(product.getElementsByTagName("id")[0].childNodes[0].nodeValue,
                product.getElementsByTagName("header")[0].childNodes[0].nodeValue,
                product.getElementsByTagName("text")[0].childNodes[0].nodeValue,
                product.getElementsByTagName("image")[0].childNodes[0].nodeValue
            )
            data.push(detailuudai)
        }
        return data;
    }

    function HienThi(lstrecord) {
        img = document.getElementById("img")
        pcontent = document.getElementById("pdetail")
        var id = unescape(getUrlVars()["id"])
        header = document.getElementById("header")

        uudai1 = lstrecord[0]
        uudai2 = lstrecord[1]
        uudai3 = lstrecord[2]
        uudai4 = lstrecord[3]

        switch (id) {
            case uudai1[0]:
                
                img.setAttribute("src", uudai1[3])
                header.innerHTML = uudai1[1].toString()
                pcontent.innerHTML = uudai1[2]

                break;
            case uudai2[0]:
                img.setAttribute("src", uudai2[3])
                header.innerHTML = uudai2[1]
                pcontent.innerHTML = uudai2[2]
                break;
            case uudai3[0]:
                img.setAttribute("src", uudai3[3])
                header.innerHTML = uudai3[1]
                pcontent.innerHTML = uudai3[2]
                break;
            case uudai4[0]:
                img.setAttribute("src", uudai4[3])
                header.innerHTML = uudai4[1]
                pcontent.innerHTML = uudai4[2]
                break;
        }
    }
}