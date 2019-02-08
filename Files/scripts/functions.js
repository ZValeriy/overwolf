function getImage(id) {
 let img_url = '';
  for(let i=0;i<dataAPI["Hero ID and names"].length; i++) {
    if(dataAPI["Hero ID and names"][i]["id"] == id) {
      img_url = dataAPI["Hero ID and names"][i]["image"];
      return img_url;
    }
  }
}
var colors = ['rgba(255,28,28, 1)', 'rgba(102,51,153, 1)' , 'rgba(28,32,255, 1)', 'rgba(255,255,0, 1)', 'rgba(156,243,249, 1)',
'rgba(29,178,6, 1)', 'rgba(249,6,239, 1)', 'rgba(255,200,100, 1)', 'rgba(0,128,128, 1)', 'rgba(73,67,68, 1)',
'rgba(51,31,73, 1)', 'rgba(255,150,44, 1)']
function getDataSeries(nameGraph) {
  let keys_d = Object.keys(dataAPI[nameGraph]);
          let series = [];
          for(let i=0; i<keys_d.length;i++) {
            let o = {
              "label": keys_d[i],
              "data": dataAPI[nameGraph][keys_d[i]].split(','),
              "fill": false,
              "backgroundColor": colors[i],
              "borderColor": colors[i],
            }
            series.push(o);
          }
          return series;
        }
function getSeries(nameGraph) {
          let keys_d = Object.keys(dataAPI[nameGraph]);
          let series = [];
          for(let i=0; i<keys_d.length;i++) {
            let o = {
              "name": keys_d[i],
              "data": dataAPI[nameGraph][keys_d[i]].split(',')
            }
            series.push(o);
          }
          return series;
        }
function getLabels(nameGraph) {
  len = dataAPI[nameGraph][Object.keys(dataAPI[nameGraph])[0]].split(',').length;
  labels = [];
  for(let i=0; i<1.3*len;i++) {
    labels.push(i*10);
  }
  return labels;
}

function getDataSeriesBar(nameGraph) {
  let o = {
    "labels": [],
    "datasets": [
      {
        "label": "Digital Chaos",
        "data": [],
        "backgroundColor": 'rgba(28,32,255, 0.5)',
        "borderColor": 'rgba(28,32,255, 0.5)',
        "borderWidth": 1
      },
      {
        "label": "NewBee",
        "data": [],
        "backgroundColor": 'rgba(139,31,3, 0.5)',
        "borderColor": 'rgba(139,31,3, 0.5)',
        "borderWidth": 1
      }
    ],
  }
    for(let i=0; i< dataAPI[nameGraph].length;i++) {
      o.labels.push(Object.keys(dataAPI[nameGraph][i])[0].split(" ").slice(0, -1).join(" "));
      o["datasets"][1]["data"].push(100);
      o["datasets"][0]["data"].push(dataAPI[nameGraph][i][Object.keys(dataAPI[nameGraph][i])[0]]);
    }
    if(nameGraph == "Bar Win") {
      o.labels = ['Win Chance'];
    }
  return o;
}

//Заполнение таблицы
let bodyTable = document.getElementById("bodyTable");
let keys = ["hero", "networth", "k", "d", "a", "lh", "denies", "level", "gpm", "xpm"];
for(let i=0; i<10; i++) {
 let newTr = document.createElement("tr");
 for(let j=0;j<keys.length; j++) {
   if(keys[j] == "hero") {
     let newTd = document.createElement("td");
     let img = document.createElement("img");
     img.classList.toggle("table__img-hero");
     img.src= getImage(dataAPI["Table 1"][i][keys[j]]);
     newTd.appendChild(img);
     newTr.appendChild(newTd);
   } else {
     let newTd = document.createElement("td");
     newTd.innerHTML = dataAPI["Table 1"][i][keys[j]];
     newTr.appendChild(newTd);
   }
   
 }
 bodyTable.appendChild(newTr);

}