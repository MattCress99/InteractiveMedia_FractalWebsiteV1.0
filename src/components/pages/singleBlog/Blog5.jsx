import React from 'react'
import "./singleBlog1.css"

export default function Blog5() {
  return (
    <div id='top' className="Reflection">
      <div className="Reflection1">
          <h2>A detailed reflection of the creation of my website</h2>
            <br></br>
            <p>
              Fractally is a website that looks at Fractals in all their wonder.
              I have always been interested in fractals and how they are created
              and wanted to learn more about creating them myself. I thought
              this website to be a brilliant opportunity to do just that. So my
              focus for this first iteration of the website “Fractally” was to
              deploy a basic website that had the skeleton for all the features
              I wish to implement on the website in the future. I believe I have
              achieved this goal as all features, pages and tools that I wish to
              use have been created and set up.
            </p>
            <br></br>
            <p>
              I began creation of the website with a navigation bar that was
              made using React States and by deciding which tabs I wanted to
              display. I created the Navbar and then made the navbar responsive
              for different screen sizes by changing it from a bar at the top of
              the screen to a Side navigation bar that can be toggled on and
              off. I felt this would look very good on mobile devices and would
              help make things look sleaker by removing all the extra text in
              the Navbar at the top of the screen and allowing the user ot
              utilise it only when navigation is needed.
            </p>
            <br></br>
            <p>
              I linked all the navbar buttons to their respective pages using
              react routing. From here I added the basic design for each page.
              As a feature to test react props, I created a 'Mini Window'
              prop/function that allows me to place an image and some text in a
              nice box that is interactable and can navigate me to different
              parts of my website. I use this Mini Window on my homepage to
              display my Blogs as I felt it was a nice to way to organise them
              and draw the user towards them without the user being scared off
              by walls of text.
            </p>
            <br></br>
            <p>
              My Blog page contains all my blogs that I have written this year,
              each separated into their own boxes using css. The Fractals page
              only has my wireframes in it as of this moment, However, in the
              feature I wish to make it a page with lots of interesting facts
              and information fractals.{" "}
            </p>
            <br></br>
            <p>
              Finally my Fractal Viewer page which can be access by 2 buttons,
              the Fractal Viewer button and the Start button on the homepage.
              This is going to be the main feature of my website and the aspect
              that will make it a Net art and not just an ordinary website about
              fractals. I wish to create a program that will generate a
              mandelbrot fractal set that the user can view when in the Fractal
              Viewer page. By doing so I hope to allow my users to see the
              beauty and unimaginable infiniteness of fractals. I have found
              various open source programs that create mandelbrot fractals and
              have been looking at using these in conjunction with myt website
              to create and even more spectacular library of fractals.
            </p>
                <br></br>
            <p>
              The website has all features of its skeleton/framework in place.
              What is left is for me to add a footer to the website with
              information about myself and the website itself. The main focus of
              the next iteration of this website will be on creating the
              mandelbrot fractal viewer.{" "}
            </p>
        </div>
        <div className="Reflection2">
          <h2>Reflection 2 of Fractally, a website about Fractals.</h2>
            <br></br>
            <p>
            The website has shown significant progress and is in a state where I can say it is almost complete and functional as my own fractal inspired website. The website is almost entirely functional with only the Fractal Viewer component that still needs to be implemented and hyperlinks to my social media accounts. Otherwise, the page is fully responsive for PC and mobile and has all the information in it that I believe gives you a good understanding of what fractals are and some great examples of fractals themselves.
            </p>
            <br></br>
            <p>
            My focus for this release was understanding the fractal plugin and to fill the website with the rest of the needed content. I have made a lot of progress in understanding the code and algorithms written by Rafael Pedicini. I have a fractal.html file in my src folder that allows the user to view the fractal generator, however, I am still in the process of applying this plugin to my main website. The code is extremely complex and has taken me sometime to understand. I will not be able to have a working version of the plugin available in time for this submission so I focused my efforts on my writing and the content of the website. I have added videos and pictures of fractals as well as some useful information about fractals in the fractal page of my website. 
            </p>
            <br></br>
            <p>
            I focused on finding the style of my website, which is a clean simple ios like interface that uses Times new roman font to create a mathematical feel to the website. The text and images are isolated from each other and will not appear next to each other, only above or below. I have created individual blog pages for each of my blogs, I felt it was tedious and time consuming to scroll through all the blogs on the webpage so to fix this issue I created the individual blog pages that allow you to view each blog in an isolated tab.
            </p>
            <br></br>
            <p>
            I felt that a footer was necessary to make the website look professional and ‘complete’. Therefore, I added a simple footer that includes my contact information and social media links, however, the hyperlinks to my social media pages do not work yet. 
            </p>
            <br></br>
            <p>
            For the final release of the website I will incorporate the fractal generator software to the Fractal Viewer page of my website. I will dedicate my time on this one issue as I feel it is the most important part of the website and it needs to be included in some way or another. I am happy with the progress of my website this far, I feel it has all the necessary information about fractals that one will need to gain a basic understanding of them, with out going into serious detail regarding the maths and the algorithms used to create fractals. With the final release of the website I feel I will have created an impactful net artwork that incorporates all the elements and beauty of fractals.
            </p>
            <br></br>
            <p>
              By: Matthew Cresswell
            </p>
            <br></br>
        </div>
    </div>
    
  )
}
