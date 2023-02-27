let formSubBtn = document.querySelector("#submit");
let a = document.querySelector("#A");
let b = document.querySelector("#B");
let c = document.querySelector("#C");
let d = document.querySelector("#D");
let histaryBox = document.querySelector(".history-box");
let resultPik = document.querySelector(".resultPik");
let form = document.querySelector(".form");
let result;



formSubBtn.onclick = function (e) {
    e.preventDefault();
    if (b.value != "B") {
      let  bValue = b.value;
        if (d.value != "D") {
         let   dValue = d.value;
            if (a.value != "A") {
            let    aValue = a.value;
                if (c.value != "C") {
              let      cvalue = c.value
                    result = ((parseInt(b.value) * parseInt(d.value)) / parseInt(a.value)) / parseInt(c.value) * 27.576;
                    appandReasult(bValue,dValue,aValue,cvalue);
                    form.reset();
                } else {
                    alert("please select c")
                }
            } else {
                alert("please select a")
            }
        } else {
            alert("please select D")
        }
    } else {
        alert("please select B");
    }

}
// append result




function appandReasult(b,d,a,c) {

    let histaryChild = document.createElement("div");
    histaryChild.classList.add("histary-child");
    let h3 = document.createElement("h3");
    h3.innerHTML = "total pick";
    histaryChild.appendChild(h3);
    let div2 = document.createElement("div");
    div2.classList.add("read-secreen");
    div2.innerHTML = result;
    histaryChild.appendChild(div2);
    let div3 = document.createElement("div");
    div3.classList.add("pick-name-box");
    div3.innerHTML = '<span>A</span><span>B</span><span>C</span><span>D</span>';
    histaryChild.appendChild(div3);
    let div4 = document.createElement("div");
    div4.classList.add("his-res");
    let span1 = document.createElement("span");
    span1.innerHTML = a;
    div4.appendChild(span1);
    let span2 = document.createElement("span");
    span2.innerHTML = b;
    div4.appendChild(span2);
    let span3 = document.createElement("span");
    span3.innerHTML = c;
    div4.appendChild(span3);
    let span4 = document.createElement("span");
    span4.innerHTML = d;
    div4.appendChild(span4);
    histaryChild.appendChild(div4);


    let printNew = histaryBox.appendChild(histaryChild);


}


