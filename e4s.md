---
layout: page
title: Project E4S 
permalink: /e4s/
---

The ECP is a complex undertaking, involving a myriad of technologies - specialized hardware, advanced simulations and software, input and configuration information, and complex interactions of many versions of software - all working in concert to perform scientific simulation, analysis and insight.

An outstanding need is a way to capture, communicate and validate workflows that cross all of these boundaries, providing both real examples of end-to-end workflows, and permanent records of these workflows for archival purposes The Pantheon and E4S projects are collaborating to advance the integration and testing of capabilities, and to promote understanding of the complex workflows utilized by the ECP project.


**The E4S Project** simplifies the deployment of complex HPC software by creating pre-built binaries of packages that may be installed natively using an E4S build cache, or through a container-based software stack. Containerized deployments may use either full-featured or base E4S containers that may be customized and can use the E4S build cache. E4S uses the Spack package manager for software delivery. 

### Requirements

This is the approved set of workflows for the E4S collaboration project. The links below provide detailed information and instructions for each workflow, as well as repository and commit ID's.

- The workflows in this project are designed to only run on the [Summit](https://www.olcf.ornl.gov/olcf-resources/compute-systems/summit) supercomputer at Oak Ridge National Laboratory.
- Running these workflows requires an account on Summit. Apply for one [here](https://www.olcf.ornl.gov/for-users/documents-forms/olcf-account-application/).

To run these workflows, check out the repository at the commit ID provided, then follow the instructions on the `readme.md` file in the repository:

```
git clone <repository>
cd <repository>
git checkout <commit>
```

### Workflows

|||
|-|-|
|name|[Ascent Miniapp Workflow](https://github.com/cinemascienceworkflows/2020-08_miniapp-example/tree/1fc5f476ded1bca97aab0f8832fb4bd0cd69ef1b)|
|desc|Pantheon workflow designed for E4S integration|
|repository|https://github.com/cinemascienceworkflows/2020-08_miniapp-example|
|commit|1fc5f476ded1bca97aab0f8832fb4bd0cd69ef1b|
|date|07/04/2021 09:19:12 MDT|
|citation|[citation](https://github.com/pantheonscience/workflows/blob/master/entry/E4S/Ascent_Miniapp_Workflow/pantheon_workflow.bib)|

|||
|-|-|
|name|[Nyx Ascent Workflow](https://github.com/cinemascienceworkflows/2020-10_Nyx/tree/1aa53d67d5178e6f31fac049049e3d0157547495)|
|desc|Pantheon sampling workflow|
|repository|https://github.com/cinemascienceworkflows/2020-10_Nyx|
|commit|1aa53d67d5178e6f31fac049049e3d0157547495|
|date|07/04/2021 09:19:57 MDT|
|citation|[citation](https://github.com/pantheonscience/workflows/blob/master/entry/E4S/Nyx_Ascent_Workflow/pantheon_workflow.bib)|

### Workflow Template

This is the template for new workflows used by this project. To start a new workflow, either start with this template, or create a branch from a released workflow that aligns with your work. 

|||
|-|-|
|repository| https://github.com/cinemascienceworkflows/pantheon-template.git |
|commit    | 064e2812a0c677c5e2d65dadfcedba5f4f7cc517 |

### Contact

David Rogers dhr@lanl.gov

