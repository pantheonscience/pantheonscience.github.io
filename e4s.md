---
layout: page
title: Project Cinema/E4S 
permalink: /e4s/
---

### Overview

The Cinema project is an approach for visualization, analysis and exploration of extreme scale datasets. As part of the ECP project, Cinema is required to provide solutions for a range of science codes and workflows for a range of in-situ and post-processing use cases.

This complex set of operations and interdependencies is embodied in the Cinema/E4S Pantheon project, which creates and tests a set of workflows defined by science applications and analysis/vis operations.

This project uses the **E4S** project to streamline released workflows, and make them both useable and reproducible. 
**The E4S Project** simplifies the deployment of complex HPC software by creating pre-built binaries of packages that may be installed natively using an E4S build cache, or through a container-based software stack. Containerized deployments may use either full-featured or base E4S containers that may be customized and can use the E4S build cache. E4S uses the Spack package manager for software delivery. 

### Scope and Goals

The **scope** of the project is workflows for ECP applications that create, analyze and visualize Cinema databases.

The **goal** of this project is to provide *Pantheon:Release* workflows that record, test and verify end-to-end workflows of use to the ECP project. 

### Requirements

This is the approved set of workflows for the Cinema/E4S collaboration project. The links below provide detailed information and instructions for each workflow, as well as repository and commit ID's.

- The applications and workflows in this project are derived from *open source* workflows, applications and instructions published by collaborating science codes and other ECP capabilities.
- The workflows in this project are designed to only run on the [Summit](https://www.olcf.ornl.gov/olcf-resources/compute-systems/summit) supercomputer at Oak Ridge National Laboratory.
- Running these workflows requires an account on Summit. Apply for one [here](https://www.olcf.ornl.gov/for-users/documents-forms/olcf-account-application/).

To run these workflows, check out the repository at the commit ID provided, then follow the instructions on the `readme.md` file in the repository.

### Pantheon State Requirements

- **Release**. A workflow for which there are specific commits for applications, infrastructure and other dependencies within the scope of spack. When possible, these have E4S cache builds available.
- **Development**. A workflow that is expected to become a **Release**.
- **Research**. A workflow that has an ECP application and produces a Cinema database, but is not on the **Development/Release** path.

### Available Workflows

|||
|-|-|
|name|[Ascent Miniapp Workflow](https://github.com/cinemascienceworkflows/2021-04_Miniapp-Ascent/tree/4bfd76d860ca12b874c1b52efbdc4a29a9fd7dfc)|
|desc|Pantheon workflow designed for E4S integration|
|state|release|
|repository|https://github.com/cinemascienceworkflows/2021-04_Miniapp-Ascent|
|commit|4bfd76d860ca12b874c1b52efbdc4a29a9fd7dfc|
|date|08 Apr 2021 11:29:13 MDT|
|citation|[citation](https://github.com/pantheonscience/workflows/blob/master/entry/E4S/Miniapp_Ascent_Workflow/pantheon_workflow.bib)|

|||
|-|-|
|name|[ExaWind-NaluWind](https://github.com/cinemascienceworkflows/2021-04_ExaWind-NaluWind/tree/56f31ccb4145cb18a7da85910649a161b29a28c9)|
|desc|ExaWind-NaluWind post-processing workflow|
|state|release|
|repository|https://github.com/cinemascienceworkflows/2021-04_ExaWind-NaluWind|
|commit|56f31ccb4145cb18a7da85910649a161b29a28c9|
|date|13 Apr 2021 10:46:17 MDT|
|citation|[citation](https://github.com/pantheonscience/workflows/blob/master/entry/E4S/ExaWind-NaluWind_Workflow/pantheon_workflow.bib)|

|||
|-|-|
|name|[Nyx Ascent Workflow](https://github.com/cinemascienceworkflows/2021-04_Nyx-Ascent/tree/361e33dcb2e76205ce36f36e38c8dcad18191e4c)|
|state|release|
|desc|Pantheon sampling workflow|
|repository|https://github.com/cinemascienceworkflows/2021-04_Nyx-Ascent|
|commit|361e33dcb2e76205ce36f36e38c8dcad18191e4c|
|date|08 Apr 2021 11:30:58 MDT|
|citation|[citation](https://github.com/pantheonscience/workflows/blob/master/entry/E4S/Nyx_Ascent_Workflow/pantheon_workflow.bib)|

### Workflow Template

This is the template for new workflows used by this project. To start a new workflow, either start with this template, or create a branch from a released workflow that aligns with your work. 

|||
|-|-|
|repository| https://github.com/cinemascienceworkflows/pantheon-template.git |
|commit    | 064e2812a0c677c5e2d65dadfcedba5f4f7cc517 |

### Contact

David Rogers dhr@lanl.gov

