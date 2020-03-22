---
layout: page
title: Pantheon Standards
permalink: /standards/
---

Pantheon works with projects to establish a set of publishing criteria for their work. These include such things as who can publish to the project, what is the scope of reproducibility for the project, and which *states* are supported within the project. Pantheon will work with projects to establish the most useful set of constraints, testing and requirements for the project's needs.

### Pantheon States

Pantheon supports the following **states** for a workflow. Each is expected to be appropriately supported (through bug fixes and feature development), and have active project communication available to the community. 

- **Release** The workflow is guaranteed to work in a production setting, as defined by the project. Supports bug fixes, feature development, and community outreach.

- **Development** The workflow is headed to the **release** state, but is not guaranteed to work on all target platforms. This type of workflow is generally provided to allow visibility and access into leading edge workflows, so that the community can use current and late-breaking features as a starting point for their own work.

- **Research** The workflow is an example that is of use to the community, but may not be supported at all times. A **research** workflow is not required to be headed towards a **development/release** state. It is not required to be continuously updated and tested on target platforms. Publishers are expected to actively field questions about the workflow, so that it can be of use to the broader community.

### Metadata

A workflow project is expected to provide the following metadata, to provide information for searching projects, and a summary of how to use the project. This metadata is included in a `pantheon.yml` file in the project repository. A formal schema can be found in the [Pantheon Specification](/spec/)

```
pantheon:
    version: 1.0
    state: research

project:
    name: ECP
    website: website.com

workflow:
    name: Test_workflow_001
    scope: This workflow tests an in-situ analysis of Code, in-situ algorithms and Cinema output

contact: 
    name: Person Name
    email: person@place.com

```

**Questions?** Contact us [here](mailto:pantheon-help@lanl.gov).

