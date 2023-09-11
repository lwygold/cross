import React, { useEffect } from "react";

 const Scroll = () => {
  useEffect(function mount() {
    var lastScrollTop = 0;

    function onScroll() {   
        
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var header = document.querySelector('header');
        
        if (scrollTop < 60) {
            header.classList.add('show');
        } else {
            header.classList.remove('show');
            header.classList.add('reverse');
        }

        if (scrollTop > lastScrollTop && scrollTop > 60) {
            // 아래 스크롤 코드
            header.classList.add('reverse');
            header.classList.remove('show');
        } else {
            // 위 스크롤 코드
            header.classList.remove('reverse');
            header.classList.add('show');
        }

        lastScrollTop = scrollTop;
    }
    window.addEventListener("scroll", onScroll);
    return function unMount() {
      window.removeEventListener("scroll", onScroll);
    };
  });
  return null;
}
export default Scroll