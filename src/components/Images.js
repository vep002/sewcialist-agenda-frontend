import React from 'react'

export default function Images(props) {
    
    // let slideIndex = 1

    // showSlides(slideIndex)
    
    // // Next/previous controls
    // const plusSlides = (n) => {
    //   showSlides(slideIndex += n)
    // }
    
    // // Thumbnail image controls
    // const currentSlide = (n) => {
    //   showSlides(slideIndex = n)
    // }
    
    // const showSlides = (n) => {
    //   let i;
    //   let slides = {document.getElementsByClassName("mySlides")}
    //   let dots = {document.getElementsByClassName("dot")}
    //   if (n > slides.length) {slideIndex = 1}
    //   if (n < 1) {slideIndex = slides.length}
    //   for (i = 0; i < slides.length; i++) {
    //       slides[i].style.display = "none";
    //   }
    //   for (i = 0; i < dots.length; i++) {
    //       dots[i].className = dots[i].className.replace(" active", "");
    //   }
    //   slides[slideIndex-1].style.display = "block";
    //   dots[slideIndex-1].className += " active";
    // }

    return (
    <div class="slideshow-container fade">
        {/* <div class="mySlides">
            <div class="numbertext">1 / 2</div> */}
            <img src={props.project.mock_up}/>
            {/* <div class="text">Project Mock Up</div>
        </div> */}

        {/* <div class="mySlides fade">
            <div class="numbertext">2 / 2</div> */}
            <img src={props.project.finished}/>
            {/* <div class="text">Finsihed Project</div>
        </div> */}
  
        {/* <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a>

        <br/>

        <div style="text-align:center">
            <span class="dot" onclick="currentSlide(1)"></span>
            <span class="dot" onclick="currentSlide(2)"></span>
            <span class="dot" onclick="currentSlide(3)"></span>
        </div> */}
    </div>
    )
}
