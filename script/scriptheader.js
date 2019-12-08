function showmenu(k) {
    var menuList = document.querySelectorAll('header > ul > li > ul');
    for (var j = 0; j < menuList.length; j++) {
        menuList[j].style.display = "none";
    }
    menuList[k].style.display = "block";

}
function anmenu() {
    var menuList = document.querySelectorAll('header > ul > li > ul');
    for (var j = 0; j < menuList.length; j++) {
        menuList[j].style.display = "none";
    }
}
function autocompletesearch() {
    var xhttp = new XMLHttpRequest();
    var data;

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            data = changetolistdata(this);
            autocomplete(document.getElementById("txtsearch"), data)
        }
    };

    xhttp.open("GET", "../data/product.xml", true);
    xhttp.send();
    var lstproduct;
    var xmlDoc;

    function changetolistdata(xml) {
        var datalst = []
        var lstmuc = ['B', 'DX', 'T', 'TS', 'TH', 'ST']
        xmlDoc = xml.responseXML;
        for (j = 0; j < lstmuc.length; j++) {
            lstproduct = xmlDoc.getElementsByTagName(lstmuc[j])[0].getElementsByTagName("product");
            for (i = 0; i < lstproduct.length; i++) {
                var product = lstproduct[i];
                datalst.push(product.getElementsByTagName("name")[0].childNodes[0].nodeValue)
            }
        }
        return datalst;
    }


    function autocomplete(inp, arr) {

        var currentFocus;

        inp.addEventListener("input", function (e) {
            var a, b, i, val = this.value;

            closeAllLists();
            if (!val) { return false; }
            currentFocus = -1;

            a = document.createElement("div");
            a.setAttribute("id", this.id + "autocomplete-list");
            a.setAttribute("class", "autocomplete-items");

            this.parentNode.appendChild(a);
            for (i = 0; i < arr.length; i++) {
                if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {

                    b = document.createElement("div");

                    b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                    b.innerHTML += arr[i].substr(val.length);

                    b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";

                    b.addEventListener("click", function (e) {

                        inp.value = this.getElementsByTagName("input")[0].value;

                        closeAllLists();
                    });
                    a.appendChild(b);
                }
            }
        });

        inp.addEventListener("keydown", function (e) {
            var x = document.getElementById(this.id + "autocomplete-list");
            if (x) x = x.getElementsByTagName("div");
            if (e.keyCode == 40) {

                currentFocus++;

                addActive(x);
            } else if (e.keyCode == 38) {
                currentFocus--;

                addActive(x);
            } else if (e.keyCode == 13) {

                e.preventDefault();
                if (currentFocus > -1) {

                    if (x) x[currentFocus].click();
                }
            }
        });
        function addActive(x) {

            if (!x) return false;

            removeActive(x);
            if (currentFocus >= x.length) currentFocus = 0;
            if (currentFocus < 0) currentFocus = (x.length - 1);

            x[currentFocus].classList.add("autocomplete-active");
        }
        function removeActive(x) {

            for (var i = 0; i < x.length; i++) {
                x[i].classList.remove("autocomplete-active");
            }
        }
        function closeAllLists(elmnt) {

            var x = document.getElementsByClassName("autocomplete-items");
            for (var i = 0; i < x.length; i++) {
                if (elmnt != x[i] && elmnt != inp) {
                    x[i].parentNode.removeChild(x[i]);
                }
            }
        }

        document.addEventListener("click", function (e) {
            closeAllLists(e.target);
        });
    }
}



function xulySearch() {
    var result = document.getElementById('txtsearch')
    var stringfinal = result.value.split(' ').join('+');

    window.location.href = 'search.html?search=' + stringfinal;
}

function xuLykey(e){
    if (e.keyCode == 13) {
        xulySearch();
    }
}