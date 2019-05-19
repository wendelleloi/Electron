const remote = require('electron').remote;

(function(){
    function init(){
        document.getElementById('mimButton').addEventListener('click', function(){
            var window = remote.getCurrentWindow();
            window.minimize();
        });

        document.getElementById('maxButton').addEventListener('click', function(){
            var window = remote.getCurrentWindow();
            if (!window.isMaximized()) {
                window.maximize();
            } else {
                window.unmaximize();
            }
        });

        document.getElementById('closeButton').addEventListener('click', function(){
            var window = remote.getCurrentWindow();
            window.close();
        });
    }

    init();
})();

