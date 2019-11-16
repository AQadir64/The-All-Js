
// Modules 

// A module is a piece of program
// that specifies which other pieces it relies on and which functionality it provides
// for other modules to use (its interface).



// they make part of the module available to the outside
// world and keep the rest private. By restricting the ways in which modules
// interact with each other, the system becomes more like LEGO, where pieces
// interact through well-defined connectors, and less like mud, where everything
// mixes with everything.
// The relations between modules are called dependencies. When a module
// needs a piece from another module, it is said to depend on that module.


// Packages

// One of the advantages of building a program out of separate pieces, and being
// actually able to run those pieces on their own, is that you might be able to
// apply the same piece in different programs.

// That’s where packages come in. A package is a chunk of code that can be
// distributed (copied and installed). It may contain one or more modules and
// has information about which other packages it depends on. A package also
// usually comes with documentation explaining what it does so that people who
// didn’t write it might still be able to use it.


