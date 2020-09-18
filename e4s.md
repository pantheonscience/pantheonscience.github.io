---
layout: page
title: E4S Collaboration 
permalink: /projects/e4s/
---

The ECP is a complex undertaking, involving a myriad of technologies - specialized hardware, advanced simulations and software, input and configuration information, and complex interactions of many versions of software - all working in concert to perform scientific simulation, analysis and insight.

An outstanding need is a way to capture, communicate and validate workflows that cross all of these boundaries, providing both real examples of end-to-end workflows, and permanent records of these workflows for archival purposes
The Pantheon and E4S projects are collaborating to advance the integration and testing of capabilities, and to promote understanding of the complex workflows utilized by the ECP project.


- **The Pantheon Project** captures and curates immutable, reproducible, and reusable experiment pipelines on target infrastructures.

- **The E4S Project** simplifies the deployment of complex HPC software by creating pre-built binaries of packages that may be installed natively using an E4S build cache, or through a container-based software stack. Containerized deployments may use either full-featured or base E4S containers that may be customized and can use the E4S build cache. E4S uses the Spack package manager for software delivery. 

## Contributions

Contributions of this collaboration include:

- The capture and curation of examples of end-to-end workflows that integrate ECP applications, in-situ infrastructure, and post-processing analysis in a reproducible framework for targeted architectures (Summit, etc.).

- The ability for anyone - scientist, developer, student or researcher - to download, build and execute end-to-end examples of integrated ECP technologies working together to run, produce data, and post-process the results.

- Integration of ECP technologies to build specific sets of versions (commits) of key ECP products by using curated spack builds.

- Optimization of build time through the use of E4S caches of pre-built applications. This significantly reduces - by orders of magnitude - the time it takes to build novel workflows, experiment with changes to the workflows, and test the results against integrated capabilities.

## Repositories

Pantheon workflows that take advantage of E4S deployment are found [in this repository](https://github.com/pantheonscience/ECP-E4S-Examples).

