# Software Requirements Specification

## For Fantasy Football App

Version 0.1  
Prepared by Tien Hoang, Anthony Micco, Nicolas Ott, Austin Winger-Kailer, and Nicolas Winsen
<organization>  
<date created>

# Table of Contents

- [Revision History](#revision-history)
- 1 [Introduction](#1-introduction)
  - 1.1 [Document Purpose](#11-document-purpose)
  - 1.2 [Product Scope](#12-product-scope)
  - 1.3 [Definitions, Acronyms and Abbreviations](#13-definitions-acronyms-and-abbreviations)
  - 1.4 [References](#14-references)
  - 1.5 [Document Overview](#15-document-overview)
- 2 [Product Overview](#2-product-overview)
  - 2.1 [Product Perspective](#21-product-perspective)
  - 2.2 [Product Functions](#22-product-functions)
  - 2.3 [Product Constraints](#23-product-constraints)
  - 2.4 [User Characteristics](#24-user-characteristics)
  - 2.5 [Assumptions and Dependencies](#25-assumptions-and-dependencies)
  - 2.6 [Apportioning of Requirements](#26-apportioning-of-requirements)
- 3 [Requirements](#3-requirements)
  - 3.1 [User Requirements](#31-user-requirements)
  - 3.2 [System Requirements](#32-system-requirements)
- 4 [Verification](#4-verification)
- 5 [Appendix](#5-appendix)
  - 5.1 [Data Sources](#51-data-sources)
  - 5.2 [Algorithms and Methodology](#52-algorithms-and-methodology)
  - 5.3 [User Interface Design](#53-user-interface-design)
  - 5.4 [System Architecture](#54-system-architecture)
  - 5.5 [Data Privacy and Security](#55-data-privacy-and-security)
  - 5.6 [Testing and Quality Assurance](#56-testing-and-quality-assurance)

<!-- ## Revision History

| Name | Date | Reason For Changes | Version |
| ---- | ---- | ------------------ | ------- |
|      |      |                    |         |
|      |      |                    |         |
|      |      |                    |         | -->

## 1. Introduction

> This section should provide an overview of the entire document

### 1.1 Document Purpose

Describe the purpose of the SRS and its intended audience.

### 1.2 Product Scope

Identify the product whose software requirements are specified in this document, including the revision or release number. Explain what the product that is covered by this SRS will do, particularly if this SRS describes only part of the system or a single subsystem. Provide a short description of the software being specified and its purpose, including relevant benefits, objectives, and goals. Relate the software to corporate goals or business strategies. If a separate vision and scope document is available, refer to it rather than duplicating its contents here.

### 1.3 Definitions, Acronyms and Abbreviations

### 1.4 References

List any other documents or Web addresses to which this SRS refers. These may include user interface style guides, contracts, standards, system requirements specifications, use case documents, or a vision and scope document. Provide enough information so that the reader could access a copy of each reference, including title, author, version number, date, and source or location.

### 1.5 Document Overview

Describe what the rest of the document contains and how it is organized.

## 2. Product Overview

> This section should describe the general factors that affect the product and its requirements. This section does not state specific requirements. Instead, it provides a background for those requirements, which are defined in detail in Section 3, and makes them easier to understand.

### 2.1 Product Perspective

Fantasy Football Insights is an idea based largely on existing fantasy football apps such as ESPN Fantasy Football, Sleeper, and Yahoo! Fantasy Football, among others, along with our developers passion for football. The idea is to improve upon ideas from these existed applications to create the best possible fantasy football assistance software as well as help users win their leagues.  

### 2.2 Product Functions

The Fantasy Football Insights software will perform and allow users to perform the following tasks: 
- Predict the best possible fantasy team based on user's draft positioning
- Provide trade evaluations based on team needs and future production
- View players' weekly score projections for weeks 1-18 
- Provide insight on which players users should pick up on waivers
- Provide best possible lineups for each week based on matchups

### 2.3 Product Constraints

This subsection should provide a general description of any other items that will limit the developer’s options. These may include:

- Interfaces to users, other applications or hardware.
- Quality of service constraints.
- Standards compliance.
- Constraints around design or implementation.

### 2.4 User Characteristics

Users of the Fantasy Football Insights software will largely be users that are interested in getting the upperhand in their fantasy football league. These users are serious about fantasy football and intend to win their leagues by utilizing top notch software to provide them with the best possible roster for their fantasy team. 

### 2.5 Assumptions and Dependencies

List any assumed factors (as opposed to known facts) that could affect the requirements stated in the SRS. These could include third-party or commercial components that you plan to use, issues around the development or operating environment, or constraints. The project could be affected if these assumptions are incorrect, are not shared, or change. Also identify any dependencies the project has on external factors, such as software components that you intend to reuse from another project, unless they are already documented elsewhere (for example, in the vision and scope document or the project plan).

### 2.6 Apportioning of Requirements

Apportion the software requirements to software elements. For requirements that will require implementation over multiple software elements, or when allocation to a software element is initially undefined, this should be so stated. A cross reference table by function and software element should be used to summarize the apportioning.

Identify requirements that may be delayed until future versions of the system (e.g., blocks and/or increments).

## 3. Requirements

> This section specifies the software product's requirements. Specify all of the software requirements to a level of detail sufficient to enable designers to design a software system to satisfy those requirements, and to enable testers to test that the software system satisfies those requirements.

> The specific requirements should:

- Be uniquely identifiable.
- State the subject of the requirement (e.g., system, software, etc.) and what shall be done.
- Optionally state the conditions and constraints, if any.
- Describe every input (stimulus) into the software system, every output (response) from the software system, and all functions performed by the software system in response to an input or in support of an output.
- Be verifiable (e.g., the requirement realization can be proven to the customer's satisfaction)
- Conform to agreed upon syntax, keywords, and terms.

### 3.1 User Requirements

### 3.2 System Requirements

<!-- TODO: come up with a description -->

## 4. Verification

> This section provides the verification approaches and methods planned to qualify the software. The information items for verification are recommended to be given in a parallel manner with the requirement items in Section 3. The purpose of the verification process is to provide objective evidence that a system or system element fulfills its specified requirements and characteristics.

<!-- TODO: give more guidance, similar to section 3 -->
<!-- ieee 15288:2015 -->

## 5. Appendix

In addition to the core functionalities outlined in the previous sections, the following appendixes provide supplementary information and context for the development of the software.

### 5.1 Data Sources

Data will be retrieved from the following source:

- [ESPN Fantasy Football API](http://espn-fantasy-football-api.s3-website.us-east-2.amazonaws.com/)

From this API, we can retrieve necessary information about a users fantasy football league, including:

- Draft order of every team in the league.
- The players available to draft.
- Stats that each player has accumulated in previous seasons.

### 5.2 Algorithms and Methodology

We will use comparison algorithms to determine the best available player to draft. The algorithm will compare the stats of each player and determine which player is the best available. The algorithm will also take into account the position of the player and the position of the team that is drafting. For example, if a team needs a quarterback, the algorithm will prioritize quarterbacks over other positions.

### 5.3 User Interface Design

We will be desigining the UI using the [Gluestack-ui](https://gluestack.io/) library. The UI will be designed to be intuitive and easy to use. The UI will be designed to be responsive and work on both iOS and Android devices.

Our [Figma](https://www.figma.com/) mockup will be available here once it is completed.

### 5.4 System Architecture

The system architecture appendix outlines the high-level architecture of the software. It describes the technology stack, databases, and infrastructure components that will be used to develop and deploy the application. Additionally, it may include information about scalability, security measures, and disaster recovery plans.

The following technologies will be used to develop the software:

- [React Native](https://reactnative.dev/) - Frontend framework
- [Expo](https://docs.expo.dev/) - React Native development environment
- [Gluestack-ui](https://gluestack.io/) - React Native UI library
- [NestJS](https://docs.nestjs.com/) - Backend framework
- [MySQL](https://www.mysql.com/) - Database

### 5.5 Data Privacy and Security

All User data is stored in a MySQL database. The database is password protected and only accessible by the application. The application will only request the data necessary to provide the user with the requested information. The application will not store any user data locally on the device.

Sensitive User data is encrypted using the [bcrypt](https://www.npmjs.com/package/bcrypt) library. This includes the user's and password. The application will not store the user's password in plain text.

### 5.6 Testing and Quality Assurance

This section provides an overview of the testing and quality assurance processes that will be followed during the development of the software. It may include test cases, testing methodologies, and quality assurance standards.

Testing on the backend will be performed using the [Jest](https://jestjs.io/) testing framework. The following tests will be performed:

- Authentication
- Account Related Actions
- Draft Related Actions
- Algorithm Related Actions
