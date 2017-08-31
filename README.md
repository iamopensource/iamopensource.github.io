i am open source
===

Getting started with open source can be difficult--[i am open source](https://iamopensource.github.io/) is a place to show newcomers that anyone (from any background) can contribute just about anything from a single character typo to a whole new feature. We use the GitHub API to pull in first time contributions from repos that use [behaviorbot welcome](https://github.com/behaviorbot/welcome) to welcome new contributors and we curate stories from individuals who have jumped into open source.

### Background

[@hiimbex](https://github.com/hiimbex) wrote a blog post called [Gaining my voice in open source](https://medium.com/@hiimbexo/gaining-my-voice-in-open-source-21c8c1ac0eee) and it really resonated with a lot of first timers. Bex raised a couple of concerns that seemed to plague a lot of us who would like to contribute but haven't yet found solid footing to get started. Ultimately, a fear of not having previous contributions and a difficulty identifying with the majority of the community left open source projects devoid of Bex's unique voice and exctiment to contribute. This is a huge missed opportunity for the community and for Bex. [@hiimbex](https://github.com/hiimbex) and [@anglinb](https://github.com/anglinb) set out to help fix this. 

### Mission

#### Dispelling Contribution Misconceptions

A lot of new comers to open source have an idea of what "a contribution" is and what their expected role is supposed to be. However, many of these definitions limit newcomers--fixing a typo in docs or embellishing an under-documented feature is something that no one wants to do but will greatly help future contributors. These kinds of contributions are perfect for new comers because fixing docs is still exciting and command over a language like English might come more natural than command over a programming language. Some people's first open source contribution is helping translate documentations to make a project more accessible to everyone.

#### Defining an Open Source Identity

Technology as a field has had its issues with under-representation of certain groups. A lot of really smart people are building education and professional programs to help people from under-represented groups gain the knowledge to make it in technology. However, another element of being a contributor is feeling like you belong. We want to use [i am open source](https://iamopensource.github.io/) as a platform to share personal stories from people of all backgrounds and their journey into open source. The hypothesis here is that seeing someone that you identify with because they share your ethnicity, sexuality, gender, etc will help show you that you _can_ identify as an open source contributor no matter who you are. 

### Technical Details

#### Getting started

To get started developing [i am open source](https://iamopensource.github.io/) locally, you'll need to clone the repo and install a few things.

**Install**

Clone the project and install it's depedencies by running the following commands.

```bash
git clone git@github.com:iamopensource/iamopensource.github.io.git
cd iamopensource.github.io
script/bootstrap
```

**Run**

This will start the server listening at `http://127.0.0.1:4000`.

```bash
script/server
```

*Note: There is a small server component that sits between the Jekyll site and the GitHub API, documentation for that component is in the [`/server`](https://github.com/iamopensource/iamopensource.github.io/tree/master/server) directory.*

### Contributions

We welcome contributions! Feel free to open an [issue](https://github.com/iamopensource/iamopensource.github.io/issues/new) or [pull request](https://github.com/iamopensource/iamopensource.github.io/compare) to suggest a change you would like to see. 

