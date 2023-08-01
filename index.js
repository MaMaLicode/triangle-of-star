let star = ""

for (let i = 0; i < 6; i++) {
    star = star + "<br>"
    for (let x = 0; x <=i ; x++){
        star = star + "*"

    }
}
document.getElementById("hadi").innerHTML = star

