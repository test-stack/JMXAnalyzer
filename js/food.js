/*This software is released under the MIT License

Copyright (C) 2014 Denes Csala http://www.csaladen.es

The following software uses the javascript frameworks below,
all of which are distributed under the MIT or GNU/GPL license:
D3.js http://d3js.org/  data-oriented javascript framework.
  - Sankey plugin http://bost.ocks.org/mike/sankey/ for D3.js (heavily modified) by Mike Bostock's,
    which is based on the initial version http://tamc.github.io/Sankey/ by Thomas Counsell.
    I have incorporated the ability to render Sankey cycles, as pioneered by https://github.com/cfergus
  - Dragdealer.js href="http://skidding.github.io/dragdealer/ by Ovidiu Chereches
*/

nodesform=d3.select("#nodes-form");

function draw() {

  data={"nodes":[
  {"name":"Test1","value":1,"layer":1, "pos":0},
  {"name":"Test2","value":1,"layer":1, "pos":1},
  {"name":"Test3","value":1,"layer":1, "pos":2},
  {"name":"Test4","value":1,"layer":1, "pos":3},
  {"name":"Test5","value":1,"layer":1, "pos":4},
  {"name":"Test6","value":1,"layer":1, "pos":5},
  {"name":"Test7","value":1,"layer":1, "pos":6},
  {"name":"Test8","value":1,"layer":1, "pos":7},
  {"name":"LoginPage","value":8,"layer":2, "pos":8},
  {"name":"HomePage","value":8,"layer":3, "pos":9},

  {"name":"Messages","value":2,"layer":4, "pos":10},
  {"name":"OneTimePayment","value":1,"layer":4, "pos":11},
  {"name":"AccountDetail","value":5,"layer":4, "pos":12},
  // D
  {"name":"AccountDetail","value":1,"layer":5, "pos":13},
  {"name":"StandingOrder","value":2,"layer":5, "pos":14},
  {"name":"History","value":3,"layer":5, "pos":15},
  {"name":"Messages","value":1,"layer":5, "pos":16},
  {"name":"OneTimePayment","value":1,"layer":5, "pos":17},
  // E
  {"name":"History","value":2,"layer":6, "pos":18},
  {"name":"CashLoan","value":1,"layer":6, "pos":19},
  {"name":"OneTimePayment","value":2,"layer":6, "pos":20},
  {"name":"SIPO","value":1,"layer":6, "pos":21},
  {"name":"HistoryFiltr","value":1,"layer":6, "pos":22},
  {"name":"TransfersBetweenAccounts","value":1,"layer":6, "pos":23},
  // F
  {"name":"TransactionDetail","value":1,"layer":7, "pos":24},
  {"name":"HistoryNextPage","value":1,"layer":7, "pos":25},
  {"name":"Insurance","value":1,"layer":7, "pos":26},
  {"name":"History","value":2,"layer":7, "pos":27},
  {"name":"OneTimePayment","value":2,"layer":7, "pos":28},
  {"name":"TransfersBetweenAccounts","value":1,"layer":7, "pos":29},
  // G
  {"name":"HistoryNextPage","value":1,"layer":8, "pos":30},
  {"name":"Logout","value":2,"layer":8, "pos":31},
  {"name":"HistoryFiltr","value":3,"layer":8, "pos":32},
  {"name":"Insurance","value":1,"layer":8, "pos":33},
  {"name":"TransfersBetweenAccounts","value":1,"layer":8, "pos":34},
  // H
  {"name":"TransfersBetweenAccounts","value":1,"layer":9, "pos":35},
  {"name":"Logout","value":1,"layer":9, "pos":36},
  {"name":"CashLoan","value":1,"layer":9, "pos":37},
  {"name":"HistoryNextPage","value":2,"layer":9, "pos":38},
  {"name":"Options","value":1,"layer":9, "pos":39},
  // I
  {"name":"OneTimePayment","value":1,"layer":10, "pos":40},
  {"name":"Logout","value":2,"layer":10, "pos":41},
  {"name":"CashLoan","value":1,"layer":10, "pos":42},
  {"name":"TemplateOneTimePayment","value":1,"layer":10, "pos":43},
  // J
  {"name":"Logout","value":2,"layer":11, "pos":44},
  {"name":"TransactionDetail","value":1,"layer":11, "pos":45},
  // K
  {"name":"Logout","value":1,"layer":12, "pos":46}

  ],"links":[
  {"source":0,"target":8,"value":1},
  {"source":1,"target":8,"value":1},
  {"source":2,"target":8,"value":1},
  {"source":3,"target":8,"value":1},
  {"source":4,"target":8,"value":1},
  {"source":5,"target":8,"value":1},
  {"source":6,"target":8,"value":1},
  {"source":7,"target":8,"value":1},
  {"source":8,"target":9,"value":8},

  {"source":9,"target":10,"value":2},
  {"source":9,"target":11,"value":1},
  {"source":9,"target":12,"value":5},
  // D
  {"source":10,"target":13,"value":1},
  {"source":11,"target":14,"value":1},
  {"source":10,"target":15,"value":1},
  {"source":12,"target":16,"value":1},
  {"source":12,"target":14,"value":1},
  {"source":12,"target":15,"value":2},
  {"source":12,"target":17,"value":1},
  // E
  {"source":13,"target":18,"value":1},
  {"source":14,"target":18,"value":1},
  {"source":15,"target":19,"value":1},
  {"source":16,"target":20,"value":1},
  {"source":14,"target":21,"value":1},
  {"source":15,"target":20,"value":1},
  {"source":15,"target":22,"value":1},
  {"source":17,"target":23,"value":1},
  // F
  {"source":18,"target":24,"value":1},
  {"source":18,"target":25,"value":1},
  {"source":19,"target":26,"value":1},
  {"source":20,"target":27,"value":1},
  {"source":21,"target":28,"value":1},
  {"source":20,"target":29,"value":1},
  {"source":22,"target":28,"value":1},
  {"source":23,"target":27,"value":1},
  // G
  {"source":24,"target":30,"value":1},
  {"source":25,"target":31,"value":1},
  {"source":26,"target":32,"value":1},
  {"source":27,"target":33,"value":1},
  {"source":28,"target":31,"value":1},
  {"source":29,"target":32,"value":1},
  {"source":28,"target":34,"value":1},
  {"source":27,"target":32,"value":1},
  // H
  {"source":30,"target":35,"value":1},
  {"source":32,"target":36,"value":1},
  {"source":33,"target":37,"value":1},
  {"source":32,"target":38,"value":2},
  {"source":34,"target":39,"value":1},
  // I
  {"source":35,"target":40,"value":1},
  {"source":37,"target":41,"value":1},
  {"source":38,"target":42,"value":1},
  {"source":39,"target":41,"value":1},
  {"source":38,"target":43,"value":1},
  // J
  {"source":40,"target":44,"value":1},
  {"source":42,"target":45,"value":1},
  {"source":43,"target":44,"value":1},
  // K
  {"source":45,"target":46,"value":1}

  ]}

  change(data);
}

var padding = 10;
var paddingmultiplier = 10;
var lowopacity = 0.3;
var highopacity = 0.7;
var format2Number = d3.format(",.2f"),
    formatNumber = d3.format(",.0f"),
    format = function(a) {
        return formatNumber(a)
    },
    format2 = function(a) {
        return format2Number(a)
    },
    color = d3.scale.category20();
//d3.select("#chart").style("width", document.getElementById("chart").offsetWidth - sizecorrection)
//d3.select("#titlebar").style("width", document.getElementById("titlebar").offsetWidth - sizecorrection)
var margin = {
        top: 10,
        right: 50,
        bottom: 10,
        left: 50
    },
    width = document.getElementById("chart").offsetWidth - margin.left - margin.right,
    height = document.getElementById("chart").offsetHeight - margin.bottom - 10;
var svg = d3.select("#chart").append("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
var sankey = d3.sankey().nodeWidth(40).nodePadding(padding).size([width, height]);
var path = sankey.reversibleLink();
var change = function() {};

change = function(d) {

  padding = paddingmultiplier * (1 - 0.5) + 5
  svg.selectAll("g").remove();
  sankey = d3.sankey().nodeWidth(20).nodePadding(padding).size([width, height]);
  sankey.nodes(d.nodes).links(d.links).layout(500);
  var g = svg.append("g") //link
    .selectAll(".link").data(d.links).enter().append("g").attr("class", "link").sort(function(j, i) {
      return i.dy - j.dy
    });
  var h = g.append("path") //path0
    .attr("d", path(0));
  var f = g.append("path") //path1
    .attr("d", path(1));
  var e = g.append("path") //path2
    .attr("d", path(2));
  g.attr("fill", function(i) {
      return i.source.color = color(i.source.name.replace(/ .*/, ""))
    }).attr("opacity", lowopacity).on("mouseover", function(d) {
      d3.select(this).style('opacity', highopacity);
    }).on("mouseout", function(d) {
      d3.select(this).style('opacity', lowopacity);
    }).append("title") //link
    .text(function(i) {
      return i.source.name + " > " + i.target.name + "\n" + format2(i.value)
    });
  var c = svg.append("g") //node
    .selectAll(".node").data(d.nodes).enter().append("g").attr("class", "node").attr("transform", function(i) {
      return "translate(" + i.x + "," + i.y + ")"
    }).call(d3.behavior.drag().origin(function(i) {
      return i
    }).on("dragstart", function() {
      this.parentNode.appendChild(this)
    }).on("drag", b));
  c.append("rect") //node
    .attr("height", function(i) {
      return i.dy
    }).attr("width", sankey.nodeWidth()).style("fill", function(i) {
      return i.color = color(i.name.replace(/ .*/, ""))
    }).style("stroke", function(i) {
      return d3.rgb(i.color).darker(2)
    }).on("mouseover", function(d) {
      svg.selectAll(".link").filter(function(l) {
        return l.source == d || l.target == d;
      }).transition().style('opacity', highopacity);
    }).on("mouseout", function(d) {
      svg.selectAll(".link").filter(function(l) {
        return l.source == d || l.target == d;
      }).transition().style('opacity', lowopacity);
    }).on("dblclick", function(d) {
      svg.selectAll(".link").filter(function(l) {
        return l.target == d;
      }).attr("display", function() {
        if (d3.select(this).attr("display") == "none") return "inline"
        else return "none"
      });
    }).append("title").text(function(i) {
      return i.name + "\n" + format2(i.value)

    });
  c.append("text") //node
    .attr("x", -3).attr("y", function(i) {
      return i.dy / 2
    }).attr("dy", ".35em").attr("text-anchor", "end").attr("transform", null).text(function(i) {
      return i.name
    }).filter(function(i) {
      return i.x < width / 4
    }).attr("x", 3 + sankey.nodeWidth()).attr("text-anchor", "start")
  c.append("text") //node
    .attr("x", function(i) {return -i.dy / 2})
    .attr("y", function(i) {return i.dx / 2 + 6})
    .attr("transform", "rotate(270)").attr("text-anchor", "middle").text(function(i) {
      return format(i.value);
    }).attr("fill","white").attr("stroke","black");


  function b(i) { //dragmove
    if (document.getElementById("ymove").checked) {
      if (document.getElementById("xmove").checked) {
        d3.select(this).attr("transform", "translate(" + (i.x = Math.max(0, Math.min(width - i.dx, d3.event.x))) + "," + (i.y = Math.max(0, Math.min(height - i.dy, d3.event.y))) + ")")
      } else {
        d3.select(this).attr("transform", "translate(" + i.x + "," + (i.y = Math.max(0, Math.min(height - i.dy, d3.event.y))) + ")")
      }
    } else {
      if (document.getElementById("xmove").checked) {
        d3.select(this).attr("transform", "translate(" + (i.x = Math.max(0, Math.min(width - i.dx, d3.event.x))) + "," + i.y + ")")
      }
    }
    sankey.relayout();
    f.attr("d", path(1));
    h.attr("d", path(0));
    e.attr("d", path(2))
  };
};
draw();