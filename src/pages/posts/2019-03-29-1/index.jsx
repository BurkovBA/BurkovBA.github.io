import React from 'react';

let aiohttp = require('./aiohttp.png');

let metadata = {
  id: "2019-03-29-1",
  author: "Boris Burkov",
  authors_avatar: require("images/burkov_boris_web.jpg"),
  date_created: "29.03.2018",
  language: "en",
  title: "Asyncio ecosystem",
  subtitle: "",
  abstract: "I have a very bad developer experience with Asyncio. It is such a messy " +
  "and overcomplicated system that I studied it over " +
  "at least 3 times now. I figured, it's time to cut my losses and write a post about it!",
  cover: aiohttp,
  categories: ["programming"],
  time_to_read: 20,
  views: "",
  comments: [],
};

class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = metadata;
  }

  render() {
    return (
      <div>
        <h3>History of generators and corouines in python in 5-minutes</h3>
        <p>
          I don't want to dig too deep into the evolution of generators in python. Basically, the history
          of generators in python is as follows:
        </p>
        <ul>
          <li><code>yield</code> statement introduced in python 2</li>
          <li><code>yield</code> expression in python 3: two-way communication - you can pass data to coroutine, not only get data from it</li>
          <li><code>yield from</code> in python 3.4 as a way to delegate to a coroutine</li>
          <li><code>async/await</code> in python 3.5</li>
          <li><code>async</code> is a keyword expression in python 3.7 (this used to break Tensorflow)</li>
        </ul>
        <p>
          Initially, <code>yield</code> statement was created as an alternative to <code>return</code> just to create
          generator functions that would lazily cook values on the flight and return them, e.g. <code>xrange()</code>
          function.
        </p>
        <p>
          Later on they decided, they want to have communication between generator function and its caller to be 2-way,
          so that generator can not only produce values, but also receive them.
        </p>
        <p>
          Then <code>yield from</code> construct was introduced for delegating tasks to sub-coroutines.
        </p>
        <p>
          Finally, <code>async/await</code> syntax similar to C# and Javascript was adopted and now we can define
          function that make use of those statements with <code>async def foo():</code> construction.
        </p>
        <h3>Thread vs fibers: preemptive multitasking vs cooperative multitasking</h3>
        <p>
          The main point of generators is to replace OS-controlled threads with interpreter-controlled fibers. When
          you create POSIX thread in python, it's up to the operating system's kernel to decide, when to switch
          between them. In case of python, which implements Global Interpreter Lock, the OS kernel does exactly
          the opposite to what you'd want to achieve, as was show by David Beasley in his seminal talk.
        </p>
        <p>
          So, what you'd want to do instead is to let the coroutines themselves pass control to each other whenever
          they are planning to do some blocking call. E.g. when your coroutine is going to send a network request
          to a website or a database, . This approach is called cooperative multitasking in contrast with preemptive
          multitasking, implemented with threads.
        </p>
        <h3>Asyncio</h3>
        <p>
          Asyncio is now a part of core python 3 codebase. It is written in plain C and wrapped into python.
        </p>
      </div>
    )
  }
}

export default Content;
export {metadata};
