whenDocumentLoaded(() => {
  topbar('random');
  d3.csv('resources/ted_main.csv').then(function(data) {
    console.log(data)
    //html = `<div id='topbar' class="w3-top">
    //        <a id="network_link" href="/talk_network.html" class="tp-column">
    //            NETWORK</a>
    //        </div>`
    html = 'test'
    index = Math.floor(Math.random()*data.length)
    url = data[index]['url']
    url = url.replace("www.ted.com/", "embed.ted.com/")
    console.log(url)
    node = document.getElementById('random-video')
    node.innerHTML = `
    <div style="position:relative;height:0;padding-bottom:56.25%">
      <iframe src="` + url + `"
        width="854" height="480" style="position:absolute;left:0;top:0;width:100%;height:100%"
        frameborder="0" scrolling="no" allowfullscreen></iframe>
    </div>
      `
    //var svg = d3.select("#random-video")
    //            .append(html)
  })
});
