# Regular Expressions (REGEX)

## What is a Regular Expression?
Regular expressions, often shortened to regex, are a search pattern used to match and manipulate text. Think of it like a template or pattern that we use to search for certain words or combinations of characters in a string. Regex is very useful for various tasks like data validation, text parsing, text search and replace, and much more.

# Regex Syntax

|General Token| \ |
|-------|---|
|Newline| \n|
|Carriege return| \r|
|Tab| \t|
|Null Character| \0|

|Anchors| \ |
|-------|---|
|Start of string| \^|
|End of string| \$|
|A word boundry| \b|
|Non-word boundry| \B|

|Meta Sequence| \ |
|-------|---|
|Any single character| .|
|Alternate - match ether a or b| a|b |
|Any whitespace character| \s |
|Any non-whitespace character| \S |
|Any digit| \d |
|Any non-digit| \D |
|Any word character| \w |
|Any non-word character| \W |
|Match subpattren number | \# |

|Quantifiers| \ |
|-------|---|
|Zero or one of a| a? |
|Zero or more of a| a* |
|One or more of a| a+ |
|exactly 3 of a| a{3} |
|3 or more of a| a{3,} |
|Between 3 and 6 of a| a{3,6} |
|Greedy quantifier| a* |
|Lazy quantifier| a*? |

|Character Classes| \ |
|-------|---|
|A single character of: a, b or c| [abc] |
|A character except: a, b or c| [^abc] |
|A character in range: a-z| [a-z] |
|A character not in range: a-z| [^a-z] |
|A character in range: a-z and A-Z|[a-zA-Z] |

|Modifiers| \ |
|-------|---|
|Global| g |
|Multiline| m |
|Case insensitive| i |
|Sticky| y |
|Eneble uniqode| u |

Referens:
- MDN Web Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions   
- Regex101: https://regex101.com/ (site for testing regex interactively)
