import React from 'react'
import "./singleBlog1.css"

export default function FinalReflections() {
  return (
<div className="finalReflections">
            <h2>Technical reflection of the internet artwork website, Fractally</h2>
            <br></br>
            <p>
            Fractally is a website about fractals. It is a start-up guide to all things fractal in nature, and if you’re looking to get a basic idea of what fractals are without going too far in-depth into all that intense maths and complex theory behind them, then Fractally is what you are looking for. The website features 4 main sections/pages. A Homepage with the contents of the site in summarised form, the blog page for all my writing, an information page about fractals and all things fractally and finally a Mandelbrot fractal viewer that allows one to launch and explore a full mandelbrot set fractal that uses a unique colouring algorithm to give the fractal a rainbow of colours, resulting in some pretty trippy and quite psychedelic looking images.
            </p>
            <br></br>
            <p>
            I began the production of the website by creating a navigation bar (nav-bar) that would be used to navigate around the website. The nav-bar makes use of react-router-dom Link elements to navigate between the different pages of the site. The different pages are called from routes on my App.js file, allowing them to easily be called at any time. I created 4 main pages, the home page, the blog page, the fractal page and the fractal viewer page which only functions to indicate where the fractal launcher button is.
            </p>
            <br></br>
            <p>
            The home page consists of an information section about fractals and a content section which hosts mini windows that link to each of my blogs on my website. The content section makes use of a mini window function. The mini windows act as buttons and are a universal purpose function that can be used anywhere on the site, however, I have chosen to use the function to display my blogs in an orderly and easily accessible manner and nothing more as I felt it was not necessary elsewhere in the site.
            </p>
            <br></br>
            <p>
            The blog page consists of all my blogs displayed in a linear fashion. The blogs are segmented and use CSS styling to separate and arrange them. The page functions as a library for all my blogs written over the semester. Each blog is displayed in its entirety, and although it may take the user some time to scroll through all this text I have left it in this manner of the full display as I feel the blog page is only there to contain all my blogs in a single space. The purpose of this is that each blog can be individually accessed from the home page, therefore I felt that by having a library-like page that displays all my blogs one can use it easily to reference the entire collection at a time rather than having to visit each one individually. The two features exist to complement each other.
            </p>
            <br></br>
            <p>
            The fractal page exists to teach the viewer the basic introductory knowledge one might need to understand fractals and what they are. The information is basic and can be obtained from a few google searches, however, it is accurate and contains all the necessary information that one might need to have an understanding of fractals without having to go into complex theory and mathematics. This page also contains some youtube videos of some exploring a variety of beautiful fractals using supercomputing just to give the viewers a taste of the awesomeness of fractals. 
            </p>
            <br></br>
            <p>
            The main feature of the website is the fractal viewer which functions as a digital artwork, as well as an accurate visual representation of the mandelbrot function. The algorithm used to generate the fractal was developed by Rafael Pedicini, I incorporated his code into my website. The original code was written to read and run off an HTML document, therefore I integrated the code in my index.html practice. I am aware that this is poor coding practices and that features should generally be run off of a javascript function, however, I could not get the algorithm to work this way, even after countless attempts. Therefore, I found an alternate solution to the issue by running the code in my index.html file. The fractal generator now functions effectively and works as digital artwork.
            </p>
            <br></br>
            <p>
            The site makes effective and consistent use of javascript and CSS to structure and navigate it. All features of the site are functional and work in the manner I hoped they would. The main feature of the website, the fractal viewer, is effective and functions exactly as I hoped it would, therefore turning the site into not only a great introductory guide to fractals but also a meaningful digital artwork of a mandelbrot set fractal that can be explored in great detail.
            </p>
            <br></br>

            <h2>Design reflection of the internet artwork Fractally</h2>
            <br></br>
            <p>
            The website Fractally functions as an information centre on fractals as well as a digital artwork that is an explorable Mandelbrot fractal. The main feature of the website is the fractal viewer which functions as a digital artwork, as well as, an accurate visual representation of the mandelbrot function. The algorithm for the fractal was created by Rafael Pedicini, the algorithm is designed to create a Mandelbrot fractal set that uses a colour algorithm to give it a beautiful array of rainbow colours. The fractal viewer is the main feature of the website and all features present on the site are strategically included to complement it.
            </p>
            <br></br>
            <p>
            The website was designed with a clean and simple interface in mind. I wanted the user interface (UI) and objects in it to be discrete and to take up as little space on the page as possible. In order to do this, all significant navigation UI has been included in a navigation bar that appears at the top of the page. The bar has links present for the home page, the blog page and the fractal page. The icon for the website is also present in the navigation bar and also functions as a link to the home page. The fractal viewer feature is present above the navigation bar and has the words “launch fractal” in the centre. This text acts as a button which links to the fractal viewer application. The options to increase the iteration count of the fractal are present on the top left-hand side of the screen and a reference to Rafael Pedicini is given on the top right. The navigation bar uses a grey-black background and simple plain white text to give a modern and professional look to the website. The nav-bar has also been made responsive for mobile, when the screen pixel width falls below 960px, the text links are switched with a nav-bar icon that is used to activate a toggle-able side navigation bar that, with all links to navigate the website, appears over the screen instead.
            </p>
            <br></br>
            <p>
            The fractal launcher appears at the top of each page as it is run from the index.html file it will be present on all pages of the site. I felt this was a necessary design decision as it allowed me to implement the code smoothly and it allows the fractal (the main feature of the site) to be accessed from all points within the site. The viewer features the settings to adjust the quality of the fractal, a button to launch the fractal and a reference link to Rafael Pedicini the author of the code. The 3 features are aligned next to each other in a straight line at the top of the webpage. I would have liked to have improved the style by giving the fractal viewer its own page, however, I felt the current implementation worked efficiently and did not detract from the website. Through the use of CSS styling, I was able to make it appear as though it were a part of the navigation bar, and because of this, it does not take away from the aesthetics and visual appeal of the website.
            </p>
            <br></br>
            <p>
            The first item on each page is an image of a fractal, along with some text detailing the purpose of the page on the site. The images were added to allow the viewers to see more beautiful fractals. Each page of the site is divided into 2 sections; the title and info section at the top and the contents section below. The home page features some information about the purpose of the site in the title section and displays a navigation area for all the blogs on my site in the content section. My blog page contains all the blogs I have written over the semester and they are included in a linear order on one page. This was done because this page functions as a library to view all my blogs in their entirety. the contents section on the home page, therefore, functions as a navigation tool to allow viewers to easily navigate between all my blogs if they wish to access an individual blog without having to scroll through the blog page to find it.
            </p>
            <br></br>
            <p>
            I have included a footer at the bottom of the site to finish the site off and make it feel complete. The footer contains my contact information along with links to my social media and a copyright declaration. I feel that the website follows a consistent theme and that all features present within it add to the appeal of the site, as well as, compliment the topic of the site, fractals. The site features consistent styling and is responsive for mobile. Overall I feel it is functions effectively as a digital artwork that will allow my viewers to experience and understand fractals in a meaningful and impactful way. 
            </p>
            <br></br>
            
            <h2>Final Rationale and Critical Reflection of Fractally</h2>
            <p>
            Fractally is a website and digital artwork that has a focus on fractals. Fractals are infinitely complex patterns that are self-similar across different scales. They are created by repeating a simple process over and over in an ongoing feedback loop. [1] By applying this theory in mathematics and computing, Benoit Mandelbrot was able to use this method of iteration on a mathematical formula in order to produce some beautiful visualisations of mathematical number sets. Mandelbrot became famous for a particular fractal he discovered, this fractal was known as the Mandelbrot Set and since its creation, it has been explored and reproduced in thousands of beautiful ways. 
            </p>
            <br></br>
            <p>
            This is what my and the sites, focus is on, abstract fractals and most particularly the Mandelbrot Set. The set is created by adding iterative results of a mathematical equation to it. By mapping out the results of each iteration onto a plane one can generate an image of this mathematical set, allowing us to view what a fractal looks like. I have always been fascinated by fractals and have wanted to understand what they are and how they can be created. By using these techniques of Mandelbrot and fractal mathematics I have created a website that functions as a hosting page for a fractal generator and a reference site for information about fractals. 
            </p>
            <br></br>
            <p>
            I was tasked with creating a website that features a digital artwork this semester. Very few details were provided with regard to what could or could not be created, other than that it must function as a digital artwork. I felt that this would be a great opportunity to learn about fractals and understand the process of their creation myself. Therefore, I decided to create a website that acts as a tutorial/guide to the topic of fractals, what they are and how they are created, as well as a fractal generator that allows one to view and interact with a Mandelbrot fractal, Fractally. The site provides some basic information about fractals to help the viewers of the site to gain a basic understanding of fractals and it also features some blogs written over the course of this year that I feel provide some more details behind fractals, my life and the topic of art and internet art. Overall the site acts as an information centre for all things fractal in nature.
            </p>
            <br></br>
            <p>
            Along with the fractal generator, the website also hosts pages for my blog posts and a page with the vital information one will need to understand and get started with learning fractals. The site does not cover any complex mathematics or fractal theory, it only covers the basics. As I myself don’t fully understand the theory and maths behind fractals, I felt that it was only necessary to include the knowledge I could understand about fractals on the site. This way I can know for sure that the site will be appropriate and accessible to most individuals and that those with some basic understanding of maths can gain a slightly more advanced understanding of what fractals are, without being lost and overwhelmed by their complexity. The site features some videos of Mandelbrot fractal sets created using supercomputing that I find extremely beautiful and felt were necessary to include as they allow me to further show my viewers the beauty and complexity of fractals. I, unfortunately, do not have the skills nor the resources to create these fractal renderings, but this was where my love for fractals was born, so I felt that the website had to include them. Hopefully, they will spark a similar love for fractals in the viewers of my website. 
            </p>
            <br></br>
            <p>
            I began work on my fractal generator once the core framework of my website as well as my home page, blog page and fractal information page were completed. This was because I knew it would take me a significant amount of time to figure out how to create fractals and understand fractal theory in order to utilise myself. After a long period of researching and prototyping, I found myself stuck and unable to integrate a fractal into my website. Therefore, due to time constraints and the fear of not including the main feature of my website, I decided to use a fractal generator plugin that I found online. The code was created by Rafael Pedicini and is hosted under a GNU general public license, allowing me to use it for any purpose as long as I don't alter the code in any way and provide reference to it and its creator. After some time trying to implement the plugin on my website I was able to implement it successfully. 
            </p>
            <br></br>
            <p>
            The fractal generator can be launched from a text link that is present at the top of each page of the website. The generator launches a fractal in an application window, here the viewer can interact with the fractal and explore it in quite some detail. Options to view the fractal in higher qualities and a reference to Rafael Pedicini are also included. I was able to integrate Pedicini's fractal algorithm onto the website in order to utilise it for my own purposes. By doing so I was able to create my own link to the fractal generator which runs off Pedicini's algorithm. 
            </p>
            <br></br>
            <p>
            The core of the website and digital artwork is the fractal generator, therefore I have chosen this layout as I felt the generator should be the emphasis of the site and that the other information should only appear to compliment it. The website does not contain a significant amount of information, only what I felt was necessary to know. This was done to remove unnecessary distractions and an overload of information. By doing so I have highlighted the focus of the site, the fractal generator. To further iterate this design decision, the fractal generator is accessible from all pages on the site. 
            </p>
            <br></br>
            <p>
            The site features images of fractals throughout and uses a simple but clean style to give it a modern and professional feel. Through the use of javascript’s react plugin, I have created an optimized website that runs smoothly and does not place any significant strain on system resources (RAM, CPU, etc.). I feel that the use of images and texts consistently emphasises the theme of the site and adds significant visual appeal to the overall piece.
            </p>
            <br></br>
            <p>
            I believe that the website Fractally functions as an effective guide to understanding the basics of fractals and successfully features a fractal generator that allows one to view and explore a Mandelbrot fractal set. The website contains all the necessary information one will need to gain a basic understanding of fractals and is sufficiently backed up by research and literature through the integration of my fractal information page and my blog page. The site is responsive across all platforms and features a consistent use of styling that significantly adds to the theme and appeal of the overall site. Due to the presence of the fractal generator, the fact that it is interactive, visually appealing, exists in a digital domain and has an audience, allows me to say that Fractally successfully functions as a digital artwork that shows the beauty of fractals and effectively allows the audience to understand them in further detail. Due to these factors, I believe Fractally will instil, in the audience of my site, that same love for fractals that I have and that the site, as a whole, functions as a useful centre for information on fractals. Overall I am extremely happy with the final release of the website Fractally, all features I wished to include are included, the fractal generator is beautiful and integrates fantastically with the site. I believe that Fractally can be regarded as a meaningful digital artwork and that it exists as a meaningful contribution to the overall field of fractals.
            </p>
            <br></br>
            <h3>References:</h3>
            <p>
            [1] Fractalfoundation.org. n.d. What are Fractals? – Fractal Foundation. [online] Available at: https://fractalfoundation.org/resources/what-are-fractals/#:~:text=A%20fractal%20is%20a%20never,systems%20%E2%80%93%20the%20pictures%20of%20Chaos. [Accessed 3 June 2022].
            </p>
            <br></br>
            <p>
            Pedicini, R., 2022. GitHub - rafgraph/fractal: Mandelbrot fractal generator - js web app, uses zero libraries. [online] GitHub. Available at: https://github.com/rafgraph/fractal [Accessed 27 June 2022].
            </p>
            <br></br>
            <p>
              By: Matthew Cresswell
            </p>
            <br></br>
            </div>
  )
}