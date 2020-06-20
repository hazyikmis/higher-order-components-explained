## Higher order components explained

A small project that demonstrates how higher order components work at a basic level

# How to fork and clone

One quick note about cloning this project. If you wish to make commits and push the code up after cloning this repo, you should fork the project first. In order to own your own copy of this repository, you have to fork it so you get your own copy on your own profile!

You can see the fork button in the top right corner of every GitHub project; click it and a copy of the project will be added to your GitHub profile under the same name as the original project.

![alt text](https://i.ibb.co/1YN7SJ6/Screen-Shot-2019-07-01-at-2-02-40-AM.png "image to fork button")

After forking the project, simply clone it the way you would from the new forked project in your own GitHub repository and you can commit and push to it freely!

> git clone https://github.com/hazyikmis/higher-order-components-explained.git

# After you fork and clone:

## Install dependencies

In your terminal after you clone your project down, remember to run either `yarn` or `npm install` to build all the dependencies in the project.


## EXPLANATION OF WHAT WE ARE DOING HERE:
Both of the components, UserList & UserProfile, fetches some data from some url and shows/renders some of these data.
The problem is, both of them, in their componentDidMount lifecyle methods executes nearly same code.
What we can do is, extract the fetching data functionality from this components, put this functionality in a higher order component (with-data.js).
Then wrap these 2 components with this hoc. And convert these 2 class component to function components.
This hoc accepts a component and returns another component with augmented props (data).