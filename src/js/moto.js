function Moto(){
	this.litrosGastados = function(distancia){
		// retorna la cantidad de litros que gasta en una distancia
        var consumo = 21; 
        var bencina = 673;
		//retorna la cantidad de litros que gasta en una distancia
        return (distancia/consumo)*bencina;
	};
    this.pasajeros = 2;
    this.tipo = 'motocicleta';
    this.img = 'src/img/moto.jpg';
}