import React, { useEffect } from "react";

 const Ui = () => {
  useEffect(function mount() {   
     
    var fixedDiv = document.querySelector('.scroll__fixed');
    var spaceDiv = document.querySelector('.space');
    var initialOffset = fixedDiv.offsetTop; 

    function fixedInvest() {   
        
        var scrollTop = window.scrollY || document.documentElement.scrollTop;    

        if (scrollTop >= initialOffset) {            
            
            setTimeout(() => {
              fixedDiv.classList.add('active');
              spaceDiv.classList.add('active');
            }, 100);
        
        } else {                
            setTimeout(() => {
              fixedDiv.classList.add('active');
              spaceDiv.classList.add('active');
            }, 100);
        }
    }

    const toggleElements = document.querySelectorAll(".toggle__item__header");
    
    toggleElements.forEach((element) => {
        element.addEventListener("click", function() {                
            setTimeout(() => {
              this.classList.toggle("active");
            }, 100);
        });
    });

    window.addEventListener("scroll", fixedInvest);
    return function unMount() {
      window.removeEventListener("scroll", fixedInvest);
    };
  });
  return null;
}
export default Ui