
function repeatHello(callback) {
    let interval = setInterval(() => {
        callback();
    }, 1000);

    setTimeout(() => {
        clearInterval(interval)
    }, 5000);
}

repeatHello(() => console.log("Hello"));