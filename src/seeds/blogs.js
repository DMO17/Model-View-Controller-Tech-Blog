const Blog = require("../models/Blog");

const blogData = [
  {
    title: "Python for Creating Mobile Apps",
    content: `Now Dart and JavaScript languages are most favored for building cross-platform mobile applications. In other words, Flutter and React Native dominate the mobile app development market. But, do all Python programmers have to learn Dart or JavaScript to write mobile apps? No — the Kivy GUI framework can produce native apps for Android and iOS platforms already. Therefore, you can use Python to build cross-platform mobile applications.
    Kivy comes with its own widgets toolkit similar to Flutter. Kivy uses SDL (Simple Directmedia Layer) for rendering 2D elements on both Android and iOS like Flutter uses Google Skia. Kivy communicates with native mobile APIs via JNI/Cython on Android and Objective-C/Cython on iOS.
    Like other mobile frameworks, Kivy also provides toolchains to make platform-specific application bundles. Moreover, you can run Kivy apps on desktop operating systems. Google Play and Apple AppStore accept Kivy-based apps. If many developers start building their apps with Kivy, it can undoubtedly compete with both Flutter and React Native.`,
    blog_img:
      "https://robocrop.realpython.net/?url=https%3A//files.realpython.com/media/Build-a-Weather-App_Watermarked.4abcf2b7639f.jpg&w=960&sig=705d7fad9eed67f91d605261ee709fcb46c4f60d",
    user_id: 1,
  },
  {
    title: "Backend Chaos",
    content: `Not long ago, the most common internal debates of engineering organizations were about the frontend programming language, the backend was mostly a Java stack. Today, not only do we have many good alternatives (Java, Node.js, Kotlin, Rust, Go, Python, etc.), we also have many cases in which different alternatives are implemented by the same organization, and in some cases even in the same app where each microservice is built using different programing language. I call it the “Backend Chaos”.
    There is a difference between small startups and larger organizations, where in a small startup the “chaos” is no-brainer and very easy to deal with, sometimes even welcome, whereas when the size of an organization grows, the challenge becomes larger.
    In this article, Ill analyze the pros and cons of using multiple backend programming languages in the same organization, and how can we lessen some of the challenges it creates.
    We can have the same discussion on databases, frontend programing languages, and other topics, where many of the pros and cons will be identical, but well cover these in a different article.`,
    user_id: 1,
  },
  {
    title: "Technological Marvels of 2021",
    content: `Robots that can reproduce
    After creating the world’s first living robots, United States-based scientists have discovered that now they can reproduce in a way different from any plant or animal. Scientists have called Xenobots “the first-ever, self-replicating living robots.”
    The tiny organisms were unveiled in 2020, after a group of scientists at the University of Vermont, Tufts University, and Harvard University’s Wyss Institute for Biologically Inspired Engineering found that they could move, work together in groups and self-heal, the report stated.
    Xenobots are sized less than a millimeter, created from the stem cells of the African clawed frog — scientifically known as Xenopus laevis — from where it derives the name. The scientists believe that the new discovery could serve fruitful in the medical field.`,
    blog_img: "https://miro.medium.com/max/875/1*htuow539uDcWESvssT2dDw.jpeg",
    user_id: 2,
  },
  {
    title: "Atrium grabs fresh capital to help sales teams meet their quota",
    content: `With sales teams now operating remotely, it is even harder to monitor how well they are performing. Atrium wants to make sure sales managers, sales development managers and customer success leads have the data-driven insights to be able to do that.

    The sales management technology company closed on $20 million in Series A funding to continue developing its tools that automatically monitor a companys most important key performance indicators, get insights into performance to evaluate what is working and what isnt and how to proactively coach the team to improve productivity and revenue.
    
    The latest round of funding comes nearly a year after Atrium raised $13.5 million in seed funding. The Series A was led by Craft Ventures and included existing investors Bonfire Ventures, BullPen Capital and Charles River Ventures. The company has now raised a total of $33 million in funding.
    
    
    Jason Heidema, co-founder and CEO of Atrium, said the new investment was a little earlier than the company initially planned, but after meeting Mike Marg, principal at Craft Ventures, Heidema felt that Marg was an expert on go-to-market and understood how to help Atrium build a new category of sales management.
    
    Smaller companies dont have the kinds of resources larger organizations have for sales management, Heidema said. At the same time, people are having to do much of the performance analysis manually when software could be used to solve that.
    
    Heidema believes that sales management is having a “Money Ball moment” in that with the move to remote work, there is a need for metrics to be the eyes and ears for sales organizations to run well and improve the quality of the sales.
    
    “The focus is on how we take sales managers and out-of-the box monitoring of every metric that matters to the organization and alert them what is working, what is not working and what to do about it,” he added. “We are working on product development to get more data-driven insights, and from a go-to-market perspective, we are continuing to expand our footprint into more sizes of companies and geographies.”`,
    blog_img:
      "https://techcrunch.com/wp-content/uploads/2020/07/GettyImages-1216295107.jpg?w=1390&crop=1",
    user_id: 3,
  },
  {
    title:
      "Clean energy firm Husk signs UN energy compact as it begins solar mini-grid expansion in Nigeria, rest of Africa",
    content: `Husk Power Systems, a clean energy company that has been at the forefront of fueling rural electrification since 2008, is planning to launch 500 solar mini-grids in Nigeria over the next five years.

    The renewable energy firm revealed the plans today when it announced the signing of a voluntary commitment with the United Nations to grow its energy market in sub-Saharan Africa and South Asia. The commitment is contained under the 24/7 Carbon-free Energy Compact, by leading energy buyers, suppliers, equipment manufacturers and governments, representing a global effort to accelerate the uptake of carbon-free electricity as a way of averting the perilous effects of climate change.
    
    The startup, currently with operations in Nigeria, Tanzania and India (Uttar Pradesh and Bihar), has set an ambitious goal of installing at least 5,000 mini-grids by 2030 and in the process make 1 million connections  half of which will be micro, small and medium-sized enterprises. In November last year, Husk launched its first six mini-grids in Nigeria, and is looking to have 100 operational within two years.
    
    
    “Husk is committed to powering households, but our focus is first and foremost on micro, small and medium enterprises (MSMEs), and public institutions like health clinics and schools. MSMEs are the engine of economies in Africa, and powering existing small businesses and encouraging the formation of new MSMEs helps create the type of economic growth and social benefit that carries over to households by creating more opportunity and more jobs,” the companys CEO and co-founder Manoj Sinha, told TechCrunch.`,
    blog_img:
      "https://techcrunch.com/wp-content/uploads/2021/10/GettyImages-1316382951.jpg?w=1390&crop=1",
    user_id: 1,
  },
  {
    title:
      "Apple’s updated Personal Safety User Guide addresses the AirTag stalking problem",
    content: `After a number of stories in recent weeks have highlighted how Apple’s AirTags are being used for stalking purposes, the company has today updated its existing “Personal Safety User Guide” with new information on what consumers should do in the event they find an unknown AirTag in their presence or hear one make a sound. The guide specifically explains what the AirTag’s alerts mean, and what to do if they find an AirTag or other Find My network accessory following them. It even contains instructions for Android users, too.

    The addition to the guide was first spotted by the sites 9to5Mac and AppleInsider. Apple confirmed to TechCrunch the guide was updated today with the AirTag-related information.
    
    However, the guide itself isn’t new. The same manual had previously offered information designed to help people who were worried their personal safety was at risk or who were concerned about other ways they could be stalked or tracked via Apple devices. In general, it focused on helping people who had previously shared information with a partner, and who now wanted to ensure that person no longer could access their account, their data or their location, among other things.
    
    
    In the case of AirTag, though, its not always a partner abuse situation leading to the stalking. A report by The New York Times, for example, highlighted how car thieves were using AirTag devices to track and locate high-end vehicles they planned to steal. Others said they were getting alerts about being tracked by an AirTag after they left a public place, like their local gym. Some parents were also using the devices to track their teenage children without informing them, the story noted.
    
    As Apple is the first major tech company in the lost-item tracker space to have implemented proactive alerts about unknown Bluetooth trackers nearby, its brought the stalking situation to light. As The NYT noted, some researchers believe Apples AirTag didnt necessarily create the tech-enabled stalking problem itself. Instead, its possible that the AirTags built-in alerts system has actually revealed what was already a widespread problem. Unfortunately for Apple, this situation has become a PR liability given how heavily the company has marketed itself as being focused on user safety and privacy.
    
    While various Apple spokespersons have provided statements to reporters covering AirTag stalking cases, the new guide now serves as a more official form of documentation on the matter.
    
    It explains to users what it means when they receive an alert, why they might hear an AirTag make a sound and how to use the new Tracker Detect app for Android. Most importantly, it points to the Apple support documentation about what to do if you find an unknown AirTag following you, and how to make it play a sound if you cant otherwise find it.`,
    blog_img:
      "https://techcrunch.com/wp-content/uploads/2022/01/GettyImages-1315307824.jpeg?w=1390&crop=1",
    user_id: 2,
  },
];

const seedBlogs = () => Blog.bulkCreate(blogData);

module.exports = seedBlogs;
