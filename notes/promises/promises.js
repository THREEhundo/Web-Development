
function get(url) {
  return new Promise(function(resolve, reject) {
    var req = new XMLHttpRequest()
    req.open('GET', url)

    req.onload = function() {
      if (req.status == 200) {
        resolve(req.response)
      } else {
        reject(Error(req.statusText))
      }
    }

    req.onerror = function() {
      reject(Error('Network Error'))
    }

    req.send()
  })
}

get('story.json').then(function(response) {
  console.log('Success', response);
}, function(error) {
  console.error('Failed', error)
})

/////////

var userCache = {}

function getUserDetail(username) {
  if (userCache[username]) {
    return Promise.resolve(userCache[username])
  }

  return fetch('users/' + username + '.json')
  .then(function(result) {
    userCache[username] = result
    return result
  })
  .catch(function() {
    throw new Error('Could not find user: ' + username)
  })
}

//////////

new Promise(function(resolve, reject) {
  setTimeout(function() { resolve(10) }, 3000)
})
.then(function(e) {
  console.log('then: ', e);
})
.catch(function(e) { console.log('catch: ', e); })

///////////

(new Promise((resolve, reject) => { reject('Nope') }))
  .then(() => { console.log('success');})
  .catch(() => { console.log('fail');})
  .finally(res => {console.log('finally done');})

//////////

var request1 = fetch('/users.json')
var request2 = fetch('articles.json')

Promise.all([request1, request2]).then(function([result1, result2]) {
  // Both promises done
})

////////////

var req1 = new Promise(function(resolve, reject) {
  setTimeout(function() {resolve('first')}, 4000)
})

var req2 = new Promise(function(resolve, reject) {
  setTimeout(function() { reject('second')}, 3000)
})

Promise.all([req1, req2]).then(function(results) {
  console.log('Then: ', results);
}).catch(function(err) {
  console.log('Catch', err);
})

/////////////

var req1 = new Promise(function(resolve, reject) {
	// A mock async action using setTimeout
	setTimeout(function() { resolve('First!'); }, 8000);
});
var req2 = new Promise(function(resolve, reject) {
	// A mock async action using setTimeout
	setTimeout(function() { resolve('Second!'); }, 3000);
});
Promise.race([req1, req2]).then(function(one) {
  console.log('Then: ', one);
}).catch(function(one, two) {
  console.log('Catch: ', one);
})

/////////////

function add(xPromise, yPromise) {
  // Promise.all([..]) takes an array of promises and returns a new promise that waits on them all to finish
  return Promise.all([xPromise, yPromise])

  // When that promise is resolved, let's take the received X and Y values and add them together
  .then(function(values) {
    // Values is an array of the messages from the previously resolved promises
    return values[0] + values[1]
  })
}
// fetchX() and fetchY() return promises for their respective values, which may be ready now or later
add(fetchX(), fetchY())

// We get a promise back for the sum of those two numbers. Now we chain-call then(...) to wait for the resolution of the returned promise.
.then(
  // Fulfillment handler
  function(sum) {
    console.log(sum);
  },
  // Rejection handler
  function(err) {
    console.error(err);
  });

/////////////

/*
Future Value

Once a Promise is resolved, it becomes an immutable value -- and can be observed as many times as necessary

Promises are an easily rpeatable mechanism for encapsulating and composing future values
*/

/*
Completion Event

^ Promises behave as future values as shown above. The resolution of a Promise can be viewed as a flow-control mechanism.

When Promises complete a task it might resolve quickly or take a while. We need a notification of when the Promise completes.

"Completion Event" vs. "Continuation Event"
Is the focus what happens after the Promise, or what happens after the Promise finishes? The event notification tells us that the Promise has finished, but also that it's OK to continue.

1.The callback passed to be called for the notification is known as a continuation. (What happens after the Promise)
2. Completion event is moreso focused on the Promise.

With callbacks the "notification" would be our callback invoked by the task. But with Promises, we invert the relationship and expect to listen for an event from the function, and when notified proceed accordingly.
*/

// Pseudocode
foo(x) {
  // Start doing something that could take a while
}

foo(42)

on (foo "completion") {
  // Do next step
}

on (foo "error") {
  // Something went wrong in foo(...)
}

/*
Success & error listeners are set to run after foo is called. Foo is not aware of the following steps which is a nice seperation of concerns.

In plain JS this would be hard to do.
*/

function foo(x) {
  // start doing something that could take a while

  // make a listener event notification
  // capability to return

  return listener
}

var evt = foo(42)

evt.on("completion", function() {
  // Do next step
})

evt.on("failure", function(err) {
  // something went wrong in foo(...)
})

/*
foo(...) creates an event subscription capability to return back, and the calling code receives and registers the two event handlers against it.

This is the inversion from normal callbacks. Instead of passing the callbacks to foo(...), it returns an event capability we call evt, which receives the callbacks!!!

Callbacks themselves represent an INVERSION OF CONTROL! So inverting callbacks is an UNINVERSION OF CONTROL (Inverting an Inversion) -- restoring control back to the calling code, where we wanted it to be in the first place.

* IMPORTANT BENEFIT *
Multiple seperate parts of the code can be given the event listening capability, and can ALL be independently notified when foo(...) completes.
*/

var evt = foo(42)

// let bar(...) listen to foo(...)'s completion
bar(evt)

// also let baz(...) listen to foo(...)'s completion
baz(evt)

/*
UNINVERSION OF CONTROL enables a cleaner seperation of concerns.

1. bar(...) & baz(...) don't need to be involved in how foo(...) is called.
2. Similarly foo(...) doesn't need to know that bar(...) & baz(...) exist.
3. The evt object is a neutral third-party negotiation between the seperate concerns.
*/

/*
Promise "Events"

The evt event listening capability is an analogy for Promises.

In the example above, using Promises foo(...) would create and return a Promise instance, which would be passed to bar(...) & baz(...).
*/

function foo(x) {
  // start doing something that could take a while

  // construct and return a promise
  return new Promise(function(resolve, reject) {
    // eventually, call resolve(...) or reject(...)
    // which are the resolution callbacks for the promise
  })
}

var p = foo(42)
bar(p)
baz(p)

/*
The new Promise() is called the "revealing constructor". The function passed in is executed immediately (not async deferred, as callback to then(...) are). The parameters resolve(...) & reject(...) are resolution functions for the promise.
*/

function bar(fooPromise) {
  // listen for foo(...) to complete
  fooPromise.then(
    function() {
      // foo(...) has now finished, so do bar(...)'s tasks'
    },
    function() {
      // something went wrong in foo(...)
    }
  )
}
// same for baz(...)

/*
A different way to write the previous code is...
*/

function bar() {
  // foo(...) has definitely finished, so do bar(...)'s task
}

function oopsBar() {
  // something went wrong in foo(...)
  // so bar(...) didn't run
}
// same for baz(...) and oopsBaz(...)

var p = foo(42)
p.then(bar, oopsBar)
p.then(baz, oopsBaz)

/*
The above approach looks similar to chaining the two lines of code with p.then(...).then(...), but p.then(...); p.then(...) is an entirely different behavior. This is called SPLITTING/FORKING

Instead of passing the p promise to bar(...) & baz(...), we use the promise to control when bar(...) & baz(...) will get executed, if ever. Error handling is the primary difference.

1. The first code block bar(...) is called regardless of whether foo(...) succeeds or fails, and it handles it's own fallback logic if it's notified that foo(...) failed.

2. The second snippet, bar(...) only gets called if foo(..) succeeds, otherwise oopsBar(...) is called.

**NOTE**
The fact that both code blocks end up calling then(...) twice against the same promise p shows the point that Promises, once resolved retain their same resolution (fulfillment, rejection) forever, and can be observed as many times as necessary.

Whenever p is resolved, the next step will always be the same, both now and later.
*/

/*
Thenable Duck Typing

It is important to know if some value is a genuine Promise or not. Or is it a value that will behave like a Promise.

new Promises are constructed by the new Promise(...) syntax, so you might think that p instanceOf Promise will be an acceptable check, but it isn't the case.

This is because you can receive a Promise value from another browser window, which would have its own Promise different from the one in the current window/frame, and that check would fail to identify the Promise instance.

Libraries and frameworks may choose to vend it's own Promises and not use ES6 Promises.

As such, it was decided that to recognize a Promise (or an object with Promise-like behaviors) would be to define something called a "thenable" as any object or function which has a then(...) method on it. It assumes that any such value is a Promise-conforming thenable.

"Type Checks" that make assumptions about a value's "type" based on properties present is called "DUCK TYPING".
*/

if (
  p !== null && (
    typeof p === "object" ||
    typeof p === "function"
  ) && typeof p.then === "function"
) {
  // assume it's a thenable
} else {
  // not a thenable
}

// If you fulfill a Promise with any object/function value that happens to have a then(...) function on it, but you weren't intending it to be treated as a Promise.thenable, you're out of luck, because it will automatically be recognized as thenable and given special rules.

var o = {then: function(){}}

// make v be [[Prototype]]-linked with o
var v = Object.create(o)

v.someStuff = "cool"
v.otherStuff = "not so cool"

v.hasOwnProperty("then") // false

/*
v doesn't look like a Promise or thenable.

Uknown to you, v is also [[Prototype]]-linked to another object o, which has a then(...) on it. So the thenable duck typing checks will think and assume v is thenable.

Another example
*/

Object.prototype.then = function(){}
Array.prototype.then = function(){}

var v1 = {hello: "world"}
var v2 = ["hello", "world"]

//Both v1 & v2 will be thenables.

/*
Promise Trust

The single most important characteristic of a Promise is:
TRUST

Future values and completion events are shown explicitly in the code patterns, but it won't be so obvious as to why or how Promises are designed to solve all of the INVERSION OF CONTROL trust issues we laid out in "Trust Issues" section of chapter 2.

**TRUST ISSUES WITH CALLBACKS-ONLY CODING**
  * Call the callback too early
  * Call the callback too late (or never)
  * Call the callback too few times or too many
  * Fail to pass along any necessary enviorment/parameters
  * Swallow any errors/exceptions that may happen

Promises are designed to answer all of these concerns, repeatably.
*/

/*
Calling too Early

Code can introduce a Zalgo -like effect, where some tasks finishes synchronously and sometimes asynchronously, which can lead to race conditions.

Promises cannot be succeptible to this concern, because even an immediately fulfilled Promise
(like new Promise(function(resolve) {resolve(42);})
can't be observed synchronously.

That is, when you call then(...) on a Promise, even if that Promise was already resolved, the callback you provided to then(...) will *ALWAYS* be called asynchronously.

No need to insert your own setTimeout(...,0). Promises prevent Zalgo automatically.
*/

/*
Calling too Late

Similar to the previous point, a Promise's then(...) registered observation callbacks are automatically scheduled when either resolve(...) or reject(...) are called by the Promise creation capability. Those scheduled callbacks will predictably be fired at the next async moment.

It isn't possible for synchronous observation, so it's not possible for a synchronous chain of tasks to run in such a way to in effect "delay" another callback from happening as expected. When a Promise is resolved, all then(...) regiestered callbacks on it will be called, in order, immediately at the next asynchronous opportunity, and nothing that happens inside of one of those callbacks can affect/delay the calling of other callbacks.
*/

// ex.
p.then(function() {
  p.then(function() {
    console.log("C");
  })
  console.log("A");
})
p.then(function() {
  console.log("B");
})
// A B C

/*
"C" can't interrupt and precede "B"
*/

/*
Promise Scheduling Quirks

Scheduling the relative ordering between callbacks chained off two seperate Promises is not reliably predictable.

If two promises p1 & p2 are both already resolved, it should be true that p1.then(...); p2.then(...) would end up calling the callbacks for p1 before the ones for p2. But there are edge cases:

ex:
*/

var p3 = new Promise(function(resolve, reject) {
  resolve('B')
})

var p1 = new Promise(function(resolve, reject) {
  resolve(p3)
})

var p2 = new Promise(function(resolve, reject) {
  resolve('A')
})

p1.then(function(v){
  console.log(v);
})

p2.then(function(v){
  console.log(v);
})

// A B <------ not B A

/*
p1 isn't resolved with an immediate value, but with another promise p3 which is resolving to value "B".
This is to *UNWRAP* p3 into p1, but asynchronously, so p1's callbacks are *behind* p2's callbacks in the asynchronous job queue.

**NOTE**
Never rely on anything about the ordering/scheduling of callbacks across Promises. Don't code in a way where the ordering of multiple callbacks matter at all.
*/

/*
Never Calling the Callback

What if the Promise never gets resolved???

Promises provide an answer, using higher level abstraction called a "RACE"
*/

// a utility for timing out a Promise
function timeoutPromise(delay) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      reject("Timeout!")
    }, delay)
  })
}

//setup a timeout for foo()
Promise.race([
  foo(),               // attempt foo()
  timeoutPromise(3000) // give it 3 seconds
]).then(
  function() {
    // foo(..) fulfilled in time!
  },
  function(err) {
    // foo(..) rejected or it didn't finish in time
    // inspecting err will tell you which case it is
  }
)

/*
Calling too Few or too Many Times

Promises only resolve once.
Because of this, any then(...) registered callbacks will only be called once.
*/

/*
Failing to Pass Along any Parameters/Environment

Promises can have only one resolution value (fulfilled, rejected)

If it is none of the two above, the value is undefined. It will always be passed to all registered callbacks.

If you call resolve(...) || reject(...) with multiple parameters, all subsequent parameters beyond the first will be ignored.

If you want to pass along multiple values, it must be wrapped in a singular value ie. Object {} || Array []
*/

/*
Swallowing any Errors/Exceptions

This is a restatement of the previous point. If you reject a Promise with a reason (error message), that value is passed to the rejection callbacks.

**NOTE**
If at any point in the creation of a Promise, or in the observation of its resolution, a JS exception error occurs, such as a TypeError or ReferenceError, that exception will be caught, and it will force the Promise in question to become rejected.

Ex:
*/

var p = new Promise(function(resolve, reject) {
  foo.bar();    // foo is not defined, error!
  resolve(42);  // never gets here
})

p.then(function fulfilled() {
  // never gets here
},
function rejected(err) {
  // err will be a "TypeError" exception object
  // from the foo.bar() line
})

/*
The JS exception that occurs from foo.bar() becomes a Promise rejection that you can catch and respond to.

This is an important detail because it effectively solves another potential Zalgo moment.
Errors could create a synchronous reaction whereas nonerrors would be asynchronous. Promises turn even JS exceptions into asynchronous behavior. This reduces the race condition chances greatly.

What happens if a Promise is fulfilled, but there's a JS exception error during the observation(in a then(...) registered callback)?
*/

var p = new Promise(function(resolve, reject) {
  resolve(42)
})

p.then(function fulfilled(msg) {
  foo.bar() // <--------- calls another promise
  console.log(msg); // never gets here
},
function rejected(err) {
  // never gets here either
})

/*
The code above makes it seem like the exception from foo.bar() got swallowed, but it didn't.
There is a deeper wrong, which is that we've failed to listen for it. The p.then(...) call itself returns another promise, and that promise is the one that will be rejected with the TypeError exception.

Why couldn't it just call the error handler we have defined there? It's because it violates the fundamental principle that all Promises are *IMMUTABLE* once resolved. p was already fulfilled to the value of 42, so it can't later be cahnged to a rejection just because there's an error in observing p's resolution.
*/

/*
Trustable Promises

There's one last detail to examine to establish trust.

Promises don't get rid of callbacks at all. They just change where the callback is passed to. Instead of passing a callback to foo(..), we get *something* (Promise) back from foo(..), and we pass the callback to that *something* instead.

Why is this more trustable than just callbacks alone?

One of the most important details of Promises is that they have a solution to this issue as well.
Promise.resolve()

If you pass an immediate, non-Promise, on-thenable value to Promse.resolve(...), you get a promise that's fulfilled with that value.

aka these two promises p1 & p2 will behave identically:
*/

var p1 = new Promise(function(resolve, reject) {
  resolve(42)
})

var p2 = Promise.resolve(42)

// But if you pass a genuine Promise to Promise.resolve(..), you just get the same promise back:

var p1 = Promise.resolve(42)
var p2 = Promise.resolve(p1)

p1 === p2 // true

// If you pass a non-Promise thenable value to Promise.resolve(...), it will attempt to unwrap the value, and the unwrapping will keep going until a concrete final non-Promise-like value is extracted.

var p = {
  then: function(cb) {
    cb(42)
  }
}

p.then(function fulfilled(val) {
  console.log(val); // 42
},
function rejected(err) {
  // never gets here
})

// this p is a thenable, but it's not a genuine Promise.

var p = {
  then: function(cb, errcb) {
    cb(42)
    errcb("evil laugh")
  }
}

p.then(function fulfilled(val) {
  console.log(val); // 42
},
function rejected(err) {
  // shouldn't have run
  console.log(err); // evil laugh
})

// This p is a thenable but it's not so well behaved of a promise. It isn't trustable as is.

// Nonetheless, we can pass either of these versions of p to Promise.resolve(...), and we'll get the normalized, safe result we'd expect:

Promise.resolve(p).then(
  function fulfilled(val) {
    console.log(val); // 42
  },
  function rejected(err) {
    // never gets here
  }
)

/*
Promise.resolve(...) will accept any thenable, and will unwrap it to its non-thenable value. But you get back from Promise.resolve(...) a real Promise in its place, one that you can trust. If a genuine Promise is passed in you get the same value right back.

Let's say we're calling a foo(...) utility and we're not sure we can trust its return value to be a well-behaved Promise, but we know it's at least a thenable. Promise.resolve(...) will give us a trustable Promise wrapper to chain off of:
*/

// don't just do this:
foo(42).then(function(v) {
  console.log(v);
})

// instead do this:
Promise.resolve(foo(42)).then(function(v) {
  console.log(v);
})

/*
**NOTE**
Another benefit to wrapping Promise.resolve(...) around any function's return value is that it's an easy way to normalize that function call into a async task!!!!
If foo(42) returns an immediate value sometimes, or a Promise other times, Promise.resolve(foo(42)) makes sure it's always a Promise result.
*/

/*
Trust Built

Once you start questioning just how much you can trust the mechanisms you build upon to actualy be predictable and reliable, you start to realize callbacks have a pretty shaky trust foundation.

Promises are a pattern that augments callbacks with trustable semantics, so that the behavior is more reason-able and more reliable.
By uninverting the inversion of control of callbacks, we place the control with a trustable system (Promises) that was designed specifically to bring sanity to our async.
*/

/*
Chain Flow

We can string multiple Promises together to represent a sequence of async steps.

There are two keys that make this possible in Promises:
  1. Every time you call then(...) on a Promise, it creates and returns a new Promise, which we can chain.
  2. Whtever value you return from the then(...) call's fulfillment callback is automatically set as the fulfillment of the chained Promise.

Ex.
*/

var p = Promise.resolve(21)

var p2 = p.then(function(v) {
  console.log(v);   // 21

  // fulfill p2 with value 42
  return v * 2
})

// chain off p2
p2.then(function(v) {
  console.log(v);   // 42
})

// v * 2 === fulfillment of p2 promise that first then(...) call created and returned.
// When p2's then(...) call runs, it creates another promise.
// then(...) can be chained for convenience.

var p = Promise.resolve(21)

p.then(function(v) {
  console.log(v);   // 21

  // fulfill the chained promise with value 42
  return v * 2
})  // chained promise
.then(function(v) {
  console.log(v);   // 42
})

/*
We can keep chaining forever but there is something missing here.

What if we want step 2 to wait for step 1 to do something asynchronously?
We're using an immediate return statement, which immediately fulfills the chained promise.


*/
