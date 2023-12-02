    let tablinks = document.getElementsByClassName("tab-links");
    let tabcontents = document.getElementsByClassName("tab-contents");

    function opentab (tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }

    // ---------for responsive---------

    let sidemeu = document.getElementById("sidemenu") ;
    function openmenu(){
        sidemeu.style.right = "0";  //visible
    }
    function closemenu(){
        sidemeu.style.right = "-200px";  //invisible
    }

    //--------Resume Contact Form----------

    const scriptURL = 'https://script.google.com/macros/s/AKfycbyFkxJGE417r9cF0Q_gwsPAPIIroGSfcUzFSfnTMaQQSThqa4tn2MOyLdYJTy6ABk2duA/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg");     //adding msg for showing message while submit 

    form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully";
        setTimeout(function(){
            msg.innerHTML = "";
        },2000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
    })