```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>HOLA</h1>
    <script>

        async function realizarPeticion(url, metodo, datos = null) {

            try {
                const options = {
                    method: metodo,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: datos ? JSON.stringify(datos) : null
                }

                const reponse = await fetch(url, options)

                const jsonResponse = await reponse.json()

                const jsonString = JSON.stringify(jsonResponse)

                //localStorage.setItem("JSONDATA", jsonString)
                const value = localStorage.getItem("JSONDATA")
                console.log(value)
                localStorage.removeItem("JSONDATA")
                

            } catch (error) {
                console.error("error:", error)
            }

        }


        //realizarPeticion("https://jsonplaceholder.typicode.com/posts", "GET");

        //realizarPeticion("https://jsonplaceholder.typicode.com/posts/17", "GET");

        const newPost = {
            id : 17,
            title: "fugit voluptas sed molestias voluptatem provident",
            userId : 7077
        }

       // realizarPeticion("https://jsonplaceholder.typicode.com/posts", "POST", newPost);

        const updatePost = {
            id : 17,
            title: "fugit voluptas sed molestias voluptatem provident",
            userId : 101
        }

        realizarPeticion("https://jsonplaceholder.typicode.com/posts/1", "PUT", updatePost);

 
        // console.log(date)
        // fetch("https://jsonplaceholder.typicode.com/posts", {
        //     method:"POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify({
        //         name:"michel",
        //         edad:34
        //     })
        // }).then(resultado=>resultado.json())
        // .then(data=>console.log(data))
        // .catch(err=>console.error(err.message))
        // .finally(console.log(Date.now()))
    </script>
</body>

</html>
```