function oblicz(){
    let typ=document.getElementById("typ").value
    let paliwo=document.getElementById("litry").value
    if(typ==1)
    {
        let wynik=paliwo*4
        document.getElementById("wynik").innerHTML=wynik
    }
    else if(typ==2)
    {
        let wynik=paliwo*3.5
        document.getElementById("wynik").innerHTML=wynik
    }
    else
    {
        document.getElementById("wynik").innerHTML="błąd"
    }
}