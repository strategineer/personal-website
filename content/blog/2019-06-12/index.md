---
title: "I code review an 8 year old project"
date: 2019-06-12
blog/tags:
  - tech
---

One of the first projects I worked on after learning how to program, around 8 years ago, is called [writerator](https://github.com/KeikakuB/writerator/tree/legacy). It is a Python command line interface (or CLI for short) for analyzing English language text and generating randomized poetry such as haikus and poems. I was contemplating using it to build a new side project which would analyze text from all over the internet from the previous day (news articles, Twitter posts, etc.), then generate a new short poem every day using the words from the analyzed text and post it to Twitter.

After taking a look at the code, I quickly realized that if I was to write the same code today I would not write it at all like it is now.

I thought it would be an interesting exercise to perform a code review on the project from the perspective of a programmer with many more years of experience under my belt, use the code review as a jumping off point to overhaul the code and be able to use it as the foundation of my "daily poem" project.

The writerator project is pretty small in scope. The repo contains ~600 lines of code and ~150 lines of comments (about 30% of which are old Apache license contained within each _.py_ file, even though I changed the license to the MIT license years ago). Ignoring the _writeratorgui.py_ file which contains placeholder/example code for the tkinter GUI framework, the writerator project has three different _.py_ files which do work.

Let's take a brief look at each of these files in turn; taking note of the notable problems as we go along.

## _writerator.py_

This file has 246 lines of code, 35 comment lines and 111 blank lines. It contains the CLI code and does most of the work.

Problem: : Messy CLI argument parsing code. argparse is a python module that comes built-in with python for helping to create CLI scripts but the code tied to it becomes very messy when used for more complicated CLIs. There are almost 100 lines dedicated to a _def make_parser(config):_ function which sets up all the required parsers for the different sub-commands that the writerator CLI supports (poem generation but also text analysis tools for counting most commons characters, words, etc. and computing the Gunning-Fog index).

```python
def make_parser(config):
    main_parser = argparse.ArgumentParser()
    main_parser.add_argument('infile', nargs='?', type=argparse.FileType('r'),
                        default=sys.stdin)
    main_parser.add_argument('outfile', nargs='?', type=argparse.FileType('w'),
                        default=sys.stdout)
    main_parser.add_argument("-d", "--debug",
                        help="displays logging debug messages.",
                        action="store_true")
    # ...
```

Fix: : I would go about fixing this in two ways. Firstly, I would analyze the features offered by the CLI, determine the usefulness of each and cut the features that don't provide enough value to counteract the added complexity due to their inclusion in the code and the interface. By trimming the interface down like so we simplify the code but also improve the ease of use of the CLI.

Secondly, I would not use argparse unless I was forced to. The code, seen above, for setting your arguments up is not elegant when compared to the argument parsing module that I prefer to use: click. The code is cleaner, easier to setup and understand due to the design of the click module centering around function decorators. The difference between the modules is made clear when implementing sub-commands. Using the click module, sub-commands of a complex CLI each have their own function whereas with the argparse module all commands are defined and executed in a single main function.

```python
@click.group()
@click.argument('IN_FILE', type=click.Path(exists=True))
@click.option('-v', '--verbose', is_flag=True, help="Enable verbose logging.")
@click.pass_context
def cli(ctx, in_file, verbose):
    #...
```

The code above shows an alternate implementation using the click module. Also, the click module gives you more power by allowing you to implement custom parsing/validation for parameters which means that bad inputs can be caught before your main function starts executing.

```python
class ElementParamType(click.ParamType):
    name = "element"
    def convert(self, value, param, ctx):
        """Expands one letter element type code to full word"""
        if value == 'c':
            return "characters"
        elif value == 'w':
            return "words"
        elif value == 's':
            return "sentences"
        else:
            self.fail(
                """Choices must be 'c' for characters, 'w' for words
                    and 's' for sentences.""",
                param, ctx)
ELEMENT_TYPE = ElementParamType()

# ...
@click.option( "-t", "--type", "element_type", type=ELEMENT_TYPE, default='w',
    help= """determine the type of text elements
        (words, characters, sentences) to analyze"""
)
# ...
```

Problem: : CLI parameters' default values set in configuration files. Some command line parameters have default values which are taken from a configuration file as shown below.

```python
show_parent_parser.add_argument("-s", "--show", metavar="N", type=int,
                        # ->
                        default=int(config['parser']['NumberToShow']),
                        # <-
                        help="""choose the number of results to
                        show (if applicable)""")
```

I don't find this to be elegant because the configuration files (yes there more than one) contain very few values each. They add complexity to the system without adding enough (or any?) value to make up for it.

Also, these configurations files are hardcoded making it impossible to swap them on the fly without changing the code.

Fix: : Remove these configuration files and the code associated to them. Use sane default values for the associated command line parameters, if the user wants to change these they can on a per-call basis (or they can create a wrapper, _Facade design pattern_, around our CLI with their own allowing them to change the interface and handle the default values as they wish).

Problem: : Useless _stdout_ redirection parameter. The _outfile_ command line parameter shown below adds complexity to the interface while adding no value.

```python
main_parser.add_argument('outfile', nargs='?', type=argparse.FileType('w'),
    default=sys.stdout)
```

Fix: : We can remove the _outfile_ command line argument and always print our results to _stdout_. Doing so allows the user redirect these results to their terminal (by default) or save the results into a file of their choice, etc. using the redirection/piping afforded to the user in any modern command line.

Problem: : Lack of comments. Excluding the shebang comment at the start, the outdated license comments at the start of each file and the commented out code there are two legitimate comments in the file presented below.

```python
def get_syllable_pattern(name):
    #Shakespeare Sonnet
    if name == 's':
        return get_repeat_syllable_pattern(10, 14)
    #Haiku
    elif name == 'h':
        return [7,5,7]
```

Two comments is better than nothing but it's far from enough. I know what the inputs and the outputs (sort of) are for the writerator commands but the passage of time as well as the lack of comments makes it such that I can't easily say what's happening in the middle.

Are we using Markov Chains to pick words next to each other in a way that sort of makes sense? Are just looking at the number of syllables in the given input words and going from there?

My cursory look of the code hasn't given me that information.

Fix: : A couple comments explaining the why (not necessarily the how) would go a long way to demystifying this code.

Problem: : Tiny functions used once. There are around ten different tiny (1-5 lines) functions which are used exactly once in the code. I must have been thinking that taking a couple lines of code and putting them in a function with a descriptive name would make the code clearer.

I don't think this is usually the case and I don't think it is the case for the tiny functions in this file.

```python
def get_readability_test_output(text, test):
    if test == 'g':
        return get_Gunning_output(text)
```

Fix: : Take each of these functions, paste their implementations where they are called in the code and add a comment explaining the operation that's being performed if needed.

Problem: : Functions within functions without good reason. There isn't an inherent problem with putting functions inside of other functions in Python code but there has to be a reason for it. Otherwise, they act as misdirection reducing the clarity of the code. See the worst offender in the code below.

```python
def generate_ranked_list_output(rank_list, number_to_show):
    def get_last_index_for_output(ranked_elements, number_to_display):
        if len(ranked_elements) < number_to_display:
            return len(ranked_elements)
        else:
            return number_to_display
    last_index = get_last_index_for_output(rank_list, number_to_show)
    # ...
```

Fix: : Same as the "Tiny functions used only once" problem, remove these unneeded functions within functions.

## _texttools.py_

This file has 214 lines of code, 60 comment lines and 94 blank lines. It contains utility classes and functions for manipulating text, counting syllables and generating poems.

Problem: : Fail-safe alternate algorithm used in case of missing dependency. If the PyHyphen module is not found on the system instead of exiting gracefully (like it probably should) the code runs an alternate, and much worse, algorithm for counting the syllables in a word. A fail-safe like this could be an essential feature to have but in this case I don't think we need it given that the PyHyphen module should work and be accessible on any machine which can run python and can run our code.

Fix: : Remove the fail-safe code to simplify the code and ensure a more consistent quality to the poems we generate no matter the environment we run it in.

Problem: : Functions returning Boolean values using if statements badly. Functions written like this are a classic beginner's mistake. Code written like betrays a misunderstanding of how Boolean conditions work.

```python
def isAdverb(self):
    """Determines whether word is an adverb."""
    if re.match(r"\w+ly", self.text):
        return True
    else:
        return False
```

Fix: : There is a much simpler way of writing functions like this as shown below.

```python
def isAdverb(self):
    """Determines whether word is an adverb."""
    return re.match(r"\w+ly", self.text):
```

The understanding here is that an _if_ condition evaluates to a Boolean value so returning _True_ when it evaluates to true (and vice-versa) is pointless. I've heard some people claim that the code above somehow improves the readability of the code compared to what I'm proposing below; I disagree.

Problem: : Infinite loop. The following function contains a loop that can loop forever; the edge case where the code never manages to find a set of words which combine to give us the required number of syllables. Infinite loops are bad. We can either change the algorithm for this function which generates a line of poetry with a specific number of syllables or we can more easily add a sanity check which breaks out of the loop when we detect that we might be stuck.

```python
def generate_poem_line(set_of_words, syllables_needed):
    random_words = []
    while True:
        random_words.append(random.choice(set_of_words))
        syllable_count = sum([word.countSyllables() for word in random_words])
        if syllable_count == syllables_needed:
            new_line = " ".join([str(word) for word in random_words])
            return new_line.lower().capitalize()
        elif syllable_count > syllables_needed:
            random_words = []
```

Fix: : Let's try to fix this potential infinite loop code the easy way (with a sanity check).

```python
MAX_ITERATIONS = 1000
def generate_poem_line(set_of_words, syllables_needed):
    counter = 0
    random_words = []
    while True:
        random_words.append(random.choice(set_of_words))
        syllable_count = sum([word.countSyllables() for word in random_words])
        if syllable_count == syllables_needed or counter > MAX_ITERATIONS:
            new_line = " ".join([str(word) for word in random_words])
            return new_line.lower().capitalize()
        elif syllable_count > syllables_needed:
            random_words = []
        counter += 1
```

## _datastore.py_

This file has 53 lines of code, 24 comment lines and 26 blank lines. It contains the DataStore class which is a cache containing the processed data from given text files allowing for quicker poem generation on subsequent runs using the same input text files.

Problem: : Inconsistent code formatting. This file has a lot of blank lines kind of randomly strewn about. If code isn't formatted with unified conventions, reading it can be distracting.

Fix: : We can remove these blank lines manually or we can use a tool such as [Google's yapf](https://github.com/google/yapf) for automatically reformatting our code giving it a unified look.

## Conclusion

I've taken the time to fix the project given the recommendations above, you can take a look at the [legacy code](https://github.com/KeikakuB/writerator/tree/legacy) or the [current code](https://github.com/KeikakuB/writerator/tree/master). I also made some improvements to the poetry generation algorithm using Markov Chains to produce poems that make much more sense.

It's not perfect, code never is, but it's definitely closer to perfection than before. I need to rework the caching system to allow for it to be disabled, and allow to user to use _stdin_ as the input to allow for piping instead of using _.txt_ files.

I believe this exercise was a success. I feel confident using it in my new Twitter poetry bot project now. Code review is usually best done by someone other than the programmer who wrote the code however given any significant amount of time (7+ years in this case) inevitably you won't be the same programmer you were back then.
