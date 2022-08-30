
visitor();
let itemsName = selectedItems();
let itemsPrices = prices(itemsName);
payment (itemsName,itemsPrices);

function visitor (){
    alert ("¡Bienvenida a Action Pilates!");
    let visitorName = prompt("¿Cúal es tu nombre?");
    while(visitorName === "") {
        visitorName = prompt("¿Cúal es tu nombre?");
    }
}

function selectedItems (){
    let items;
    do {
        items = parseInt(prompt("¿Qué clase te deseas tomar?: \n 1. Pilates \n 2. Yoga \n 3. BodyCombat"))
    }
    while (items != 1 && items != 2 && items != 3)
    switch(items){
        case 1 :
            return "Pilates";
        case 2 :
            return "Yoga";
        case 3 :
            return "BodyCombat";
    }
}

function prices (items){
    if (items === "Pilates"){
        return 500;
    }
        else if (items === "Yoga"){
            return 500;
        }
            else if (items === "BodyCombat"){
                return 600;
            }
}

function payment (items, prices){
    alert("Gracias por elegir la clase " + items + "\n Tiene un precio de $" + prices + " MXN");
    let pay = parseInt(prompt("El pago se puede realizar en pagos, ¿cuanto deses aportar?"));
    
    if (pay >= prices){
        alert ("¡Gracias! Esperemos que disfrutes tu clases! \n Se le devolvera la cantidad de: $" + (pay - prices) + " MXN");
    }
        else {
            alert ("Aun tienes pendiente pagar la cantidad de: $"+ (prices - pay) +" MXN");
        }
}
