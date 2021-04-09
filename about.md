---
layout: page
title: About
permalink: /about/
---

*Pantheon* is a home for examples of
reproducible workflows for scientific computing. Projects determine the scope and the design and level 
of effort needed to publish their workflows.
The goal is to provide maximum community impact with a minimal set of additional work. 

- A **Project** is a collection of workflows with a well-defined scope and goal, defined by a common workflow template.
- A **Template** is a workflow pattern.
- A **Workflow** is a reproducible set of operations, based on a template. A workflow is defined by a URL for a git repository and a specific  git commit.

## Using a published Pantheon workflow

A *Pantheon* workflow can be cloned, branched and used by developers who are trying to understand how things work in practice, or develop slightly different workflows. *Pantheon* takes advantage of git to support:

1. Segmentation of workflow into independent 'tasks' that can be executed in a dependency graph.
1. Cloning of a workflow. A workflow can be cloned to a target system, and updated in sync with the main repository. Thus, a production workflow can be continually updated to the latest supported, working version.
1. Branching, to develop updated, new, or fixed versions of the workflow. This promotes:
    - Community-based feature development and bug fixes for components of the workflow.
    - Development and testing of new components for the workflow, including new algorithm development, new analysis and visualization, and other components. 
    - Metric-based head-to-head comparison of different solutions for workflows. In particular, a developer might test a new compression algorithm for a workflow, and compare resulting data artifacts against a known standard.

## Getting Started with Pantheon

*Panthon* establishes a set of [open standards](http://pantheonscience.github.io/standards) for publishing workflows. As *Pantheon* matures, this set of standards will be controlled by a community-based oversight board, to better reflect the needs of the community. In order to be part of *Pantheon*, a candidate project:

- Requests a Pantheon repository be established. This is done by sending a request to [Pantheon submit](mailto:pantheon-submit@lanl.gov). The project is evaluated and a repository is created under the [PantheonScience]() repository.

- Establishes a git repository for workflows. There can be many different workflows in process at any time, and these will be important to the local project.

- Submits candidate workflows to *Pantheon* for publication. When a project's workflow reaches a [state](https://pantheonscience.github.io/standards) which matches the [Pantheon standards](http://pantheonscience.github.io/standards), it can be submitted. To do this:
    - The workflow's git commit is submitted to [Pantheon submit](mailto:pantheon-submit@lanl.gov).
    - The workflow is evaluated by the *Pantheon* team against the criteria for that workflow, and the state it is submitted.
    - If the workflow passes this evaluation, it is certified and published to the *Pantheon* site.

**Questions?** Contact us [here](mailto:pantheon-help@lanl.gov).

<small>LA-UR-20-22565</small>
