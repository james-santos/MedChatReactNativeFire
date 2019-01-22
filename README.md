<img src="/mixfire.jpg" alt="MedChat" width="400" />

# MedChat using React Native (and Web) with React, Redux, and Firebase

## 👋 Intro

MedChat is an App created with React Native and Firebase that also shares a single code base with a web app. It shares the 'business logic' (actions, containers, reducers) across the platforms.

MedChat is a platform to allow emergency responders to share their stories and pictures with the world. Create your account with your email and password and then post your story at the welcome page. The Top Stories section shows all user submitted stories in order of popularity (upvotes). User data (stories, account info, media) is stored on our Firebase server.

MedChat is a platform for communities to discuss, connect, and share in an open environment, home to some of the most authentic content anywhere online. The nature of this content might be funny, serious, offensive, or anywhere in between. While participating, it’s important to keep in mind this value above all others: show enough respect to others so that we all may continue to enjoy MedChat for what it is.

## 🚀 Getting Started

#### 1. Install

```bash

# Install dependencies
yarn install
```

#### 2.1. Run the _React Native_ App

```bash
# Start the React Native packager
yarn start
```

Instructions are shown in the terminal. You can select to open it in:

- An emulator (either iOS or Android)
- Your mobile device with the [Expo app](https://expo.io/). It will reload if you save edits to your files and you will see build errors and logs in the terminal.

#### 2.2. Run the _Web_ App

```bash
# Starts are local live-reload server at:
# http://localhost:3001
yarn run web
```

Via webpack, starts a localhost server on port 3001 [http://localhost:3001](http://localhost:3001).

- Save code and it auto refreshes
- Install [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) into Chrome to see the state of Redux

---

## 👊 Further Help?

This repo is a great place to start, but if you'd prefer to sit back and have your new project built for you, [get in touch with me directly](https://mcnam.ee) and I can organise a quote.

---

## 💡 Inspiration

- [This blog post](http://jkaufman.io/react-web-native-codesharing/) helped put the ideas into action

_If there's any other ideas presented in this repo, that you think worth mentioning - feel free open a pull request :)_
