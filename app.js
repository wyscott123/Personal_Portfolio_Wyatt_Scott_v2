const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-con");

function PageTrans() {
    //Button clicker active class switch
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function () {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '')
            this.className += ' active-btn'
        })
    }

    //Section active class switch
    allSections.addEventListener('click', (e) =>{
       const id = e.target.dataset.id;
       if(id){
        //remove selected selected from any other btns
        sectBtns.forEach((btn) =>{
            btn.classList.remove('active')
        })
        e.target.classList.add('active')

        //hide other sects
        sections.forEach((section) =>{
            section.classList.remove('active')
        })

        const elm = document.getElementById(id);
        elm.classList.add('active');
       }
    })
}

PageTrans();