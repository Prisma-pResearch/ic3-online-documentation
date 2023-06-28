---
sidebar_position: 2
title: IC3 HiPerGator Workspace
description: IC3 owned HiPerGator Groups
---

## [HiPerGator](https://www.rc.ufl.edu/about/hipergator/)
The University of Florida supercomputer is a cluster that includes the latest generation of processors and offers nodes for memory-intensive computation. HiPerGator’s high-performance storage systems can be accessed from diverse interfaces, including Globus, UFApps for Research, and other tools.

UFIT Research Computing maintains the cluster and its many parts, allowing researchers to focus on their research instead of hardware and software maintenance.

HiPerGator workspaces are separated by `groups` to isolate separated projects and teams. Users share the allocated resources in each `group`. Each user has only one primary group but able to have zero or more secondary groups. <br />
IC<sup>3</sup> center has **4** groups right no


## Groups

### `prismap-datatrust` group
The resources are allocated for PrismaP grants and projects. The user group takes charge of PrismaP retrospective datasets and database service. **Data Trust**. 
#### Usage scenarios
* Data Storage
* Data Serving

#### Allocated resources
* 125TB Orange Storage
* 4TB Blue Storage
* 2 Database
  * Data Archive (for long-term data storage, *OMOP*)
  * Public Database (for data publish, *OMOP*)
* PubApps (web Applications)
  * Data Playbook (Public dataset documentation site)
  * IC<sup>3</sup> ATLAS (Intenal usage only for **Cohort Identification**)

All unstructured data will be saved as flat files while the corresponded metadata will be linked and stored into database. 

:::info Notice
PrismaP team has the plan to provide some data service to other IC<sup>3</sup> members or external teams. A polished business plan will be provided later. 
:::


### `prismap-dataops` group
The resources are allocated for PrismaP grants and projects. The user group takes charge of PrismaP data processing and data management service.

#### Usage scenarios
* Data Processing
* Data Management and Version control

#### Allocated resources
* 64 CPUs
* 512GB RAM
* 4 GPUs
* 8TB Orange Storage
* 8TB Blue Storage
* 1 Database
  * Testing Database (Used for data processing test)
* PubApps (web Applications)
  * Ticketing system (Researchers will be able to submit data request and questions.)

:::info Notice
This group is only accessible to the personnel assigned with data processing tasks.  
:::


### `prismap-airesearch` group
The resources are allocated for PrismaP grants and projects. Al researchers and students shared the resources for AI research.

#### Usage scenarios
* EDA (Exploratory Data Analysis)
* Scripts implementation
* AI model training

#### Allocated resources
* 128 CPUs
* 1TB RAM
* 12 GPUs
* 8TB Orange Storage
* 32TB Blue Storage
* 1 Database
  * Operation Database (for projects and grants cohorts, *OMOP*)
* PubApps (web Applications)
  * Researcher Portal (An application to deploy the end-to-end ML pipeline with Slurm jobs)
  * Model playground (A website to showcase the featured models)

:::info Notice
The resources are mainly used for model training. 
:::



### `uf-iccc` group
The resources are shared thourgh IC3 center but applied for **Educational Purposes** only.

#### Usage scenarios
* On-boarding Training
* IC3 Datathon
* AI bootcamp
* Other educational cases

#### Allocated resources
* 32 CPUs
* 256GB RAM
* 4 GPUs
* 20TB Orange Storage
* 16TB Blue Storage
* 1 Database (Sandbox)

With the expanding of the center, we will increase the resources by time.

:::warning Attention
Only completed de-identified data is allowed to be used in this workspace. So if the projects are involved with restricted/PHI data, please use other infrastructures. 
:::

#### How to use the resources

1. New users need to attend the training course before adding into the workspace. All operations need to follow the instructions or the accounts might be deprecated. 

2. `IC3 DevOps` manages the workspace and takes charge of adding/removing users, allocating internal resources and splitting storages. PIs can discuss with `IC3 DevOps` about specific requests. 


## To request the access to resources:
* Go to the website [here](https://gravity.rc.ufl.edu/access/request-account/)
* Input your personal information
* Submit request


> After submitting the request, please send an extra email to [Ziyuan Guan](mailto:ziyuan.guan@ufl.edu) and please provide below information:
  * `Your name and gatorlink`
  * `The Target Group Name`
  * `Projects or Grants you are assigned to`
  * `Your supervisor's name`



## Training courses

### [Coursera](https://coursera.org/groups/hipergator-account-training-c6fao/invitation)
Please create an account in Coursera and finish the course. 
>Effective January 11th, 2021, this training module is required for all new account holders to obtain an account. New accounts will not be created until Coursera shows successful completion of the training.

### [Tutorail Videos](https://help.rc.ufl.edu/doc/Training_Videos)

This page contains small videos intended to provide quick help for users on various topics. 
It's always encouraged to review those videos when you are not sure about the operations. 

* [More resources](https://help.rc.ufl.edu/doc/Getting_Started)

## Support

* [Support System](https://support.rc.ufl.edu/)
* [Managing Python environments](https://help.rc.ufl.edu/doc/Managing_Python_environments_and_Jupyter_kernels)
* [UFRC Conda tutorials](https://help.rc.ufl.edu/doc/Conda)
