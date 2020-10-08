if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
    .then(function (registration) {
      console.log('Registration successful, scope is:', registration.scope);
    })
    .catch(function (error) {
      console.log('Service worker registration failed, error:', error);
    });
}


document.getElementById('fetch').addEventListener("click", () => {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(function validateResponse(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log('==>>', err))
})
