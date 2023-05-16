package com.example.proveeks1;

public class Melding {private String veistrekning;
    private String fraSted;
    private String tilSted;
    private String fraDatoTid;
    private String tilDatoTid;
    private String melding;
    public Melding(String veistrekning, String fraSted, String tilSted, String fraDatoTid,
                   String tilDatoTid, String melding) {
        this.veistrekning = veistrekning;
        this.fraSted = fraSted;
        this.tilSted = tilSted;
        this.fraDatoTid = fraDatoTid;
        this.tilDatoTid = tilDatoTid;
        this.melding = melding;
    }
    public Melding() {
    }
    public String getVeistrekning() {
        return veistrekning;
    }
    public void setVeistrekning(String veistrekning) {
        this.veistrekning = veistrekning;
    }
    public String getFraSted() {
        return fraSted;
    }
    public void setFraSted(String fraSted) {
        this.fraSted = fraSted;
    }
    public String getTilSted() {
        return tilSted;
    }
    public void setTilSted(String tilSted) {
        this.tilSted = tilSted;
    }
    public String getFraDatoTid() {
        return fraDatoTid;
    }
    public void setFraDatoTid(String fraDatoTid) {
        this.fraDatoTid = fraDatoTid;
    }
    public String getTilDatoTid() {
        return tilDatoTid;
    }
    public void setTilDatoTid(String tilDatoTid) {
        this.tilDatoTid = tilDatoTid;
    }
    public String getMelding() {
        return melding;
    }
    public void setMelding(String melding) {
        this.melding = melding;
    }
}
