# React-NextJS

<img width="1143" alt="image" src="https://user-images.githubusercontent.com/38158251/186341470-9d47c317-6e8c-4021-b778-b685033ed958.png">

## Key feature 1 - File-based routing

Use file system for routing. See Code Practice project for details.

## Key feature 2 - Server-side rendering

#### Issues of Client-Side Rendering

**Issue 1** 

When runing a React app, the browser render the index.html(which is pretty much an empty page that contains <App />). Then, the browser will render the components inside <App /> and fetch some data if needed. This might take a few seconds, but could be an issue if end users are using old generation devices or having slow internet.

**Issue 2**

It's hard for **Search Engine(SEO)** and **social networks presence**. 

Currently, of all the search engines only Google has limited capabilities to render and JS site before indexing it. In addition, while Google will be able to render the index page of your website it is known to have issues navigating around sites with a router implementation.

This means that your site will have very hard time trying to get top position in the search results in anything but Google.

The same issue is visible in social platforms such as Facebook — when sharing a link to your site neither the title nor the thumbnail will render properly.

#### Solution

One solution is to create a **Server-side rendering app**. Two most popular framework that provides SSR for React is **Next.js** and **Gatsby**.

## Key feature 3 - Build fullstack apps 

You can store data, get data, authentication etc, in your React app.

**API Routes** provide a solution to build your API with Next.js.

Any file inside the folder pages/api is mapped to /api/* and will be treated as an API endpoint instead of a page. They are **server-side only** bundles and won't increase your client-side bundle size.

https://nextjs.org/docs/api-routes/introduction
