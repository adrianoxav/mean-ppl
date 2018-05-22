module.exports = function(app) {
  app.use('/assessment', require('./Assessment'));
  app.use('/asignacion', require('./Assignation'));
  app.use('/cuestionario', require('./Cuestionario'));
  app.use('/curso', require('./Curso'));
  app.use('/evaluacion_estudiante', require('./Evaluacion_estudiante'));
  app.use('/evaluacion', require('./Evaluacion'));
  app.use('/persona',  require('./Persona'));
  app.use('/pregunta_assessment', require('./Pregunta_assessment'));
  app.use('/pregunta',  require('./Pregunta'));
  app.use('/video_curso',  require('./Video_curso'));
  app.use('/video', require('./Video'));
  app.use('/book', require('./book'));
  //app.use('/books', express.static(path.join(__dirname, 'dist')));
//  app.use('/assessments', express.static(path.join(__dirname, 'dist')));
//app.use('/video_curso', authApi.profesor, require('./routes/rubrica.router'))
//app.use('/persona', authApi.estudiante, require('./routes/respuestas.router'))
app.get('/', function (req, res) {
  res.json({message: 'Server working!'});
});

}
