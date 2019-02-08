var laX = document.getElementsByClassName("labelAx");
var classLists = ["graphs-0", "graphs-1"];
    function refactorGrid(value) {
      var grid = document.querySelector(".graphs__section");
      for(let i =0;i<classLists.length; i++) {
        grid.classList.remove(classLists[i]);
      }
      grid.classList.add("graphs-"+value);
      for(let i=0;i<laX.length;i++) {
        if(value == 1) {
          laX[i].classList.add("labelAx_min");
        } else {
          laX[i].classList.remove("labelAx_min");
        }
        
      }
    }
    function hideMask() {
      var popup = document.getElementById('popup');
      var mask = document.getElementById('mask');
      popup.classList.toggle("showing");
      mask.classList.toggle("showing");
    }
    var btnGroup = document.querySelector(".graphs__per__screen");
    btnGroup.onclick = function(event) {
      if(event.target.className=="btn") {
        refactorGrid(event.target.value);
      }
    }
    function showPopup(targ) {
      var popup = document.getElementById('popup');
      var canv = document.createElement('canvas');
      canv.id = "popup_canv";
      
      if(targ.innerHTML.includes('Line')) {
        popup.appendChild(canv);
        var ctx = document.getElementById('popup_canv').getContext('2d');
        var chart = new Chart(ctx, {
          type: 'line',
          data: {
              labels:  getLabels(targ.value),
              datasets: getDataSeries(targ.value),
          },
          options: lineOptions,
      });
      } else if (targ.innerHTML.includes('Bar')){
        popup.appendChild(canv);
        var ctx = document.getElementById('popup_canv').getContext('2d');
        var myBarChart = new Chart(ctx, {
          type: 'horizontalBar',
          data: getDataSeriesBar(targ.value),
          options: barOptions,
      });
      } else {
        node = document.getElementById(targ.value).cloneNode(true);
        popup.appendChild(node);
      }
      
      hideMask();
    }
    var mask = document.getElementById('mask');
    mask.onclick = function(event) {
      hideMask();
      var popup = document.getElementById("popup");
      while (popup.firstChild) {
        popup.removeChild(popup.firstChild);
    }
    }
    var menu = document.querySelector(".menu__graphs");
    menu.onclick = function(event) {
      if(!event.target.classList.contains("btn")) {
        event.preventDefault;
        return;
      } else {
        showPopup(event.target);
      }
      
    }