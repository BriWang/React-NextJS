// http://localhost:3000/

import Link from 'next/link';
import { Fragment } from 'react';

function Home() {
  return (
    <Fragment>
      <h1>The Home page</h1>
      <ul>
        <li>
          <Link href='/news'>The News page</Link>
        </li>
        <li>
          <Link href='/anotherpage'>The another page</Link>
        </li>
        <li>
          <Link href='/anotherpage/{newsId}'>The dynamic page</Link>
        </li>
      </ul>
    </Fragment>
  );  
}

export default Home;