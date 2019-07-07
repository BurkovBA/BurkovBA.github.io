---
title: Asyncio ecosystem
date: "2019-03-29T00:00:00.284Z"
tags: ["programming"]
cover: "./aiohttp.jpg"
description: I have a very bad developer experience with Asyncio. It is such a messy and overcomplicated system that I studied it over at least 3 times now. I figured, it's time to cut my losses and write a post about it!
---

<!-- -->
<div>
  <h3>History of generators and corouines in python in 5-minutes</h3>
  <p>
    I don't want to dig too deep into the evolution of generators in python. Basically, the history
    of generators in python is as follows:
  </p>
  <ol>
    <li><a href="https://www.python.org/dev/peps/pep-0255/">PEP-0255 (2001, python 2.2):</a> <code>yield</code> statement introduced</li>
    <li><a href="https://www.python.org/dev/peps/pep-0342/">PEP-0342 (2005, python 2.5):</a> <code>yield</code> expression: two-way communication - you can pass data to coroutine, not only get data from it</li>
    <li><a href="https://www.python.org/dev/peps/pep-0380/">PEP-0380 (2009, python 3.3):</a> <code>yield from</code> in python 3.4 as a way to delegate to a coroutine</li>
    <li><a href="https://www.python.org/dev/peps/pep-0492/">PEP-0492 (2015, python 3.5):</a> <code>async/await</code> in python 3.5</li>
  </ol>
  <p>
    1. Initially, <code>yield</code> statement was created as an alternative to <code>return</code> just to create
    generator functions that would lazily cook values on the flight and return them, e.g. <code>xrange()</code>
    function.
  </p>
  <p>
    2. Later on they decided, they want to have communication between generator function and its caller to be 2-way,
    so that generator can not only produce values, but also receive them. So, <code>yield</code> statement was
    promoted to become an expression. This created an opportunity for communicating coroutines, which allowed
    famous David Beazley to create <a href="https://www.dabeaz.com/generators/Generators.pdf">a whole operating
    system in python</a>.
  </p>
  <p>
    The main point of generators was to replace OS-controlled threads with interpreter-controlled analogues of
    threads, traditionally called fibers (there was also another attempt to make interpreter-controlled threads,
    <code>gevent</code>, where they were called greenlets or green threads, but this has nothing to do with
    asyncio). Fibers approach is also called cooperative multitasking in contrast with preemptive multitasking,
    implemented with threads.
  </p>
  <p>
    When you create POSIX thread in python, it's up to the operating system's kernel to decide, when to switch
    between them. In case of python, which implements Global Interpreter Lock, the OS kernel does exactly
    the opposite to what you'd want to achieve, as was shown by David Beazley in
    his <a href="https://speakerdeck.com/dabeaz/inside-the-python-gil">seminal talk</a>.
  </p>
  <p>
    3. Then <code>yield from</code> construct was introduced for delegating tasks to sub-coroutines easily.
    Basically this was a failed attempt to promote the use of generators.
  </p>
  <p>
    4. Asyncio module provided a stock implementation of asynchronous event loop (again, as if Twisted and Tornado
    didn't exist) and borrowed <code>async/await</code> statements from C# or Javascript.
  </p>
  <p>
    <code>async/await</code> syntax is just an alternative to the <code>yield</code> syntax, so that we can run
    new native coroutines just by calling <code>foo().send()</code> on them without asycnio main
    loop <a href="https://stackoverflow.com/questions/35585935/start-async-function-without-importing-the-asyncio-package">as described here</a> for
    instance.
  </p>
  <p>
    Asyncio main loop provides a main fiber of execution, responsible for monitoring the sockets, while coroutines
    were supposed to delegate all the blocking calls to main loop to execute. I'll mostly speak of Asyncio in this
    post.
  </p>
  <h3>Asyncio</h3>
  <p>
    Asyncio is now a part of core python 3 codebase.
  </p>
  <p>
    <a href="https://github.com/python/cpython/blob/master/Modules/_asynciomodule.c">Performance-critical parts</a> of
    it are written in plain C, while <a href="https://github.com/python/cpython/tree/master/Lib/asyncio">the
    rest</a> is in python.
  </p>
  <p>
    Central idea to asyncio is: let's create an async loop that is run in the main coroutine. When we
    run an <code>await</code> call somewhere in an async coroutine, it returns the control to the main loop and
    main loop will poll all of its sockets/file descriptors/timeouts etc. at once.
  </p>
  <p>
    Typically, we <code>await</code> in some blocking call, e.g. while doing a query to a database or an http
    request. This is the same approach, as Nginx or Node.js were rocking since the early 2010s (even earlier,
    probably) to parallelize execution of multiple event handlers.
  </p>
  <h3>Awaitables, coroutines (generator-based and native), coroutine functions, futures/tasks etc.</h3>
  <p>
    Asyncio introduced many new concepts, see the <a href="https://docs.python.org/3/glossary.html">Glossary</a>.
  </p>
  <ul>
    <li>
      Awaitables: objects that can accept with <code>__await__()</code> methods. Usually these are coroutines,
      futures or tasks.
    </li>
    <li>Coroutines:</li>
    <ul>
      <li>
        Coroutine functions - functions, declared with <code>async def foo():</code> or
        <code>def foo(): yield ...</code>. First ones are called native coroutines, second - generator-based.
      </li>
      <li>
        Coroutine objects - object, created by calling a coroutine function e.g. <code>foo()</code>. You'll
        await on those: <code>await foo()</code> to start running a coroutine.
      </li>
    </ul>
    <li>
      Futures: same thing as promise in Javascript and other language - something that will contain a result
      of async operation as soon as it's done and can be observed.
    </li>
    <li>
      Tasks: tasks are coroutines, wrapped by the main loop so that they can be cancelled, their exceptions can
      be processed etc.
    </li>
  </ul>
  <p>
    The most important part of Asyncio main loop is <a href="https://github.com/python/cpython/blob/f34517094049170acc311bac30f68fa67f27a301/Lib/asyncio/base_events.py#L1689">run_once()</a> function,
    where all the magic of socket polling is happening.
  </p>
</div>