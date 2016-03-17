console.log('Server running at http://127.0.0.1:1337/');

yaml = require('js-yaml');
fs   = require('fs');

// Get document, or throw exception on error
//try {
  var data = fs.readFileSync('./_klr-weekly/2016-03-09-brain-keywords.yml', 'utf8');
  yaml.safeLoadAll(data, function (doc) {
    console.log(doc);
    if (doc) {
      run(doc);
    }
  });
  console.log('---');
//} catch (e) {
//  console.log(e);
//}

function run(doc) {
  var pluswords = new RegExp(' (без|в|где|для|до|за|зачем|из|к|как|какой|кем|когда|кого|ком|кому|который|к'
    +'то|куда|меня|мне|мной|мною|моего|моей|моему|моею|мои|моим|моими|моих|мой|мою'
    +'|моя|моё|моём|на|над|о|от|откуда|по|под|почему|про|ради|с|своего|своей|своем'
    +'у|своею|свои|своим|своими|своих|свой|свою|своя|своё|своём|себе|себя|сколько|'
    +'со|собой|собою|у|хочу|чего|чей|чем|чему|через|что|чём|я) ', 'g');

  var result = [];
  doc.clusters.forEach(function(cluster) {
    var res = [];
    cluster.groups.forEach(function(group) {
      var newres = [];
      if (res.length == 0) {
        res = group.words;
      } else {
        res.forEach(function(item){
          group.words.forEach(function(word) {
            newres.push((item + ' ' + word).trim());
          })
        })
        res = newres;
      }
    })
    result = result.concat(res);
  })
  console.log('pluswords');
  console.log(pluswords);

  result.forEach(function(str) {
    str = (' ' + str + ' ').replace(pluswords, ' +$1 ').trim();
    console.log(str);
  })

  console.log(result.length);
}
