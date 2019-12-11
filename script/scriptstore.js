
function getValueSelect(v) {

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

        lstdetail = xmlDoc.getElementsByTagName('CN')[0].getElementsByTagName("detail");
        for (i = 0; i < lstdetail.length; i++) {
            var product = lstdetail[i]
            var detailuudai = []
            detailuudai.push(product.getElementsByTagName("id")[0].childNodes[0].nodeValue,
                product.getElementsByTagName("text")[0].childNodes[0].nodeValue,
                product.getElementsByTagName("image")[0].childNodes[0].nodeValue,
                product.getElementsByTagName("map")[0].childNodes[0].nodeValue
            )
            data.push(detailuudai)
        }
        return data;
    }



    function HienThi(lstrecord) {
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

        var q1 = lstrecord[0]
        var q2 = lstrecord[1]
        var q3 = lstrecord[2]
        var q6 = lstrecord[3]
        var q8 = lstrecord[4]
        var q11 = lstrecord[5]
        var qtd = lstrecord[6]


        switch (v) {
            case q1[0]:
                p.innerHTML = q1[1]
                img.setAttribute('src', q1[3])
                imgstore.setAttribute('src', q1[2])
                break;
            case q2[0]:
                p.innerHTML = q2[1]
                img.setAttribute('src', q2[3])
                imgstore.setAttribute('src', q2[2])
                break;
            case q3[0]:
                p.innerHTML = q3[1]
                img.setAttribute('src', q3[3])
                imgstore.setAttribute('src', q3[2])
                break;
            case q6[0]:
                p.innerHTML = q6[1]
                img.setAttribute('src', q6[3])
                imgstore.setAttribute('src', q6[2])
                break;
            case q8[0]:
                p.innerHTML = q8[1]
                img.setAttribute('src', q8[3])
                imgstore.setAttribute('src', q8[2])
                break;
            case q11[0]:
                p.innerHTML = q11[1]
                img.setAttribute('src', q11[3])
                imgstore.setAttribute('src', q11[2])
                break;
            case qtd[0]:
                p.innerHTML = qtd[1]
                img.setAttribute('src', qtd[3])
                imgstore.setAttribute('src', qtd[2])
                break;

        }
    }
}
















