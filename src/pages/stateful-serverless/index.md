---
title: Stateful Serverless
date: '2022-01-16'
spoiler: Serverless React application - Part 2. Supabase used to make the serverless React application stateful.
cta: 'serverless'
tags: ["technical", "devops"]
cover: './server.jpg'
---

In the [part 1](../serverless-react) of this post I created a React application, deployed on Netlify which had serverless functions.



## Usecase - collect links to share with the community

Like I mentioned above, I want to share topics to learn with the community. With this React application, I want to collect links, which is the first step.

As a next step, I want to tag the articles and group them by date. Once the data model is setup about how to tag and group by date, this needs to be stored in a database. The reason why I could not complete the 19 minute course in 19 minutes is that I got distracted with all the ideas and how I could shape this simple serverless application into a sophiscated bot to generate weekly curated learning lists tagged by topics.

I hope to work further on this serverless application and blog about it. Stay tuned.

## Overview of databases for serverless functions

[This](https://vercel.com/docs/concepts/solutions/databases#providers) is a good list of database providers which work well with serverless functions. If you look into the list, I have used MongoDB, PostgreSQL, AWS Dynamo DB, MySQL, AWS S3 in the past. Since the egghead.io course application was about deploying using Netlify, I quickly looked into FaunaDB. I also read about Supabase because I remember hearing about it on Twitter.

I also took this time to learn little bit about Hasura because I had heard a lot about Hasura recently. Hasura offers a GraphQL engine and we can write GraphQL APIs on supported databases like PostgreSQL, MySQL, MongoDB, etc.

As I was reading more, I came across KeystoneJS and read little bit on that. KeysteonJS offers CMS capabilities and GraphQL API.

There is definitely lots going on GraphQL and JAMstack side of things. I was amazed and overwhelmed about how easy it is these days to give extra wings to frontend developers by being able to deploy the work with little hassle with serverless powered applications.



