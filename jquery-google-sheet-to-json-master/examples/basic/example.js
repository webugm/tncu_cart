$(document).ready(function(){

	var worksheets = [
		'', // defaults to first worksheet without id
		'133784872'];

	worksheets.forEach(function(worksheet){
 		$.googleSheetToJSON('1Gq8eCOzeUXxYzqnSDz9UoRIS_6fPbycEmDI4BNN_UTY', worksheet)
			.done(function(rows){

				var $container = $('<div>');
				$container.append('<h1>' + (worksheet || 'default') + '</h1>');
				rows.forEach(function(row){
					$dl = $('<dl>');
					Object.getOwnPropertyNames(row).forEach(function(name){
						var val = [].concat(row[name]).join(' / ');
						$dl.append('<dt>' + name + '</dt><dd>' + val + '</dd>');
					});
					$container.append($dl);
				});
				$(document.body).append($container);
			})
			.fail(function(err){
				console.log('error!', err);
			});
	});
});
//https://docs.google.com/spreadsheets/d/1Gq8eCOzeUXxYzqnSDz9UoRIS_6fPbycEmDI4BNN_UTY/edit#gid=133784872
