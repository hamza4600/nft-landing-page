import React ,{useEffect}from 'react'
import "./scroll.css"

function ScrolLe() {
    useEffect(() => {
        const timeline = document.querySelector(".timeline");
        const timelineDraw = document.querySelector(".timeline__draw");
        const bodyRect = document.body.getBoundingClientRect();
        const timelineOffset = timeline.getBoundingClientRect().top - bodyRect.top;
        var moveIndicator = function () {
          var viewportHeight = window.innerHeight;
          var hasScrolled = window.pageYOffset;
          const scrolledFurther = hasScrolled - timelineOffset + viewportHeight / 4;
    
          if (scrolledFurther && scrolledFurther > 0) {
            if (scrolledFurther > timeline.clientHeight) {
              timelineDraw.style.height = `${timeline.clientHeight}px`;
              return;
            }
    
            timelineDraw.style.height = `${scrolledFurther}px`;
            return;
          }
    
          timelineDraw.style.height = "50px";
        };
    
        window.addEventListener("scroll", moveIndicator);
        window.addEventListener("resize", moveIndicator);
      }, []);
    
  return (
              <div className="timeline">
                          <div className="timeline__draw"></div>
             </div> 
  )
}

export default ScrolLe