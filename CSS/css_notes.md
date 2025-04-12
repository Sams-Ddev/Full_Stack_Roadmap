### Combining CSS selectors

## The 3 Ways for cobining selectors

# -1. The Group Rule :

this selects two or more selector and applied the same style to the selected group.
example:(code below)

selector(h2), selector(h1) {
color:blueviolet;
}

# -2. Child Rule:

This uses the right angle bracket to select an immediate child or direct decendance to the parent NB: the rule works for one level nested generation deep.

example:(code example)

selector (parent) > selector (child) {
color: brickred;

}

# -3. Desendant Combinators:

This rule apply css rules to the any desecendant under the ancestor

example: (code here)

selector(ancestor) selector(desendant) {
background-color: black;
}

# -4. Chaining Selectors:

This rule apply css rules anywhere all the selectors are true.

example: (code here)

selectorselector {
property:value;
}
eg :
h1#title.big.heading{
color:red;
}
