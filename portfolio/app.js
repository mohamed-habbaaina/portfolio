    let tablinks = document.getElementsByClassName("tab-links");
    let tabcontents = document.getElementsByClassName("tab-contents");
    
    function opentab(tabname){
        for(let tablink of tablinks){
            tablink.classList.remove("active-link")
        }
        for(let tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab")
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }



    let sidemenu = document.getElementById("sidemenu");

    function openmenu(){
        sidemenu.style.right = "0";
    }
    function closemenu(){
        sidemenu.style.right = "-200px";
    }





    // const scriptURL = 'https://script.google.com/macros/s/AKfycbzesMTQHmlOMdhACsIRG_yjZFY9xlHiK8SSGFA-h8tMdhsi9IORwWaXgyq5GF2ByT-l/exec'
    // const form = document.forms['submit-to-google-sheet']
  
    // form.addEventListener('submit', async (e) => {
    // //   e.preventDefault()
    //   await fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    //     .then((response) => {
    //         console.log('Success!', response);
            
    //         form.submit();
    //     })
    //     .catch(error => console.error('Error!', error.message))
    // })
