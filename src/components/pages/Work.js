import React from 'react'

const Work = () =>
  <div>
  <section id="projects">
        <div class="container">
          <div class="columns">
            <div class="column">
              <p>
                A selection of websites, web apps, games, and personal projects that I've worked on in the past.
                <br />
                <br />
                For more work please visit my <a href="https://github.com/sternmd">github</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div class="container paddingTlg" id="projects">
        <div class="columns">
          <div class="column">
            <article class="message is-dark">
              <div class="message-header">
                <p><a href="https://beatitudes.herokuapp.com/">Beatitudes</a></p>
              </div>
              <div class="message-image">
                <a href="https://beatitudes.herokuapp.com/">
                  <img src="images/beatitudes.png" alt="beatitudes" />
                </a>
              </div>
              <div class="message-body">
                Beatitudes is a web app that displays famous quotes and novels by classic Beat Generation writers. You dig?
                <br/>
                <br/>
                <span class="built-with">Built With: Node/Express, HTML/CSS/JavaScript, Less</span>
                <a class="button btn-github is-pulled-right" href="https://github.com/sternmd/beatitudes">
                  <span class="icon">
                    <i class="fab fa-github"></i>
                  </span>
                  <span>GitHub</span>
                </a>
              </div>
            </article>
          </div>
          <div class="column">
            <article class="message is-dark">
              <div class="message-header">
                <p><a href="http://nimbusprints.com">Nimbus Prints</a></p>
              </div>
              <div class="message-image">
                <a href="http://nimbusprints.com">
                  <img src="images/nimbus.jpg" alt="nimbus prints" />
                </a>
              </div>
              <div class="message-body">
                Founded in 2014, Nimbus Prints began as a fan art project inspired by music, film, anime, and pop culture. Today, we have evolved into an experimental printshop, striving to create original, limited edition print series with artists in Chicago.
                <br/>
                <br/>
                <span class="built-with">Built With: BigCartel, HTML/CSS</span>
              </div>
            </article>
          </div>
        </div>
      </div>

        <div class="container">
          <div class="columns">
            <div class="column">
              <article class="message is-dark">
                <div class="message-header">
                  <p><a href="http://studiomosaic.org/">Studio Mosaic</a></p>
                </div>
                <div class="message-image">
                  <a href="http://studiomosaic.org/">
                    <img src="images/studiomosaic.png" alt="studio mosaic" />
                  </a>
                </div>
                <div class="message-body">
                  Studio Mosaic is a Chicago art collective, digital music label, and independent publisher. An unconventional art site for an unconventional art group.
                  <br/>
                  <br/>
                  <span class="built-with">Built With: HTML/CSS/JavaScript, Sass</span>
                  <a class="button btn-github is-pulled-right" href="https://github.com/sternmd/studiomosaic">
                    <span class="icon">
                      <i class="fab fa-github"></i>
                    </span>
                    <span>GitHub</span>
                  </a>
                </div>
              </article>
          </div>
          <div class="column">
            <article class="message is-dark">
              <div class="message-header">
                <p><a href="/roybiv">ROYGBIV</a></p>
              </div>
              <div class="message-image">
                <a href="/roygbiv">
                  <img src="images/roygbiv.png" alt="roygbiv game" />
                </a>
              </div>
              <div class="message-body">
                ROYGBIV is a color-matching puzzle game. The goal of the game is for a single player to determine the brightest colored row.
                <br/>
                <br/>
                <span class="built-with">Built With: HTML/CSS/JavaScript</span>
                <a class="button btn-github is-pulled-right" href="https://github.com/sternmd/sternmd.github.io/tree/master/roygbiv">
                  <span class="icon">
                    <i class="fab fa-github"></i>
                  </span>
                  <span>GitHub</span>
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="columns">
          <div class="column">
            <article class="message is-dark">
              <div class="message-header">
                <p><a href="https://github.com/Cams-Headphones-2/Client-app">/Mu/sic Charts</a></p>
              </div>
              <div class="message-image">
                <a href="https://github.com/Cams-Headphones-2/Client-app">
                  <img src="images/mucharts.png" alt="mucharts" />
                </a>
              </div>
              <div class="message-body">
                /Mu/sic Charts is an app that allows users to build and share music album flowcharts.
                <br/>
                <br/>
                <span class="built-with">Built With: Node/Express, React, MongoDB, HTML/CSS/JS</span>
                <a class="button btn-github is-pulled-right" href="https://github.com/Cams-Headphones-2/Client-app">
                  <span class="icon">
                    <i class="fab fa-github"></i>
                  </span>
                  <span>GitHub</span>
                </a>
              </div>
            </article>
        </div>
        <div class="column">
          <article class="message is-dark">
            <div class="message-header">
              <p><a href="https://caspian-app.herokuapp.com">Caspian App</a></p>
            </div>
            <div class="message-image">
              <a href="https://caspian-app.herokuapp.com">
                <img src="images/caspian.png" alt="caspian app" />
              </a>
            </div>
            <div class="message-body">
              My first Ruby/Sinatra project. Caspian is an emergency management app, for any trip. Caspian stores and presents important In-Case-of-Emergency info and is meant to be used while outdoors or camping.
              <br/>
              <br/>
              <span class="built-with">Built With: Ruby/Sinatra, HTML/CSS/JavaScript</span>
              <a class="button btn-github is-pulled-right" href="https://github.com/alexekim/project_caspian">
                <span class="icon">
                  <i class="fab fa-github"></i>
                </span>
                <span>GitHub</span>
              </a>

            </div>
          </article>
        </div>
      </div>
    </div>
  </div>

export default Work;
