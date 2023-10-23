# Software Requirements Specification

## For Fantasy Football App


Version 1.0

Prepared by Tien Hoang, Anthony Micco, Nicolas Ott, Austin Winger-Kailer, and Nicholas Winsen

# Table of Contents

<!-- - [Revision History](#revision-history) -->
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

### 1.1 Document Purpose

The purpose of this document is to outline the software requirements of "Fantasy Football Insights".

### 1.2 Product Scope

The product being outlined is "Fantasy Football Insights", version 1.0. The product will allow for analysis of the best possible draft given draft position and trade analysis. This document will describe the whole system. The system will provide ease of access to information regarding the best avenue to your fantasy football season and help players make the best decisions for their league. The system will allow fantasy players to gain an edge over their leaguemates and allow for best possible performance.

### 1.3 Definitions, Acronyms and Abbreviations

To understand the "Fantasy Football Insights" software, there are a variety of terms that one needs to understand. These terms include: 

  - Waiver Wire: The method of acquring players. The order is determined by reverse-order to league record. (Worst has first priority, second worst has second, so on and so forth)
  - Flex: An additional roster spot on each team where the user can play an additional running back, wide receiver or tight end. 
  - BYE: A term used to describe when a team gets a rest week and does not play for a week. 
  - PPR: Abbreviation for Points Per Reception, meaning each player receives a point for each pass they catch in the game. 
  - QB: Abbreviation for the quarterback position.
  - RB: Abbreviation for the running back position.
  - WR: Abbreviation for the wide receiver position.
  - TE: Abbreviation for the tight end position. 
  - D/ST: Abbreviation for defense and special teams.
  - K: Abbreviation for the kicker position.
  - FG: Abbreviation for field goal.
  - XP: Abbreviation for extra point.
  - TD: Abbreviation for touchdown.
  - YD(s): Abbreviation for yard(s).
  - REC: Abbreviation for receptions.
  - INT: Abbreviation for interception.
  - FUM: Abbreviation for fumble.
  - TOT: Abbreviation for total.
  - AVG: Abbreviation for average. 

  Having a better understanding of the terms and abbreviations listed above will help give users a better understanding of our software and make it more useful.  
### 1.4 References

[ESPN Fantasy API](http://espn-fantasy-football-api.s3-website.us-east-2.amazonaws.com/) - Allows developers to access user, league, and player information.

### 1.5 Document Overview

The rest of the document will include the product overview (Section 2), which will describe functions, perspective, constraints, user characteristics, assumptions, and dependencies.

The requirements section (Section 3) will discuss external interfaces, functional requirements, quality of service, compliance, design, and implementation. It is divided into subsections that details more specific requirements for the system.

The verification section will describe the methods that will be used to verify, test, and validate that the software is meeting the requirements.

Lastly, the appendix provides additional information such as algorithms, sources, security measures, UI design, outside sources, and testing and quality assurance processes.

The document as a whole serves as a blueprint for the "Fantasy Football Insights" app, covering purpose, scope, requirements, and quality standards. Provides structure for developers and stakeholders to understand specs and requirements.

## 2. Product Overview

### 2.1 Product Perspective

Fantasy Football Insights is an idea based largely on existing fantasy football apps such as ESPN Fantasy Football, Sleeper, and Yahoo! Fantasy Football, among others, along with our developers passion for football. The idea is to improve upon ideas from these existed applications to create the best possible fantasy football assistance software as well as help users win their leagues.

### 2.2 Product Functions

The Fantasy Football Insights software will perform and allow users to perform the following tasks:

- Predict the best possible fantasy team based on user's draft positioning
- Provide trade evaluations based on team needs and future production
- View players' weekly score projections for weeks 1-18
- Provide best possible lineups for each week based on matchups
- Provide the option to prioritize a certain position in a draft

### 2.3 Product Constraints

While we at Fantasy Football Insights work to develop the best possible fantasy football app for our consumers, there are limitations to what we can do. These constraints include:

- The availability of data from the NFL and our API.
- Platform compatability (Our app works only on IOS and Android)
- Must have a stable internet connection to use our product
- Optimal for fantasy leagues that utilize points-per-reception (PPR) scoring
- We only have English language capabilities at this point

### 2.4 User Characteristics

Users of the Fantasy Football Insights software will largely be users that are interested in getting the upperhand in their fantasy football league. These users are serious about fantasy football and intend to win their leagues by utilizing top notch software to provide them with the best possible roster for their fantasy team.

### 2.5 Assumptions and Dependencies

In developing Fantasy Football Insights, we rely on various elements to function properly in order for our software to function properly as well. These include:

- Accurate data from our API
- The availability of our API and proper functionality
- Active user engagement and feedback from users
- Depends on the type of operating system (IOS and Android)
- Integration of fantasy app (ESPN Fantasy Football)   

### 2.6 Apportioning of Requirements

Required elements that will be developed in the backend include:

- User registration
- User authentication and authorization
- Team creation
- Push notification

Required elements that will be developed in the frontend include:

- Team creation
- User profile management
- Trade evalutaion 

Future Enhancements (In potential future versions):

- Waiver wire analysis (Suggest players to add based on team needs)
- Trade suggestions (Analyze league and provide potential trade)
- Up-to-date fantasy football news (Provide real-time updates about player injuries, trades, etc.)

## 3. Requirements

This software should give the user the best possible fantasy football team to draft based on the players position in the draft. The prorgram will base all of it's data off of the ESPN fantasy football API which consists of every single players statistics from the year prior. The algorithm will go mainly based off of each player's statistics from the year prior, such as points scored, average points, what round they were drafted in, and their roster percentage (the percentage of fantasy teams or leagues that have a particular player on their roster).

### 3.1 User Requirements

The user will have the app on their mobile device and the application will greet the user and ask the user for the specifics of the league format, such as how many teams are in the league, point format, and draft type. A feature that involves prioritizing drafting a specific position earlier (or later) in the draft will also be implemented. For example, if you want to draft a quarterback earlier/later than normal, there should be an option to set your preference for position and the round you want to draft them in. 


### 3.2 System Requirements

The systems that will be required for the fantasy football are as followed. 
Device: Iphone 8/Samsung Galaxy S8 or any device that is comparable.  
Operating System: needs to be on iOS11/Android 7.0 "Nougat" or later

## 4. Verification

Verification methods include:

- Periodic reviews of the requirements document to ensure consistency, clarity, and that the product meets the objectives and expected functions
- Driver files to test backend functions. See [Section 5.6](#5.6-testing-and-quality-assurance) for more information.

## 5. Appendix

In addition to the core functionalities outlined in the previous sections, the following appendices provide supplementary information and context for the development of the software.

### 5.1 Data Sources

Data will be retrieved from the following source:

- [ESPN Fantasy Football API](http://espn-fantasy-football-api.s3-website.us-east-2.amazonaws.com/)

From this API, we can retrieve necessary information about a user's fantasy football league, including:

- Draft order of every team in the league.
- The players available to draft.
- Stats that each player has accumulated in previous seasons.

### 5.2 Algorithms and Methodology

We will use comparison algorithms to determine the best available player to draft. The algorithm will compare the stats of each player and determine which player is the best available. The algorithm will also take into account the position of the player and the position of the team that is drafting. For example, if a team needs a quarterback, the algorithm will prioritize quarterbacks over other positions.

### 5.3 User Interface Design

We will be desigining the UI using the [Gluestack-ui](https://gluestack.io/) library. The UI will be designed to be intuitive and easy to use. The UI will be designed to be responsive and work on both iOS and Android devices.

Our [Figma](https://www.figma.com/) mockup will be available here once it is completed.

### 5.4 System Architecture

The system architecture appendix outlines the high-level architecture of the software. It describes the technology stack, databases, and infrastructure components that will be used to develop the application. 

The following technologies will be used to develop the software:

- [React Native](https://reactnative.dev/) - Frontend framework
- [Expo](https://docs.expo.dev/) - React Native development environment
- [Gluestack-ui](https://gluestack.io/) - React Native UI library
- [NestJS](https://docs.nestjs.com/) - Backend framework
- [MySQL](https://www.mysql.com/) - Database

### 5.5 Data Privacy and Security

All user data is stored in a MySQL database. The database is password protected and only accessible by the application. The application will only request the data necessary to provide the user with the requested information. The application will not store any user data locally on the device.

Sensitive user data is encrypted using the [bcrypt](https://www.npmjs.com/package/bcrypt) library. This includes the user's password. The application will not store the user's password in plain text.

### 5.6 Testing and Quality Assurance

This section provides an overview of the testing and quality assurance processes that will be followed during the development of the software. It may include test cases, testing methodologies, and quality assurance standards.

Testing on the backend will be performed using the [Jest](https://jestjs.io/) testing framework. The following tests will be performed:

- Authentication
- Account Related Actions
- Draft Related Actions
- Algorithm Related Actions
