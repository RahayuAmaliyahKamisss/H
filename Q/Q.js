const http = require('http');
const express = require('express');
const app = express();

var motoGP = [
    {
        circuit: 'Losail',
        location: 'Qatar',
        winner: {
            firstName: 'Andrea',
            lastName: 'Dovizioso',
            country: 'Italy'
        }
    },
    {
        circuit: 'Autodromo',
        location: 'Argentine',
        winner: {
            firstName: 'Cal',
            lastName: 'Crutchlow',
            country: 'UK'
        }
    },
    {
        circuit: 'De Jere',
        location: 'Spain',
        winner: {
            firstName: 'Valentino',
            lastName: 'Rosi',
            country: 'Italy'
        }
    },
    {
        circuit: 'Mugello',
        location: 'Italy',
        winner: {
            firstName: 'Andrea',
            lastName: 'Dovizioso',
            country: 'Italy'
        }
    }
];

app.get('/', (req, res) => {
    res.json(motoGP);
});

app.get('/country', (req, res) => {
    const countries = {};

    motoGP.forEach((race) => {
        const country = race.winner.country;
        if (!countries[country]) {
            countries[country] = [];
        }
        countries[country].push(race);
    });

    res.json(countries);
});

app.get('/name', (req, res) => {
    const winners = {};
    motoGP.forEach((race) => {
        const name = `${race.winner.firstName} ${race.winner.lastName}`;
        if (!winners[name]) {
            winners[name] = [];
        }
        winners[name].push(race);
    });

    res.json(winners);
});
app.get('*', (req, res) => {
    res.status(400).send("Bad Request");
});

const port = 5000;
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`); 
});
