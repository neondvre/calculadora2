function calculate() {
    var type = document.getElementById("acid-base").value;
    var concentration = parseFloat(document.getElementById("input-concentration").value);
    var constant = parseFloat(document.getElementById("input-constant").value);
    var resultContainer = document.getElementById("result");
    var pH, H, OH;

    if (type === "acid-strong" || type === "acid-weak") {
        H = concentration;
        pH = -Math.log10(H);
        OH = 1.0e-14 / H;
    } else if (type === "base-strong") {
        OH = concentration;
        pH = 14 + Math.log10(OH);
        H = 1.0e-14 / OH;
    } else if (type === "custom") {
        H = Math.sqrt(constant * concentration);
        pH = -Math.log10(H);
        OH = constant / H;
    }

    resultContainer.innerHTML = "<p>pH: " + pH.toFixed(2) + "</p><p>[H+]: " + H.toExponential(2) + " M</p><p>[OH-]: " + OH.toExponential(2) + " M</p>";
}