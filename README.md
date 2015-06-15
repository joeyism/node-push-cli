# Push-CLI 

[![Build Status](https://travis-ci.org/joeyism/node-push-cli.svg)](https://travis-ci.org/joeyism/node-push-cli)

A simple tool that allows you to push the code to current branch. The commands are the same as [commit-cli](https://github.com/joeyism/node-commit-cli/) except it pushes at the end as well.

## Install
In order to install, run

    > npm install -g push-cli

## To Run
To commit [files] with message [message] and push, simply type

    > push [files] [message]

If [files] and [message] isn't provided, a prompt will appear for the user to input their values.

**Example**

    > push index.js package.json "First init commit"

#### Commit Message
In order to add current branch into your commit message (useful for JIRA and STASH commits), add *$BR* to your message

**Example**

If your current branch is *feature/somefunction*, then

    > push --all "$BR: added message"

is the same as

    > push --all "feature/somefunction: added message"

### Version
#### 1.0.0
* First Working 
