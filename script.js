function juros () {
 var resultado = document.getElementById('resultado');
 var p = parseFloat(document.getElementById("p").value);
 var i = parseFloat(document.getElementById("i").value);
 var n = parseFloat(document.getElementById("n").value);
 var calc='';

calc = p * ((((1 + (i/100))** n) - 1) / (i/100));
 
resultado.textContent = `Olá, se você aplicar ${p} reais por mês, à taxa de ${i/100}% ao mês, durante ${n} meses, acumulará uma poupança de ${calc.toFixed(2)} reais`;
}
