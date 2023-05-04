
function ellenorzes(){
    cim = urlap.email.value
    if(cim.length==0){
alert('Az email cím űres!')
    }
    jelszo = urlap.jelszo.value
    if (jelszo.length ==0){
        alert('Az első jelszo nem lehet üres!')
    }if (jelszo.length<8 && jelszo.length>0 ){
            alert("A megadott első jelszo nem lehet 8 kerekternél rövidebb!")
    }
    jelszoujra = urlap.jelszoujra.value
    if (jelszoujra.length ==0){
        alert('A második jelszo nem lehet üres!')
    }if (jelszoujra.length<8 && jelszoujra.length>0 ){
            alert("A megadott második jelszo nem lehet 8 kerekternél rövidebb!")
    }
    jelszoujra = urlap.jelszoujra.value
    if ( jelszo != jelszoujra){
        alert("A két jelszó nem egyforma!")
    }

    szul =urlap.szuletesiev.value
if ( szul.length<4){
    alert (" Nem adott meg születési évet!")
    }

if (isNaN(szul)){
    alert(" A születési év 1500 és 2022 között kell hogy legyenek")
}
if (szul>2023 || szul < 1900){
    alert("A dátum nem megfelelő")
}

ir = urlap.number.value
if(isNaN(ir)){
    alert("A megadott adat nem irányítószá!")
}
if (ir.length != 4){
    alert("Az irányítószám nem megfelelő!")
}

elfogadom = urlap.hirlevel
if ( document.getElementById("hirlevel").checked == false){
    alert("Nem fogadta el a regisztrációs feltételeket!")
}

nev =urlap.nev.value
if ( nev.length ="czenczer"){
    alert (" nem czenczer")
    }
}