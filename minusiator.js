// выводит список слов из файла activity-3, которых нет в файлах activity-1 и activity-2

fs = require('fs');
uniq = require('uniq');

slug = '2016-03-30';
word = 'tension';

var data1 = fs.readFileSync('./_klr-weekly/' + slug + '/step6/' + word + '-1.txt', 'utf8');
var data2 = fs.readFileSync('./_klr-weekly/' + slug + '/step6/' + word + '-2.txt', 'utf8');
var data3 = fs.readFileSync('./_klr-weekly/' + slug + '/step6/' + word + '-3.txt', 'utf8');

var w12 = uniq((data1 + ' ' + data2).split(/\s/));
var w3 = uniq(data3.split(/\s/));

var minus = w3.filter(function(item){
  return w12.indexOf(item) < 0;
})

console.log(minus.join("\n"));
