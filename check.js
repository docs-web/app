const documents = document.getElementById('cards');
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
function close_window() {
    window.location = "https://google.com"
}
setTimeout(close_window, 30*1000);
document.getElementById(params.get("doc-id")+"_w").classList.remove("hidden");
const hiddenElements = document.getElementsByClassName("hidden");
Array.from(hiddenElements).forEach((doc) => {
    doc.remove();
});
