var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));

app.get('/data', function(req, res) {
	console.log('I received a GET request');
});

app.listen(3000);
console.log("Server running on port 3000");








var colors = ["green", "lightseagreen", "teal", "Blue", "Steelblue", "midnightblue", "black", "maroon", "purple", "DarkOrchid"];


    function barChart() {
        var _chart = {};
        var _width = 800, _height = 450,
                _margins = {top: 30, left: 30, right: 30, bottom: 30},
                _x, _y,
                _data = [],
                // _colors = d3.scale.category20(),
                _colors = colors,

                _svg,
                _bodyG;
        _chart.render = function () {
            if (!_svg) {
                _svg = d3.select("body").append("svg")
                        .attr("height", _height)
                        .attr("width", _width);

                renderAxes(_svg);
                defineBodyClip(_svg);
            }
            renderBody(_svg);
        };
        function renderAxes(svg) {
            var axesG = svg.append("g")
                    .attr("class", "axes");
            var xAxis = d3.svg.axis()
                    .scale(_x.range([0, quadrantWidth()]))
                    .orient("bottom");
            var yAxis = d3.svg.axis()
                    .scale(_y.range([quadrantHeight(), 0]))
                    .orient("left");
            axesG.append("g")
                    .attr("class", "axis")
                    .attr("transform", function () {
                        return "translate(" + xStart() + "," + yStart() + ")";
                    })
                    .call(xAxis);
            axesG.append("g")
                    .attr("class", "axis")
                    .attr("transform", function () {
                        return "translate(" + xStart() + "," + yEnd() + ")";
                    })
                    .call(yAxis);
        }
        function defineBodyClip(svg) {
            var padding = 5;
            svg.append("defs")
                    .append("clipPath")
                    .attr("id", "body-clip")
                    .append("rect")
                    .attr("x", 0)
                    .attr("y", 0)
                    .attr("width", quadrantWidth() + 2 * padding)
                    .attr("height", quadrantHeight());
        }
        function renderBody(svg) {
            if (!_bodyG)
                _bodyG = svg.append("g")
                        .attr("class", "body")
                        .attr("transform", "translate("
                                + xStart()
                                + ","
                                + yEnd() + ")")
                        .attr("clip-path", "url(#body-clip)");
            renderBars();

        }
        function renderBars() {
            var padding = 2; // <-A
            _bodyG.selectAll("rect.bar")
                        .data(_data)
                    .enter()
                    .append("rect") // <-B
                    .attr("class", "bar");
            _bodyG.selectAll("rect.bar")
                        .data(_data)
                    .transition()
                    .attr("x", function (d) {
                        return _x(d.x); // <-C
                    })
                    .attr("y", function (d) {
                        return _y(d.y); // <-D
                    })
                    .attr("height", function (d) {
                        return yStart() - _y(d.y);
                    })
                    .attr("width", function(d){
                        return Math.floor(quadrantWidth() / _data.length) - padding;
                    })
                    .style("fill", function (d, i) { // <- H
                                    return colors[i];
                                });

        }
        function xStart() {
            return _margins.left;
        }
        function yStart() {
            return _height - _margins.bottom;
        }
        function xEnd() {
            return _width - _margins.right;
        }
        function yEnd() {
            return _margins.top;
        }
        function quadrantWidth() {
            return _width - _margins.left - _margins.right;
        }
        function quadrantHeight() {
            return _height - _margins.top - _margins.bottom;
        }
        _chart.width = function (w) {
            if (!arguments.length) return _width;
            _width = w;
            return _chart;
        };
        _chart.height = function (h) {
            if (!arguments.length) return _height;
            _height = h;
            return _chart;
        };
        _chart.margins = function (m) {
            if (!arguments.length) return _margins;
            _margins = m;
            return _chart;
        };
        _chart.colors = function (c) {
            if (!arguments.length) return _colors;
            _colors = c;
            return _chart;
        };
        _chart.x = function (x) {
            if (!arguments.length) return _x;
            _x = x;
            return _chart;
        };
        _chart.y = function (y) {
            if (!arguments.length) return _y;
            _y = y;
            return _chart;
        };
        _chart.setSeries = function (series) {
            _data = series;
            return _chart;
        };
        return _chart;
    }
    function randomData() {
        return Math.random() * 100;
    }

    var breakAnimation = false;
    function startAnimation(start, end, interval) {
        /*
        data.length = 0;
        for (var j = 0; j < numberOfDataPoint; ++j)
            data.push({x: j, y: randomData()});
        chart.render();
        */
       breakAnimation = false;
       data.length = 0;
       var timeout = interval * 1000;
       //console.log("Timeout: " + timeout);
        switch(document.getElementById('number-type-select').value) {
            case "1":
                var funcName = factorial;
                break;
            case "2":
                var funcName = fibonacci;
                break;
            default:
                var funcName = prime;
                break;
        }

        //console.log(funcName);
        var counter = start - 1;

        function next() {
            if(breakAnimation)
                return;
            data.length = 0;
            if(counter++ < end && counter >= 0) {
                var digitPercentage = digitDistribution(funcName(counter));
                //console.log(digitPercentage);
                for (var j = 0; j < numberOfDataPoint; ++j) {
                    data.push({x: j, y: digitPercentage[j]});
                }
                chart.render();
                document.getElementById('big-int-output').innerHTML = funcName(counter);
                setTimeout(next, timeout);
            }
        }
        next();   
    }


    function digitDist(num, funcNum) {
        console.log(funcNum);
        switch(funcNum) {
            case "1":
                var funcName = factorial;
                break;
            case "2":
                var funcName = fibonacci;
                break;
            default:
                var funcName = prime;
                break;
        }
        console.log(funcName);
        data.length = 0;
        var digitPercentage = digitDistribution(funcName(num));
        document.getElementById('big-int-output').innerHTML = funcName(num);
        for (var j = 0; j < numberOfDataPoint; ++j)
            data.push({x: j, y: digitPercentage[j]});
        chart.render();
    }

    var numberOfDataPoint = 10,
    // var numberOfDataPoint = 31,
        data = [];
    data = d3.range(numberOfDataPoint).map(function (i) {
        return {x: i, y: randomData()};
    });
    var chart = barChart()
            // .x(d3.scale.linear().domain([-1, 32]))
            .x(d3.scale.linear().domain([0, 10]))
            .y(d3.scale.linear().domain([0, 100]));
    chart.setSeries(data);
    chart.render();
    var abc = null;
    var cde = null;

    function foreverLoop() {
      abc = setInterval(function() {
         update();

         }, document.getElementById("interval").value * 1000);
      setTimeout(stopLoop, document.getElementById("time").value * 1000);
    }

    function stopLoop() {
      clearInterval(abc);
    }

    function stopAnimation() {
        breakAnimation = true;
    }