var data = {
  title:	'Cleaning Supplies',
  supplies:	['mop', 'broom', 'duster']
};
var html = new EJS({url: 'cleaning.ejs'}).render(data);

$("body").append(html);
