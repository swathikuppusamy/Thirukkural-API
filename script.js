//document.body.style.backgroundImage = "url('bg.jpg')";
let div = document.createElement("div");
div.setAttribute("class", "container");
div.setAttribute("src", "https://www.bayareakuralkoodam.org/images/bakk/index/palm-script.jpg");

let number = document.createElement('input');
number.setAttribute("type", "text");
number.setAttribute("class", "form-control");
number.setAttribute("id", "searchnumber")
number.setAttribute("placeholder", "1 முதல் 1330 குறள்களைத் தேட எந்த எண்ணையும் உள்ளிடவும்");

let button = document.createElement("button");
button.setAttribute("class", "btn");
button.setAttribute("id", "searchbutton");
button.innerHTML = "தேடு";
button.addEventListener("click", search);

let contains = document.createElement("div");
contains.setAttribute("class", "card w-50");
contains.style.textAlign = "left";
contains.innerHTML = `<p>- திருக்குறள் திருவள்ளுவரால் எழுதப்பட்டது.<br>
- திருக்குறள் முதன் முதலில் 1812 ஆம் ஆண்டு அச்சிடப்பட்டு வெளியிடப்பட்டது.<br>
- திருக்குறளின் முந்தைய பெயர் "முப்பால்".<br>
- திருக்குறள் 133 அத்தியாயங்களைக் கொண்டது.<br>
- ஒவ்வொரு அத்தியாயத்திலும் 10 குறள்கள் இருப்பதால் மொத்தம் 1330 குறள்கள் உள்ளன.<br><pre></pre>
<b>திருக்குறளில் மூன்று முக்கிய பிரிவுகள் உள்ளன அவை :</b>
1.அறத்துப்பால் - 380 குறள்கள்(1-380)<br>
2.பொருட்பால் - 700 குறள்கள்(381-1080)<br>
3.காமத்துப்பால் - 250 குறள்கள்(1081-1330)</p>`;

div.append(contains, number, button);
document.body.append(div);

async function search() {
    let kuralNumber = document.getElementById('searchnumber').value;
    try {
        if (kuralNumber === "" || kuralNumber === null) {
            alert("எண்ணை உள்ளிடவும். காலியாக இருக்க முடியாது..!");
            return false;
        } else if (kuralNumber <= 1330 && kuralNumber >= 1) {
            let res = await fetch(`https://getthirukkural.appspot.com/api/3.0/kural/${kuralNumber}?appid=xn4boxro7aamm&format=json`);
            let result = await res.json();

            let div2 = document.createElement("div");
            div2.setAttribute("class", "card text-center");

            let divhead = document.createElement("h4");
           // divhead.setAttribute("class", "card-header");
            //divhead.innerHTML = `<b>பிரிவு : </b>${result.sect_tam}`;

            let divbody = document.createElement("div");
            divbody.setAttribute("class", "card-body");

            let chapter = document.createElement("h5");
            chapter.setAttribute("class", "card-subtitle mb-2 text-muted");
            //chapter.innerHTML = `<b>அத்தியாயம் : </b>${result.chap_tam}`;

            let image = document.createElement("img");
            image.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtD-hRZmwbLYUHVamZPn-aMjuzefh5ubBixw&s");
            image.setAttribute("class", "card-img-left");

            let displaykuralnumber = document.createElement("div");
            displaykuralnumber.setAttribute("class", "kuralNumber");
            displaykuralnumber.innerHTML = `<b>குறள் எண் : ${result.number}</b>`;

            let tamline1 = document.createElement("div");
            tamline1.setAttribute("class", "card-text1");
            tamline1.innerHTML = `${result.line1}`;
            let tamline2 = document.createElement("div");
            tamline2.setAttribute("class", "card-text2");
            tamline2.innerHTML = `${result.line2}`;

             let tamexp = document.createElement("div");
             tamexp.setAttribute("class", "card-text3");
            //tamexp.innerHTML = `<b>குறள் விளக்கம்: </b> <br>${result.tam_exp}`;

            divbody.append(chapter, image, displaykuralnumber, tamline1, tamline2, tamexp);
            div2.append(divhead, divbody);
            div.append(div2);

        } else {
            throw kuralNumber;
        }

    } catch (kuralNumber) {
        alert("திருக்குறளில் 1330 குறள்கள் மட்டுமே இருப்பதால், 1 முதல் 1330 வரையிலான மதிப்புகளை உள்ளிடவும்.");
    }

    let inputs = document.querySelectorAll('input');
    inputs.forEach(input => input.value = '');
}