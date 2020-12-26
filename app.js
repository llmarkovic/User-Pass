

function getUserName() {
    var ime = document.getElementById('ime').value.toLowerCase();
    var smer = document.getElementById('smer').value;
    var br = document.getElementById('br').value;
    var god = document.getElementById('god').value;
    var result = document.getElementById('result');

    
    
    if (ime.length < 3 || isNaN(br) || smer.length > 4 || isNaN(god)) {
        result.textContent = 'Unesite odgovarajuce vrednosti!';
    } else {
        var ime2 = ime.split(" ", 1);
        var god2 = god.split("20", 2);
        result.textContent = 'Korisnicko ime: ' + ime2 + smer.toLowerCase() + br + god2.join(""); 
    }
}

    var subButton = document.getElementById('subButton');
    subButton.addEventListener('click', getUserName, false);



    

    var el_down = document.getElementById("geeks"); 
  

    function generateP() { 
        event.preventDefault();
        var pass = ''; 
        var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +  
                'abcdefghijklmnopqrstuvwxyz0123456789'; 
          
        for (i = 1; i <= 8; i++) { 
            var char = Math.floor(Math.random() 
                        * str.length + 1); 
              
            pass += str.charAt(char) 
        } 
          
        return result.innerHTML = 'Lozinka: ' + pass; 
    } 

    function gfg_Run() { 
        el_down.innerHTML = generateP(); 
    } 
