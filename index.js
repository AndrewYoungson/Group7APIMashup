const express = require("express")
const fetch = require("node-fetch")
var cors = require("cors")

const app = express()

app.use(cors())

let app_id = "3d4e1c62"
let app_key = "ed875966e89f4235eace543efc800652"

let endpoint = "entries"
let language_code = "en-gb"
let word = "example"

app.get("/:id", function (req, res) {
    const word = req.params.id;

    let url = `https://od-api.oxforddictionaries.com/api/v2${endpoint}/${language_code}/${word}`

    fetch(url, {
        method: "GET",
        mode: "no-cors",
        headers: { app_key: app_key, app_id: app_id},

    })
        .then((response) => response.json())
        .then((data) => res.send(data))
})

app.listen(5000)