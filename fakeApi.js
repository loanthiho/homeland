const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(jsonServer.bodyParser);

// Custom routes for authentication
server.post('/signup', (req, res) => {
  const { name, email, password } = req.body;
  const user = { id: Date.now(), name, email, password };
  router.db.get('users').push(user).write();
  res.status(200).json({ message: 'User registered successfully.' });
});

server.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = router.db
    .get('users')
    .find({ email, password })
    .value();

  if (user) {
    const authToken = { userId: user.id, token: Date.now().toString() };
    router.db.get('authTokens').push(authToken).write();
    res.status(200).json({ message: 'Login successful.', authToken });
  } else {
    res.status(401).json({ error: 'Invalid credentials.' });
  }
});

server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
