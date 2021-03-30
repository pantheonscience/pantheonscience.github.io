---
layout: page
title: Projects 
permalink: /projects/
---

This is the current set of projects publishing workflows through *Pantheon*. 
[Contact us](mailto:pantheon-help@lanl.gov) if you have any questions about the public or private Pantheon repositories.

## The Exascale Computing Project (ECP)

A prime motivation for *Pantheon*, and a first example of its use is for Cinema workflows for the [Exascale Computing Project (ECP)](https://www.exascaleproject.org/). ECP is a cross-cutting project that brings together advanced work in computer architectures, scientific simulations, in-situ and post-processing data analysis, systems and workflows. One component of the ECP project is examples of workflows across applications, in-situ analysis and post-processing analysis. 

### Repositories
- The [ECP-E4S-Examples](https://github.com/pantheonscience/ECP-E4S-Examples) repository is the current repository of supported ECP examples that utilize 
[(E4S)](https://e4s.io/) Spack and other ECP technologies.
E4S is a "community effort community effort to provide open source software packages for developing, deploying and running scientific applications on high-performance computing (HPC) platforms. E4S provides from-source builds and containers of a broad collection of HPC software packages." [1](https://e4s.io/) Additional details about this collaboration can be found on the project [page](/projects/e4s).

- We have deprecated a repository of ECP Examples that are no longer supported, and do not contain currently useful information. These examples are available upon request.

- We maintain an internal repository of records of ECP Milestone artifacts, which are available on request. These serve as:
    - Permanent records of the ECP Milestones
    - Examples and starting points for those wondering how a science simulation, the in-situ infrastructure, and post-processing work on the target platform.

### Direct Link
- [Ascent Miniapp Workflow](https://github.com/cinemascienceworkflows/2020-08_miniapp-example/tree/8c6ddc49e58a53db77c62785467022177a979789). An example that runs a cloverleaf3d workflow and creates a Cinema database. To run the workflow:

```
    (log on to summit)

    git clone https://github.com/cinemascienceworkflows/2020-08_miniapp-example.git
    cd 2020-08_miniapp-examples
    git checkout 8c6ddc49e58a53db77c62785467022177a979789

    edit bootstrap.env file per instructions
    ./execute
```

