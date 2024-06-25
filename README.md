# Fitness Tracker App

# Introduction

The Fitness Tracker App is a React Native application designed to help users efficiently manage and track their fitness exercises. It includes various screens for welcoming users, listing exercises, displaying exercise details, and providing food recommendations.

# Project Structure

The project is organized into several key directories and files:

- assets: Contains static resources such as data files and images.
-data: Includes exercises data in JSON format.
- images: Stores images used throughout the app.
- components: Houses reusable components like WelcomeScreen, FitnessTracker, and Food.
- screens: Contains screen components such as CustomPage and ExerciseDetail.
- App.js: Main entry point defining the navigation stack.
- package.json: Manages project metadata, dependencies, and scripts.

# Navigation

The app utilizes `@react-navigation/native` for navigation, including:

- **Welcome**: Initial screen welcoming users.
- **FitnessTracker**: Displays a list of exercises.
- **CustomPage**: Customizable screen for user-defined content.
- **ExerciseDetail**: Shows detailed exercise information.
- **Food**: Provides food recommendations.

## Modal Navigation

In addition to the main stack navigator, modal navigation is used for displaying supplementary information.

## Components

### WelcomeScreen

Entry point providing a welcome message and app introduction.

### FitnessTracker

Displays a list of exercises fetched from JSON data.

# Food

Provides nutritional recommendations to complement fitness routines.

# Screens

# CustomPage

Flexible screen for displaying customizable content.

# ExerciseDetail

Shows detailed information about selected exercises dynamically.

# Styles

Styles are defined using React Native's `StyleSheet` API for consistency and visual appeal across components and screens.

# Dynamic Imports

ExerciseDetail screen dynamically renders content based on selected exercises, enhancing user experience and information display.

# Conclusion
about Video:
https://github.com/biruk-1/fitness/assets/99360145/5654ab0e-258b-42bc-b2bd-6dd6566506b


The Fitness Tracker App offers a seamless user experience with intuitive navigation, detailed exercise information, and nutritional advice. Built with React Native and React Navigation, it supports users in achieving their fitness goals effectively.

---

This structure covers the key aspects of your app and provides a clear overview for potential users or contributors on GitHub. Adjust the content as per your specific app details and additional features.
