const PORT = 8000

const axios = require('axios')
const express = require('express')
const cheerio = require('cheerio')
const { response } = require('express')

const app = express()

const url = 'https://www.forex.com/ie/'

axios(url)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)

        const names = []
        $('.=====input class======', html).each(function () {
            const title = $(this).text()
            const url = $(this).find('a').attr('href')
            names.push({
                title,
                url
            })
        })
        console.log(names)
    }).catch(err => console.log(err))

app.listen(PORT, () => console.log('Server is running!'))