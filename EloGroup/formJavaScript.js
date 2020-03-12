function Enviar() {

    var nome = $("#nomeid").val();
    //var telefone = $("#foneid").val().replace(/[^0-9]/g, "");
    var telefone = $("#foneid").val();
    $('#comoconheceuid').val($('#conheceuid').children("option:selected").val());

    if (nome.match(/[A-z][a-z]* [A-z][a-z]*/) == null) {
        alert('Nome Inválido, colocar Nome e Sobrenome');
    } else {
        if (telefone.length != 11 || telefone.substring(2, 3) !== '-') {
            alert('Telefone Inválido');
        } else {
			Post();
			$('#submitid').prop('disabled', true);
    }
}
}
function Post() {
	var json = ConverterJSON("#formid");
	var Form = this;
	alert(JSON.stringify(json));

	$.ajax({
		cache: false,
		url: 'http://localhost:8080',
		type: "POST",
		dataType: "json",
		data: json,
		context: Form
		//success: function (callback) {
		//Where $(this) => context == FORM
		//alert(JSON.parse(callback));
		//$(this).html("Success!");
		//},
		//error: function () {
		//$(this).html("Error!");
		//}
	});
};
		

function ConverterJSON(form) {
	var array = jQuery(form).serializeArray();
	var json = {};

	jQuery.each(array, function () {
		if (this.name === 'redesocial') {
		} else {
			json[this.name] = this.value || '';
		}
	}
	);
	var checkbox = [];
	$('input[type=checkbox]:checked').each(function () {
		checkbox.push($(this).val());
	});
	json['redesocial'] = checkbox;
	return json;
}
