---
title: Serverless React
date: '2022-01-04'
spoiler: Serverless React application deployed using Netlify, and an overview of databases to make serverless functions stateful.
cta: 'serverless'
tags: ["technical", "devops"]
cover: './react.jpg'
---

New year, new goals! Happy 2022. I have compiled a learning list for myself and one of the topics is to build apps so that I can still stay technical while managing and leading teams. I also want to get into a consistent writing habit, so hopefully this will give me a chance to write and share my learnings.

During the year end holidays I was looking at the things that could be automated for my WWCode Frontend Fellow's tasks. One thing that I want to do is share topics to learn for middle level and beyond frontend/fullstack developers. I came across Jason Lengstorf's egghead.io course on creating a TypeScript powered [Serverless React application](https://egghead.io/lessons/netlify-deploy-a-vite-project-with-the-netlify-cli). I wanted to try this out because it was only 19 minutes long.

The course material was very straight forward and I could get a Serverless function on Netlify in no time. Althouth the course was only 19 minutes long, I must admit I got distracted so many times, that it took me more than 8 hours to deploy and have it running [here](https://eloquent-hamilton-c815fe.netlify.app/). [Here's](https://github.com/princiya/serverless) the Github repository which is connected to Netlify and the serverless application is deployed. All the steps are explained in the egghead.io course.

## Usecase - collect links to share with the community

Like I mentioned above, I want to share topics to learn with the community. With this React application, I want to collect links, which is the first step.

As a next step, I want to tag the articles and group them by date. Once the data model is setup about how to tag and group by date, this needs to be stored in a database. The reason why I could not complete the 19 minute course in 19 minutes is that I got distracted with all the ideas and how I could shape this simple serverless application into a sophiscated bot to generate weekly curated learning lists tagged by topics.

I hope to work further on this serverless application and blog about it. Stay tuned.

## Overview of databases for serverless functions

[This](https://vercel.com/docs/concepts/solutions/databases#providers) is a good list of database providers which work well with serverless functions. If you look into the list, I have used MongoDB, PostgreSQL, AWS Dynamo DB, MySQL, AWS S3 in the past. Since the egghead.io course application was about deploying using Netlify, I quickly looked into FaunaDB. I also read about Supabase because I remember hearing about it on Twitter.

I also took this time to learn little bit about Hasura because I had heard a lot about Hasura recently. Hasura offers a GraphQL engine and we can write GraphQL APIs on supported databases like PostgreSQL, MySQL, MongoDB, etc.

As I was reading more, I came across KeystoneJS and read little bit on that. KeysteonJS offers CMS capabilities and GraphQL API.

There is definitely lots going on GraphQL and JAMstack side of things. I was amazed and overwhelmed about how easy it is these days to give extra wings to frontend developers by being able to deploy the work with little hassle with serverless powered applications.



