//EJECUCIÓN FUNCIONES
initCentralMap();
initSatMaps();

let color = ['#F7FCFD', '#CCECE6', '#66C2A4', '#238B45', '#00441B'];

//MAPA CENTRAL
function initCentralMap() {
    let width = 370;
    let height = 250;

    d3.json('../data/provincias_v1.json', function(error,data) {
        if (error) throw error;

        let provs = topojson.feature(data, data.objects.provincias_v1);

        //Desarrollo del mapa
        let map = d3.select("#main_map");

        let svg = map.append("svg")
            .attr("width", width)
            .attr("height", height);
        
        const projection = d3.geoConicConformalSpain().scale(2000).fitSize([width,height], provs);
        const path = d3.geoPath(projection);        

        svg.selectAll(".provincias")
            .data(provs.features)
            .enter()
            .append("path")
            .attr("class", "provincias")
            .style('fill', function(d) {
                if (d.properties.total_porc <= 15) {
                    return color[0];
                } else if (d.properties.total_porc > 15 && d.properties.total_porc <= 19) {
                    return color[1];
                } else if (d.properties.total_porc > 19 && d.properties.total_porc <= 21) {
                    return color[2];
                } else if (d.properties.total_porc > 21 && d.properties.total_porc <= 25) {
                    return color[3];
                } else {
                    return color[4];
                }
            })
            .style('stroke', '#c3c3c3')
            .style('stroke-width', '0.25px')
            .attr("d", path);
    });
}

//MAPAS SATÉLITE
function initSatMaps() {
    let width = 100;
    let height = 95;

    d3.json('../data/provincias_v1.json', function(error,data) {
        if (error) throw error;

        let provs = topojson.feature(data, data.objects.provincias_v1);

        const projection = d3.geoConicConformalSpain().scale(2000).fitSize([width,height], provs);
        const path = d3.geoPath(projection);

        //Desarrollo de los mapas > Cada uno se debe desarrollar de forma independiente porque cuenta con distintos datos

        //MAPA 1 >> LIFE EXPECTANCY COEFFICIENT
        let map_1 = d3.select(`#map_sat1`);

        let svg_1 = map_1.append("svg")
        .attr("width", width)
        .attr("height", height);       

        svg_1.selectAll(".provincias1")
            .data(provs.features)
            .enter()
            .append("path")
            .attr("class", "provincias1")
            .style('fill', function(d) {
                if (d.properties.C_ESPERANZ <= -77.4114) {
                    return color[0];
                } else if (d.properties.C_ESPERANZ > -77.4114 && d.properties.C_ESPERANZ <= -37.6521) {
                    return color[1];
                } else if (d.properties.C_ESPERANZ > -37.6521 && d.properties.C_ESPERANZ <= -16.5517) {
                    return color[2];
                } else if (d.properties.C_ESPERANZ > -16.5517 && d.properties.C_ESPERANZ <= -0.1320) {
                    return color[3];
                } else { //Hasta '8.3888'
                    return color[4];
                }
            })
            .style('stroke', '#c3c3c3')
            .style('stroke-width', '0.15px')
            .attr("d", path);

        //MAPA 2 >> GROSS BIRTH RATE
        let map_2 = d3.select(`#map_sat2`);

        let svg_2 = map_2.append("svg")
        .attr("width", width)
        .attr("height", height);       

        svg_2.selectAll(".provincias2")
            .data(provs.features)
            .enter()
            .append("path")
            .attr("class", "provincias2")
            .style('fill', function(d) {
                //C_TASA_FEC
                if (d.properties.C_TASA_FEC <= -16.5173) {
                    return color[0];
                } else if (d.properties.C_TASA_FEC > -16.5173 && d.properties.C_TASA_FEC <= -10.2670) {
                    return color[1];
                } else if (d.properties.C_TASA_FEC > -10.2670 && d.properties.C_TASA_FEC <= -3.3772) {
                    return color[2];
                } else if (d.properties.C_TASA_FEC > -3.3772 && d.properties.C_TASA_FEC <= 6.7270) {
                    return color[3];
                } else { //Hasta '35.9943'
                    return color[4];
                }
            })
            .style('stroke', '#c3c3c3')
            .style('stroke-width', '0.15px')
            .attr("d", path);

        //MAPA 3 >> NET MIGRATION
        let map_3 = d3.select(`#map_sat3`);

        let svg_3 = map_3.append("svg")
        .attr("width", width)
        .attr("height", height);       

        svg_3.selectAll(".provincias3")
            .data(provs.features)
            .enter()
            .append("path")
            .attr("class", "provincias3")
            .style('fill', function(d) {
                //C_SALDO_NE
                if (d.properties.C_SALDO_NE <= -0.0132) {
                    return color[0];
                } else if (d.properties.C_SALDO_NE > -0.0132 && d.properties.C_SALDO_NE <= -0.0062) {
                    return color[1];
                } else if (d.properties.C_SALDO_NE > -0.0062 && d.properties.C_SALDO_NE <= -0.0026) {
                    return color[2];
                } else if (d.properties.C_SALDO_NE > -0.0026 && d.properties.C_SALDO_NE <= -0.0012) {
                    return color[3];
                } else { //Hasta '-0.0001'
                    return color[4];
                }
            })
            .style('stroke', '#c3c3c3')
            .style('stroke-width', '0.15px')
            .attr("d", path);
        
        //MAPA 4 >> FOREIGNS POPULATION
        let map_4 = d3.select(`#map_sat4`);

        let svg_4 = map_4.append("svg")
        .attr("width", width)
        .attr("height", height);       

        svg_4.selectAll(".provincias4")
            .data(provs.features)
            .enter()
            .append("path")
            .attr("class", "provincias4")
            .style('fill', function(d) {
                //C_PORC_EXT
                if (d.properties.C_PORC_EXT <= -0.3918) {
                    return color[0];
                } else if (d.properties.C_PORC_EXT > -0.3918 && d.properties.C_PORC_EXT <= 0.1455) {
                    return color[1];
                } else if (d.properties.C_PORC_EXT > 0.1455 && d.properties.C_PORC_EXT <= 1.3042) {
                    return color[2];
                } else if (d.properties.C_PORC_EXT > 1.3042 && d.properties.C_PORC_EXT <= 10.6158) {
                    return color[3];
                } else { //Hasta '17.3739'
                    return color[4];
                }
            })
            .style('stroke', '#c3c3c3')
            .style('stroke-width', '0.15px')
            .attr("d", path);

        //MAPA 5 >> RESIDENTIAL CARE FACILITIES
        let map_5 = d3.select(`#map_sat5`);

        let svg_5 = map_5.append("svg")
        .attr("width", width)
        .attr("height", height);       

        svg_5.selectAll(".provincias5")
            .data(provs.features)
            .enter()
            .append("path")
            .attr("class", "provincias5")
            .style('fill', function(d) {
                //C_PORC_PLA
                if (d.properties.C_PORC_PLA <= -10.4202) {
                    return color[0];
                } else if (d.properties.C_PORC_PLA > -10.4202 && d.properties.C_PORC_PLA <= -4.8006) {
                    return color[1];
                } else if (d.properties.C_PORC_PLA > -4.8006 && d.properties.C_PORC_PLA <= 0.6620) {
                    return color[2];
                } else if (d.properties.C_PORC_PLA > 0.6620 && d.properties.C_PORC_PLA <= 7.1824) {
                    return color[3];
                } else { //Hasta '11.8336'
                    return color[4];
                }
            })
            .style('stroke', '#c3c3c3')
            .style('stroke-width', '0.15px')
            .attr("d", path);

        //MAPA 6 >> HEALTH CARE CENTERS
        let map_6 = d3.select(`#map_sat6`);

        let svg_6 = map_6.append("svg")
        .attr("width", width)
        .attr("height", height);       

        svg_6.selectAll(".provincias6")
            .data(provs.features)
            .enter()
            .append("path")
            .attr("class", "provincias6")
            .style('fill', function(d) {
                //C_TASA_CEN
                if (d.properties.C_TASA_CEN <= -1.8525) {
                    return color[0];
                } else if (d.properties.C_TASA_CEN > -1.8525 && d.properties.C_TASA_CEN <= -0.0882) {
                    return color[1];
                } else if (d.properties.C_TASA_CEN > -0.0882 && d.properties.C_TASA_CEN <= 0.2572) {
                    return color[2];
                } else if (d.properties.C_TASA_CEN > 0.2572 && d.properties.C_TASA_CEN <= 0.8931) {
                    return color[3];
                } else { //Hasta '1.6862'
                    return color[4];
                }
            })
            .style('stroke', '#c3c3c3')
            .style('stroke-width', '0.15px')
            .attr("d", path);

        //MAPA 7 >> GROSS INCOME
        let map_7 = d3.select(`#map_sat7`);

        let svg_7 = map_7.append("svg")
        .attr("width", width)
        .attr("height", height);       

        svg_7.selectAll(".provincias7")
            .data(provs.features)
            .enter()
            .append("path")
            .attr("class", "provincias7")
            .style('fill', function(d) {
                //C_RENTA
                if (d.properties.C_RENTA <= 0.0045) {
                    return color[0];
                } else if (d.properties.C_RENTA > 0.0045 && d.properties.C_RENTA <= 0.0087) {
                    return color[1];
                } else if (d.properties.C_RENTA > 0.0087 && d.properties.C_RENTA <= 0.0130) {
                    return color[2];
                } else if (d.properties.C_RENTA > 0.0130 && d.properties.C_RENTA <= 0.0313) {
                    return color[3];
                } else { //Hasta '0.0403'
                    return color[4];
                }
            })
            .style('stroke', '#c3c3c3')
            .style('stroke-width', '0.15px')
            .attr("d", path);

        //MAPA 8 >> MEAN TEMPERATURE
        let map_8 = d3.select(`#map_sat8`);

        let svg_8 = map_8.append("svg")
        .attr("width", width)
        .attr("height", height);       

        svg_8.selectAll(".provincias8")
            .data(provs.features)
            .enter()
            .append("path")
            .attr("class", "provincias8")
            .style('fill', function(d) {
                //C_TEMPERAT
                if (d.properties.C_TEMPERAT <= -6.0121) {
                    return color[0];
                } else if (d.properties.C_TEMPERAT > -6.0121 && d.properties.C_TEMPERAT <= 5.4605) {
                    return color[1];
                } else if (d.properties.C_TEMPERAT > 5.4605 && d.properties.C_TEMPERAT <= 11.2541) {
                    return color[2];
                } else if (d.properties.C_TEMPERAT > 11.2541 && d.properties.C_TEMPERAT <= 32.2672) {
                    return color[3];
                } else { //Hasta '41.0801'
                    return color[4];
                }
            })
            .style('stroke', '#c3c3c3')
            .style('stroke-width', '0.15px')
            .attr("d", path);
    });
}

// setTimeout(() => {
//     html2canvas(document.querySelector("#container"))
//     .then(canvas => {
//         canvas.style.display = 'none';
//         document.body.appendChild(canvas);
//         return canvas;
//     })
//     .then(canvas => {
//         const image = canvas.toDataURL('image/png')
//         const a = document.createElement('a')
//         a.setAttribute('download', './poster_envejecimiento.png')
//         a.setAttribute('href', image)
//         a.click()
//         canvas.remove()
//     });
// }, 4000);