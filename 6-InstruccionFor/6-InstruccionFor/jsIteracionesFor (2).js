function mostrar()
{
	var contador;
	var suma;
	var numero;

	contador=0;
	numero=prompt("ingrese un numero");

	for(contador=1;contador<numero;contador++)
		if(numero%contador==0)
		{
			suma=suma+contador;
		}
		if(suma==numero)
		{
			console.log("perfecto");
		}
		else
		{
			console.log("no es perfecto");
		}

}