import React from 'react';
import "./skills.css";

function Skills() {

    window.onscroll = function(){

        // : فيه إرور فى الحتة دى , لما بأعمل سكرول وآجى أشغل صفحة تانية مش بيلاقى ال 
        // skills_div
        
        let skills_div = document.querySelector(".skills");
        let skillsOffsetTop = skills_div.offsetTop;
        let skillsHeight = skills_div.offsetHeight ;
        let windowHeight = this.innerHeight ;
        let windowScrollTop = this.scrollY ;
        let skillsSpans = document.querySelectorAll(".skills .progress span");



        if(windowScrollTop > ((skillsOffsetTop + skillsHeight - windowHeight) - 300 ) ){
           

            skillsSpans.forEach(span =>{

                let styles = `
                    width: ${span.dataset.progress};
                    padding-right : 10px;
                `
                span.style = styles;

            });
        }

    };

  return (
    <div className="skills container">
        <h2 className="special-heading">Skills</h2>
        <p className="special-p">I don't think it's logical to evaluate yourself because how can you determine that  
            your knowledge in a language like HTML is at 90% unless you have a complete grasp
             of 100% of it? Therefore, with the following progress bars, I intended to showcase
              my ability to accomplish tasks by those tools and skills
               rather than indicating my overall knowledge.
        </p>
        <div className="all-skills">
            <div className="skill-box">
                <h4>HTML</h4>
                <div className="progress">
                    <span data-progress="90%">90%</span>
                </div>
            </div>
            <div className="skill-box">
                <h4>CSS</h4>
                <div className="progress">
                    <span data-progress="85%">85%</span>
                </div>
            </div>
            <div className="skill-box">
                <h4>JavaScript</h4>
                <div className="progress">
                    <span data-progress="70%">70%</span>
                </div>
            </div>
            <div className="skill-box">
                <h4>React JS</h4>
                <div className="progress">
                    <span data-progress="65%">65%</span>
                </div>
            </div>
            <div className="skill-box">
                <h4>WordPress / Elementor</h4>
                <div className="progress">
                    <span data-progress="75%">75%</span>
                </div>
            </div>
            <div className="skill-box">
                <h4>WordPress / PHP</h4>
                <div className="progress">
                    <span data-progress="30%">30%</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills;