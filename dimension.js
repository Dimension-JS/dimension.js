var DimensionAJAX = {
  get: function(url) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
  },
  post: function(url, data) {
     var xhr = new XMLHttpRequest();
xhr.open("POST", url, true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(data)
    return(xhr.responseText);
  }
}
var DML = {
  load: function(id) {
    DimensionAJAX.get("")
  }
}
