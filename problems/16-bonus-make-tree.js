/***********************************************************************
Write a recursive function `makeTree(categories, parent)` that takes an array of
categories objects, each of which have an id property, and a parent property and
returns a nested tree of those objects using the parent properties to construct
the tree.

A parent value of null means you are at the bottom of the tree and the category
has no parent, so the default value parent is be null if no parent is
provided.

Example 1:

Given an array of objects with id properties to create our tree:

const categories1 = [
    { id: 'animals', 'parent': null },
    { id: 'mammals', 'parent': 'animals' }
];

const tree1 = makeTree(categories1, null);

We should return a tree like this:

{
  animals: {
    mammals: {}
  }
}

Example 2:
Now imagine we have a database that returns a bunch of rows of data:

const categories2 = [
    { id: 'animals', 'parent': null },
    { id: 'mammals', 'parent': 'animals' },
    { id: 'cats', 'parent': 'mammals' },
    { id: 'dogs', 'parent': 'mammals' },
    { id: 'chihuahua', 'parent': 'dogs' },
    { id: 'labrador', 'parent': 'dogs' },
    { id: 'persian', 'parent': 'cats' },
    { id: 'siamese', 'parent': 'cats' }
];

Then we call the function with the categories:
const tree2 = makeTree(categories2, null);

The call above should return the tree below:

{
    animals: {
        mammals: {
            dogs: {
                chihuahua: {},
                labrador: {}
            },
            cats: {
                persian: {},
                siamese: {}
            }
        }
    }
}

***********************************************************************/


// Here's the implementation of the makeTree function:

const makeTree = (categories, parent) => {
  let node = {};

  categories
    .filter(category => category.parent === parent)
    .forEach(category => {
      node[category.id] = makeTree(categories, category.id);
    });

  return node;
}

// Here's how it works:

// We create an empty object node.
// We filter the categories array to get only the categories with a parent property that matches the parent argument.For the root of the tree, the parent argument should be null.
// We loop over the filtered categories and for each category:
//   a.We add a new property to the node object with the category's id as the key.
// b.We call the makeTree function recursively with the filtered categories and the current category's id as the parent argument. This will create a subtree for the current category.
// c.We assign the subtree to the property we just added to the node object.
// We return the node object.
// This implementation uses recursion to build the tree.We start with the root node(whose parent is null) and add its child nodes by calling makeTree recursively with each child node's id as the new parent. We continue this process until we reach the leaves of the tree (categories with no children). The result is a nested object that represents the tree.

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = makeTree;
} catch (e) {
  module.exports = null;
}

// This problem was inspired by a Fun Fun Function video:
// https://www.youtube.com/watch?v=k7-N8R0-KY4
