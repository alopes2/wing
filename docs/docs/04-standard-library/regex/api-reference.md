---
title: API reference
id: api-reference
description: Wing standard library API reference for the regex module
keywords: [Wing sdk, sdk, Wing API Reference]
hide_title: true
sidebar_position: 100
---

<!-- This file is automatically generated. Do not edit manually. -->
# API Reference <a name="API Reference" id="api-reference"></a>


## Classes <a name="Classes" id="Classes"></a>

### Regexp <a name="Regexp" id="@winglang/sdk.regex.Regexp"></a>

Represents a compiled regular expression pattern.

#### Initializers <a name="Initializers" id="@winglang/sdk.regex.Regexp.Initializer"></a>

```wing
bring regex;

new regex.Regexp(pattern: str);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@winglang/sdk.regex.Regexp.Initializer.parameter.pattern">pattern</a></code> | <code>str</code> | The regular expression pattern. |

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@winglang/sdk.regex.Regexp.Initializer.parameter.pattern"></a>

- *Type:* str

The regular expression pattern.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@winglang/sdk.regex.Regexp.find">find</a></code> | Finds the first occurrence of the pattern within the text. |
| <code><a href="#@winglang/sdk.regex.Regexp.findAll">findAll</a></code> | Finds all non-overlapping occurrences of the pattern within the text. |
| <code><a href="#@winglang/sdk.regex.Regexp.findAllIndex">findAllIndex</a></code> | Finds the start and end index of all matches within the text. |
| <code><a href="#@winglang/sdk.regex.Regexp.findIndex">findIndex</a></code> | Finds the start and end index of the first match within the text. |
| <code><a href="#@winglang/sdk.regex.Regexp.findSubmatch">findSubmatch</a></code> | Finds the first match and its submatches. |
| <code><a href="#@winglang/sdk.regex.Regexp.findSubmatchIndex">findSubmatchIndex</a></code> | Finds the start and end index of the match and all submatches. |
| <code><a href="#@winglang/sdk.regex.Regexp.matches">matches</a></code> | Checks if the regular expression matches the provided text. |
| <code><a href="#@winglang/sdk.regex.Regexp.replaceAll">replaceAll</a></code> | Replaces all occurrences of the match with a replacement string. |

---

##### `find` <a name="find" id="@winglang/sdk.regex.Regexp.find"></a>

```wing
find(text: str): str
```

Finds the first occurrence of the pattern within the text.

###### `text`<sup>Required</sup> <a name="text" id="@winglang/sdk.regex.Regexp.find.parameter.text"></a>

- *Type:* str

The text to search within.

---

##### `findAll` <a name="findAll" id="@winglang/sdk.regex.Regexp.findAll"></a>

```wing
findAll(text: str): MutArray<str>
```

Finds all non-overlapping occurrences of the pattern within the text.

Returns an empty array if no matches are found.

###### `text`<sup>Required</sup> <a name="text" id="@winglang/sdk.regex.Regexp.findAll.parameter.text"></a>

- *Type:* str

The text to search within.

---

##### `findAllIndex` <a name="findAllIndex" id="@winglang/sdk.regex.Regexp.findAllIndex"></a>

```wing
findAllIndex(text: str): MutArray<MutArray<num>>
```

Finds the start and end index of all matches within the text.

Indices are zero-based.

###### `text`<sup>Required</sup> <a name="text" id="@winglang/sdk.regex.Regexp.findAllIndex.parameter.text"></a>

- *Type:* str

The text to search within.

---

##### `findIndex` <a name="findIndex" id="@winglang/sdk.regex.Regexp.findIndex"></a>

```wing
findIndex(text: str): MutArray<num>
```

Finds the start and end index of the first match within the text.

###### `text`<sup>Required</sup> <a name="text" id="@winglang/sdk.regex.Regexp.findIndex.parameter.text"></a>

- *Type:* str

The text to search within.

---

##### `findSubmatch` <a name="findSubmatch" id="@winglang/sdk.regex.Regexp.findSubmatch"></a>

```wing
findSubmatch(text: str): MutArray<str>
```

Finds the first match and its submatches.

###### `text`<sup>Required</sup> <a name="text" id="@winglang/sdk.regex.Regexp.findSubmatch.parameter.text"></a>

- *Type:* str

The text to search within.

---

##### `findSubmatchIndex` <a name="findSubmatchIndex" id="@winglang/sdk.regex.Regexp.findSubmatchIndex"></a>

```wing
findSubmatchIndex(text: str): MutArray<MutArray<num>>
```

Finds the start and end index of the match and all submatches.

###### `text`<sup>Required</sup> <a name="text" id="@winglang/sdk.regex.Regexp.findSubmatchIndex.parameter.text"></a>

- *Type:* str

The text to search within.

---

##### `matches` <a name="matches" id="@winglang/sdk.regex.Regexp.matches"></a>

```wing
matches(text: str): bool
```

Checks if the regular expression matches the provided text.

###### `text`<sup>Required</sup> <a name="text" id="@winglang/sdk.regex.Regexp.matches.parameter.text"></a>

- *Type:* str

The text to check against.

---

##### `replaceAll` <a name="replaceAll" id="@winglang/sdk.regex.Regexp.replaceAll"></a>

```wing
replaceAll(text: str, replacement: str): str
```

Replaces all occurrences of the match with a replacement string.

###### `text`<sup>Required</sup> <a name="text" id="@winglang/sdk.regex.Regexp.replaceAll.parameter.text"></a>

- *Type:* str

The text to search and replace within.

---

###### `replacement`<sup>Required</sup> <a name="replacement" id="@winglang/sdk.regex.Regexp.replaceAll.parameter.replacement"></a>

- *Type:* str

The replacement string.

---




### Regex <a name="Regex" id="@winglang/sdk.regex.Util"></a>

Regex utilities and functions.


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@winglang/sdk.regex.Util.compile">compile</a></code> | Compiles the provided regex pattern into a `Regexp` object. |
| <code><a href="#@winglang/sdk.regex.Util.match">match</a></code> | Checks whether a given string matches a specified regex pattern. |

---

##### `compile` <a name="compile" id="@winglang/sdk.regex.Util.compile"></a>

```wing
bring regex;

regex.compile(pattern: str);
```

Compiles the provided regex pattern into a `Regexp` object.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@winglang/sdk.regex.Util.compile.parameter.pattern"></a>

- *Type:* str

The regex pattern to compile.

---

##### `match` <a name="match" id="@winglang/sdk.regex.Util.match"></a>

```wing
bring regex;

regex.match(pattern: str, text: str);
```

Checks whether a given string matches a specified regex pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@winglang/sdk.regex.Util.match.parameter.pattern"></a>

- *Type:* str

The regex pattern to match against.

---

###### `text`<sup>Required</sup> <a name="text" id="@winglang/sdk.regex.Util.match.parameter.text"></a>

- *Type:* str

The input string to check for a match.

---





