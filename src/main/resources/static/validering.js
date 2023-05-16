function validerVeistrekning(){
    const veistrekning = $("#veistrekning").val();
    const regexp = /^[A-ZÆØÅ][0-9]{1,2}$/;
    const ok = regexp.test(veistrekning);
    if(!ok){
        $("#feilVeistrekning").html("Veistrekningen må starte med en stor bokstav og et eller to siffer");
        return false;
    }
    else{
        $("#feilVeistreknng").html("");
        return true;
    }
}

function
regMelding() {
    const melding = {
        veistrekning : $("#veistrekning").val(),
        fraSted : $("#fraSted").val(),
        tilSted : $("#tilSted").val(),
        fraDatoTid : $("#fraDatoTid").val(),
        tilDatoTid : $("#tilDatoTid").val(),
        melding : $("#melding").val(),
    };
    if(
        validerVeistrekning()){
        $.post("/lagre", melding, function(){
        });
    }
}

$(function(){
// kjøres når dokumentet er ferdig lastet
    hentAlle();
});
function
hentAlle() {
    $.get( "/hentAlleMeldinger", function( meldinger ) {
        formaterData(meldinger);
    });
}
function
formaterData(meldinger) {
    let ut = "<table class='table table-striped'><tr><th>Veistrekning</th><th>Fra sted</th><th>Til sted</th>" +
    "<th>Fra dato/tid</th><th>Til dato/tid</th>"+
    "<th>Melding</th><th></th><th></th></tr>";
    for (const m of meldinger) {
        ut += "<tr><td>" + m.veistrekning + "</td><td>" + m.fraSted +
            "</td><td>" + m.tilSted + "</td>" +
            "<td>" + m.fraDatoTid + "</td><td>" +
            m.tilDatoTid + "</td><td>" + m.melding + "</td>" +
            "</tr>";
    }
    ut += "</table>";
    $("#alleMeldinger").html(ut);
}