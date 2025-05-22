function helloWorld() {
    console.log("check this code");
    console.log("check this one as well");
  }

  function getApiData() {
    fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })

    console.log('Fetching complete');
}