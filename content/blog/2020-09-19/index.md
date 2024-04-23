---
title: "The Second Coming of Rust"
date: 2020-09-19
blog/tags:
  - tech
---

In these UNCERTAIN TIMES, I've found myself with a little more free time than
usual because I haven't needed to commute to an office every day. I've tried to
funnel that energy into creative and constructive hobbies. Keyword: _tried_.

In the past week, I've spent some of that time learning the Rust programming
language. I've heard a lot of good things about it and I finally took the
plunge. Here's a couple of notable features that I've managed to grok from my
brief time with it.

## Everything is immutable!

Immutability makes code easier to reason about. Rust has the strongest
implementation of immutability I've seen in a programming language.

Any variable you define is immutable by default.

```rust
let x = 5;
// The next line will explode
//   gracefully at compile time
//   if uncommented.
// x = x + 1;
```

Revolutionary!

If you want to define a mutable variable, you have to explicitly write it out
like this.

```rust
let mut x = 5;
// The next line works as expected
x = x + 1;
```

This is good.

Same thing goes for function parameters, etc.

```rust
struct Counter {
    n: i32,
}
impl Counter {
    // This CAN modify the Counter instance.
    pub fn increment(&mut self) {
        self.n = self.n + 1;
    }
    // This CANNOT modify the Counter instance.
    pub fn value(&self) -> i32 {
        self.n
    }
}
```

Without using the `mut` keyword, you cannot modify the defined variable in any
way; making it immutable. This is similar to how C++ handles its `const`
keyword. Although, in Rust, having everything be immutable by default is even
better.

## Null values, no more!

Handling `null` values is the bane of my existence when working with my favorite
programming language, Python. Don't hold your breath Python, Rust is coming for
your top spot!

The concept of a "null value" was a mistake, it leads to problems upon problems.
Don't get me started on the whole `undefined` vs. `null` JavaScript debacle.
What a mess...

If we can avoid it we should.

Most, if not all, functional programming languages use the concept of an option
type which is a much better way of handling missing values. Although Rust isn't
a purely functional programming language, it borrows some features from that
paradigm like the option type.

In Rust, unlike other procedural programming languages, especially the
object-oriented ones, the option type is not just ONE of many ways to handle
missing values, it is the ONLY way. This combined with pattern matching, as
shown below, forces you to handle any potentially missing values otherwise the
compiler will complain (which is good).

```rust
let o = if i % 2 == 0 {
    None
} else {
    Some(1)
};
let val = match o {
  Some(n) => n + 1,
  // If the following line was missing,
  //   then the compiler would complain.
  None => 1,
};
println!("{}", val);
```

Having the compiler detect, and nag us about, every possible case where we might
run into a missing value helps us write safe and functional code.

## Cargo - an environment and package manager for the common folk!

Cargo is the package manager of the Rust language and it does exactly what you
would expect it to do. Compared to the profoundly awful mess that is the
equivalent Python solution.

I don't want to get into the mess that is Python virtual environments, the
differences between Python 2 and Python 3, pip vs. pip3, and more. Even after a
decade of working with Python I still don't fully understand all the intricacies
of how it handles, or doesn't handle, dependencies.

Comparatively, Cargo is God's gift to the world. It is easy to understand and
make use of.

A single official package and environment manager that works like it should
isn't a sexy feature, I'll give you that. But a programming language that gets
the boring stuff like this right allows you to focus on solving interesting
problems.

How does it work? Any dependencies are specified in a `Cargo.toml` file like so.

```toml
[package]
name = "tmer"
version = "0.1.0"
authors = ["strategineer <me@strategineer.com>"]
edition = "2018"

[dependencies]
clap = "2.33.3"
rand = "0.7.3"
log = "0.4.11"
```

Running the following commands in your shell from anywhere in your project
directory; they'll do what you expect using the dependencies you've set up.

```shell
echo "Update your dependencies."
cargo update

echo "Run your code."
echo "This will update your dependencies if needed."
cargo run

echo "Test your code."
cargo test
```

Cargo just works. Unlike other systems like it, I don't need to be a brain
surgeon, with a minor in extrasensory perception, to fully grasp how to specify
dependencies and execute my code.

## Plug and Play - Traits!

Basically, traits are:

- Interfaces
- With default implementations
- Can be added willy-nilly to any struct

They are somewhat reminiscent of mixins in object-oriented programming. You can
take any struct, add traits to it to augment it with added functionality like
so.

```rust
#[derive(Debug)]
struct Counter {
    name: String,
    n: i32,
}
```

In this case, we've added the `Debug` trait to the `Counter` struct. Without
having to write any additional code, this allows us to output any instance of
the struct as text for debugging purposes as shown below.

```rust
fn main() {
    let c = Counter {
        name: "C1".to_string(),
        n: 20,
    };
    println!("{:?}", c);
    // OUTPUT:
    // Counter { name: "C1", n: 20 }
}
```

We can use the following syntax to specify a trait's behavior explicitly,
overriding a trait's default implementation if it has one. For example, if we
would like to allow a struct to be transformed into text a specific way (for
non-debugging purposes) then we can implement the `fmt::Display` trait for the
`Counter` struct like so.

```rust
use std::fmt;
impl fmt::Display for Counter {
    fn fmt(&self,
        f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f,
            "Counter '{}' has the value: {}",
            self.name,
            self.n)
    }
}
```

Notice that this is done outside of the context of the struct's definition. So,
we can even implement the functionality tied to a trait as shown above for
structs defined outside of our own code.

These are simple examples. Built-in traits like the `Eq` and `Ord` traits
provide the interfaces and default implementations for equality checking and
ordering, respectively. Add them to any struct and it just works as you would
expect.

## Rusteroni Pepperoni

And that's all folks.

I've been enjoying playing around with Rust; I'm building a small command line
application that randomly generates teams over multiple rounds for playing games
online with friends called [tmer](https://github.com/strategineer/tmer). If you
want to take a look at that or help out, feel free!

Other than the truly awful word play, Rustaceans, used by the Rust community to
refer to programmers who use Rust, I can't find anything, yet, to dislike about
the language and its ecosystem. I'm excited to continue exploring it!
