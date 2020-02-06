
  var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1DpRZ4IA6Xd_rd4sNnkpuTkp_-6KOEJJWS-VqZxw4oU0/edit?usp=sharing';
  
  function init() {
    Tabletop.init( { key: publicSpreadsheetUrl,
                     callback: showInfo,
                     simpleSheet: true } )
  }

 
function showInfo(data, tabletop) {
data.forEach(function(data) {
    // header.innerHTML = data.header;
    // header2.innerHTML = data.header2;
    // body.innerHTML = data.body;
    // body2.innerHTML = data.body2;
    // body3.innerHTML = data.body3;
    // body4.innerHTML = data.body4;
    // body5.innerHTML = data.body5;
    // body6.innerHTML = data.body6;
    // body7.innerHTML = data.body7;
    // body8.innerHTML = data.body8;
    // body9.innerHTML = data.body9;
    // body10.innerHTML = data.body10;
    // body11.innerHTML = data.body11;
    // body12.innerHTML = data.body12;
    // body13.innerHTML = data.body13;
    // body14.innerHTML = data.body14;
    // body15.innerHTML = data.body15;
    // body16.innerHTML = data.body16;
    // body17.innerHTML = data.body17;
    new Vue({
      el: '.banner',
      data: {
      header: data.header,
      header2: data.header2
      }
    });

    new Vue({
      el: '.feature',
      data: {
      body: data.body,
      body2: data.body2,
      body3: data.body3,
      body4: data.body4,
      body5: data.body5,
      body6: data.body6,
      body7: data.body7,
      body8: data.body8
      }
    });
    new Vue({
      el: '.access-clipboard',
      data: { 
      body9: data.body9,
      body10: data.body10
      }
    });
    new Vue({
      el: '.supercharge-workflow',
      data: { 
      body11: data.body11,
      body12: data.body12,
      body13: data.body13,
      body14: data.body14,
      body15: data.body15,
      body16: data.body16,
      body17: data.body17
      }
    });
 });
}
  window.addEventListener('DOMContentLoaded', init)







  new Vue({
    el: '#app',
    data: {
    title: 'Hello World!'
    }
  });







































