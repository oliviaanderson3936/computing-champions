if (annyang) { //defines the commands - first the text expected to hear, then the function to be called
    var commands = {
            'hello': function() { //text expected to hear
                alert('Welcome to Computing Champions! You can now speak to navigate around this website. Try it now by saying "About"'); //fucntion expected - alert to tell user how to use recognition for this site
            },
            'home': function () { //text expected to hear
                window.location = "../index.html" //function - opens the stated page from navigation
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
};

//adds the stated commands to annyang ready to use
annyang.addCommands(commands); 

//annyang starts to listen (requires microphone to be enabled when site opened!)
annyang.start();