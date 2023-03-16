const express = require('express')
const data = `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>CPE499</title>
        <link rel="stylesheet" href="style.css">  
    </head>
    <body>
        <table>
            <img src="https://upload.wikimedia.org/wikipedia/en/f/f2/Hearthstone_2016_logo.png" width = "200px" alt="">
            <h1>CARD SHOP</h1>
            <div class = "bar">
                <ul>
                    <li>product</li>
                    <li>card list</li>
                    <li>inventory</li>
                </ul>
            </div>
        </table>
    </body>
    </html>
`

module.exports = data;