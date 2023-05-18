function executar(ev){
	var dia = document.getElementById("dia").value;
	var mes = document.getElementById("mes").value;
	var ano = document.getElementById("ano").value;

	var dataNascimento = new Date(0 + ano, 0 + mes - 1, 0 + dia);
	var hoje = new Date();
	var intervalo = hoje - dataNascimento;

	var dias = parseInt((hoje - intervalo) / (24 * 3600 * 1000));

	var d1Y = dataNascimento.getFullYear();
	var d2Y = hoje.getFullYear();
	var d1M = dataNascimento.getMonth();
	var d2M = hoje.getMonth();

	var meses = (d2M+12*d2Y)-(d1M+12*d1Y);
	var anos = hoje.getFullYear()-dataNascimento.getFullYear();
    document.getElementById("diaa").innerHTML = dias;
    document.getElementById("meses").innerHTML = meses;
    document.getElementById("anoo").innerHTML = anos;

}