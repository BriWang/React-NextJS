# React-NextJS

## SSR - Server-Side Rendering

**getServerSideProps**
- only runs on server-side and never on the client
- runs at request time, and this page will be pre-rendered with the returned props
- can only be exported from a page

**Usage**
- only if you need to render a page whose data must be fetched at request time.
- such as authorization headers or geo location

```
export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}
```

## SSG - Static Site Generation

**getStaticProps**
- always runs on the server and never on the client (alwasy run during `next build`/`npm run build`)
- pre-render page at build time

**Usage**
- The data required to render the page is available at build time ahead of a user’s request
- The data comes from a headless CMS
- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance
- The data can be publicly cached (not user-specific).

```
export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}
```

### getStaticPaths

If a page has **Dynamic Routes** and uses `getStaticProps`, it needs to define a list of paths to be statically generated.

```
// pages/posts/[id].js

// Generates `/posts/1` and `/posts/2`

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: false,    // can also be true or 'blocking'
  }
}

// `getStaticPaths` requires using `getStaticProps`

export async function getStaticProps(context) {
  return {
    // Passed to the page component as props
    props: { post: {} },
  }
}

export default function Post({ post }) {
  // Render post...
}
```

- `fallback: false`
Any paths not returned by getStaticPaths will result in a 404 page.

- `fallback: true`
Any paths not returned by getStaticPaths will first show a loading skeleton while the page is being built instead, then the page with data(fetched from getStaticProps)

- `fallback: blocking`
Any paths not returned by getStaticPaths will make the user wait without any response until the page with data(fetched from getStaticProps) is rendered.

## ISR - Incremental Static Regeneration

It allows you to create or update static pages **after** you’ve built your site, without needing to rebuild the entire site.

**Usage**

add the `revalidate` prop to `getStaticProps`:

```
// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in

export async function getStaticProps() {
  const res = await fetch('https://.../posts')
  const posts = await res.json()

  return {
    props: {
      posts,
    },
    revalidate: 10, // In seconds                                 
                      // Next.js will attempt to re-generate the page:
                        // - When a request comes in
                     // - At most once every 10 seconds
    
  }
}
```

## Code Practice

In this project, you will convert a React app to Next.js app by applying some of the key functions to the app. 

To run the project, `npm run dev`.
