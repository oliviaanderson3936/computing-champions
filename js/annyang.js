if (annyang) {
    var commands = {
            'hello': function() { 
                alert('Welcome to Computing Champions! You can now speak to navigate around this website. Try it now by saying "About"'); 
            },
            'home': function () {
                window.location = "../index.html"
            },
            'about': function () {
                window.location = "../about.html"
            },
            'key stage 1 (resources)': function () {
                window.location = "../ks1_resources.html"
            } ,
            'key stage 2 (resources)': function () {
                window.location = "../ks2_resources.html"
            } ,
            'contact us': function () {
                window.location = "../contact.html"
            },
    }
}

annyang.addCommands(commands);

annyang.start();