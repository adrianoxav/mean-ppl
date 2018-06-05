var AuthenticationController = require('./AuthenticationController');


module.exports = function(app) {
  app.use('/assessment',AuthenticationController.isAuthenticated,  require('./Assessment'));
  app.use('/asignacion',AuthenticationController.isAuthenticated,  require('./Assignation'));
  app.use('/cuestionario', AuthenticationController.isAuthenticated, require('./Cuestionario'));
  app.use('/curso',AuthenticationController.isAuthenticated,  require('./Curso'));
  app.use('/evaluacion_estudiante', AuthenticationController.isAuthenticated, require('./Evaluacion_estudiante'));
  app.use('/evaluacion',AuthenticationController.isAuthenticated,  require('./Evaluacion'));
  app.use('/persona', AuthenticationController.isAuthenticated,  require('./Persona'));
  app.use('/pregunta_assessment', AuthenticationController.isAuthenticated, require('./Pregunta_assessment'));
  app.use('/pregunta',AuthenticationController.isAuthenticated,   require('./Pregunta'));
  app.use('/video_curso',AuthenticationController.isAuthenticated,   require('./Video_curso'));
  app.use('/video', AuthenticationController.isAuthenticated, require('./Video'));
  app.use('/book', require('./book'));
  app.use('/user',AuthenticationController.isAuthenticated,  require('./User'));

  app.use('/api', require('./api'));

  //app.use('/books', express.static(path.join(__dirname, 'dist')));
//  app.use('/assessments', express.static(path.join(__dirname, 'dist')));
//app.use('/video_curso', authApi.profesor, require('./routes/rubrica.router'))
//app.use('/persona', authApi.estudiante, require('./routes/respuestas.router'))
app.get('/', function (req, res) {
  res.json({message: 'Server working!'});
});

}
