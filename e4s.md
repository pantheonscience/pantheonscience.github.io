---
layout: page
title: Pantheon E4S Collaboration permalink: /e4s
---

## Pantheon E4S Collaboration Project

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
### Workflow Template

This is the template for new workflows used by this project. To start a new workflow, either start with this template, or create a branch from a released workflow that aligns with your work. 

|          |   |
|----------|---|
|repository| https://github.com/cinemascienceworkflows/pantheon-template.git |
|commit    | 064e2812a0c677c5e2d65dadfcedba5f4f7cc517 |

### Workflows

|          |   |
|----------|---|
|name      | [Ascent Miniapp Workflow](https://github.com/cinemascienceworkflows/2020-08_miniapp-example/tree/8c6ddc49e58a53db77c62785467022177a979789) |
|desc      | An example that runs a cloverleaf3d workflow and creates a Cinema database.|
|repository| https://github.com/cinemascienceworkflows/2020-08_miniapp-example.git |
|commit    | 8c6ddc49e58a53db77c62785467022177a979789 |


|          |   |
|----------|---|
|name      | [Nyx Ascent Workflow](https://github.com/cinemascienceworkflows/2020-10_Nyx/tree/6f3e75c5b28a175a5e8a71612d4c307a2c6f9c02)|
|desc      | An example that runs a Nyx workflow and creates a Cinema database.|
|repository| https://github.com/cinemascienceworkflows/2020-10_Nyx.git |
|commit    | 6f3e75c5b28a175a5e8a71612d4c307a2c6f9c02 |

### Contact

<table>
<tr>
    <td>contact:</td>
    <td>David Rogers dhr@lanl.gov</td>
</tr>
</table>

