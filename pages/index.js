import Link from "next/link";

function MainPage() {
  return (
    <body>
      <section id="section-hero">
        <div className="hero-container">
          <h1 className="hero-title">HORIZONS</h1>
          <div className="hero-subtitle">
            <strong>
            <h3>Georgia Tech</h3>
            <h3>Instructional Center Room XXX</h3>
            <h3>March 9th-10th</h3>
            </strong>
           
          </div>
          <a className="hero-button" href="https://registration.hexlabs.org/">Register Here</a>
        </div>
      </section>

      

      <section id="section-about">
        <div className="about-container">
          <h2 className ="about-title">ABOUT</h2>
          <p>
            HexLabs is excited to welcome you back to 🎨 Horizons: the 24-hour
            arts + tech make-a-thon! All university students in Georgia are
            welcome to join and express their creativity free from the
            constraints of major, skillset, or experience! Whether you enjoy
            sharing your love for visual art 🖼, telling genius storylines 📚,
            showcasing your newest beats 🎶, mastering up lines of code 👾, or
            engineering incredible creations 🧩, your intrinsic connection to
            creativity is what makes Horizons THE event for you!
          </p>
        </div>
      </section>

      <section id="section-registration">
        <div className="registration-flex">
          <div className="registration-container">
            <h2>TRACKS</h2>
            <h3>PHYSICAL</h3>
            <p className="descrip">
              Join this track to create tangible artistic projects, ranging from
              paintings and sculptures to fashion items and wearable tech. In the
              Physical Track, participants can have a very hands-on experience by
              designing and making unique pieces of art in any physical form!
            </p>
            <h3>DIGITAL</h3>
            <p className="descrip">
              Enter the digital track if you are interested in projects that allow
              users to interact with diverse forms of art through any type of
              digital interface! Whether you are constructing an algorithm to
              create colorful generative art, designing a streaming service to
              revolutionize our experience of listening to music, developing the
              next big video game, or in any way involving yourself in the process
              of building and displaying artistic creations via digital means,
              this track is for you!
            </p>
          </div>
        </div>
        <div className ="registration-container2">
          <p>
            Registration is FREE and open on Friday, February 16th at horizons.hexlabs.org and closes on Friday, March 1st
          </p>
          <a href="https://registration.hexlabs.org/">Register Here</a>
        </div>
      </section>

      <section id="section-schedule">
        <div className="schedule-container">
          <h3 className ="schedule-title">SCHEDULE</h3>
          <h2 className="schedule1-title">The schedule is being</h2>
          <h2 className ="crafted-title">ﾟ｡･ * ☆ crafted up ☆ * ･ ｡ﾟ</h2>
          <h3 className ="subject-title">*subject to change as more details arrive :) </h3>
        </div>
      </section>

        <section id="section-faq">
          <h2 className ="faq-title">FAQ</h2>

          <p>
            <strong>
              So I've heard of a hackathon, but what's a make-a-thon?
            </strong>
          </p>
          <p>
            A make-a-thon is a creativity-driven event where teams make their
            ideas into reality with resources, materials, and support from
            HexLabs!
          </p>

          <p>
            <strong>Can I attend?</strong>
          </p>
          <p>
            Anyone who is a Georgia Tech student, or is 18 and above at any
            Georgia university can attend! With beginner-friendly workshops, fun
            and relaxing mini-events and great vibes, students from any background
            can come and enjoy!
          </p>

          <p>
            <strong>How much will this cost?</strong>
          </p>
          <p>
            Horizons is completely free! We will provide the food, swag, and
            resources you need so you can focus on your most awesome creation.
          </p>

          <p><strong>Where can I register?</strong></p>
                  <p>
                  Registration is <a href="https://registration.hexlabs.org/">open</a> and will close for
                  participants on Friday, March 1 2024 at 11:59pm
                  </p>
          <p>
            <strong>What should I bring?</strong>
          </p>
          <p>
            We request that you bring yourself, your laptop, and your student ID!
            If you are not a Georgia Tech student you will also need to bring a
            government ID. Feel free to bring anything else (art
            supplies, tools, etc...) that you think would be helpful.
          </p>

          <p>
            <strong>Where is Horizons?</strong>
          </p>
          <p>
            We'll be waiting for you at the Instructional Center, aka,
            <a href="https://www.google.com/maps/place/Instructional+Center/@33.7754478,-84.4012498,17z/data=!3m1!4b1!4m6!3m5!1s0x88f5048ea3eb8fa1:0x3e4111b0dbacc6a6!8m2!3d33.7754478!4d-84.4012498!16s%2Fg%2F11c1n7f4t3?entry=ttu">Link</a>
              759 Ferst Dr. NW, Atlanta, GA 30318
          </p>

          <p>
            <strong>Will there be any makerspaces open during the event?</strong>
          </p>
          <p>
            We are currently in discussions of partnering with The Hive and the
            Invention Studio to offer spaces, tools, and mentorship during the
            event...
          </p>

          <p>
            <strong>How long is the event?</strong>
          </p>
          <p>
            Two days! Day 1 (Saturday March 9) will start at 10am;
            Day 2 (Sunday, March 10) will finish at 1:30pm.
          </p>

          <p>
            <strong>What resources will be there?</strong>
          </p>
          <p>
            We'll be providing lots of arts supplies, hardware, and other cool
            supplies. A full list of available supplies and services is coming
            soon. Feel free to tell us what you want to see at the event in your
            application.
          </p>

          <p>
            <strong>What size can teams be?</strong>
          </p>
          <p>
            The team can be up to 4 people in size! Let your friends know to
            register ASAP.
          </p>

          <p>
            <strong>My friends are out of town! How do I find a team?</strong>
          </p>
          <p>
            We will have a mixer at the start of the event to help you find a
            team, but if you prefer going solo, we’re here by your side too!
          </p>

        <p>
          <strong>Any other questions?</strong>
        </p>
        <p>
          Email us at{" "}
          <a href="mailto:hello@hexlabs.org">hello@hexlabs.org 💜</a>.
        </p>
      </section>
      <section id="section-express">
        <div className="express-container">
          <h2>express yourself!</h2>
          <div className="express-container-paragraph">
            <div>
              <p>
                Horizons is a celebration of the incredible intersection between
                art and technology. It is a platform for people to express
                themselves through art while using technology or engineering to
                augment its impact.
              </p>
              <p>
                Moreso, art and technology come together as avenues for people
                to share their ideas. To share their findings. To share their
                feelings. To express themselves.
              </p>
              <p>At Horizons, we challenge you to do just that!</p>
            </div>
          </div>
        </div>
        <div className="express-container-quote">
          <div>
            <p>
              “The art challenges the technology, and the technology inspires
              the art.”
            </p>
            <p>- John Lasseter</p>
          </div>
        </div>
      </section>
      <footer>
        <div className="footer-text">
          <p className="footer-1">
            <strong>We can't wait to see you expand your horizons 🌄😉!</strong>
          </p>
          <p className="footer-2">With 💜 from the HexLabs team</p>
        </div>

            <div className="icon-container">
              <a href="https://www.instagram.com/thehexlabs/">
                <img src="/icon/insta.svg" />
              </a>
              <a href="https://www.facebook.com/TheHexLabs">
                <img src="/icon/fb.svg" />
              </a>
              <a href="https://twitter.com/TheHexLabs">
                <img src="/icon/twitter.svg" />
              </a>
              <a href="https://github.com/HackGT">
                <img src="/icon/github.svg" />
              </a>
              <a href="https://hexlabs.org/">
                <img src="/icon/web.svg" />
              </a>
            </div>
          </footer>
    </body>
  );
}

export default MainPage;
