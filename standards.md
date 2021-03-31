---
layout: page
title: Pantheon Standards
permalink: /standards/
---

Pantheon works with projects to establish a set of publishing criteria for their work. These include such things as who can publish to the project, what is the scope of reproducibility for the project, and which *states* are supported within the project. Pantheon will work with projects to establish the most useful set of constraints, testing and requirements for the project's needs.

### Pantheon States

Pantheon supports the following **states** for a workflow. Each is expected to be appropriately supported (through bug fixes and feature development), and have active project communication available to the community. 
- **Release** The workflow is guaranteed to work in a production setting, as defined by the project. Supports bug fixes, feature development, and community outreach.
    - [![release](https://pantheonscience.github.io/states/release.png)](https://pantheonscience.github.io/standards/) This link is used to designate a release workflow.

- **Development** The workflow is headed to the **release** state, but is not guaranteed to work on all target platforms. This type of workflow is generally provided to allow visibility and access into leading edge workflows, so that the community can use current and late-breaking features as a starting point for their own work.
    - [![development](https://pantheonscience.github.io/states/development.png)](https://pantheonscience.github.io/standards/) This link is used to designate a development workflow.

- **Research** The workflow is an example that is of use to the community, but may not be supported at all times. A **research** workflow is not required to be headed towards a **development/release** state. It is not required to be continuously updated and tested on target platforms. Publishers are expected to actively field questions about the workflow, so that it can be of use to the broader community.
    - [![research](https://pantheonscience.github.io/states/research.png)](https://pantheonscience.github.io/standards/) This link is used to designate a research workflow.



### Metadata

A workflow project is required to provide the following metadata, for version checking and attribute searching. This metadata is included in a `pantheon/pantheon.yml` file in the project repository.

```
pantheon:
    pantheon_version: 1.2 
    pantheon_state: string

project:
    project_name: string
    project_website: string

workflow:
    workflow_name: string
    workflow_desc: string 
    workflow_cinema-db: string
    workflow_workflow_app: string
    workflow_workflow_in-situ: string
    workflow_workflow_post-processing: string
    workflow_repository: URL
    workflow_repository-commit: commit ID
           
contact: 
    contact_name: string  
    contact_email: string
```

Constraints on metadata:

```
pantheon:
    pantheon_version: pantheon version string; required
    pantheon_state: a valid Pantheon state; required 

project:
    project_name: a unique identifier in the Pantheon namespace; required 
    project_website: string; optional

workflow:
    workflow_name: a unique identifier within a project. can include spaces; required
    workflow_desc: string; optional 
    workflow_cinema-db: string; optional; default: pantheon.cdb
    workflow_workflow_app: string; optional
    workflow_workflow_in-situ: string; optional
    workflow_workflow_post-processing: string; optional
    workflow_repository: URL; required
    workflow_repository-commit: commit ID; required
           
contact: 
    contact_name: string; required  
    contact_email: email; required
```

**Questions?** Contact us [here](mailto:pantheon-help@lanl.gov).

