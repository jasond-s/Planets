
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Planets - By jasond_s' });
};