console.log("oke")

const endpoint = "https://reqres.in/api/users"

fetch(endpoint,  {
    method: "POST",
    headers: {
        "content-type": "application/json",
    },
    body: JSON.stringify({
        email: "zagzgazg@gmail.com",
        firstName: "bro",
        lastName: "jancof",
    }),
})
    .then((result) => result.json())
    .then((data) => console.log(data))