import express from 'express';
import path from 'path';
import url from 'url';

const app = express();
const port = 8080;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/node_modules',express.static(path.join(__dirname, 'node_modules')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});


app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});