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

        lstdetail = xmlDoc.getElementsByTagName('TD')[0].getElementsByTagName("detail");
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
        header = document.getElementById("header")
        var id = unescape(getUrlVars()["id"])

        tuyendung1 = lstrecord[0]
        tuyendung2 = lstrecord[1]
        tuyendung3 = lstrecord[2]

        switch (id) {
            case tuyendung1[0]:
                img.setAttribute("src", tuyendung1[3])
                header.innerHTML = tuyendung1[1]
                pcontent.innerHTML = tuyendung1[2]
                break;
            case tuyendung2[0]:
                img.setAttribute("src", tuyendung2[3])
                header.innerHTML = tuyendung2[1]
                pcontent.innerHTML = tuyendung2[2]
                break;
            case tuyendung3[0]:
                img.setAttribute("src", tuyendung3[3])
                header.innerHTML = tuyendung3[1]
                pcontent.innerHTML = tuyendung3[2]
                break;
        }
    }
}