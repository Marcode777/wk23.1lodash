var presidentialCandididatesOfDoom = [
        {
            "name": "Bern",
            "lairs": [{"name":"Washington"}, {"name": "Vermont"}, {"name": "Brooklyn"}]
        },
        {
            "name": "Hillary",
            "lairs": [{"name":"Washington"}, {"name": "New York"}, {"name": "Arkansas"}]
        },
        {
            "name": "Trump",
            "lairs": [{"name":"New York"}]
        },
        {
            "name": "Cruz",
            "lairs": [{"name": "Washington"}, {"name": "New York"}]
        }
    ]

// need to write something that will print ot WASHINGTON, WASHINGTON, NEW YORK, WASHINGTON

for(i=0; i < presidentialCandididatesOfDoom.length; i++){
    console.log(presidentialCandididatesOfDoom[i].lairs[0].name);
}
