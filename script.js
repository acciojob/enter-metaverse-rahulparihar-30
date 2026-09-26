function changeToH1() {
    let pTag = document.getElementById("status");

    let h1 = document.createElement("h1");
    h1.id = "counter";
    h1.textContent = "Entered Metaberse";

    pTag.replaceWith(h1);
}