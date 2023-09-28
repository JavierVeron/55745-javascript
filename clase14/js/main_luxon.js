// Definir nuestro objeto DateTime con Luxon
const ejecutarLuxon = () => {
    const DateTime = luxon.DateTime;
    
    // Defino un fecha/hora en formato local
    /* let fecha = DateTime.local(2023, 9, 27, 16, 30);
    console.log(fecha); */
    
    // Defino una fecha/hora a partir de un objeto
    /* let fecha = DateTime.fromObject(
        {day:26, month:9, year:2023},
        {zone:"America/Buenos_Aires", numberingSystem:"beng"}
    );
    console.log(fecha); */
    
    // Defino una fecha/hora a partir del formato ISO AAAA-MM-DDTHH:MM
    /* let fecha = DateTime.fromISO("2023-09-25T22:20");
    console.log(fecha); */

    // Obtengo la fecha/hora actual
    let fechaActual = DateTime.now();
    /* console.log(fechaActual.toString());
    console.log("Año/Mes/Día: " + fechaActual.year + "/" + fechaActual.month + "/" + fechaActual.day);
    console.log("Hora/Minuto/Segundo: " + fechaActual.hour + ":" + fechaActual.minute + ":" + fechaActual.second); */

    // Obtengo datos adicionales
    /* console.log("Zona Horaria: " + fechaActual.zoneName);
    console.log("Días del Mes: " + fechaActual.daysInMonth); */

    // Formateando la Fecha
    /* console.log("Fecha: " + fechaActual.toLocaleString(DateTime.DATETIME_FULL)); */

    // Agregando tiempo
    /* const suma = fechaActual.plus({minutes:10});
    console.log("Fecha: " + suma.toLocaleString(DateTime.DATETIME_SHORT)); */

    // Quitando tiempo
    /* const resta = fechaActual.minus({hour:2});
    console.log("Fecha: " + resta.toLocaleString(DateTime.DATETIME_SHORT)); */

    // Definiendo Duraciones
    /* const Duration = luxon.Duration;
    const duracion = Duration.fromObject({ hours: 1, minutes: 30 });
    const suma = fechaActual.plus(duracion);
    console.log("Fecha: " + suma.toLocaleString(DateTime.DATETIME_SHORT)); */

    // Calculando Intervalos
    const Intervalo = luxon.Interval;
    const fechaDestino = DateTime.fromObject({day:21, month:12, year:2023});
    const diferencia = Intervalo.fromDateTimes(fechaActual, fechaDestino);
    console.log("Falta para el Verano: " + Math.round(diferencia.length("days")) + " días!") ;








}

document.getElementById("btnLuxon").onclick = ejecutarLuxon;