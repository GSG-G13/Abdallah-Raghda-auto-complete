const fs = require('fs');
const path= require('path');




const router = (request, response) => {
  const endpoint = request.url;

  if(endpoint === '/') {

    const filePath = path.join(__dirname, '..' ,'public','index.html');
    fs.readFile(filePath, (error, file) => {
      if (error) {
        console.log(error);
        return;
      } else {
        response.writeHead(200, { 'Content-Type': 'text/html' })
        response.end(file);
      }
    })
  }  else if (endpoint === '/public/main.css') {
    const filePath = path.join(__dirname, '..','public', 'main.css');
    fs.readFile(filePath, (error, file) => {
      if (error) {
        console.log(error);
        response.writeHead(500, { 'Content-Type': 'text/plain' });
        response.end('Internal Server Error');
        return;
      }
      else {
      response.writeHead(200, { 'Content-Type': 'text/css' });
      response.end(file);
    }});
  }  else if (endpoint === '/public/script.js') {
    console.log('here is a script');
    const filePath = path.join(__dirname, '..','public', 'script.js');
    fs.readFile(filePath, (error, file) => {
      if (error) {
        console.log(error);
        response.writeHead(500, { 'Content-Type': 'text/plain' });
        response.end('Internal Server Error');
        return;
      }
      else {
      response.writeHead(200, { 'Content-Type': 'text/js' });
      response.end(file);
    }});
  }  else if (endpoint === '/countries') {
    const filePath = path.join(__dirname, 'countries.json');
    fs.readFile(filePath, (error, file) => {
      if (error) {
        console.log(error);
        response.writeHead(500, { 'Content-Type': 'text/plain' });
        response.end('Internal Server Error');
        return;
      }
      else {
      response.writeHead(200, { 'Content-Type': 'text/json' });
      response.end(file);
    }});
  }
}

module.exports = router