const Blog = require("../models/Blog");

const blogData = [
  {
    title: "Python for Creating Mobile Apps",
    content: `Now Dart and JavaScript languages are most favored for building cross-platform mobile applications. In other words, Flutter and React Native dominate the mobile app development market. But, do all Python programmers have to learn Dart or JavaScript to write mobile apps? No — the Kivy GUI framework can produce native apps for Android and iOS platforms already. Therefore, you can use Python to build cross-platform mobile applications.
    Kivy comes with its own widgets toolkit similar to Flutter. Kivy uses SDL (Simple Directmedia Layer) for rendering 2D elements on both Android and iOS like Flutter uses Google Skia. Kivy communicates with native mobile APIs via JNI/Cython on Android and Objective-C/Cython on iOS.
    Like other mobile frameworks, Kivy also provides toolchains to make platform-specific application bundles. Moreover, you can run Kivy apps on desktop operating systems. Google Play and Apple AppStore accept Kivy-based apps. If many developers start building their apps with Kivy, it can undoubtedly compete with both Flutter and React Native.`,
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
    user_id: 2,
  },
];

const seedBlogs = () => Blog.bulkCreate(blogData);

module.exports = seedBlogs;
