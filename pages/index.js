import Link from "next/link";

function MainPage() {
    return (
        <body>
            <section id="section-hero">
                <div className="hero-container">
                    <h1 className="hero-title">Horizons</h1>
                    <div className="hero-subtitle">
                        <h3>georgia tech</h3>
                        <h3>ford environmental science & technology building</h3>
                        <h3>march 11th-12th</h3>
                    </div>
                    <a className="hero-button" href="https://forms.gle/zQ2DRyShk9Gwz8Wd8">register now!</a>
                </div>
            </section>
            <section id="section-about">
            <div className="about-container">
                <h2>About</h2>
                <p>Welcome to the Horizons Sketchbook Cafe! -ˋˏ ༻ ☕ ༺ ˎˊ-</p>
                <p>
                HexLabs is excited to welcome you back to 🎨 Horizons: the 24-hour arts + tech make-a-thon! 
                All university students in Georgia are welcome to join and express their creativity free 
                from the constraints of major, skillset, or experience! Whether you enjoy sharing your 
                love for visual art 🖼, telling genius storylines 📚, showcasing your newest beats 🎶, 
                mastering up lines of code 👾, or engineering incredible creations 🧩, your intrinsic connection 
                to creativity is what makes Horizons THE event for you!
                </p>
                <p>
                From ☕️🧸🤎 March 11-12th 🤎🧸☕️, showcase your unique skills and 
                ideas at our sketchbook cafe held in the  Ford Environmental Science & Technology Building.
                </p>
                <p>
                During this weekend, participants will brainstorm, design, and create projects of their 
                interests that integrate arts and technology while attending fun workshops and mini-events 🤗. 
                At the end of the event, there will also be a display of all the projects where judges will vote 
                for specific categories and award prizes to winning teams. 👀
                </p>
                </div>
                <img
                src="/img/about.png"
                alt="strawberry shortcake"
                className="about-img"
                />
            </section>

            <section id="section-registration">
                <img
                src="/img/coffee.png"
                alt="coffee + plants"
                className="registration-img"
                />
                <div className="registration-container">
                <h2>Tracks!</h2>
                <h2>Physical</h2>
                <p>Join this track to create tangible artistic projects, ranging from paintings and 
                    sculptures to fashion items and wearable tech. In the Physical Track, participants 
                    can have a very hands-on experience by designing and making unique pieces of art in 
                    any physical form!</p>
                <h2>Digital</h2>
                <p>Enter the digital track if you are interested in projects that allow users to interact 
                    with diverse forms of art through any type of digital interface! Whether you are constructing
                     an algorithm to create colorful generative art, designing a streaming service to 
                     revolutionize our experience of listening to music, developing the next big video game, 
                     or in any way involving yourself in the process of building and displaying artistic 
                     creations via digital means, this track is for you!</p>

                     <h2>come to the café!</h2>
                <p>Registration is FREE and is open NOW. It closes March 4th.</p>
                <a href="https://forms.gle/zQ2DRyShk9Gwz8Wd8">register now!</a>
                </div>
            </section>

            <section id="section-schedule">
                <div className="schedule-container">
                
                <h1>
                 Click to view the schedule!
                </h1>
                <br></br>
                <a href="https://live.hexlabs.org/schedule">go to schedule!</a>
                </div>
    
            </section>
            <section id="section-faq">
                <h2>frequently asked questions</h2>

                <p>
                <strong>So I've heard of a hackathon, but what's a make-a-thon?</strong>
                </p>
                <p>
                A make-a-thon is a creativity-driven event where teams make their ideas
                into reality with resources, materials, and support from HexLabs!
                </p>

                <p><strong>Can I attend?</strong></p>
                <p>
                Anyone who is a Georgia Tech student, or is 18 and above at any Georgia
                university can attend! With beginner-friendly workshops, fun and relaxing
                mini-events and great vibes, students from any background can come and
                enjoy!
                </p>

                <p><strong>How much will this cost?</strong></p>
                <p>
                Horizons is completely free! We will provide the food, swag, and resources
                you need so you can focus on your most awesome creation.
                </p>

                <p><strong>Where can I register?</strong></p>
                <p>
                Registration is open <a href="https://forms.gle/zQ2DRyShk9Gwz8Wd8">here</a> and will close for
                participants on Monday, March 4th, 2023 at 11:59pm
                </p>

                <p><strong>What should I bring?</strong></p>
                <p>
                We request that you bring yourself :relaxed:, your laptop, and your
                student ID! If you are not a Georgia Tech student you will also need to
                bring a government ID and student ID. Feel free to bring anything else
                (art supplies, tools, etc...) that you think would be helpful.
                </p>

                <p><strong>Where is Horizons?</strong></p>
                <p>
                We'll be waiting for you at the Ford Environmental Science & Technology Building, aka, 
                 <a href="https://www.google.com/maps/place/311+Ferst+Dr+NW,+Atlanta,+GA+30318/@33.778155,-84.3986102,17z/data=!3m1!4b1!4m5!3m4!1s0x88f5048a7f5d81c1:0xfc538f89be7d5c4d!8m2!3d33.778155!4d-84.3964215?coh=164777&entry=tt"
                    >311 Ferst Dr NW, Atlanta, GA 30332</a>
                </p>

                <p><strong>Will there be any makerspaces open during the event?</strong></p>
                <p>
                We are currently in discussions of partnering with The Hive and the
                Invention Studio to offer spaces, tools, and mentorship during the
                event...
                </p>

                <p><strong>How long is the event?</strong></p>
                <p>
                Two days! Day 1 (Saturday March 11) will start at 8:00 AM and continue onto 
                day 2 (Sunday, March 12) and finish at 4:00 PM.
                </p>

                <p><strong>What resources will be there?</strong></p>
                <p>
                We'll be providing lots of arts supplies, hardware, and other cool
                supplies. A full list of available supplies and services is coming soon.
                Feel free to tell us what you want to see at the event in your
                application.
                </p>

                <p><strong>What size can teams be?</strong></p>
                <p>
                The team can be up to 4 people in size! Let your friends know to register
                ASAP.
                </p>

                <p><strong>My friends are out of town! How do I find a team?</strong></p>
                <p>
                We will have a mixer at the start of the event to help you find a team,
                but if you prefer going solo, we’re here by your side too!
                </p>

                <p><strong>Any other questions?</strong></p>
                <p>
                Email us at <a href="mailto:hello@hexlabs.org">hello@hexlabs.org 💜</a>.
                </p>
            </section>
            <section id="section-express">
                <div className="express-container">
                <h2>express yourself!</h2>
                <div className="express-container-paragraph">
                    <div>
                    <p>
                    Horizons is a celebration of the incredible intersection between art and
                    technology. It is a platform for people to express themselves through
                    art while using technology or engineering to augment its impact.
                    </p>
                    <p>
                    Moreso, art and technology come together as avenues for people to share
                    their ideas. To share their findings. To share their feelings. To
                    express themselves.
                    </p>
                    <p>At Horizons, we challenge you to do just that!</p>
                    </div>
                    <img
                        src="/img/macaron.png"
                        alt="macarons"
                        className="paragraph-img"
                    />
                </div>
                </div>
                <div className="express-container-quote">
                <img
                    src="/img/croissant.png"
                    alt="croissant"
                    className="quote-img"
                />
                <div>
                    <p>
                    “The art challenges the technology, and the technology inspires the
                    art.”
                    </p>
                    <p>- John Lasseter</p>
                </div>
                </div>
            </section>
            <footer>
                <p><strong>We can't wait to see you expand your horizons 🌄😉!</strong></p>
                <p>With 💜 from the HexLabs team</p>

                <div className="icon-container">
                <a href="https://www.instagram.com/thehexlabs/"
                    ><img src="/icon/insta.svg"
                /></a>
                <a href="https://www.facebook.com/TheHexLabs"
                    ><img src="/icon/fb.svg"
                /></a>
                <a href="https://twitter.com/TheHexLabs"
                    ><img src="/icon/twitter.svg"
                /></a>
                <a href="https://github.com/HackGT"
                    ><img src="/icon/github.svg"
                /></a>
                <a href="https://hexlabs.org/"><img src="/icon/web.svg" /></a>
                </div>
            </footer>
        </body>
    );
}

export default MainPage;
