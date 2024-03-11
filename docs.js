const hti = document.getElementById("hti");
const nav_bar = document.getElementById("nav_bar");
const documents = document.getElementById('cards');
if (('standalone' in window.navigator) && (window.navigator.standalone)) {
    // Running from the home screen on iOS
    hti.style.display = "none";
    nav_bar.style.display = "flex";
    documents.style.display = "flex";
} else if (window.matchMedia('(display-mode: standalone)').matches) {
    // Running from the home screen on Android
    hti.style.display = "none";
    nav_bar.style.display = "flex";
    documents.style.display = "flex";
    var elements = document.getElementsByClassName('document');
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.height = '60vh';
        elements[i].style.margin = '-30px 10vw 0px';
    }
} else {
    // Not running from the home screen
    hti.style.display = "flex";
    nav_bar.style.display = "none";
    documents.style.display = "none";
}

var queryString = window.location.search;
var params = new URLSearchParams(queryString);

function fillDetails() {
    var photo = params.get("photo");
    if (photo != null) {
        document.getElementById("photo").src = "photos/image-" + photo + ".png";
    }
    var birthday = params.get("birthday");
    if (birthday != null) {
        Array.from(document.getElementsByClassName("birthday__day")).forEach((element) => {
            element.innerHTML = birthday;
        });
    }
    var number = params.get("number");
    if (number != null) {
        document.getElementById("doc-id__number").innerHTML = number;
    } else {
        document.getElementById("doc-id__number").innerHTML = "007"+Math.floor(Math.random()*100000);
    }
    var signature = "photos/signature-" + photo + ".png";

    fetch(signature, { method: 'HEAD' })
        .then(response => {
            if (response.ok) {
                document.getElementById("signature").src = signature;
            } else {
                console.log("Signature is missing.");
            }
        })
        .catch(error => {
            console.error("Error checking file existence:", error);
        });

    var surname = params.get("surname");
    if (surname != null) {
        Array.from(document.getElementsByClassName("surname")).forEach((element) => {
            element.innerHTML = surname;
        })
    }
    var name = params.get("name");
    if (name != null) {
        Array.from(document.getElementsByClassName("legal_name")).forEach((element) => {
            element.innerHTML = name;
        })
    }
    var father = params.get("father");
    if (father != null) {
        Array.from(document.getElementsByClassName("father")).forEach((element) => {
            element.innerHTML = father;
        })
    }

    var doc_type = params.get("doc-type");
    if (doc_type != null) {
        document.getElementById("doc-type").innerHTML = doc_type;
    }

    var driver_photo = "photos/driver-" + photo + ".png";
    fetch(driver_photo, { method: 'HEAD' })
        .then(response => {
            if (response.ok) {
                document.getElementById("driver-photo").src = driver_photo;
            } else {
                document.getElementById("driver-photo").src = "photos/image-" + photo + ".png";
            }
        })
        .catch(error => {
            console.error("Error checking file existence:", error);
        });
    var driving_groups = params.get("driving_groups");
    if (driving_groups != null) {
        document.getElementById("driving_groups").innerHTML = driving_groups.replace(",", ", ");
    }
    var driver_number = params.get("driver_number");
    if (driver_number != null) {
        document.getElementById("driver_number").innerHTML = driver_number;
    } else {
        document.getElementById("driver_number").innerHTML = "BXO0"+Math.floor(Math.random()*100000);
    }
    var tax_id = params.get("tax_id");
    if (tax_id != null) {
        document.getElementById("tax_id").innerHTML = number;
    } else {
        document.getElementById("tax_id").innerHTML = Math.floor(Math.random()*10000000000);
    }

    var international_photo = "photos/international-" + photo + ".png";
    fetch(international_photo, { method: 'HEAD' })
        .then(response => {
            if (response.ok) {
                document.getElementById("international-photo").src = international_photo;
            } else {
                document.getElementById("international-photo").src = "photos/image-" + photo + ".png";
            }
        })
        .catch(error => {
            console.error("Error checking file existence:", error);
        });
    var international_number = params.get("international_number");
    if (international_number != null) {
        document.getElementById("international_number").innerHTML = international_number;
    } else {
        document.getElementById("international_number").innerHTML = "GF6"+Math.floor(Math.random()*100000);
    }
    var international_signature = "photos/i-signature-" + photo + ".png";
    fetch(international_signature, { method: 'HEAD' })
        .then(response => {
            if (response.ok) {
                document.getElementById("i-signature").src = international_signature;
            } else {
                // if (signature != null) {
                //     document.getElementById("i-signature").src = "photos/signature-" + photo + ".png";
                // }
            }
        })
        .catch(error => {
            console.error("Error checking file existence:", error);
        });
}
fillDetails();

updateTime();
function updateTime() {
    var today = new Date();
    let zero_inDay = "";
    if (today.getDate() < 10) {
        zero_inDay = "0";
    }
    let zero_inMonth = "";
    if (today.getMonth() + 1 < 10) {
        zero_inMonth = "0";
    }
    var date =
        zero_inDay +
        today.getDate() +
        "." +
        zero_inMonth +
        (today.getMonth() + 1) +
        "." +
        today.getFullYear();

    let zero_inHours = "";
    if (today.getHours() < 10) {
        zero_inHours = "0";
    }
    let zero_inMinutes = "";
    if (today.getMinutes() + 1 < 10) {
        zero_inMinutes = "0";
    }
    var time_str = zero_inHours + today.getHours() + ":" + zero_inMinutes + today.getMinutes();
    var dateTime = time_str + " | " + date;
    Array.from(document.getElementsByClassName("running-str-p")).forEach(
        (element) => {
            element.innerHTML = "• Документ оновлено о " + dateTime;
        }
    );
}
var timeUpdate = setInterval(updateTime, 60 * 1000);

time = 180;
var timerStarted = false;
const passport_timer = document.getElementById("code-timer");
const international_timer = document.getElementById("i-code-timer");
const driver_timer = document.getElementById("d-code-timer");
const tax_timer = document.getElementById("tax-code-timer");
function updateCountdown() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    passport_timer.innerHTML = `Код діятиме ще ${minutes}:${seconds} хв`;
    international_timer.innerHTML = `Код діятиме ще ${minutes}:${seconds} хв`;
    driver_timer.innerHTML = `Код діятиме ще ${minutes}:${seconds} хв`;
    tax_timer.innerHTML = `Код діятиме ще ${minutes}:${seconds} хв`;
    if (time == 0) {
        clearInterval(timerCounter)
        document.location.reload();
    } else {
        time--;
    }
}

var checkUrl = "https://docs-web.github.io/app/check.html"+queryString;
var qr_passport = new QRious({
    element: document.getElementById('verify-card__code'),
    value: checkUrl+"&doc-id=passport",
    size: 200,
});
var qr_driver = new QRious({
    element: document.getElementById('d-verify-card__code'),
    value: checkUrl+"&doc-id=driver-license",
    size: 200,
});
var qr_international = new QRious({
    element: document.getElementById('i-verify-card__code'),
    value: checkUrl+"&doc-id=international-passport",
    size: 200,
});
var qr_tax = new QRious({
    element: document.getElementById('tax-verify-card__code'),
    value: checkUrl+"&doc-id=tax-card",
    size: 200,
});

Array.from(document.getElementsByClassName("vc-option")).forEach(
    (element) => {
        element.addEventListener('click', function () {
            if (element.id == "bar-code-option") {
                flipPass();
                document.getElementById('qrcode__img').src = "assets/mini-qrcode.png"
                document.getElementById('barcode__img').src = "assets/mini-barcode-selected.png"
                document.getElementById('verify-card__code').src = "assets/barcode.png"
            } else if (element.id == "qr-code-option") {
                flipPass();
                document.getElementById('qrcode__img').src = "assets/mini-qrcode-selected.png";
                document.getElementById('barcode__img').src = "assets/mini-barcode.png";
                var qr = new QRious({
                    element: document.getElementById('verify-card__code'),
                    value: checkUrl+"&doc-id=passport",
                    size: 200,
                });
            }
            
            else if (element.id == "d-bar-code-option") {
                flipDL();
                document.getElementById('d-qrcode__img').src = "assets/mini-qrcode.png"
                document.getElementById('d-barcode__img').src = "assets/mini-barcode-selected.png"
                document.getElementById('d-verify-card__code').src = "assets/barcode.png"
            } else if (element.id == "d-qr-code-option") {
                flipDL();
                document.getElementById('d-qrcode__img').src = "assets/mini-qrcode-selected.png"
                document.getElementById('d-barcode__img').src = "assets/mini-barcode.png"
                var qr = new QRious({
                    element: document.getElementById('d-verify-card__code'),
                    value: checkUrl+"&doc-id=driver-license",
                    size: 200,
                });
            } 

            else if (element.id == "i-bar-code-option") {
                flipIP();
                document.getElementById('i-qrcode__img').src = "assets/mini-qrcode.png"
                document.getElementById('i-barcode__img').src = "assets/mini-barcode-selected.png"
                document.getElementById('i-verify-card__code').src = "assets/barcode.png"
            } else if (element.id == "i-qr-code-option") {
                flipIP();
                document.getElementById('i-qrcode__img').src = "assets/mini-qrcode-selected.png"
                document.getElementById('i-barcode__img').src = "assets/mini-barcode.png"
                var qr = new QRious({
                    element: document.getElementById('i-verify-card__code'),
                    value: checkUrl+"&doc-id=international-passport",
                    size: 200,
                });
            } 
            
            else if (element.id == "tax-bar-code-option") {
                flipTax();
                document.getElementById('tax-qrcode__img').src = "assets/mini-qrcode.png"
                document.getElementById('tax-barcode__img').src = "assets/mini-barcode-selected.png"
                document.getElementById('tax-verify-card__code').src = "assets/barcode.png"
            } else if (element.id == "tax-qr-code-option") {
                flipTax();
                document.getElementById('tax-qrcode__img').src = "assets/mini-qrcode-selected.png"
                document.getElementById('tax-barcode__img').src = "assets/mini-barcode.png"
                var qr = new QRious({
                    element: document.getElementById('tax-verify-card__code'),
                    value: checkUrl+"&doc-id=tax-card",
                    size: 200,
                });
            }
        });
    }
);
let timerCounter;
function flip(doc) {
    if (timerStarted) {
        timerStarted = false;
        clearInterval(timerCounter);
    } else {
        time = 180;
        timerStarted = true;
        updateCountdown();
        timerCounter = setInterval(updateCountdown, 1000);
    }
    doc.classList.toggle("flipped");
    Array.from(document.getElementsByClassName("running-str-p")).forEach(
        (element) => {
            element.classList.toggle('isRunning');
        }
    );
}
const passport = document.getElementById('passport');
function flipPass() {
    flip(passport);
}
passport.addEventListener('click', flipPass);
const international_passport = document.getElementById('international-passport');
function flipIP() {
    flip(international_passport);
}
international_passport.addEventListener('click', flipIP);
const driver_license = document.getElementById('driver-license');
function flipDL() {
    flip(driver_license);
}
driver_license.addEventListener('click', flipDL);
const tax_id = document.getElementById('tax-card');
function flipTax() {
    flip(tax_id);
}
tax_id.addEventListener('click', flipTax);

let cards = document.getElementById('cards');
let currentIndex = 0;

let initialX = null;

cards.addEventListener('touchstart', (e) => {
    initialX = e.touches[0].clientX;
});

cards.addEventListener('touchmove', (e) => {
    if (initialX === null) {
        return;
    }

    let currentX = e.touches[0].clientX;
    let diffX = initialX - currentX;

    if (diffX > 0) {
        // Swipe left
        currentIndex = (currentIndex + 1) % cards.children.length;
    } else if (diffX < 0) {
        // Swipe right
        currentIndex = (currentIndex - 1 + cards.children.length) % cards.children.length;
    }

    updateTransform();
    initialX = null;
});

function updateTransform() {
    let transformValue = `translateX(-${currentIndex * 100}vw)`;
    cards.style.transform = transformValue;
    Array.from(document.getElementsByClassName("document")).forEach(
        (element) => {
            element.classList.remove("flipped");
        }
    );
    Array.from(document.getElementsByClassName("running-str-p")).forEach(
        (element) => {
            element.classList.add('isRunning');
        }
    );
}

document.addEventListener('touchmove', function (e) {
    e.preventDefault();
}, { passive: false });

function openTG() {
    window.location = "https://t.me/+DvEDe0akR1tkNDli";
}

function copyUpd() {
    var tempTextArea = document.createElement("textarea");
    tempTextArea.value = "https://docs-web.github.io/app/login.html?" + params;
    document.body.appendChild(tempTextArea);

    tempTextArea.select();
    document.execCommand("copy");

    document.body.removeChild(tempTextArea);
    alert("Оновлення отримано! Тепер встав посилання у пошук Сафарі і перейди за ним");
}