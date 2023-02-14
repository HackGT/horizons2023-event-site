import Link from "next/link";

function MainPage() {
    return (
        <body>
            <section id="section-hero">
                <div className="hero-container">
                    <h1 className="hero-title">Horizons</h1>
                    <div className="hero-subtitle">
                        <h3>georgia tech</h3>
                        <h3>location pending</h3>
                        <h3>march 11th-12th</h3>
                    </div>
                    <a className="hero-button" href="https://registration.hexlabs.org/">register now!</a>
                </div>
            </section>
            <section id="section-about">
                <div className="about-container">
                <h2>About</h2>
                <p>There's a new event on the Horizon 🌅 👀!</p>
                <p>
                    HexLabs is thrilled to welcome you to 🎨
                    <strong>Horizons: a 24-hour arts + tech make-a-thon!</strong> This event
                    is open to anyone who wants to create for the sake of creating-
                    regardless of major, skillset, or experience. Whether you're an art
                    aficionado, a low-key music mixer 🎶, code wizard, crocheting
                    connoisseur, an engineer at heart 🎠, or a passionate storyteller 🎬,
                    your intrinsic connection to creativity is what makes Horizons THE event
                    for you!
                </p>
                <p>
                    <strong>
                    🌿 From March 11-12th, explore your unique skills and ideas at Georgia
                    Tech 🌱
                    </strong>
                </p>
                <p>
                    During this weekend, participants will brainstorm, design, and create
                    projects of their interests that integrate arts and technology while
                    attending fun workshops and mini-events. At the end of the event, there
                    will also be a display of all the projects where judges will vote for
                    specific categories and award prizes to winning teams. 👀
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
                src="/img/tracks-digital.png"
                alt="a blue and pink flower"
                className="registration-img"
                />
                <div className="registration-container">
                <h2>come to the café!</h2>
                <p>Registration is FREE and is open NOW. It closes March 4th.</p>
                <a href="https://registration.hexlabs.org/">register now!</a>
                </div>
            </section>
            <section id="section-schedule">
                <div className="schedule-container">
                <h1>
                ☆ﾟ. * ･ ｡ﾟ <br/>The schedule is being crafted up ﾟ｡･ * . ﾟ☆ 
                </h1>
                <img
                    src="/img/quote-bg.png"
                    alt="a bear holding paint"
                    className="schedule-img-background"
                />
                </div>
                <img
                src="/img/bear.png"
                alt="a quote bubble surrounded with flowers"
                className="schedule-img"
                />
            </section>
            <section id="section-faq">
                <h1>frequently asked questions</h1>

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
                Registration will open on Tuesday, February 14th and will close for participants 
                on Saturday, March 4th.
                </p>

                <p><strong>What should I bring?</strong></p>
                <p>
                We request that you bring yourself 😊, your laptop, and your
                student ID! If you are not a Georgia Tech student you will also need to
                bring a government ID and student ID. Feel free to bring anything else
                (art supplies, tools, etc...) that you think would be helpful.
                </p>

                <p><strong>Where is Horizons?</strong></p>
                <p>
                We'll be waiting for you at the...TBD
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
                Email us at <a href="mailto:hello@hexlabs.org">hello@hexlabs.org</a>  💜.
                </p>
            </section>
            <section id="section-express">
                <div className="express-container">
                <h1>express yourself!</h1>
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
