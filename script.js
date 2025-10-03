let clienteWeb = null;

const clientId = "ESP8266" + Math.floor(Math.random() * 900) + 100;
clienteWeb = new PaymentMethodChangeEvent.MQTT.Cliente("broker.hivemq.com", 8084, clientId);

clienteWeb.connect({
    useSSL: true,
    timeout: 5,
    onSucess: function () {
        alert('Conectado com sucesso!');
    },
    onFailure: function(){
        alert('A conexão falhou!')
    }
})

function ligarAmarelo(){
    document.getElementById("amarelo").classList.add("amar");

    //fazendo publish no tópico, (broker)
    const msgAmar = new Paho.MQTT.Message("");
    msgAmar.destinationName = "CGGB/led/ligado";
    clienteWeb.send(msgAmar);
}

function desligarAmarelo(){
    document.getElementById("amarelo").classList.remove("amar");

    let msg = new Paho.MQTT.Message('');
    msg.destinationName = "CGGB/led/desligado";
    clienteWeb.send(msg);
}