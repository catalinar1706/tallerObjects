class Prestamo {
    constructor(documentoUsuario, nombreUsuario , valorPrestamo , valorInteres, fechaPrestamo , numeroCuotas ) {
      // Constructor con el documento y el usuario, el valor del préstamo, el valor del interés, la fecha del préstamo y el número de cuotas
      this.documentoUsuario = documentoUsuario;   
      this.nombreUsuario = nombreUsuario;         
      this.valorPrestamo = valorPrestamo;         
      this.valorInteres = valorInteres;           
      this.fechaPrestamo = fechaPrestamo;         
      this.numeroCuotas = numeroCuotas;          
      
      // Calcular el valor total del prestamo con intereses
      this.calcularValorTotalPrestamo();
    }
  
    // Metodo para calcular el valor total del prestamo con intereses
    calcularValorTotalPrestamo() {
      // Fórmula para calcular el valor total del préstamo con intereses
      this.valorPrestamoConIntereses = this.valorPrestamo * (1 + this.valorInteres / 100);
    }
  
    // Metodo para calcular el valor de cada cuota con intereses
    valorPagarCuotasIntereses() {
      // Calcular el valor de cada cuota con intereses
      let cuotaConIntereses = this.valorPrestamoConIntereses / this.numeroCuotas;
      return cuotaConIntereses;
    }
  
    // Metodo para calcular el valor de cada cuota sin intereses
    valorPagarCuotas() {
      // Calcular el valor de cada cuota sin intereses
      let cuotaSinIntereses = this.valorPrestamo / this.numeroCuotas;
      return cuotaSinIntereses;
    }
  
    // Metodo para pagar una cuota del prestamo
    pagarCuota(valorPagar) {
      // Restar el valor pagado del monto total del prestamo con intereses
      this.valorPrestamoConIntereses -= valorPagar;
      // Asegurar que no sea menor que cero
      this.valorPrestamoConIntereses = this.valorPrestamoConIntereses < 0 ? 0 : this.valorPrestamoConIntereses;
    }
  
    // Metodo para refinanciar el préstamo con un nuevo número de cuotas
    refinanciar(nuevoNumeroCuotas) {    
      // Actualizar el numero de cuotas y recalcular el valor total del préstamo con intereses
      this.numeroCuotas = nuevoNumeroCuotas;
      this.calcularValorTotalPrestamo();
    }
  
    // Metodo para representar la información del prestamo como una cadena de texto
    toString() {
      return `Detalles del Prestamo:
        Documento del Usuario: ${this.documentoUsuario}
        Nombre del Usuario: ${this.nombreUsuario}
        Valor del Préstamo: ${this.valorPrestamo.toFixed(2)}
        Valor del Préstamo con Intereses: ${this.valorPrestamoConIntereses.toFixed(2)}
        Fecha del Préstamo: ${this.fechaPrestamo.toISOString().split('T')[0]}
        Tasa de Interés: ${this.valorInteres.toFixed(2)}%
         Número de Cuotas: ${this.numeroCuotas}`;
    }
  }
  
  const prestamo = new Prestamo('10029753', 'María López', 800000, 7, new Date(), 10);
  console.log(prestamo.toString());
  console.log('Cuota con intereses:', prestamo.valorPagarCuotasIntereses().toFixed(2));
  console.log('Cuota sin intereses:', prestamo.valorPagarCuotas().toFixed(2));
  prestamo.pagarCuota(10000);
  console.log('Valor pendiente con intereses:', prestamo.valorPagarCuotasIntereses().toFixed(2));
  prestamo.refinanciar(12);
 