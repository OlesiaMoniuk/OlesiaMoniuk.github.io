app.global = {
    init: function(){ 
        console.log("load global functions");
        app.global.loadHeader();
    },
    loadHeader: function(){ 
        console.log("loadHeader()");
    }
}


app.global.init();